export type Weather = "sunny" | "rainy" | "cloudy" | "windy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// Example // Not used in this project, just an example.
interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number;
}
