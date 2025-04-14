//определение инструмента для правильного рендера Chord из 'react-chords'

import {InstrumentType} from './types'

const guitar: InstrumentType = {
  strings: 6,
  fretsOnChord: 4,
  name: 'Guitar',
  keys: [],
  tunings: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E']
  }
}

export default guitar