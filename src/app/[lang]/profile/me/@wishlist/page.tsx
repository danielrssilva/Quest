'use client';

import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import { take } from 'lodash';
import Link from 'next/link';

export interface WishListProps {
  params: {
    lang: string;
    gametag: string;
  };
}

export default function Wishlist({ params }: WishListProps) {
  const { user } = useUserContext();
  const { t } = useTranslation(params.lang, 'profile');

  const wishlist = user?.wishlist || [];
  const games = take(wishlist, wishlist.length > 4 ? 3 : 4);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('wishlist')}</h1>
      <div className="flex flex-col gap-4">
        {games?.map(({ id, name, icon }) => (
          <Link
            href={`${params.lang}/${name.replace(/\s/g, '-')}`}
            key={`wishlist-${id}-${name}`}
            className="flex w-[8.6525rem] items-center gap-2 rounded-lg bg-white p-2 font-semibold text-accent"
          >
            <div
              className="flex h-6 w-6 items-center justify-center"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {name}
            </p>
          </Link>
        ))}
        <div className="flex h-10 w-[8.6525rem] items-center justify-center rounded-lg bg-white text-lg text-accent">
          Manage
        </div>
      </div>
    </div>
  );
}
