import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const dieries: DiaryEntry[] = diaryData as DiaryEntry[]; // Asersiones de tipo
export const getEntries = (): DiaryEntry[] => dieries;

export const findById = (id: number): NoSensitiveInfoDiaryEntry => {
  const entry = dieries.find(d => d.id === id);
  if (entry == null) {
    throw new Error(`Diary with id: ${id} Not found`);
  }

  const { comment, ...resOfDiary } = entry;
  return resOfDiary;
};

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] =>
  dieries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility };
  });

export const addDiary = (data: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...dieries.map(d => d.id)) + 1,
    ...data,
  };

  dieries.push(newDiaryEntry);

  return newDiaryEntry;
};
