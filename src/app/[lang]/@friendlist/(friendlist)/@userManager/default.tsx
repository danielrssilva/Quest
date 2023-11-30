'use client';

import { useUserContext } from '@/app/stores/user';
import { ReactNode } from 'react';

export interface DefaultProps {
  params: { lang: string };
  currentUser: ReactNode;
  noUser: ReactNode;
}

export default function UserManager(props: DefaultProps) {
  const { user } = useUserContext();

  return (
    <>{user && user.isProfileComplete ? props.currentUser : props.noUser}</>
  );
}
