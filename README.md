# 🌤️ Weather Dashboard

An intermediate-level Weather Dashboard built with React, TypeScript, and Vite, powered by the OpenWeather API.
The application provides real-time weather information with a clean, modern user interface, proper empty-state handling, and intuitive forecast visualizations.

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

