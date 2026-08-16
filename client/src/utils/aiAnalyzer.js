import { GoogleGenAI } from "@google/genai";

/**
 * Analyzes wildfire risk using Gemini (100% Free) based on coordinates and weather data.
 */
export async function analyzeWildfireRisk(lat, lng, weatherData) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  
  if (!apiKey || apiKey.startsWith("xai-")) {
    return `# ⚠️ Gemini API Key Missing
We couldn't find your Gemini API Key. To enable real AI analysis:
1. Paste your **Gemini** API key in \`.env\` as \`VITE_GEMINI_API_KEY=your_key\`.
2. Restart your dev server.

Get a completely free API key instantly at: **[Google AI Studio](https://aistudio.google.com/app/apikey)**.

---
### 🛠️ Mock Analysis (Fallback)
**Location:** ${lat.toFixed(4)}, ${lng.toFixed(4)}
**Conditions:** Temp: ${weatherData.temperature}°C | Wind: ${weatherData.windSpeed}km/h | Humidity: ${weatherData.humidity}%

**Risk Level: HIGH**
Based on the high temperature and wind speed in this location, the probability of a wildfire spreading rapidly is significant. We advise constant satellite monitoring.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `You are an expert Wildfire Risk Analyst AI.
I am providing you with real-time environmental data for a specific location.
Location: Latitude ${lat}, Longitude ${lng}
Current Conditions:
- Temperature: ${weatherData.temperature}°C
- Relative Humidity: ${weatherData.humidity}%
- Wind Speed: ${weatherData.windSpeed} km/h

Based on this data, analyze the probability of a wildfire occurring or spreading rapidly in this exact location.
Provide a comprehensive, well-arranged report using Markdown. 
Include the following sections:
1. **Risk Level:** (Low, Moderate, High, or Extreme)
2. **Environmental Analysis:** (How the current temp, humidity, and wind interact to create risk)
3. **Probability Score:** (Give an estimated percentage out of 100%)
4. **Actionable Recommendations:** (What local authorities or residents should do)

Keep it professional, highly readable, and formatted beautifully with bullet points and bold text where appropriate.`;

    const interaction = await ai.interactions.create({
        model: 'gemini-3.7-flash',
        input: prompt,
    });
    
    return interaction.output_text;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return `### ❌ Analysis Failed\nThere was an error communicating with the Gemini API. Please check your API key and network connection.\n\nError details: ${error.message}`;
  }
}
