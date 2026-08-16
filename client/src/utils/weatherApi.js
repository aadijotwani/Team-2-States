/**
 * Fetches current weather and soil data for a given latitude and longitude using Open-Meteo API.
 */
export async function fetchWeatherData(lat, lng) {
  try {
    // Open-Meteo doesn't require an API key
    // We request current temperature, relative humidity, wind speed, and soil moisture
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&hourly=soil_moisture_0_to_1cm&timezone=auto`
    );
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    
    const formattedData = {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      precipitation: data.current.precipitation,
      soilMoisture: data.hourly?.soil_moisture_0_to_1cm?.[0] || 'N/A' // Just grabbing the first hour's data for current moisture
    };

    console.log("🌦️ Weather API Data Fetched for Coordinates:", { lat, lng });
    console.log("📊 Raw Data from Open-Meteo:", data);
    console.log("✅ Formatted Data sent to AI:", formattedData);
    
    return formattedData;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
}
