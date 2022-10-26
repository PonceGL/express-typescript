import { DiaryEntry } from "../types";
import diaryData from "./diaries.json";

const dieries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // Asersiones de tipo
export const getEntries = (): Array<DiaryEntry> => dieries;

export const addEntry = (): null => null;
