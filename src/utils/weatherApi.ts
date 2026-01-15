import { WeatherData, ForecastData, DailyForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'demo';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.');
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    condition: data.weather[0].main,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon,
    date: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    feelsLike: Math.round(data.main.feels_like),
    pressure: data.main.pressure,
    visibility: data.visibility,
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    uvi: data.uvi || undefined,
  };
};

export const fetchForecastData = async (city: string): Promise<ForecastData[]> => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }

  const data = await response.json();

  // 8-hour forecast
  const hourlyForecasts: ForecastData[] = data.list.slice(0, 8).map((item: any) => {
    const date = new Date(item.dt * 1000);
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      temperature: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      condition: item.weather[0].main,
      humidity: item.main.humidity,
    };
  });

  return hourlyForecasts;
};

export const fetchDailyForecastData = async (city: string): Promise<DailyForecastData[]> => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch daily forecast data');
  }

  const data = await response.json();

  // Group by day
  const dailyMap: { [date: string]: any[] } = {};
  for (const item of data.list) {
    const date = new Date(item.dt * 1000);
    const dayString = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    if (!dailyMap[dayString]) dailyMap[dayString] = [];
    dailyMap[dayString].push(item);
  }

  const dailyForecasts: DailyForecastData[] = Object.entries(dailyMap).slice(0, 8).map(([date, items]) => {
    // Calculate min/max temp, humidity, pick icon/condition from midday
    let minTemp = Infinity, maxTemp = -Infinity, humidity = 0;
    let icon = items[0].weather[0].icon, condition = items[0].weather[0].main;
    let middayIdx = Math.floor(items.length / 2);
    for (const item of items) {
      minTemp = Math.min(minTemp, item.main.temp_min ?? item.main.temp);
      maxTemp = Math.max(maxTemp, item.main.temp_max ?? item.main.temp);
      humidity += item.main.humidity;
    }
    humidity = Math.round(humidity / items.length);
    icon = items[middayIdx].weather[0].icon;
    condition = items[middayIdx].weather[0].main;
    return {
      date,
      minTemp: Math.round(minTemp),
      maxTemp: Math.round(maxTemp),
      icon,
      condition,
      humidity,
    };
  });

  return dailyForecasts;
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
};
