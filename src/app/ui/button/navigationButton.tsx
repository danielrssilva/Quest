'use client';

import { classNames, getCleanGameName } from '@/app/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NewsIcon, StarIcon } from '../icons';
import { useTranslation } from '@/app/i18n/client';

interface NavigationButtonProps {
  active?: boolean;
  icon: ReactNode;
  game: string;
  lang: string;
}

export default function NavigationButton(props: NavigationButtonProps) {
  const { t } = useTranslation(props.lang, 'navigation');
  const { active, icon, game, lang } = props;
  const gameLink = `${lang}/${getCleanGameName(game)}`;

  return (
    <div
      className={classNames(
        "has-dropdown before:opacity-1 flex before:absolute before:-left-6 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-r-lg before:bg-background before:transition before:content-['']",
        active ? '-mr-6 justify-end' : 'justify-center before:-translate-x-1'
      )}
    >
      <button
        className={classNames(
          'relative flex h-8 items-center bg-background fill-accent transition hover:fill-accent hover:stroke-accent',
          active
            ? 'flex h-8 w-14 items-center rounded-l-full fill-accent stroke-accent p-2 transition before:absolute before:-top-4 before:left-12 before:h-4 before:w-2 before:rounded-br-full before:bg-foreground before:shadow-[0_10px_0_rgba(247,246,244,1)] before:content-[""] after:absolute after:-bottom-4 after:left-12 after:h-4 after:w-2 after:rounded-tr-full after:bg-foreground after:shadow-[0_-10px_0_rgba(247,246,244,1)] after:content-[""]'
            : 'w-8 justify-center rounded-full fill-foreground stroke-foreground'
        )}
        dangerouslySetInnerHTML={{ __html: icon || '' }}
      />
      <div
        className={classNames(
          'dropdown top-1/2 z-10 w-auto -translate-y-1/2 rounded-lg pl-2',
          active ? 'left-8' : 'left-8'
        )}
      >
        {/* shadow-[0_0_5px_rgba(116,9,134,0.2)] */}
        <div className="flex flex-col rounded-lg bg-white text-sm font-semibold uppercase">
          <Link
            href={`${gameLink}/logs/`}
            className="box-border flex h-8 w-auto items-center gap-2 rounded-lg p-2 text-accent transition hover:bg-accent-light"
          >
            <span className="h-4 w-4" /> <span>{t('logs')}</span>
          </Link>
          {/* <Link
            href={`${gameLink}/reviews/`}
            className="box-border flex h-8 w-auto items-center gap-2 rounded-lg p-2 text-accent transition hover:bg-accent-light"
          >
            <StarIcon />
            <span>{t('reviews')}</span>
          </Link> */}
          {/* <Link
            href={`${gameLink}/news/`}
            className="box-border flex h-8 w-auto items-center gap-2 rounded-lg p-2 text-accent transition hover:bg-accent-light"
          >
            <NewsIcon /> <span>{t('news')}</span>
          </Link> */}
          <Link
            href={`${gameLink}`}
            className="box-border flex h-8 w-auto items-center gap-2 rounded-lg p-2 text-accent transition hover:bg-accent-light"
          >
            <span
              className="flex h-4 w-4 items-center justify-center fill-accent stroke-accent"
              dangerouslySetInnerHTML={{ __html: icon || '' }}
            />
            <span className="whitespace-nowrap">{game}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
