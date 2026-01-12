
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCoeurResponse = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userInput,
      config: {
        systemInstruction: "You are AICU PLUS ICU, a clinical empathy engine integrated into Intensive Care Units. Your purpose is to bridge the gap between cold clinical data and human connection. You assist medical staff in understanding the emotional needs of patients and families in critical care. Your tone is professional, deeply empathetic, and medical-grade. Keep responses concise and supportive.",
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Connection to clinical core lost. Re-establishing vital link...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error accessing the medical empathy database. Please check local vitals.";
  }
};

export const generateEmotionVisual = async (conversationSummary: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `An abstract, high-end medical visualization of patient vitals and emotional state: ${conversationSummary}. Representing an ICU monitor with cinematic 3D glowing heart pulses, neural pathways, and clinical data streams. Colors: Deep crimson, hospital white highlights, and dark charcoal. Professional, clinical, futuristic healthcare aesthetic.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};
