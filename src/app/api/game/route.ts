import { NextResponse } from 'next/server';

const key = process.env.RAWG;

export async function GET() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${key}&page_size=10`
  );
  const data = await res.json();
  const response = data.results.map((game) => ({
    id: game.id,
    name: game.slug,
    image: game.background_image,
  }));
  return NextResponse.json(response);
}
