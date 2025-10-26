
import { GoogleGenAI } from "@google/genai";

// IMPORTANT: Do not expose your API key in client-side code.
// This is for demonstration purposes only.
// In a real application, this call should be made from a backend server.
const apiKey = process.env.API_KEY;

export const generateDescription = async (
  productName: string,
  keywords: string
): Promise<string> => {
    if (!apiKey) {
        throw new Error("API_KEY environment variable not set.");
    }
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `Generate a compelling and short e-commerce product description for the following product.
    
    Product Name: "${productName}"
    
    Keywords to include: "${keywords}"
    
    The description should be engaging, highlight key features, and persuade customers to buy. Do not use markdown formatting. Keep it to one paragraph.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating description:", error);
        if (error instanceof Error) {
            return `Failed to generate description: ${error.message}`;
        }
        return "An unknown error occurred while generating the description.";
    }
};
