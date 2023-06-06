import { NextResponse } from 'next/server';

const newsMock: News[] = [
  {
    id: '95988f14-8082-4520-8778-ef2502ee476d',
    title: 'New Minecraft Snapshot',
    game: 'Minecraft',
    icon: '□',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
  {
    id: 'cb463c31-4226-48af-94c1-b78f2bb04742',
    title: 'League of Legends Patch 11.16',
    game: 'League of Legends',
    icon: 'L',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
  {
    id: '11b641c1-237a-4ac1-a817-c6bfc1afbd6d',
    title: 'Hackers in VALORANT',
    game: 'VALORANT',
    icon: 'V',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
  {
    id: '11b641c1-237a-4ac1-a817-c6bfc1afbd13',
    title: 'VCT Masters Berlin',
    game: 'VALORANT',
    icon: 'V',
    summary:
      'Odio sed et volutpat ac in elit vulputate diam vel. Sem luctus sed ut et scelerisque. Nec morbi molestie nisi aliquet. In et phasellus.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
  {
    id: '95988f14-8082-4520-8778-ef2502ef476d',
    title: 'Minecraft 1.20 what to expect?',
    game: 'Minecraft',
    icon: '□',
    summary:
      'Urna pharetra arcu placerat ornare leo nulla lectus auctor. Nunc eget adipiscing quis dictum varius. Pharetra tortor eget dui purus elit. Semper ut elementum facilisis nulla. Morbi mi rhoncus sit et. Vitae facilisis lorem quis risus sodales mauris.',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg',
    date: '2021-08-01T00:00:00.000Z',
    author: {
      id: '95988f14-8082-4520-8778-ef2502ee476d',
      username: 'Hya',
      gametag: 'QUEEN',
    },
  },
];

export async function GET() {
  return NextResponse.json(newsMock);
}
