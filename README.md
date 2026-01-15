# 🌤️ Weather Dashboard

A **desktop-first, intermediate-level Weather Dashboard** built using **React, TypeScript, and Vite**, powered by the **OpenWeather API**.  
The application provides real-time weather information with a clean UI, proper empty-state handling, and forecast visualizations.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current weather details:
  - Temperature
  - Weather condition
  - Feels like temperature
  - Humidity
  - Wind speed
- ⏰ **Hourly Forecast** displayed in a smooth horizontal scrolling slider
- 📅 **8-Day Forecast** displayed in a responsive grid layout
- 🧊 **Default Empty-State UI** when no city is searched
- 🖥️ **Desktop-first responsive design** 
- ⚡ Fast performance using Vite
- 🔐 Secure API key handling using environment variables

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **OpenWeather API**

## 📂 Project Structure

WeatherDashboard/
│
├── src/
│ ├── components/
│ │ ├── SearchBar.tsx
│ │ ├── EmptyState.tsx
│ │ ├── WeatherCard.tsx
│ │ ├── HourlyForecastSection.tsx
│ │ └── DailyForecastSection.tsx
│ │
│ ├── utils/
│ │ └── weatherApi.ts
│ │
│ ├── types/
│ │ └── weather.ts
│ │
│ ├── App.tsx
│ └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md


---

## 🔑 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key


You can get an API key from:
👉 https://openweathermap.org/api

▶️ Run Locally
npm install
npm run dev


Then open in browser:
👉 http://localhost:5173

