import { split } from 'lodash';
import { NextResponse } from 'next/server';

const usersMock: Profile[] = [
  {
    id: 'ec4f27cc-9095-4fbb-ade7-6a82d67af919',
    username: 'datFranky',
    gametag: '0807',
    nickname: 'Franky',
    friendsCount: 10,
    followersCount: 20,
    avatar:
      'https://pbs.twimg.com/profile_images/1545370176362876928/XLPla8ev_400x400.jpg',

    description:
      'Viverra nisi ultricies platea dui nunc rhoncus ullamcorper sit sed. Egestas et morbi sit donec montes diam vel at. Pellentesque amet egestas dolor at eu. Odio egestas augue augue bibendum in mattis.',
    social: [],
    platforms: {
      pc: true,
      console: true,
      mobile: true,
    },
    badges: [
      {
        id: 'badge1',
        name: 'Premium',
        description: 'This user has a premium account',
        icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
      },
      {
        id: 'badge2',
        name: 'Developer',
        description: 'This user is a developer at Quest',
        icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
      },
    ],
    tags: ['collector', 'casual', 'fashionista', 'singleplayer'],
  },
  {
    id: 'dadba4b4-8b48-41a0-b17f-0c2c6fdd78a69',
    username: 'Hya',
    gametag: 'queen',
    nickname: 'Danny',
    friendsCount: 45,
    followersCount: 2313,
    avatar:
      'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',

    description:
      'Lorem ipsum dolor sit amet consectetur. Feugiat at dictumst tortor eu libero risus pellentesque enim elit. Placerat diam duis hac viverra mauris. Viverra tellus nec tortor sed lectus. Egestas malesuada facilisis at risus id nunc cras.',
    social: [],
    platforms: {
      pc: true,
      console: true,
      mobile: false,
    },
    badges: [
      {
        id: 'badge1',
        name: 'Premium',
        description: 'This user has a premium account',
        icon: '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1107 6.55873L9.59809 7.49994L9.14287 2.2884L4.40194 4.49994L3.46073 0.9873L0.675014 5.8123C0.504518 6.10761 0.458315 6.45855 0.546571 6.78792C0.634826 7.1173 0.85031 7.39812 1.14562 7.56862L8.56869 11.8543C8.864 12.0248 9.21494 12.071 9.54432 11.9828C9.87369 11.8945 10.1545 11.679 10.325 11.3837L13.1107 6.55873Z" stroke="#FFC107" strokeLinecap="round" stroke-linejoin="round"/></svg>',
      },
    ],
    tags: ['fashionista', 'casual', 'collector', 'multiplayer'],
  },
];

interface ProfileRequestProps {
  params: {
    gametag: string;
  };
}

export async function GET(_: Request, { params }: ProfileRequestProps) {
  const [username, gametag] = split(params.gametag, '-');
  const userMock =
    usersMock.find(
      (user) =>
        user.username.toLocaleLowerCase() === username.toLocaleLowerCase() &&
        user.gametag.toLocaleLowerCase() === gametag.toLocaleLowerCase()
    ) || {};
  return NextResponse.json(userMock);
}
