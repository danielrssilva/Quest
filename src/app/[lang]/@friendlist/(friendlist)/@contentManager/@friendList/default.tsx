'use client';

import { useTranslation } from '@/app/i18n/client';
import { useFriendListContext } from '@/app/stores/friendlist';
import { useUserContext } from '@/app/stores/user';
import IconButton from '@/app/ui/button/iconButton';
import Loading from '@/app/ui/loading/loading';
import User from '@/app/ui/user/user';
import { classNames } from '@/app/utils';
import { useEffect, useState } from 'react';

interface FriendListProps {
  params: { lang: string };
}

export default function FriendList(props: FriendListProps) {
  const { t } = useTranslation(props.params.lang, 'friendlist');
  const { user } = useUserContext();
  const { list, updateList } = useFriendListContext();
  const [isPlayingOpen, setIsPlayingOpen] = useState(true);
  const [isOnlineOpen, setIsOnlineOpen] = useState(true);
  const [isOfflineOpen, setIsOfflineOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:3000/api/friendlist/${user?.username}-${user?.gametag}`
    )
      .then((response) => response.json())
      .then((json) => {
        updateList(json.friendlist);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, [user, updateList]);

  if (!user) return null;
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col gap-2 overflow-x-auto px-4 pb-40">
      <div className="flex items-center justify-between py-4">
        <div className="textLg font-semibold">{t('friends')}</div>
        <div className="flex gap-2">
          <IconButton
            size="md"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-foreground transition group-hover:stroke-accent"
              >
                <g clipPath="url(#clip0_401_3304)">
                  <path
                    d="M5.71425 5.71427C7.13441 5.71427 8.28568 4.563 8.28568 3.14284C8.28568 1.72268 7.13441 0.571411 5.71425 0.571411C4.29409 0.571411 3.14282 1.72268 3.14282 3.14284C3.14282 4.563 4.29409 5.71427 5.71425 5.71427Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.14284 14.2857H0.571411V12.5714C0.580509 11.7003 0.810242 10.8457 1.23915 10.0875C1.66806 9.32926 2.28215 8.69211 3.02407 8.23554C3.76598 7.77898 4.61151 7.51791 5.48168 7.47671C6.35184 7.43552 7.21825 7.61555 7.99998 7.99998"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8.57141V15.4286"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.57141 12H15.4286"
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
                className="stroke-foreground stroke-1 transition group-hover:stroke-accent"
              >
                <g clipPath="url(#clip0_401_3320)">
                  <path
                    d="M6.7657 12.96C10.1867 12.96 12.96 10.1867 12.96 6.7657C12.96 3.34469 10.1867 0.571411 6.7657 0.571411C3.34469 0.571411 0.571411 3.34469 0.571411 6.7657C0.571411 10.1867 3.34469 12.96 6.7657 12.96Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4285 15.4285L11.1428 11.1428"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
          />
        </div>
      </div>
      <section className="flex flex-col gap-2">
        <div
          className="mb-2 flex cursor-pointer items-center gap-2"
          onClick={() => {
            setIsPlayingOpen((prev) => !prev);
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              'transition',
              isPlayingOpen ? 'rotate-90' : ''
            )}
          >
            <path
              d="M4.3999 0.571411L11.4285 7.59998C11.4831 7.65129 11.5267 7.71325 11.5565 7.78205C11.5863 7.85084 11.6016 7.92502 11.6016 7.99998C11.6016 8.07495 11.5863 8.14912 11.5565 8.21792C11.5267 8.28672 11.4831 8.34868 11.4285 8.39998L4.3999 15.4286"
              strokeWidth="1.14286"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-400"
            />
          </svg>
          <div className="font-medium text-zinc-400">{t('playing')}</div>
        </div>
        <div
          className={classNames(
            'flex flex-col gap-4',
            !isPlayingOpen && 'hidden'
          )}
        >
          {list?.playing.map((user) => (
            <div key={user.id}>
              <User user={user} lang={props.params.lang} />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div
          className="mb-2 flex cursor-pointer items-center gap-2"
          onClick={() => {
            setIsOnlineOpen((prev) => !prev);
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              'transition',
              isOnlineOpen ? 'rotate-90' : ''
            )}
          >
            <path
              d="M4.3999 0.571411L11.4285 7.59998C11.4831 7.65129 11.5267 7.71325 11.5565 7.78205C11.5863 7.85084 11.6016 7.92502 11.6016 7.99998C11.6016 8.07495 11.5863 8.14912 11.5565 8.21792C11.5267 8.28672 11.4831 8.34868 11.4285 8.39998L4.3999 15.4286"
              strokeWidth="1.14286"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-zinc-400"
            />
          </svg>
          <p className="font-medium text-zinc-400">{t('online')}</p>
        </div>
        <div
          className={classNames(
            'flex flex-col gap-4',
            !isOnlineOpen && 'hidden'
          )}
        >
          {list?.online.map((user) => (
            <div key={user.id}>
              <User user={user} lang={props.params.lang} />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div
          className="mb-2 flex cursor-pointer items-center gap-2"
          onClick={() => {
            setIsOfflineOpen((prev) => !prev);
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              'transition',
              isOfflineOpen ? 'rotate-90' : ''
            )}
          >
            <path
              d="M4.3999 0.571411L11.4285 7.59998C11.4831 7.65129 11.5267 7.71325 11.5565 7.78205C11.5863 7.85084 11.6016 7.92502 11.6016 7.99998C11.6016 8.07495 11.5863 8.14912 11.5565 8.21792C11.5267 8.28672 11.4831 8.34868 11.4285 8.39998L4.3999 15.4286"
              strokeWidth="1.14286"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-zinc-400"
            />
          </svg>
          <div className="font-medium text-zinc-400">{t('offline')}</div>
        </div>
        <div
          className={classNames(
            'flex flex-col gap-4',
            !isOfflineOpen && 'hidden'
          )}
        >
          {list?.offline.map((user) => (
            <div key={user.id}>
              <User user={user} lang={props.params.lang} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
