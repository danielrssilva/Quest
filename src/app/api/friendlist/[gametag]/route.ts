import { split } from 'lodash';
import { NextResponse } from 'next/server';

const playing: FriendListUser[] = [
  {
    id: 'dadba4b4-8b48-41a0-b17f-0c2c6fdd78a69',
    username: 'Hya',
    gametag: 'queen',
    nickname: 'Danny',
    status: {
      id: 'minecraft',
      name: 'Minecraft',
      icon: '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_424_1770)"><path d="M9.56429 2.14292C9.52624 2.09128 9.47418 2.05162 9.41429 2.02863L5.12858 0.407205C5.08802 0.389507 5.04425 0.380371 5 0.380371C4.95576 0.380371 4.91199 0.389507 4.87143 0.407205L0.585719 2.05721C0.529097 2.0722 0.477385 2.10175 0.435719 2.14292C0.385824 2.20328 0.358097 2.2789 0.357147 2.35721V7.58578C0.358074 7.65711 0.380341 7.72653 0.42108 7.78509C0.461818 7.84365 0.519161 7.88867 0.585719 7.91435L4.87143 9.56435H5H5.12858L9.41429 7.91435C9.48085 7.88867 9.53819 7.84365 9.57893 7.78509C9.61967 7.72653 9.64194 7.65711 9.64286 7.58578V2.38578C9.6489 2.29773 9.62076 2.21074 9.56429 2.14292Z" stroke="#740986" stroke-width="0.857143" strokeLinecap="round" stroke-linejoin="round"/><path d="M5 9.61418V3.92847" stroke="#740986" stroke-width="0.857143" strokeLinecap="round" stroke-linejoin="round"/><path d="M5 3.92847V9.61418" stroke="#740986" stroke-width="0.857143" strokeLinecap="round" stroke-linejoin="round"/><path d="M0.435699 2.17139L4.99999 3.92853L9.56427 2.17139" stroke="#740986" stroke-width="0.857143" strokeLinecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_424_1770"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>',
    },
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
];

const online: FriendListUser[] = [
  {
    id: 'ec4f27cc-9095-4fbb-ade7-6a82d67af919',
    username: 'datFranky',
    gametag: '0807',
    nickname: 'Franky',
    status: 'online',
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
  {
    id: '927ef51b-6f43-481a-a1a6-4c5cba6cc960',
    username: 'V O I D',
    gametag: '666',
    nickname: '',
    status: 'away',
    avatar:
      'https://pbs.twimg.com/profile_images/1509653601072959489/6R9tyCE2_400x400.jpg',
    badges: [],
  },
];

const offline: FriendListUser[] = [
  {
    id: 'ec4f27cc-9095-4fbb-ade7-6a82d67af919',
    username: 'MatiottiHs',
    gametag: 'Troll',
    nickname: '',
    status: 'offline',
    avatar:
      'https://pbs.twimg.com/profile_images/1632583761396211712/F9fLaIAQ_400x400.jpg',
    badges: [],
  },
];

const FriendList: FriendList = {
  playing,
  online,
  offline,
};

const mock = [
  {
    username: 'datFranky',
    gametag: '0807',
    friendlist: FriendList,
  },
];

interface ProfileRequestProps {
  params: {
    gametag: string;
  };
}

export async function GET(_: Request, { params }: ProfileRequestProps) {
  const [username, gametag] = split(params.gametag, '-');
  const friendlistMock = mock.find(
    (user) =>
      user.username.toLocaleLowerCase() === username.toLocaleLowerCase() &&
      user.gametag.toLocaleLowerCase() === gametag.toLocaleLowerCase()
  ) || { playing: [], online: [], offline: [] };
  return NextResponse.json(friendlistMock);
}
