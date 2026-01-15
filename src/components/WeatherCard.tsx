import { MapPin, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { getWeatherIconUrl } from '../utils/weatherApi';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="py-8 px-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        <MapPin className="w-5 h-5 text-gray-600" />
        <h2 className="text-2xl font-semibold text-gray-800">
          {weather.city}, {weather.country}
        </h2>
      </div>

      <p className="text-gray-600 text-center mb-6">{weather.date}</p>

      <div className="flex flex-col items-center mb-8">
        <img
          src={getWeatherIconUrl(weather.icon)}
          alt={weather.condition}
          className="w-40 h-40 drop-shadow-2xl"
        />
        <div className="text-7xl font-bold text-white mb-2">
          {weather.temperature}°C
        </div>
        <p className="text-2xl text-white/90 capitalize">{weather.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
        <div className="flex flex-col items-center">
          <Droplets className="w-8 h-8 text-gray-600 mb-2" />
          <p className="text-gray-500 text-sm mb-1">Humidity</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="w-8 h-8 text-gray-600 mb-2" />
          <p className="text-gray-500 text-sm mb-1">Wind Speed</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.windSpeed} m/s</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-gray-600 mb-2">thermostat</span>
          <p className="text-gray-500 text-sm mb-1">Feels Like</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.feelsLike}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-gray-600 mb-2">speed</span>
          <p className="text-gray-500 text-sm mb-1">Pressure</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.pressure} hPa</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-gray-600 mb-2">visibility</span>
          <p className="text-gray-500 text-sm mb-1">Visibility</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.visibility / 1000} km</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-gray-600 mb-2">wb_sunny</span>
          <p className="text-gray-500 text-sm mb-1">Sunrise</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.sunrise}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-icons text-gray-600 mb-2">nights_stay</span>
          <p className="text-gray-500 text-sm mb-1">Sunset</p>
          <p className="text-2xl font-semibold text-gray-800">{weather.sunset}</p>
        </div>
      </div>
    </div>
  );
};
