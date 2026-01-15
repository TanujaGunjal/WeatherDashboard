import { CloudOff } from 'lucide-react';

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 flex items-center justify-center backdrop-blur-sm">
        <CloudOff className="w-16 h-16 text-gray-600" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Search City</h2>
      <p className="text-gray-600 text-lg max-w-sm">
        Find out the weather conditions of the city
      </p>
    </div>
  );
};
