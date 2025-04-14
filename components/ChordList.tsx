"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";
import guitar from "@/data/guitar";
import * as Tone from "tone";
import { useChordStore } from "./store/chordStore";
import { getChordsByKeyAsync } from "@/data/chords";
import { cn } from "@/lib/utils";
import { Container, Title } from "./shared";
import { useShallow } from "zustand/shallow";
import { Chord as ChordData } from "@/data/types";
import { InfiniteScroll } from "./shared/scroll";

const ChordList: React.FC<{ className?: string }> = ({ className }) => {
  const CHUNK_SIZE = 5;
  Tone.start();
  const { selectedKey, selectedSuffix } = useChordStore(
    useShallow((state) => ({
      selectedKey: state.selectedKey,
      selectedSuffix: state.selectedSuffix,
    }))
  );
  const [chordsForKey, setChordsForKey] = useState<ChordData[]>([]);
  const [displayedChords, setDisplayedChords] = useState<ChordData[]>([]);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedKey) {
      setIsLoading(true);
      getChordsByKeyAsync(selectedKey).then((chords) => {
        setChordsForKey(chords);
        setDisplayedChords(chords.slice(0, CHUNK_SIZE));
        setChunkIndex(1);
        setIsLoading(false);
      });
    }
  }, [selectedKey]);

  const loadMoreChords = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    const nextChords = chordsForKey.slice(
      chunkIndex * CHUNK_SIZE,
      (chunkIndex + 1) * CHUNK_SIZE
    );
    setDisplayedChords((prev) => [...prev, ...nextChords]);
    setChunkIndex((prev) => prev + 1);
    setIsLoading(false);
  }, [chordsForKey, chunkIndex, isLoading]);

  const hasMore = chunkIndex * CHUNK_SIZE < chordsForKey.length;

  const playChord = (midiNotes: number[]) => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    midiNotes.forEach((note, index) => {
      const noteName = Tone.Frequency(note, "midi").toNote();
      synth.triggerAttackRelease(noteName, "8n", now + index * 0.1);
    });
  };

  const selectedChord = useMemo(() => {
    return chordsForKey.find((chord) => chord.suffix === selectedSuffix) || null;
  }, [chordsForKey, selectedSuffix]);

  return (
    <Container>
      <div className={cn("my-8 md:my-12 lg:my-16", className)}>
        {chordsForKey.length > 0 ? (
          <>
            <div className="mb-8 text-center">
              <Title
                text={
                  selectedChord
                    ? `${selectedKey} ${selectedSuffix}`
                    : `Аккорды для тональности ${selectedKey}`
                }
                size="lg"
                className="text-2xl md:text-3xl font-bold font-mono text-foreground"
              />
            </div>
            {selectedChord ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:gap-6 lg:grid-cols-4">
                {selectedChord.positions.map((position, index) => (
                  <div
                    key={index}
                    onClick={() => playChord(position.midi)}
                    className="group relative overflow-hidden rounded-lg border bg-card p-3 shadow-sm transition-all duration-200 ease-in-out cursor-pointer border-border hover:border-accent hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Chord chord={position} instrument={guitar} lite={false} />
                  </div>
                ))}
              </div>
            ) : (
              <InfiniteScroll
                hasMore={hasMore}
                isLoading={isLoading}
                next={loadMoreChords}
              >
                {displayedChords.map((chord) => (
                  <div key={chord.suffix} className="mb-12">
                    <div className="mb-4 text-center">
                      <Title
                        text={`${selectedKey} ${chord.suffix}`}
                        size="md"
                        className="text-xl md:text-2xl font-semibold font-mono text-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:gap-6 lg:grid-cols-4">
                      {chord.positions.map((position, index) => (
                        <div
                          key={index}
                          onClick={() => playChord(position.midi)}
                          className="group relative overflow-hidden rounded-lg border bg-card p-3 shadow-sm transition-all duration-200 ease-in-out cursor-pointer border-border hover:border-accent hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <Chord
                            chord={position}
                            instrument={guitar}
                            lite={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            )}
          </>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-base text-muted-foreground">
              {selectedKey ? "Загрузка аккордов..." : "Выберите тональность"}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ChordList;