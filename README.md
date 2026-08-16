# Firewall: Predictive Wildfire Management System

**Firewall** is a comprehensive, AI-driven platform designed to predict, assess, and manage wildfire outbreaks proactively. Built for the hackathon by **Team 2 States**.

## Features

- **Real-Time Interactive Map:** Built with Leaflet, allowing users to explore different regions and drop pins to select specific coordinates.
- **AI-Powered Risk Analysis:** Integrates Google's highly efficient Gemini AI (`gemini-3.5-flash-lite` via the new Interactions SDK) to instantly analyze local environmental conditions and generate comprehensive risk assessments.
- **Live Environmental Data:** Fetches live weather, temperature, wind speed, and humidity data to feed into the prediction models.
- **Premium UI/UX:** A stunning, cinematic single-page application built with React, Vite, Tailwind CSS, and Framer Motion for buttery-smooth animations and glassmorphic designs.

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS, Framer Motion
- **Maps & Data:** Leaflet, OpenWeather (or similar environmental APIs)
- **Icons:** Lucide React
- **AI Integration:** `@google/genai` (Google AI Studio)

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v18+ recommended)
- A completely free [Google Gemini API Key](https://aistudio.google.com/app/apikey).

### Installation

1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/aadijotwani/Team-2-States.git
   cd Team-2-States/client
   ```
   *(Note: The main application code lives inside the `/client` folder).*

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup your Environment Variables:
   Create a `.env` file in the root of the `client` directory and add your free Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the localhost URL provided in your terminal (usually `http://localhost:5173`).

## How it Works

1. **Location Selection:** Users drop a pin on the interactive global map.
2. **Data Aggregation:** The app parses the exact geographic coordinates and pulls real-time environmental data (Temperature, Wind Speed, Humidity).
3. **AI Inference:** The data is passed securely to Gemini, which acts as an expert Wildfire Risk Analyst. 
4. **Actionable Insights:** A highly detailed markdown report is generated in real-time, outlining the exact Risk Level, Environmental Analysis, Probability Score, and Actionable Recommendations for local authorities and residents.

---

<p align="center">
  <i>Built by Team 2 States</i>
</p>
