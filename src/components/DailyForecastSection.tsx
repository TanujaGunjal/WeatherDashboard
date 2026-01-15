import { DailyForecastData } from '../types/weather';

interface DailyForecastSectionProps {
  forecasts: DailyForecastData[];
}

export const DailyForecastSection = ({ forecasts }: DailyForecastSectionProps) => {
  if (!forecasts.length) return null;
  return (
    <div className="px-6 pb-8">
      <h3 className="text-white text-lg font-semibold mb-4">8-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex flex-col items-center hover:bg-white/15 transition-all"
          >
            <p className="text-white/90 text-sm font-medium mb-2">{forecast.date}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
              alt={forecast.condition}
              className="w-12 h-12 drop-shadow-lg"
            />
            <div className="flex gap-2 mt-1">
              <span className="text-white text-lg font-bold">{forecast.maxTemp}°</span>
              <span className="text-white/70 text-lg">/ {forecast.minTemp}°</span>
            </div>
            <p className="text-white/70 text-xs">{forecast.condition}</p>
            <p className="text-white/60 text-xs mt-1">Humidity: {forecast.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
