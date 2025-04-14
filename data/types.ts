// Определение типов
export type Position = {
	frets: number[];
	fingers: number[];
	baseFret: number;
	barres: number[];
	midi: number[];
	capo?: boolean;
};

export type Chord = {
	key: string;
	suffix: string;
	positions: Position[];
};

export type InstrumentType = {
  tunings: {
      standard: string[];
  };
  name: string;
  keys: string[];
  strings: number;
  fretsOnChord: number;
};

export type ChordProps = {
  chord: Position[];
  instrument: InstrumentType;
  lite?: boolean;
};

export type ChordDb = Record<string, Chord[]>;