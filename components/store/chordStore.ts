import { create } from 'zustand';
import { getChordsByKeyAsync } from '@/data/chords';
import allKeys from '@/data/keys'

interface ChordState {
  keys: string[];
  selectedKey: string | null;
  selectedSuffix: string | null;
  suffixes: string[];
  isLoadingSuffixes: boolean;
  setSelectedKey: (key: string) => void;
  setSelectedSuffix: (suffix: string) => void;
  fetchSuffixes: () => Promise<void>;
}

export const useChordStore = create<ChordState>((set, get) => ({
  keys: allKeys,
  selectedKey: null,
  selectedSuffix: null,
  suffixes: [],
  isLoadingSuffixes: false,
  setSelectedKey: (key) => set({ selectedKey: key, selectedSuffix: null, suffixes: [] }),
  setSelectedSuffix: (suffix) => set({ selectedSuffix: suffix }),
  fetchSuffixes: async () => {
    set({ isLoadingSuffixes: true, suffixes: [] });
    const { selectedKey } = get();
    if (!selectedKey) {
      set({ isLoadingSuffixes: false });
      return;
    }
    try {
      const chords = await getChordsByKeyAsync(selectedKey);
      set({ suffixes: chords.map((chord) => chord.suffix), isLoadingSuffixes: false });
    } catch (error) {
      console.error("Error fetching suffixes:", error);
      set({ suffixes: [], isLoadingSuffixes: false });
    }
  },
}));
