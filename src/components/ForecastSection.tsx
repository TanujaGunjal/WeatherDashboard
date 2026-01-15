import { ForecastData } from '../types/weather';
import { getWeatherIconUrl } from '../utils/weatherApi';

interface ForecastSectionProps {
  forecasts: ForecastData[];
}

export const ForecastSection = ({ forecasts }: ForecastSectionProps) => {
  if (forecasts.length === 0) return null;

  return (
    <div className="px-6 pb-8">
      <h3 className="text-white text-lg font-semibold mb-4">Hourly Forecast</h3>
      <div className="grid grid-cols-4 gap-3">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex flex-col items-center hover:bg-white/15 transition-all"
          >
            <p className="text-white/90 text-sm font-medium mb-2">
              {forecast.time}
            </p>
            <img
              src={getWeatherIconUrl(forecast.icon)}
              alt={forecast.condition}
              className="w-16 h-16 drop-shadow-lg"
            />
            <p className="text-white text-xl font-bold mt-1">
              {forecast.temperature}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
