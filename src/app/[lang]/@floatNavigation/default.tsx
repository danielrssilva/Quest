'use client';

import { useTranslation } from '@/app/i18n/client';
import { useInboxContext } from '@/app/stores/inbox';
import { useUserContext } from '@/app/stores/user';
import { InboxIcon, MenuIcon } from '@/app/ui/icons';
import classNames from '@/app/utils/classNames';
import Link from 'next/link';
import { useState } from 'react';

interface FloatNavigationProps {
  params: { lang: string };
}

export default function FloatNavigation({ params }: FloatNavigationProps) {
  const { t } = useTranslation(params.lang, 'navigation');
  const { toggleOpen } = useInboxContext();
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = params;
  return (
    user?.isProfileComplete && (
      <div className="fixed bottom-5 left-24 z-10 flex h-10 items-center gap-2">
        <button
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-foreground stroke-background shadow-[0_4px_4px_rgba(0,0,0,0.2)]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_436_957)">
                <path
                  d="M16.1607 1.34863L1.30353 16.2058"
                  stroke="#F7F6F4"
                  strokeWidth="1.14286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.30353 1.34863L16.1607 16.2058"
                  stroke="#F7F6F4"
                  strokeWidth="1.14286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : (
            <MenuIcon />
          )}
        </button>
        <nav
          className={classNames(
            'flex h-10 items-center gap-2 rounded-full bg-foreground p-2 shadow-[0_4px_4px_rgba(0,0,0,0.2)] transition',
            isOpen ? 'visible' : 'hidden'
          )}
        >
          <button
            className="flex h-full cursor-pointer items-center gap-1 rounded-full bg-background p-2 text-xs text-accent"
            onClick={() => {
              toggleOpen();
              setIsOpen(false);
            }}
          >
            <InboxIcon /> {t('inbox')}
          </button>
          <Link
            href={`${lang}/new-log`}
            className="flex h-full items-center rounded-full bg-background p-2 text-xs text-accent"
            onClick={() => setIsOpen(false)}
          >
            {t('new-log')}
          </Link>
          {/* <Link
          href={`${lang}/explore`}
          className="flex h-full items-center rounded-full bg-background p-2 text-xs text-accent"
        >
          Explore
        </Link> */}
        </nav>
      </div>
    )
  );
}
