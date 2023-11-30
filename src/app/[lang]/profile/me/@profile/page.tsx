'use client';

import Card from '@/app/ui/card';
import Tag from '@/app/ui/tag';
import Image from 'next/image';
import { Fragment } from 'react';
import { MouseIcon, CellphoneIcon, ControllerIcon } from '@/app/ui/icons';
import Button from '@/app/ui/button';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import { classNames } from '@/app/utils';
import { LinkIcon } from '@/app/ui/button/iconButton';

interface ProfileProps extends Params {
  params: {
    lang: string;
    gametag: string;
  };
}

export default function Profile({ params }: ProfileProps) {
  const { user } = useUserContext();
  const { t } = useTranslation(params.lang, 'profile');

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('profile')}</h1>
      <Card>
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            {user?.social.map((url, i) => (
              <Fragment key={`social-${url}-${i}`}>
                {url !== 'ADD' && (
                  <LinkIcon
                    size="md"
                    icon={
                      <div className="flex h-4 w-4 items-center justify-center fill-accent stroke-accent text-accent">
                        O
                      </div>
                    }
                    href={`${url}`}
                  />
                )}
              </Fragment>
            ))}
            {/* <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link>
            <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link>
            <Link href="https://discord.com">
              <div className="h-4 w-4 rounded-lg bg-accent-light" />
            </Link> */}
          </div>
          <div className="relative box-border flex h-44 w-44 items-center justify-center">
            <div className="z-10 h-full w-full rounded-full border border-solid border-accent  p-3">
              <div className="h-full w-full rounded-full bg-accent-light">
                <Image
                  src={user?.avatar || ''}
                  alt="user avatar"
                  width={150}
                  height={150}
                  className="h-[9.375rem] w-[9.375rem] rounded-full object-cover"
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
                  {user?.username}#
                  <span className="uppercase">{user?.gametag}</span>
                  {user?.badges && (
                    <div className="absolute -right-3 -top-2 flex flex-col">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: user.badges[0].icon,
                        }}
                      />
                      <div className="has-dropdown -mt-3 h-3 w-3">
                        <div className="dropdown top-2 flex w-60 flex-col gap-2">
                          {user.badges.map((badge, i) => (
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
              </div>

              <div className="flex gap-2 stroke-accent">
                <div
                  className={classNames(
                    user?.platforms?.pc ? 'stroke-accent' : 'stroke-gray-200'
                  )}
                >
                  <MouseIcon />
                </div>
                <div
                  className={classNames(
                    user?.platforms?.console
                      ? 'stroke-accent'
                      : 'stroke-gray-200'
                  )}
                >
                  <ControllerIcon />
                </div>
                <div
                  className={classNames(
                    user?.platforms?.mobile
                      ? 'stroke-accent'
                      : 'stroke-gray-200'
                  )}
                >
                  <CellphoneIcon />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="h-24 w-96 text-justify">{user?.description}</p>
              <div className="flex flex-col items-center gap-2">
                <Button size="lg" iconButton>
                  {user?.friendsCount}
                </Button>
                <Button iconButton>{user?.followersCount}</Button>
              </div>
            </div>
            <div className="flex justify-between">
              {user?.tags?.map((tag: string) => (
                <Tag key={tag}>{t(`tags.${tag}`)}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
