import { split } from 'lodash';
import { NextResponse } from 'next/server';

const usersWishlistMock: UserWishlist[] = [
  {
    username: 'datFranky',
    gametag: '0807',
    wishlist: [
      { id: 'wishlist1', name: 'Portal 3', icon: 'O' },
      { id: 'wishlist2', name: 'LoL 2', icon: 'L' },
      { id: 'wishlist3', name: 'Apex Legends', icon: 'A' },
    ],
  },
  {
    username: 'Hya',
    gametag: 'QUEEN',
    wishlist: [
      { id: 'wishlist1', name: 'Game 1', icon: '|' },
      { id: 'wishlist2', name: 'Game 2', icon: '/' },
      { id: 'wishlist3', name: 'Game 3', icon: '—' },
      { id: 'wishlist4', name: 'Game 4', icon: '\\' },
      { id: 'wishlist5', name: 'Game 5', icon: '|' },
      { id: 'wishlist6', name: 'Game 6', icon: '/' },
    ],
  },
];

interface ProfileRequestProps {
  params: {
    gametag: string;
  };
}

export async function GET(_: Request, { params }: ProfileRequestProps) {
  const [username, gametag] = split(params.gametag, '-');
  const userWishlistMock =
    usersWishlistMock.find(
      (user) =>
        user.username.toLocaleLowerCase() === username.toLocaleLowerCase() &&
        user.gametag.toLocaleLowerCase() === gametag.toLocaleLowerCase()
    ) || {};
  return NextResponse.json(userWishlistMock);
}
