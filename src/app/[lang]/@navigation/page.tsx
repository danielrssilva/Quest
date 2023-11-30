'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { NavigationButton } from '@/app/ui/button';
import { ExploreIcon, FavoriteIcon, SettingsIcon } from '@/app/ui/icons';
import classNames from '@/app/utils/classNames';
import Link from 'next/link';
import { getCleanGameName } from '@/app/utils';
import Skeleton from './skeleton';
import { useUserContext } from '@/app/stores/user';

export interface NavigationProps {
  params: { lang: string };
}

export default function Navigation({ params }: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const [suggestions, setSuggestions] = useState<GameAndIcon[]>([]);
  const currentGame = pathname.slice(7).split('/')[0];
  const { user } = useUserContext();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/api/game/suggestions?user=${user?.id}`)
      .then((response) => response.json())
      .then((json) => {
        setSuggestions(json.suggestions);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [user?.id]);

  return (
    <nav className="fixed left-0 z-20 flex h-full w-20 flex-col items-center justify-between gap-4 overflow-x-visible bg-foreground p-4 shadow-[inset_-4px_0_5px_rgba(0,0,0,0.2)]">
      <div className="flex h-full w-full flex-col items-center gap-4 stroke-background">
        <div
          className={classNames(
            "has-dropdown before:opacity-1 group flex rounded-full transition before:absolute before:-left-3 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-r-lg before:bg-background before:transition before:content-[''] hover:bg-background",
            !currentGame.length || currentGame === 'explore'
              ? '-mr-4 justify-end'
              : 'justify-center before:-translate-x-1'
          )}
        >
          <Link
            href={
              user && user.isProfileComplete
                ? `/${params.lang}`
                : `/${params.lang}/explore`
            }
            className={classNames(
              'relative flex h-14 items-center fill-accent stroke-transparent hover:fill-accent',
              !currentGame.length || currentGame === 'explore'
                ? 'flex w-[4.5rem] items-center rounded-l-full bg-background fill-accent p-3 pr-0 before:absolute before:-top-4 before:left-[3.75rem] before:h-4 before:w-2 before:rounded-br-full before:bg-foreground before:shadow-[0_10px_0_rgba(247,246,244,1)] before:content-[""] after:absolute after:-bottom-4 after:left-[3.75rem] after:h-4 after:w-2 after:rounded-tr-full after:bg-foreground after:shadow-[0_-10px_0_rgba(247,246,244,1)] after:content-[""]'
                : 'w-14 justify-center rounded-full fill-background'
            )}
          >
            <svg
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classNames(
                'fill-inherit transition group-hover:animate-spin-slow',
                (!currentGame.length || currentGame === 'explore') &&
                  'animate-spin-slow'
              )}
            >
              <path d="M0 17.1154C0 9.53846 6.01905 2.30769 14.0952 2.30769C20.5333 2.30769 25.7143 6.76923 25.7143 13.4615C25.7143 17.4615 22.6286 21.9231 17.9048 21.9231C13.7143 21.9231 11.4286 19.2308 11.4286 15.9615C10.7429 15.9615 10.2857 17.1154 10.2857 18.2692C10.2857 21.4615 14.0571 24.8077 18.4762 24.8077C24.2667 24.8077 30.2857 19.4615 30.2857 11.5385C30.2857 6.61538 27.9238 2.5 25.9048 0C28.381 2.11538 32 6.30769 32 12.8846C32 20.4615 25.981 27.6923 17.9048 27.6923C11.4667 27.6923 6.28571 23.2308 6.28571 16.5385C6.28571 12.5385 9.37143 8.07692 14.0952 8.07692C18.2857 8.07692 20.5714 10.7692 20.5714 14.0385C21.2571 14.0385 21.7143 12.8846 21.7143 11.7308C21.7143 8.53846 17.9429 5.19231 13.5238 5.19231C7.73333 5.19231 1.71429 10.5385 1.71429 18.4615C1.71429 23.3846 4.07619 27.5 6.09524 30C3.61905 27.8846 0 23.6923 0 17.1154Z" />
            </svg>
          </Link>
        </div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <hr className="h-px w-5 rounded-sm bg-background" />
            {!!user?.favoriteGames.length && (
              <>
                <div className="stroke-background">
                  <FavoriteIcon />
                </div>
                <section className="flex flex-col gap-2">
                  {user.favoriteGames.map(({ id, icon, name }) => (
                    <NavigationButton
                      lang={params.lang}
                      game={name}
                      icon={icon}
                      key={`favorite-game-${id}`}
                      active={
                        getCleanGameName(currentGame) === getCleanGameName(name)
                      }
                    />
                  ))}
                </section>
              </>
            )}
            {!!suggestions.length && (
              <>
                {user?.id && <ExploreIcon />}
                <section className="flex flex-col gap-2">
                  {suggestions.map(({ id, icon, name }) => (
                    <NavigationButton
                      lang={params.lang}
                      game={name}
                      icon={icon}
                      key={`suggestion-game-${id}`}
                      active={
                        getCleanGameName(currentGame) === getCleanGameName(name)
                      }
                    />
                  ))}
                </section>
              </>
            )}
          </>
        )}
      </div>
      <section className="-stroke-background flex items-center justify-center p-4">
        <SettingsIcon />
      </section>
    </nav>
  );
}
