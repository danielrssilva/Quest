import Game from '@/app/ui/game/game';
import News from '@/app/ui/news/news';
import QuestLog from '@/app/ui/questLog/questLog';

interface HomeProps {
  params: {
    lang: string;
  };
}

const logMock: QuestLog[] = [
  {
    id: 'log3test',
    author: {
      id: 'hyaqueen',
      username: 'Hya',
      gametag: 'QUEEN',
      nickname: 'Danny',
      avatar:
        'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
      badges: [
        {
          id: 'badge1',
          name: 'Premium',
          description: 'This user has a premium account',
          icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
        },
      ],
    },
    content:
      'Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.',
    media: [
      {
        id: 'thislogmedia1',
        url: 'https://placehold.co/442x442.png',
        type: 'image',
      },
    ],
    date: '2021-09-01T00:00:00.000Z',
    linkedLogs: [],
    view: 'everyone',
    reply: 'everyone',
    likes: [
      {
        id: 'hyaqueen',
        username: 'Hya',
        gametag: 'QUEEN',
        nickname: 'Danny',
        avatar:
          'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
        badges: [
          {
            id: 'badge1',
            name: 'Premium',
            description: 'This user has a premium account',
            icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
          },
        ],
      },
    ],
    liked: false,
    comments: [],
    commented: false,
    // scheduled: boolean;
    // scheduledDate: string;
  },
  {
    id: 'log2test',
    author: {
      id: 'hyaqueen',
      username: 'Hya',
      gametag: 'QUEEN',
      nickname: 'Danny',
      avatar:
        'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
      badges: [
        {
          id: 'badge1',
          name: 'Premium',
          description: 'This user has a premium account',
          icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
        },
      ],
    },
    content:
      'Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec.',
    media: [
      {
        id: 'thislog2media1',
        url: 'https://placehold.co/142x142.png',
        type: 'image',
      },
      {
        id: 'thislog2media2',
        url: 'https://placehold.co/142x142.png',
        type: 'image',
      },
      {
        id: 'thislog2media3',
        url: 'https://placehold.co/142x142.png',
        type: 'image',
      },
    ],
    date: '2021-09-01T00:00:00.000Z',
    genre: {
      id: 'genre1',
      name: 'FPS',
      icon: '',
    },
    platform: 'PC',
    linkedLogs: [],
    view: 'everyone',
    reply: 'everyone',
    likes: [
      {
        id: 'hyaqueen',
        username: 'Hya',
        gametag: 'QUEEN',
        nickname: 'Danny',
        avatar:
          'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
        badges: [
          {
            id: 'badge1',
            name: 'Premium',
            description: 'This user has a premium account',
            icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
          },
        ],
      },
    ],
    liked: true,
    comments: [
      {
        id: 'comment1',
        author: {
          id: 'hyaqueen',
          username: 'Hya',
          gametag: 'QUEEN',
          nickname: 'Danny',
          avatar:
            'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
          badges: [
            {
              id: 'badge1',
              name: 'Premium',
              description: 'This user has a premium account',
              icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
            },
          ],
        },
        content: 'Aliquam ornare nam bibendum nisl nulla bibendum pretium at.',
        date: '2021-09-01T00:00:00.000Z',
      },
      {
        id: 'comment2',
        author: {
          id: 'datfranky',
          username: 'datFranky',
          gametag: '0807',
          nickname: 'Franky',
          avatar:
            'https://pbs.twimg.com/profile_images/1545370176362876928/XLPla8ev_400x400.jpg',
          badges: [
            {
              id: 'badge2',
              name: 'Developer',
              description: 'This user is a developer',
              icon: '</>',
            },
          ],
        },
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nam bibendum nisl nulla bibendum pretium at.',
        date: '2021-09-01T00:00:00.000Z',
      },
    ],
    commented: true,
    // scheduled: boolean;
    // scheduledDate: string;
  },
  {
    id: 'log1test',
    author: {
      id: 'datfranky',
      username: 'datFranky',
      gametag: '0807',
      nickname: 'Franky',
      avatar:
        'https://pbs.twimg.com/profile_images/1545370176362876928/XLPla8ev_400x400.jpg',
      badges: [
        {
          id: 'badge1',
          name: 'Premium',
          description: 'This user has a premium account',
          icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
        },
      ],
    },
    content:
      'Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec. ',
    // media: ['test', 'test', 'test'],
    media: [],
    date: '2021-09-01T00:00:00.000Z',
    game: {
      id: 'game1',
      icon: '',
      name: 'Minecraft',
    },
    genre: {
      id: 'genre1',
      name: 'Sandbox',
      icon: '',
    },
    platform: 'PC',
    linkedLogs: [
      {
        id: 'linkedlog1test',
        author: {
          id: 'hyaqueen',
          username: 'Hya',
          gametag: 'QUEEN',
          nickname: 'Danny',
          avatar:
            'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
          badges: [
            {
              id: 'badge1',
              name: 'Premium',
              description: 'This user has a premium account',
              icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
            },
          ],
        },
        content:
          'Aliquam ornare nam bibendum nisl nulla bibendum pretium at. Elementum magna semper massa in risus integer iaculis. Minecraft vel pellentesque et eu nunc malesuada ut ultricies. Eget ut semper arcu volutpat donec. ',
        // media: ['test', 'test', 'test'],
        media: [
          {
            id: 'thislog1media1',
            url: 'https://placehold.co/217x217.png',
            type: 'image',
          },
          {
            id: 'thislog1media2',
            url: 'https://placehold.co/1920x1080.mp4',
            type: 'video',
          },
        ],
        date: '2021-09-01T00:00:00.000Z',
        platform: 'PC',
        linkedLogs: [],
        view: 'everyone',
        reply: 'everyone',
        likes: [],
        liked: false,
        comments: [],
        commented: false,
        // scheduled: boolean;
        // scheduledDate: string;
      },
    ],
    view: 'everyone',
    reply: 'everyone',
    likes: [],
    liked: false,
    comments: [],
    commented: false,
    // scheduled: boolean;
    // scheduledDate: string;
  },
];

export default async function Home(props: HomeProps) {
  const response = await fetch('http://localhost:3000/api/game/latest-news');
  const newsMock = (await response.json()) as News[];

  const games = await fetch('http://localhost:3000/api/game');
  const gameMock = (await games.json()) as GameExplore[];

  return (
    <div className="flex flex-col gap-4 overflow-x-visible">
      <h1 className="text-lg font-bold uppercase">Games you might like</h1>
      <div className="flex gap-4 overflow-x-auto p-px">
        {gameMock.map((game) => (
          <Game lang={props.params.lang} game={game} key={game.id} />
        ))}
      </div>
      <h1 className="text-lg font-bold uppercase">Latest game news</h1>
      <div className="flex w-full gap-4 overflow-x-auto p-px">
        {newsMock.map((news) => (
          <News lang={props.params.lang} news={news} gameName key={news.id} />
        ))}
      </div>
      <h1 className="text-lg font-bold uppercase">Pleople are talking about</h1>
      <div className="flex w-full gap-4 overflow-x-auto py-px">
        {logMock.map((log) => (
          <QuestLog lang={props.params.lang} log={log} key={log.id} />
        ))}
      </div>
    </div>
  );
}
