"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { Combobox } from "./combobox";
import { useChordStore } from "@/components/store/chordStore";
import { useShallow } from "zustand/shallow";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  const {
    keys,
    selectedKey,
    setSelectedKey,
    selectedSuffix,
    setSelectedSuffix,
    suffixes,
    isLoadingSuffixes,
    fetchSuffixes,
  } = useChordStore(
    useShallow((state) => ({
      keys: state.keys,
      selectedKey: state.selectedKey,
      setSelectedKey: state.setSelectedKey,
      selectedSuffix: state.selectedSuffix,
      setSelectedSuffix: state.setSelectedSuffix,
      suffixes: state.suffixes,
      isLoadingSuffixes: state.isLoadingSuffixes,
      fetchSuffixes: state.fetchSuffixes,
    }))
  );

  useEffect(() => {
    if (selectedKey) {
      fetchSuffixes();
    } else {
    }
  }, [selectedKey, fetchSuffixes]);

  return (
    <div className={cn("sticky top-0 bg-background py-5 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex gap-5 items-center justify-between">
        <Categories items={keys} selectedKey={selectedKey} onKeyChange={setSelectedKey} />
        {selectedKey && (
          isLoadingSuffixes ? (
            <div>Загружаю суффиксы</div>
          ) : (
            <Combobox items={suffixes} value={selectedSuffix} onValueChange={setSelectedSuffix} />
          )
        )}
      </Container>
    </div>
  );
};

export default React.memo(TopBar);