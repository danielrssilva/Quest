import { useTranslation } from '@/app/i18n';
import { take } from 'lodash';
import Link from 'next/link';

export interface WishListProps {
  params: {
    lang: string;
    gametag: string;
  };
}

export default async function Wishlist({ params }: WishListProps) {
  const { t } = await useTranslation(params.lang, 'profile');
  const response = await fetch(
    `http://localhost:3000/api/user/${params.gametag}/wishlist`,
    { next: { revalidate: 0 } }
  );
  const { wishlist = [] } = (await response.json()) as UserWishlist;
  const games = take(wishlist, wishlist.length > 4 ? 3 : 4);
  const rest = wishlist.length - 3;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('wishlist')}</h1>
      {games.length === 0 && (
        <div className="flex h-10 w-[8.6525rem] items-center justify-center gap-2 rounded-lg text-lg uppercase text-accent" />
      )}
      <div className="flex flex-col gap-4">
        {games?.map(({ id, name, icon }) => (
          <Link
            href={`${params.lang}/${name.replace(/\s/g, '-')}`}
            key={`wishlist-${id}-${name}`}
            className="flex w-[8.6525rem] items-center gap-2 rounded-lg bg-white p-2 font-semibold text-accent focus:outline-accent"
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
        {rest > 1 && (
          <div className="flex h-10 w-[8.6525rem] items-center justify-center gap-2 rounded-lg	bg-white text-lg uppercase text-accent">
            {rest} + {t('more')}
          </div>
        )}
      </div>
    </div>
  );
}
