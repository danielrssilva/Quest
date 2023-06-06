'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { classNames, getUserGametag, getStatusColor } from '@/app/utils';
import UserStatus from './userStatus';
import { useTranslation } from '@/app/i18n/client';
import Avatar from './avatar';
import { useInboxContext } from '@/app/stores/inbox';

export interface UserProps {
  user: FriendListUser;
  lang: string;
}

export default function User({ user, lang }: UserProps) {
  const ref = useRef(null);
  const [contextMenu, setContextMenu] = useState(false);
  const { openChat, open } = useInboxContext();
  const { t } = useTranslation(lang, 'friendlist');
  const { username, gametag, nickname, avatar, badges, status } = user;
  const currentStatus = typeof status !== 'string' ? status.name : status;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: React.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setContextMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('contextmenu', handleClickOutside, true);
    // return () => {
    //   document.removeEventListener('click', handleClickOutside, true);
    //   document.removeEventListener('contextmenu', handleClickOutside, true);
    // };
  }, []);

  return (
    <div className="relative flex" onContextMenu={handleContextMenu} ref={ref}>
      <Avatar avatar={avatar} color={getStatusColor(currentStatus)} />
      <div className="flex items-center">
        <div className="ml-4 flex flex-col gap-2">
          <div className="relative flex">
            <div className="relative">
              <span className="font-medium">{username}</span>
              {badges[0] && (
                <span
                  className="absolute -right-3 -top-2 h-4 w-4 text-xs"
                  dangerouslySetInnerHTML={{ __html: badges[0].icon }}
                />
              )}
            </div>
            {nickname && (
              <span className="ml-2 text-xs font-extralight">({nickname})</span>
            )}
          </div>
          <UserStatus t={t} lang={lang} status={status} />
        </div>
      </div>
      <div
        className={classNames(
          'absolute left-14 top-12 z-20',
          !contextMenu && 'hidden'
        )}
      >
        <div className="rounded-lg bg-white shadow-lg">
          <div className="flex items-baseline gap-1 px-4 pb-2 pt-4 text-lg">
            {username}
            <span className="text-foregrounlight text-xs uppercase">
              #{gametag}
            </span>
          </div>
          <div
            className="flex flex-col text-xs text-accent transition"
            onClick={() => setContextMenu(false)}
          >
            <Link
              href={`/${lang}/profile/${getUserGametag(username, gametag)}`}
              className="rounded-lg px-4 py-2 uppercase hover:bg-accent-light"
            >
              {t('friend-options.profile')}
            </Link>
            <button className="rounded-lg px-4 py-2 text-start uppercase hover:bg-accent-light">
              {t('friend-options.unfriend')}
            </button>
            <button
              className="rounded-lg px-4 py-2 text-start uppercase hover:bg-accent-light"
              onClick={() => {
                open();
                openChat(user);
              }}
            >
              {t('friend-options.message')}
            </button>
            {/* <button className="rounded-lg px-4 py-2 text-start uppercase hover:bg-accent-light">
              {t('friend-options.voice')}
            </button> */}
            {/* <button className="rounded-lg px-4 py-2 text-start uppercase hover:bg-accent-light">
              {nickname
                ? t('friend-options.edit-nickname')
                : t('friend-options.add-nickname')}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
