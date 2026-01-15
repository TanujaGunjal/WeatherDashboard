import { CloudOff } from 'lucide-react';

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center backdrop-blur-sm">
        <CloudOff className="w-16 h-16 text-white/80" />
      </div>
      <h2 className="text-2xl font-semibold text-white mb-3">Search City</h2>
      <p className="text-white/70 text-lg max-w-sm">
        Find out the weather conditions of the city
      </p>
    </div>
  );
};
