/**
 * Analyzes wildfire risk using Grok (xAI) based on coordinates and weather data.
 */
export async function analyzeWildfireRisk(lat, lng, weatherData) {
  // If exposing isn't a problem, you can replace import.meta.env.VITE_GROK_API_KEY with your actual "xai-..." key string here.
  const apiKey = import.meta.env.VITE_GROK_API_KEY || "";
  
  if (!apiKey) {
    return `# ⚠️ Grok API Key Missing
We couldn't find your Grok API Key. To enable real AI analysis:
1. Paste your Grok API key directly in \`aiAnalyzer.js\` on line 6, or put it in \`.env\` as \`VITE_GROK_API_KEY=your_key\`.
2. Restart your dev server.

---
### 🛠️ Mock Analysis (Fallback)
**Location:** ${lat.toFixed(4)}, ${lng.toFixed(4)}
**Conditions:** Temp: ${weatherData.temperature}°C | Wind: ${weatherData.windSpeed}km/h | Humidity: ${weatherData.humidity}%

**Risk Level: HIGH**
Based on the high temperature and wind speed in this location, the probability of a wildfire spreading rapidly is significant. We advise constant satellite monitoring.`;
  }

  const prompt = `You are an expert Wildfire Risk Analyst AI.
I am providing you with real-time environmental data for a specific location.
Location: Latitude ${lat}, Longitude ${lng}
Current Conditions:
- Temperature: ${weatherData.temperature}°C
- Relative Humidity: ${weatherData.humidity}%
- Wind Speed: ${weatherData.windSpeed} km/h

Based on this data, analyze the probability of a wildfire occurring or spreading rapidly.
Provide a comprehensive, well-arranged report using Markdown. 
Include:
1. **Risk Level:** (Low, Moderate, High, or Extreme)
2. **Environmental Analysis:** 
3. **Probability Score:** 
4. **Actionable Recommendations:** 

Keep it professional, highly readable, and formatted beautifully with bullet points and bold text where appropriate.`;

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "grok-2-latest",
        messages: [
          { role: "system", content: "You are a professional wildfire risk analyst." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API error: ${response.status} ${errText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return `### ❌ Analysis Failed\nThere was an error communicating with the Grok API. Please check your API key and network connection.\n\nError details: ${error.message}`;
  }
}
