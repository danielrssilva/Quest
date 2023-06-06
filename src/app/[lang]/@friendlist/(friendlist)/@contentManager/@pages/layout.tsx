'use client';

import { useLandingFormContext } from '@/app/stores/landingForm';
import { useUserContext } from '@/app/stores/user';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface DefaultProps {
  params: { lang: string };
  login: ReactNode;
  register: ReactNode;
  landing: ReactNode;
  pendingProfile: ReactNode;
}

export default function UserManager(props: DefaultProps) {
  const { user } = useUserContext();
  const { page } = useLandingFormContext();

  return (
    <>
      {user?.isProfileComplete || !user ? props[page] : props.pendingProfile}
      <div className="absolute inset-x-0 bottom-8 flex w-full justify-between px-8">
        <Link
          href={'https://quest.com/privacy-policy'}
          className="text-sm text-external"
        >
          Privacy Policy
        </Link>
        <Link
          href={'https://quest.com/program-terms'}
          className="text-sm text-external"
        >
          Program Terms
        </Link>
      </div>
    </>
  );
}
