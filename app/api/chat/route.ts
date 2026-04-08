import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export const dynamic = 'force-dynamic';

const resumeData = {
  name: "Mrityunjoy Mondal",
  role: "Software Engineer @ TCS",
  summary: "Results-driven Software Engineer with 2+ years of experience architecting scalable web applications using JavaScript, TypeScript, React, Angular, and Node.js. Selected through TCS Ignite. Champion of TCS AI Hackathon 2025.",
  skills: ["React.js", "Next.js", "Angular", "Node.js", "Express.js", "TailwindCSS", "Azure", "Docker", "PostgreSQL", "MongoDB", "Python", "TypeScript"],
  experience: "Software Engineer at Tata Consultancy Services since September 2023. Focused on performance engineering, modular frontend architecture, and scalable REST API integrations.",
  achievements: "TCS AI Hackathon 2025 Champion among 281,000+ associates across 58 countries. Built EmpathAI, an AI-driven SDK for real-time emotion detection."
};

const SYSTEM_INSTRUCTION = `You are Mrityunjoy Mondal's AI assistant. Your goal is to answer questions about Mrityunjoy's professional background, skills, and achievements based on the provided resume data.
Keep your responses concise, professional, and futuristic in tone.
If a question is asked that isn't covered by the resume data, politely state that you don't have that information and offer to help with something else.
Resume Data: ${JSON.stringify(resumeData)}`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY || process.env.api_key;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured in deployment environment.' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: (history || []).map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      })),
    });

    const result = await chat.sendMessage({ message });
    const text = result.text;

    return NextResponse.json({ text });
  } catch (err: unknown) {
    console.error('Chat API error:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
