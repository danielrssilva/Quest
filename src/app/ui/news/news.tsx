'use client';

import Image from 'next/image';
import Link from 'next/link';
import { classNames, getUserGametag } from '@/app/utils';
import { useTranslation } from '@/app/i18n/client';

interface NewsProps {
  news: News;
  lang: string;
  inverted?: boolean;
  gameName?: boolean;
  compact?: boolean;
}

export default function News(props: NewsProps) {
  const { t } = useTranslation(props.lang, 'news');
  const { news, lang, inverted, gameName, compact } = props;
  const { id, title, game, icon, summary, image } = news;

  return (
    <div className="w-full">
      <div
        className={classNames(
          "relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)]  after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:bg-none after:content-['']",
          compact ? 'w-[27.75rem]' : 'w-[39.3125rem]'
        )}
      >
        <div
          className={classNames(
            'flex grow gap-2',
            inverted && 'flex-row-reverse'
          )}
        >
          <Image
            src={image}
            width={compact ? 120 : 192}
            height={compact ? 160 : 256}
            className="rounded-lg"
            alt="game image"
          />
          <div
            className={classNames(
              'flex grow flex-col gap-2 rounded-lg bg-white p-4',
              inverted ? 'pl-5' : 'pr-5'
            )}
          >
            <div className="flex h-full w-full flex-col gap-2">
              {gameName && !compact && (
                <Link
                  href={`/${lang}/${game}/`}
                  className="flex flex h-5 items-center items-center gap-1 text-accent"
                >
                  <span dangerouslySetInnerHTML={{ __html: icon }} />
                  <p>{game}</p>
                </Link>
              )}
              <h1 className="font-medium">{title}</h1>
              <div
                className={classNames(
                  'w-full text-ellipsis text-justify text-xs text-foreground-light',
                  compact && 'line-clamp-5'
                )}
              >
                {summary}
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <p className="text-foreground-light">
                {t('posted')}{' '}
                <Link
                  href={`/${lang}/profile/${getUserGametag(
                    news.author.username,
                    news.author.gametag
                  )}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {`${news.author.username}`}
                </Link>
              </p>
              <Link
                href={`/${lang}/${game.replace(/\s/g, '-')}/news/${id}`}
                className="whitespace-nowrap uppercase text-accent"
              >
                {t('view')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SleletonNewsProps {
  inverted?: boolean;
  gameName?: boolean;
  compact?: boolean;
}
export function SkeletonNews(props: SleletonNewsProps) {
  const { inverted, gameName, compact } = props;
  return (
    <div className="w-full">
      <div
        className={classNames(
          "after:background-none relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-200 after:content-['']",
          compact ? 'w-[27.75rem]' : 'w-[39.3125rem]'
        )}
      >
        <div
          className={classNames(
            'flex grow gap-2',
            inverted && 'flex-row-reverse'
          )}
        >
          <div
            className={classNames(
              'animate-pulse rounded-lg bg-gray-200',
              compact ? ' h-50 w-[7.5rem]' : 'h-64 w-48'
            )}
          />
          <div
            className={classNames(
              'flex grow flex-col gap-2 rounded-lg bg-white p-4',
              inverted ? 'pl-5' : 'pr-5'
            )}
          >
            <div className="grow-1 flex h-full flex-col gap-2">
              {gameName && !compact && (
                <div className="flex flex h-4 items-center items-center gap-1 text-accent">
                  <span className="h-4 w-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded-lg bg-gray-100" />
                </div>
              )}
              <div className="h-7 w-full animate-pulse rounded-lg bg-gray-200" />
              <div className="flex w-full flex-col gap-1">
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                {!compact && (
                  <>
                    <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                    <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                    <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                    <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                  </>
                )}
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-5">
              <div className="h-5 w-full animate-pulse rounded-lg bg-gray-200" />
              <div className="h-5 w-full animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
