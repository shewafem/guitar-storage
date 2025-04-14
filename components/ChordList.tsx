"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";
import guitar from "@/data/guitar";
import * as Tone from "tone";
import { useChordStore } from "./store/chordStore";
import { getChordsByKeyAsync } from "@/data/chords";
import { cn } from "@/lib/utils";
import { Container, Title } from "./shared";
import { useShallow } from "zustand/shallow";

interface ChordData {
	suffix: string;
	positions: {
		frets: number[];
		fingers: number[];
		midi: number[];
	}[];
}

const ChordList: React.FC<{ className?: string }> = ({ className }) => {
	const { selectedKey, selectedSuffix } = useChordStore(
		useShallow((state) => ({
			selectedKey: state.selectedKey,
			selectedSuffix: state.selectedSuffix,
		}))
	);

	const synthRef = useRef<Tone.PolySynth | null>(null);
	const [chordsForKey, setChordsForKey] = useState<ChordData[]>([]);
  const [isSynthReady, setIsSynthReady] = useState(false);

	useEffect(() => {
		if (selectedSuffix && !synthRef.current) {
			Tone.start().then(() => {
				synthRef.current = new Tone.PolySynth(Tone.Synth).toDestination();
        setIsSynthReady(true);
			});
		}
	}, [selectedSuffix]);

	useEffect(() => {
		if (selectedKey) {
			getChordsByKeyAsync(selectedKey).then(setChordsForKey);
		}
	}, [selectedKey]);

	const playChord = (midiNotes: number[]) => {
		const now = Tone.now();
		midiNotes.forEach((note, index) => {
			const noteName = Tone.Frequency(note, "midi").toNote();
			synthRef.current?.triggerAttackRelease(noteName, "8n", now + index * 0.1);
		});
	};

	const selectedChord = useMemo(() => {
		return chordsForKey.find((chord) => chord.suffix === selectedSuffix) || null;
	}, [chordsForKey, selectedSuffix]);

	return (
		<Container>
			<div className={cn("my-8 md:my-12 lg:my-16", className)}>
				{selectedChord ? (
					<>
						<div className="mb-8 text-center">
							<Title
								text={`${selectedKey} ${selectedSuffix}`}
								size="lg"
								className="text-2xl md:text-3xl font-bold font-mono text-foreground"
							/>
						</div>
						{!isSynthReady && selectedSuffix && (
							<div className="mb-6 rounded-md border border/50 bg/10 p-3 text-center">
								<p className="text-sm font-mono font-medium text-accent">Инициализация аудио...</p>
							</div>
						)}
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
					</>
				) : (
					<div className="mt-12 text-center">
						<p className="text-base text-muted-foreground">
							{selectedKey ? "Выберите тип аккорда" : "Выберите тональность"}
						</p>
					</div>
				)}
			</div>
		</Container>
	);
};

export default ChordList;
