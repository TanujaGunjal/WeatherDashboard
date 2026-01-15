import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { EmptyState } from './components/EmptyState';
import { WeatherCard } from './components/WeatherCard';
import { HourlyForecastSection } from './components/HourlyForecastSection';
import { DailyForecastSection } from './components/DailyForecastSection';
import { WeatherData, ForecastData, DailyForecastData } from './types/weather';
import { fetchWeatherData, fetchForecastData, fetchDailyForecastData } from './utils/weatherApi';
import { AlertCircle } from 'lucide-react';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hourlyForecasts, setHourlyForecasts] = useState<ForecastData[]>([]);
  const [dailyForecasts, setDailyForecasts] = useState<DailyForecastData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bgClass, setBgClass] = useState('bg-gradient-to-br from-sky-300 via-blue-200 to-blue-400');

  const getBackgroundClass = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return 'bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200';
      case 'clouds':
        return 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400';
      case 'rain':
      case 'drizzle':
        return 'bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500';
      case 'snow':
        return 'bg-gradient-to-br from-blue-100 via-white to-blue-200';
      case 'thunderstorm':
        return 'bg-gradient-to-br from-gray-600 via-gray-700 to-black';
      default:
        return 'bg-gradient-to-br from-sky-300 via-blue-200 to-blue-400';
    }
  };

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeatherData(city);
      const hourlyData = await fetchForecastData(city);
      const dailyData = await fetchDailyForecastData(city);
      setWeather(weatherData);
      setHourlyForecasts(hourlyData);
      setDailyForecasts(dailyData);
      setBgClass(getBackgroundClass(weatherData.condition));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeather(null);
      setHourlyForecasts([]);
      setDailyForecasts([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-blue-200 to-blue-400 flex flex-col">
      {/* Search Bar at Top Center */}
      <header className="flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-md">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-8 pb-8">
        <div className="w-full max-w-4xl mx-auto">
          {isLoading && (
            <div className="flex justify-center py-16">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="mx-auto max-w-md p-4 bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {!isLoading && !error && !weather && <EmptyState />}

          {!isLoading && !error && weather && (
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              <WeatherCard weather={weather} />
              <HourlyForecastSection forecasts={hourlyForecasts} />
              <DailyForecastSection forecasts={dailyForecasts} />
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Powered by OpenWeatherMap API
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
