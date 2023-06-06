import { useTranslation } from '@/app/i18n';
import IconButton, { LinkIcon } from '@/app/ui/button/iconButton';
import { FavoriteIcon, StarIcon } from '@/app/ui/icons';
import News from '@/app/ui/news/news';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import UnknownPage from '../404';
import { getCleanGameName } from '@/app/utils';
import Avatar from '@/app/ui/user/avatar';

interface GamePageProps {
  params: {
    lang: string;
    game: string;
  };
}

export async function generateMetadata({ params }: GamePageProps) {
  const game = await fetch(`http://localhost:3000/api/game/${params.game}`);
  const gameData = (await game.json()) as Game;
  return {
    title: gameData.id
      ? `${gameData.name} | Quest Beta`
      : '404 Game | Quest Beta',
  };
}

export const revalidate = 0;

export default async function GamePage(props: GamePageProps) {
  const { t } = await useTranslation(props.params.lang, 'game');
  const news = await fetch(
    `http://localhost:3000/api/game/${props.params.game}/news`
  );
  const game = await fetch(
    `http://localhost:3000/api/game/${props.params.game}`
  );
  const gameData = (await game.json()) as Game;
  const gameNews = (await news.json()) as News[];

  if (!gameData.id) {
    return <UnknownPage params={props.params} />;
  }

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col items-center">
        <div
          className="text-lg font-bold uppercase"
          dangerouslySetInnerHTML={{
            __html: gameData.icon,
          }}
        />
        <h1 className="text-lg font-bold uppercase">{gameData.name}</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold uppercase">{t('about')}</h1>
                <div className="stroke-accent">
                  <IconButton
                    size="md"
                    icon={
                      gameData.isFavorite ? (
                        <FavoriteIcon filled />
                      ) : (
                        <FavoriteIcon />
                      )
                    }
                  />
                </div>
              </div>

              <button className="uppercase text-accent">
                {gameData.isOnWishlist
                  ? 'Remove from wishlist'
                  : 'Add to wishlist'}
              </button>
            </div>
            <div className="flex gap-4">
              <div className="after:background-none object-fit relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
                <Image
                  src={gameData.boxart}
                  width={260}
                  height={146}
                  alt={`${props.params.game} box art`}
                  className="h-[9.125rem] w-[16.25rem] rounded-lg object-cover"
                />
              </div>
              <div className="flex gap-4 rounded-lg bg-white p-4">
                <p className="w-[24rem] text-justify text-xs">
                  {gameData.description.slice(0, 430)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="whitespace-nowrap text-lg font-bold uppercase">
              {t('related')}
            </h1>
            <div className="flex flex-col gap-4">
              {gameData.relatedGames?.map(({ id, name, slug, icon }) => (
                <Link
                  href={`${props.params.lang}/${slug}`}
                  key={`wishlist-${id}-${name}`}
                  className="flex w-[14rem] items-center gap-2 rounded-lg bg-white p-2 font-semibold text-accent focus:outline-accent"
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center"
                    dangerouslySetInnerHTML={{
                      __html: icon,
                    }}
                  />
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between ">
              <div className="flex items-baseline gap-2">
                <h1 className="whitespace-nowrap text-lg font-bold uppercase">
                  {t('news')}
                </h1>
                <IconButton
                  size="md"
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-accent group-hover:stroke-accent group-focus:stroke-accent group-active:stroke-accent"
                    >
                      <g clipPath="url(#clip0_120_3969)">
                        <path
                          d="M6.85693 15.1429H9.14265"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5715 6.57143C12.5715 5.35901 12.0899 4.19625 11.2326 3.33894C10.3752 2.48163 9.21249 2 8.00007 2C6.78765 2 5.62489 2.48163 4.76758 3.33894C3.91027 4.19625 3.42864 5.35901 3.42864 6.57143V10.5714C3.42864 11.0261 3.24803 11.4621 2.92654 11.7836C2.60505 12.1051 2.16901 12.2857 1.71436 12.2857H14.2858C13.8311 12.2857 13.3951 12.1051 13.0736 11.7836C12.7521 11.4621 12.5715 11.0261 12.5715 10.5714V6.57143Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.571289 6.42286C0.571905 5.33502 0.831328 4.26294 1.32813 3.29517C1.82493 2.3274 2.54485 1.49171 3.42843 0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4284 6.42286C15.4278 5.33502 15.1684 4.26294 14.6716 3.29517C14.1748 2.3274 13.4549 1.49171 12.5713 0.857143"
                          stroke="#740986"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  }
                />
              </div>
              <Link
                href={`/${props.params.lang}/${getCleanGameName(
                  props.params.game
                )}/news`}
                className="uppercase text-accent"
              >
                {t('view-all')}
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {gameNews.map((news, i) => (
                <News
                  inverted={i % 2 === 1}
                  lang={props.params.lang}
                  news={news}
                  key={news.id}
                  compact
                />
              ))}
              {!gameNews.length && (
                <div className="flex h-40 w-[27.75rem] items-center justify-center rounded-lg bg-white p-4">
                  There are no latest news for this game
                </div>
              )}
            </div>
            {/* <h1 className="whitespace-nowrap text-lg font-bold uppercase">
              {t('Logs')}
            </h1> */}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold uppercase">{t('other')}</h1>
            <div className="family-lato flex flex-col gap-4 rounded-lg bg-white p-4">
              <div className="grid grid-flow-col grid-rows-2 items-center gap-x-2 gap-y-4">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">{t('developer')}</h2>
                  <p className="text-ellipsis font-light">
                    {gameData.developer}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">{t('publisher')}</h2>
                  <p className="text-ellipsis font-light">
                    {gameData.publisher}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="whitespace-nowrap font-bold">{t('launch')}</h2>
                  <p className="whitespace-nowrap font-light">
                    {format(new Date(gameData.releaseDate), 'MMM dd, yyyy')}
                  </p>
                </div>
                <div className="col-start-1 row-start-2 flex flex-col gap-2">
                  <h2 className="font-bold">{t('platforms')}</h2>
                  <div className="flex gap-2">
                    {gameData.purchaseOptions.map(({ id, icon, link }) => (
                      <LinkIcon
                        href={`https://${link}`}
                        key={id}
                        icon={icon}
                        size="md"
                        target="_blank"
                      />
                    ))}
                  </div>
                </div>
                <div className="col-start-2 row-start-2 flex flex-col gap-2">
                  <h2 className="font-bold">{t('tags-genre')}</h2>
                  <div className="flex gap-2 text-accent">
                    {gameData.tags.map((tag) => (
                      <p className="text-ellipsis font-light" key={tag}>
                        {tag}
                      </p>
                    ))}
                    <hr className="h-4 w-px rounded-full bg-foreground" />
                    {gameData.genres.map(({ name }) => (
                      <p className="text-ellipsis font-light" key={name}>
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-lg font-bold uppercase">{t('suggested')}</h1>
            <div className="family-lato flex flex-col gap-4 rounded-lg bg-white p-4">
              <div className="flex justify-between">
                <Avatar avatar="https://placehold.co/42x42/ECDDFF/740986.png?font=montserrat&text=U" />
                <Avatar avatar="https://placehold.co/42x42/ECDDFF/740986.png?font=montserrat&text=D" />
                <Avatar avatar="https://placehold.co/42x42/ECDDFF/740986.png?font=montserrat&text=E" />
                <Avatar avatar="https://placehold.co/42x42/ECDDFF/740986.png?font=montserrat&text=Q" />
                <Avatar avatar="https://placehold.co/42x42/ECDDFF/740986.png?font=montserrat&text=S" />
                <div className="family-lato flex items-center text-foreground-light">
                  <IconButton
                    size="md"
                    icon={<StarIcon />}
                    sufix={`${gameData.reviewRating}/5`}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-lg font-bold uppercase">{t('media')}</h1>
            <div className="grid grid-flow-row grid-cols-2 gap-4">
              {gameData.mediaGallery.map(({ id, url, type }) => (
                <div
                  key={id}
                  className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']"
                >
                  {(type === 'image' || type === 'gif') && (
                    <Image
                      width={200}
                      height={120}
                      src={url}
                      alt="game media"
                      className="rounded-lg object-cover"
                    />
                  )}
                  {type === 'video' && (
                    <video
                      width={200}
                      height={120}
                      controls
                      className="rounded-lg"
                    >
                      <source src={url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
