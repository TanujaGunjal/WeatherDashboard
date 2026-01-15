export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  date: string;
  feelsLike: number;
  pressure: number;
  visibility: number;
  sunrise: string;
  sunset: string;
  uvi?: number;
}

export interface ForecastData {
  date: string;
  temperature: number;
  icon: string;
  condition: string;
  minTemp?: number;
  maxTemp?: number;
  humidity?: number;
  time?: string; // for hourly
}

export interface DailyForecastData {
  date: string;
  minTemp: number;
  maxTemp: number;
  icon: string;
  condition: string;
  humidity: number;
}
