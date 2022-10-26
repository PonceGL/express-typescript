export type Weather = "sunny" | "rainy" | "cloudy" | "windy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
// Types Utilities
// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// extends Example // Not used in this project, just an example.
interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
}
