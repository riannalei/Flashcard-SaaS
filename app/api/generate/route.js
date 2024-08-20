import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Set up the OpenAI API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.text();
    const { text } = JSON.parse(body);

    if (!text) {
      return NextResponse.json({ error: 'Text is required to generate flashcards.' }, { status: 400 });
    }

    // Use the chat completions endpoint
    const response = await openai.chat.completions.create({
      model: 'gpt-4',  // Make sure to use a chat model like 'gpt-4'
      messages: [
        { role: 'system', content: 'You are a helpful assistant that creates educational flashcards. Each flashcard should have a "Front" and a "Back" side. Format the flashcards clearly with "Front: <content>" and "Back: <content>" on separate lines.' },
        { role: 'user', content: text },
      ],
      max_tokens: 300,
    });

    const message = response.choices[0].message.content.trim();

    // Parsing the response to separate front and back
    const flashcards = message.split('\n').reduce((cards, line) => {
      if (line.startsWith('Front:')) {
        cards.push({ front: line.replace('Front:', '').trim(), back: '' });
      } else if (line.startsWith('Back:')) {
        if (cards.length > 0) {
          cards[cards.length - 1].back = line.replace('Back:', '').trim();
        }
      }
      return cards;
    }, []);

    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards.' }, { status: 500 });
  }
}
