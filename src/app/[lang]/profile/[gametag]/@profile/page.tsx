import Card from '@/app/ui/card';
import Tag from '@/app/ui/tag';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { MouseIcon, CellphoneIcon, ControllerIcon } from '@/app/ui/icons';
import Button from '@/app/ui/button';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useTranslation } from '@/app/i18n';

interface ProfileProps extends Params {
  params: {
    lang: string;
    gametag: string;
  };
}

export default async function Profile({ params }: ProfileProps) {
  const { t } = await useTranslation(params.lang, 'profile');
  const response = await fetch(
    `http://localhost:3000/api/user/${params.gametag}`,
    { next: { revalidate: 0 } }
  );

  const user = (await response.json()) as Profile;
  const { avatar, username, nickname, gametag } = user;
  const { badges, description, platforms, tags, friendsCount, followersCount } =
    user;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('profile')}</h1>
      <Card>
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link>
            <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link>
            <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link>
          </div>
          <div className="relative box-border flex h-44 w-44 items-center justify-center">
            <div className="z-10 h-full w-full rounded-full border border-solid border-accent  p-3">
              <div className="h-full w-full rounded-full bg-accent-light">
                <Image
                  src={avatar}
                  alt="user avatar"
                  width={152}
                  height={152}
                  className="rounded-full"
                />
              </div>
            </div>
            <svg
              width="178"
              height="166"
              viewBox="0 0 178 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-full w-full animate-spin-slowest"
            >
              <path
                d="M0 94.7051C0 52.7795 33.4809 12.7692 78.4048 12.7692C114.217 12.7692 143.036 37.4564 143.036 74.4872C143.036 96.6205 125.871 121.308 99.5952 121.308C76.2857 121.308 63.5714 106.41 63.5714 88.3205C59.7571 88.3205 57.2143 94.7051 57.2143 101.09C57.2143 118.754 78.1929 137.269 102.774 137.269C134.983 137.269 168.464 107.687 168.464 63.8462C168.464 36.6051 155.326 13.8333 144.095 0C157.869 11.7051 178 34.9026 178 71.2949C178 113.221 144.519 153.231 99.5952 153.231C63.7833 153.231 34.9643 128.544 34.9643 91.5128C34.9643 69.3795 52.1286 44.6923 78.4048 44.6923C101.714 44.6923 114.429 59.5897 114.429 77.6795C118.243 77.6795 120.786 71.2949 120.786 64.9103C120.786 47.2462 99.8071 28.7308 75.2262 28.7308C43.0167 28.7308 9.53571 58.3128 9.53571 102.154C9.53571 129.395 22.6738 152.167 33.9048 166C20.131 154.295 0 131.097 0 94.7051Z"
                className="fill-accent-light"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative text-lg font-bold">
                  {username}#<span className="uppercase">{gametag}</span>
                  {badges && (
                    <div className="absolute -right-3 -top-2 flex flex-col">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: badges[0].icon,
                        }}
                      />
                      <div className="has-dropdown -mt-3 h-3 w-3">
                        <div className="dropdown top-2 flex w-60 flex-col gap-2">
                          {badges.map((badge, i) => (
                            <div
                              key={`badge-${badge}-${i}`}
                              className="flex w-full gap-2 rounded-lg bg-white p-2 shadow-lg"
                            >
                              <div
                                dangerouslySetInnerHTML={{ __html: badge.icon }}
                                className="pt-1"
                              />
                              <div>
                                <p className="text-sm font-bold">
                                  {badge.name}
                                </p>
                                <p className="text-xs font-normal">
                                  {badge.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {nickname && (
                  <span className="text-secondary ml-2 text-sm font-light">
                    ({nickname})
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                {platforms?.pc && <MouseIcon />}
                {platforms?.console && <ControllerIcon />}
                {platforms?.mobile && <CellphoneIcon />}
              </div>
            </div>
            <div className="flex gap-4">
              <p className="h-24 w-96 text-justify">{description}</p>
              <div className="flex flex-col items-center gap-2">
                <Button size="lg" iconButton>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_98_1557)">
                      <path
                        d="M8.5715 8.5714C10.7017 8.5714 12.4286 6.8445 12.4286 4.71426C12.4286 2.58402 10.7017 0.857117 8.5715 0.857117C6.44126 0.857117 4.71436 2.58402 4.71436 4.71426C4.71436 6.8445 6.44126 8.5714 8.5715 8.5714Z"
                        className="stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.71432 21.4285H0.857178V18.8571C0.870824 17.5505 1.21542 16.2686 1.85879 15.1312C2.50215 13.9939 3.42329 13.0382 4.53616 12.3533C5.64903 11.6685 6.91733 11.2769 8.22258 11.2151C9.52783 11.1533 10.8274 11.4233 12 12"
                        className="stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 12.8571V23.1428"
                        className="stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.8572 18H23.1429"
                        className="stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_1557">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
                <div>
                  <Button iconButton>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_118_2680)">
                        <path
                          d="M6.00002 10.6714L1.2686 6.38572C-1.30283 3.81429 2.47717 -1.12285 6.00002 2.87144C9.52288 -1.12285 13.2857 3.83144 10.7315 6.38572L6.00002 10.6714Z"
                          className="stroke-accent"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_118_2680">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {tags?.map((tag: string) => (
                <Fragment key={tag}>
                  <Tag>{t(`tags.${tag}`)}</Tag>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
