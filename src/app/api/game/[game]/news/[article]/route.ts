import { NextResponse } from 'next/server';

const newsMock: Article = {
  id: '95988f14-8082-4520-8778-ef2502ee476d',
  title: 'No PVE Mode?!',
  game: 'Overwatch 2',
  date: '2021-08-01T00:00:00.000Z',
  author: {
    id: '95988f14-8082-4520-8778-ef2502ee476d',
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
    'Venenatis malesuada laoreet sit ac sed volutpat. Volutpat nibh dapibus id integer sed nunc diam. Ullamcorper mauris dolor sed porttitor mattis in nunc. Metus volutpat sagittis faucibus nisl integer. Feugiat laoreet pulvinar senectus aliquet pharetra amet vulputate consequat. Ante risus et nascetur malesuada tellus. Dolor nullam nulla hac at id. Id in nullam tristique eget duis adipiscing. Id habitant fermentum sit in. Amet potenti consectetur sed facilisis vulputate urna eget. Ridiculus maecenas etiam cursus consectetur. Vivamus eget quis et netus sed egestas adipiscing fames fringilla. Diam suscipit vestibulum integer laoreet augue adipiscing nibh interdum.',
  banner: 'https://placehold.co/653x250/ECDDFF/740986.png?text=OVERWATCH',
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
  ],
};

// interface GameNewsRequestProps {
//   params: {
//     uuid: string;
//   };
// }

export async function GET() {
  return NextResponse.json(newsMock);
}
