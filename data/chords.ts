import { Chord, ChordDb } from "./types";

// Структура базы данных:
// {
//   "C": [
//     { key: "C", suffix: "major", positions: [...] }, // Аккорд c тональностью, суффиксом и позициями
//     { key: "C", suffix: "minor", positions: [...] },
//     ...
//   ],
//   "C#": [...],
//   "D": [...],
//   ...
// }


let cachedChordsDb: ChordDb | null = null; // Кэш для загруженной базы

// Асинхронная функция для получения всей базы данных
export async function getAllChordsAsync(): Promise<ChordDb> {
  if (cachedChordsDb) {
    return cachedChordsDb; // Возвращаем из кэша, если уже загружено
  }
  // Динамически импортируем JSON
  const { default: db } = await import("./chordsDb.json");
  cachedChordsDb = db as ChordDb;
  return cachedChordsDb;
}

// Асинхронная функция для получения аккордов по тональности
export async function getChordsByKeyAsync(key: string): Promise<Chord[]> {
  const db = await getAllChordsAsync(); // Убедимся, что база загружена
  return db[key] || [];
}