'use client';

import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import IconButton from '@/app/ui/button/iconButton';
import { FavoriteIcon } from '@/app/ui/icons';
import { getCleanGameName } from '@/app/utils';
import Link from 'next/link';

interface ManageAccounts {
  params: {
    lang: string;
    gametag: string;
  };
}

export default function EditProfile({ params }: ManageAccounts) {
  const { t } = useTranslation(params.lang, 'profile');
  const { user, addFavoriteGame, removeFavoriteGame } = useUserContext();

  return (
    <div className="flex w-[55.35rem] flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold uppercase">{t('game-library')}</h1>
        <button className="uppercase text-accent">{t('manage')}</button>
      </div>
      {user?.gameLibrary.map(({ genre, games }) => (
        <div key={genre} className="flex flex-col gap-2">
          <h1 className="text-lg font-bold uppercase">{t(`${genre}`)}</h1>
          <div className="flex gap-4 overflow-x-auto">
            {games.map((game) => (
              <div
                className="flex w-[16.5rem] flex-col gap-4 rounded-lg bg-white p-4"
                key={`game-library-${game.id}`}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={`/${params.lang}/${getCleanGameName(game.name)}`}
                    className="flex items-center gap-2"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: game.icon }}
                      className="fill-accent stroke-accent"
                    />
                    <h1 className="font-semibold text-accent">{game.name}</h1>
                  </Link>
                  <IconButton
                    size="md"
                    onClick={() => {
                      !!user.favoriteGames.find(({ id }) => id === game.id)
                        ? removeFavoriteGame(game)
                        : addFavoriteGame(game);
                    }}
                    icon={
                      <FavoriteIcon
                        filled={
                          !!user.favoriteGames.find(({ id }) => id === game.id)
                        }
                      />
                    }
                  />
                </div>
                <div className="flex flex-col">
                  {Object.entries(game.playerInfo).map(([key, value]) => (
                    <div
                      className="flex justify-between"
                      key={`game-library-${game.id}-${key}`}
                    >
                      <p className="text-sm font-semibold">
                        {t(`game-info.${key}`)}
                      </p>
                      <p className="text-sm text-foreground-light">{`${value}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
