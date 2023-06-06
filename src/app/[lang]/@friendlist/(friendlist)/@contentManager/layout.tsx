'use client';

import { useUserContext } from '@/app/stores/user';
import { ReactNode } from 'react';

export interface DefaultProps {
  params: { lang: string };
  pages: ReactNode;
  friendList: ReactNode;
}

export default function UserManager(props: DefaultProps) {
  const { pages, friendList } = props;
  const { user } = useUserContext();

  return user?.isProfileComplete ? friendList : pages;
}
