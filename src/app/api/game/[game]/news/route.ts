import { NextResponse } from 'next/server';

const newsMock: News[] = [
  {
    id: '95988f14-8082-4520-8778-ef2502ee476d',
    title: 'No PVE Mode?!',
    game: 'Overwatch-2',
    icon: 'O2',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
  {
    id: '95988f14-8082-4520-8778-ef2502ef476d',
    title: 'Season rundown',
    game: 'Overwatch-2',
    icon: 'O2',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
];

interface GameNewsRequestProps {
  params: {
    game: string;
  };
}

export async function GET(_: Request, { params }: GameNewsRequestProps) {
  const news = newsMock.filter((news) => news.game === params.game);
  return NextResponse.json(news);
}
