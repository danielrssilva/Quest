'use client';

import Image from 'next/image';
import { useUserContext } from '@/app/stores/user';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import UserStatus from '@/app/ui/user/userStatus';
import { useFriendListContext } from '@/app/stores/friendlist';
import { useEffect } from 'react';
import IconButton from '@/app/ui/button/iconButton';

interface CurrentUserProps {
  params: { lang: string };
}

export default function CurrentUser({ params }: CurrentUserProps) {
  const { t } = useTranslation(params.lang, 'friendlist');
  const { lang } = params;
  const { user, setUser } = useUserContext();
  const { clearList } = useFriendListContext();

  useEffect(() => {
    if (!user) {
      clearList();
      return;
    }
  }, [user, clearList]);

  return (
    <div className="box-border flex w-full items-center bg-foreground p-4">
      <div className="relative box-border flex w-full items-center justify-center">
        <div className="has-dropdown relative flex w-full items-center justify-center">
          <div className="relative isolate">
            <div className="z-10 h-full w-full rounded-full border border-solid border-background p-1">
              <div className="h-11 w-11 rounded-full bg-[#4E444F]">
                <Image
                  src={user?.avatar || ''}
                  alt="user avatar"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
              </div>
            </div>
            <svg
              width="56"
              height="52"
              viewBox="0 0 56 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 -z-10 h-full w-full"
            >
              <path
                d="M0 29.6667C0 16.5333 10.5333 4 24.6667 4C35.9333 4 45 11.7333 45 23.3333C45 30.2667 39.6 38 31.3333 38C24 38 20 33.3333 20 27.6667C18.8 27.6667 18 29.6667 18 31.6667C18 37.2 24.6 43 32.3333 43C42.4667 43 53 33.7333 53 20C53 11.4667 48.8667 4.33333 45.3333 0C49.6667 3.66667 56 10.9333 56 22.3333C56 35.4667 45.4667 48 31.3333 48C20.0667 48 11 40.2667 11 28.6667C11 21.7333 16.4 14 24.6667 14C32 14 36 18.6667 36 24.3333C37.2 24.3333 38 22.3333 38 20.3333C38 14.8 31.4 9 23.6667 9C13.5333 9 3 18.2667 3 32C3 40.5333 7.13333 47.6667 10.6667 52C6.33333 48.3333 0 41.0667 0 29.6667Z"
                fill="#4E444F"
              />
            </svg>
          </div>
          <div className="flex w-full justify-between">
            <div className="ml-4 flex flex-col gap-2">
              <div className="relative text-background">
                <span className="font-normal">{user?.username}</span>
                {user?.badges && (
                  <span
                    className="absolute -right-3 -top-2 h-4 w-4 text-xs"
                    dangerouslySetInnerHTML={{ __html: user.badges[0].icon }}
                  />
                )}
              </div>
              <UserStatus t={t} lang={lang} status={user?.status || 'online'} />
            </div>
            <div className="flex flex-col gap-2">
              <IconButton
                size="md"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#6E696F] transition group-hover:stroke-accent"
                  >
                    <g clipPath="url(#clip0_401_3326)">
                      <path
                        d="M7.99998 0.571411C9.3003 0.571411 10.5474 1.08796 11.4668 2.00742C12.3863 2.92689 12.9028 4.17395 12.9028 5.47427C12.9028 10.9257 14.8914 12 15.4286 12H0.571411C1.11998 12 3.09713 10.9143 3.09713 5.47427C3.09713 4.17395 3.61368 2.92689 4.53314 2.00742C5.4526 1.08796 6.69966 0.571411 7.99998 0.571411Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.28564 14.0914C6.38443 14.4709 6.60633 14.8069 6.91656 15.0467C7.22679 15.2865 7.60782 15.4166 7.99993 15.4166C8.39204 15.4166 8.77307 15.2865 9.0833 15.0467C9.39353 14.8069 9.61543 14.4709 9.71422 14.0914"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                }
              />
              <IconButton
                size="md"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-background transition group-hover:stroke-accent group-focus:stroke-accent group-active:stroke-accent"
                  >
                    <g clipPath="url(#clip0_401_3310)">
                      <path
                        d="M5.97709 2.57141L6.46851 1.30284C6.55139 1.08806 6.69721 0.903309 6.88686 0.772797C7.07651 0.642284 7.30115 0.572091 7.53137 0.571411H8.46851C8.69873 0.572091 8.92338 0.642284 9.11303 0.772797C9.30268 0.903309 9.44849 1.08806 9.53137 1.30284L10.0228 2.57141L11.6914 3.53141L13.0399 3.3257C13.2645 3.29522 13.493 3.33218 13.6965 3.43189C13.9 3.53161 14.0693 3.68957 14.1828 3.8857L14.6399 4.6857C14.7571 4.88495 14.8111 5.11505 14.7947 5.34561C14.7784 5.57617 14.6926 5.79636 14.5485 5.97713L13.7142 7.03998V8.95998L14.5714 10.0228C14.7154 10.2036 14.8013 10.4238 14.8176 10.6544C14.8339 10.8849 14.7799 11.115 14.6628 11.3143L14.2057 12.1143C14.0921 12.3104 13.9229 12.4684 13.7194 12.5681C13.5159 12.6678 13.2874 12.7047 13.0628 12.6743L11.7142 12.4686L10.0457 13.4286L9.55423 14.6971C9.47135 14.9119 9.32554 15.0967 9.13589 15.2272C8.94624 15.3577 8.72159 15.4279 8.49137 15.4286H7.53137C7.30115 15.4279 7.07651 15.3577 6.88686 15.2272C6.69721 15.0967 6.55139 14.9119 6.46851 14.6971L5.97709 13.4286L4.30851 12.4686L2.95994 12.6743C2.73539 12.7047 2.50685 12.6678 2.30335 12.5681C2.09986 12.4684 1.9306 12.3104 1.81709 12.1143L1.35994 11.3143C1.2428 11.115 1.18883 10.8849 1.20515 10.6544C1.22148 10.4238 1.30733 10.2036 1.45137 10.0228L2.28566 8.95998V7.03998L1.42851 5.97713C1.28447 5.79636 1.19862 5.57617 1.1823 5.34561C1.16597 5.11505 1.21994 4.88495 1.33709 4.6857L1.79423 3.8857C1.90774 3.68957 2.077 3.53161 2.28049 3.43189C2.48399 3.33218 2.71253 3.29522 2.93709 3.3257L4.28566 3.53141L5.97709 2.57141ZM5.71423 7.99998C5.71423 8.45205 5.84828 8.89397 6.09944 9.26986C6.3506 9.64574 6.70758 9.93871 7.12524 10.1117C7.5429 10.2847 8.00248 10.33 8.44586 10.2418C8.88925 10.1536 9.29652 9.93589 9.61619 9.61623C9.93585 9.29656 10.1535 8.88929 10.2417 8.4459C10.3299 8.00252 10.2847 7.54294 10.1117 7.12528C9.93867 6.70762 9.6457 6.35064 9.26982 6.09948C8.89393 5.84832 8.45202 5.71427 7.99994 5.71427C7.39373 5.71427 6.81235 5.95508 6.3837 6.38374C5.95504 6.81239 5.71423 7.39377 5.71423 7.99998Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                }
              />
            </div>
          </div>

          <div className="dropdown absolute right-64 top-0 z-20">
            <div className="flex flex-col rounded-lg bg-white shadow-lg">
              <div className="flex items-baseline justify-between gap-12 px-4 pb-2 pt-4">
                <div className="relative flex items-baseline gap-1 text-lg">
                  <span className="relative">
                    {user?.username}
                    {user?.badges && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: user.badges[0].icon,
                        }}
                        className="absolute -right-3 -top-2"
                      />
                    )}
                  </span>
                  <span className="text-xs text-foreground-light">
                    #{user?.gametag}
                  </span>
                </div>
                <Link
                  className="uppercase text-accent"
                  href={`/${lang}/explore`}
                  onClick={() => setUser(null)}
                >
                  {t('account.logout')}
                </Link>
              </div>
              <Link
                href={`/${lang}/profile/me`}
                className="rounded-lg px-4 py-2 text-start uppercase text-accent transition hover:bg-accent-light"
              >
                {t('account.profile')}
              </Link>
              <button className="rounded-lg px-4 py-2 text-start uppercase text-accent transition hover:bg-accent-light">
                {t('account.manage-subscription')}
              </button>
              <button className="rounded-lg px-4 py-2 text-start uppercase text-accent transition hover:bg-accent-light">
                {t('account.settings')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
