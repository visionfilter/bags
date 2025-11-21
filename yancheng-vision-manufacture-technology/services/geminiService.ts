import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client
// The API key is guaranteed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI sales assistant for "Vision Filter" (Yancheng Vision Manufacture Technology Co., Ltd).
We are a factory specializing in industrial dust collection filtration consumables.
Our vision is: Industrial emission compliance and zero environmental pollution.

Our main products:
1. Filter Cloths (Woven, Non-woven, PTFE, Fiberglass, Polyester, Nomex/Aramid).
2. Filter Bags (Pulse jet, Shaker, Reverse air).
3. Filter Cartridges.
4. Filter Cages (Bag cages).
5. Accessories (Venturis, Solenoid valves).

Key Company Info:
- Name: Vision Filter
- Location: Yiyun town kecheng street yannan high-tech zone, Tinghu, Yancheng, Jiangsu, China.
- Contact Person: Gigi.
- Phone: +8613921807310.
- We export globally.

Your goal is to assist international B2B buyers. 
- Be professional, environmentally conscious, and helpful.
- If asked for contact methods, provide Gigi's phone/WhatsApp (+8613921807310) and social media links.
- Focus on our commitment to "Clean Vision" and environmental protection.
- Keep answers concise (under 100 words).
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I am currently experiencing high traffic. Please contact us via WhatsApp at +8613921807310.";
  }
};