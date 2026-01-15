import { ForecastData } from '../types/weather';

interface HourlyForecastSectionProps {
  forecasts: ForecastData[];
}

export const HourlyForecastSection = ({ forecasts }: HourlyForecastSectionProps) => {
  if (!forecasts.length) return null;
  return (
    <div className="px-6 pb-8">
      <h3 className="text-white text-lg font-semibold mb-4">Hourly Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex flex-col items-center hover:bg-white/15 transition-all flex-shrink-0 w-24"
          >
            <p className="text-white/90 text-sm font-medium mb-2">{forecast.time}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
              alt={forecast.condition}
              className="w-12 h-12 drop-shadow-lg"
            />
            <p className="text-white text-xl font-bold mt-1">{forecast.temperature}°C</p>
            <p className="text-white/70 text-xs">{forecast.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
