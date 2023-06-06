'use client';

import { useTranslation } from '@/app/i18n/client';
import { useInboxContext } from '@/app/stores/inbox';
import Button from '@/app/ui/button';
import IconButton, { LinkIcon } from '@/app/ui/button/iconButton';
import {
  ArrowLeftIcon,
  CloseIcon,
  CollapseIcon,
  DraggableIcon,
  ExpandIcon,
  SendIcon,
  UserIcon,
} from '@/app/ui/icons';
import { Input } from '@/app/ui/input/input';
import Avatar from '@/app/ui/user/avatar';
import { getUserGametag } from '@/app/utils';
import classNames from '@/app/utils/classNames';
import { format } from 'date-fns';
import { TFunction } from 'i18next';
import { last } from 'lodash';
import { useState } from 'react';
import Draggable from 'react-draggable';

interface FloatNavigationProps {
  params: { lang: string };
}

export default function FloatNavigation({ params }: FloatNavigationProps) {
  const {
    inbox,
    isOpen,
    toggleOpen,
    currentChat,
    setCurrentChat,
    toggleCollapsed,
    isCollapsed,
  } = useInboxContext();
  const { t } = useTranslation(params.lang, 'inbox');
  const [isDragging, setIsDragging] = useState(false);
  // const { user } = useUserContext();

  return (
    isOpen && (
      <Draggable
        bounds="main"
        handle="section"
        defaultClassName="z-20 !fixed bottom-5 right-80"
        positionOffset={{ x: 80, y: 0 }}
        defaultPosition={{ x: -74, y: 4 }}
        onDrag={() => {
          !isDragging && setIsDragging(true);
        }}
        onStop={() => {
          isDragging && setIsDragging(false);
        }}
      >
        <div
          className={classNames(
            'w relative flex w-80 flex-col items-center gap-4 overflow-hidden rounded-lg bg-white p-4 transition-height-shadow',
            isDragging
              ? 'shadow-[0_4px_4px_rgba(0,0,0,0.25),0_-3px_0_#740986]'
              : 'shadow-[0_0_5px_rgba(116,9,134,0.2)]',
            isCollapsed ? 'h-12' : 'h-96'
          )}
        >
          <section className="text lg flex w-full cursor-grab select-none justify-between font-bold uppercase">
            <div className="absolute inset-0 top-0 flex h-4 items-center justify-center">
              <DraggableIcon />
            </div>
            {currentChat && (
              <IconButton
                icon={<ArrowLeftIcon />}
                onClick={() => setCurrentChat(null)}
              />
            )}
            {currentChat ? (
              <h1>{currentChat.author.username}</h1>
            ) : (
              <h1>{t('inbox')}</h1>
            )}
            <div className="flex gap-2">
              {currentChat && (
                <LinkIcon
                  href={`${params.lang}/profile/${getUserGametag(
                    currentChat.author.username,
                    currentChat.author.gametag
                  )}`}
                  icon={<UserIcon />}
                />
              )}
              <IconButton
                icon={isCollapsed ? <ExpandIcon /> : <CollapseIcon />}
                size="sm"
                onClick={toggleCollapsed}
              />
              <IconButton icon={<CloseIcon />} size="sm" onClick={toggleOpen} />
            </div>
          </section>
          {currentChat && (
            <div className="flex h-full w-full flex-col gap-2 overflow-y-auto">
              <div className="flex h-full w-full flex-col items-center gap-2 overflow-y-auto">
                {currentChat.messages.map((message) => (
                  <Message message={message} key={message.id} />
                ))}
                {!!currentChat.newMessages.length && (
                  <span className="select-none rounded-full bg-accent-light p-1 px-2 text-[0.625rem] uppercase text-accent">
                    {t('messages', { count: currentChat.newMessages.length })}
                  </span>
                )}
                {currentChat.newMessages.map((message) => (
                  <Message message={message} key={message.id} />
                ))}
              </div>
            </div>
          )}

          {!currentChat && !inbox.chats.length && (
            <div className="flex h-full w-full flex-col items-center justify-center gap-1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 26.1154C8 18.5385 14.019 11.3077 22.0952 11.3077C28.5333 11.3077 33.7143 15.7692 33.7143 22.4615C33.7143 26.4615 30.6286 30.9231 25.9048 30.9231C21.7143 30.9231 19.4286 28.2308 19.4286 24.9615C18.7429 24.9615 18.2857 26.1154 18.2857 27.2692C18.2857 30.4615 22.0571 33.8077 26.4762 33.8077C32.2667 33.8077 38.2857 28.4615 38.2857 20.5385C38.2857 15.6154 35.9238 11.5 33.9048 9C36.381 11.1154 40 15.3077 40 21.8846C40 29.4615 33.981 36.6923 25.9048 36.6923C19.4667 36.6923 14.2857 32.2308 14.2857 25.5385C14.2857 21.5385 17.3714 17.0769 22.0952 17.0769C26.2857 17.0769 28.5714 19.7692 28.5714 23.0385C29.2571 23.0385 29.7143 21.8846 29.7143 20.7308C29.7143 17.5385 25.9429 14.1923 21.5238 14.1923C15.7333 14.1923 9.71429 19.5385 9.71429 27.4615C9.71429 32.3846 12.0762 36.5 14.0952 39C11.619 36.8846 8 32.6923 8 26.1154Z"
                  fill="#6E696F"
                />
              </svg>
              <p className="w-32 text-center text-sm text-foreground-light">
                {t('empty')}
              </p>
            </div>
          )}
          {!currentChat &&
            inbox.chats.map((chat) => {
              return (
                <button
                  key={`${chat.author.id}-messages`}
                  onClick={() => setCurrentChat(chat)}
                  className="w-full"
                >
                  <Chat chat={chat} t={t} />
                </button>
              );
            })}
          {currentChat && (
            <div className="flex w-full items-center justify-center gap-2">
              <Input placeholder={t('reply') || ''} />
              <Button iconButton>
                <SendIcon />
              </Button>
            </div>
          )}
        </div>
      </Draggable>
    )
  );
}

function Chat({ chat, t }: { chat: Chat; t: TFunction }) {
  const { author, messages, newMessages } = chat;
  const latestNewMessage = last(newMessages);
  const latestMessage = last(messages) || messages[0];
  return (
    <div className="relative flex w-full select-none gap-2 before:absolute before:-left-4 before:h-full before:w-1 before:-translate-x-1 before:rounded-r-lg before:bg-accent before:transition hover:before:translate-x-0">
      <Avatar avatar={author.avatar} />
      <div className="flex grow flex-col">
        <div className="flex items-baseline justify-between">
          <span className="family-lato text-lg font-bold uppercase">
            {author.username}
          </span>
          <span className="text-sm text-foreground-light">
            {format(
              new Date(latestNewMessage?.date || latestMessage?.date),
              'h:mm a'
            )}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="h-4 w-40 overflow-hidden text-ellipsis text-start text-sm">
            {latestNewMessage ? (
              <span className="whitespace-nowrap text-accent">
                {latestNewMessage.content}
              </span>
            ) : (
              <span className="whitespace-nowrap text-foreground-light">
                {latestMessage.isMe
                  ? t('you', { content: latestMessage.content })
                  : latestMessage.content}
              </span>
            )}
          </span>
          {!!newMessages.length && (
            <span className="family-lato flex h-3.5 w-3.5 items-center justify-center rounded-lg bg-accent-light text-[0.625rem] text-accent">
              {newMessages.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Message({ message }: { message: Message }) {
  return (
    <div
      key={message.id}
      className={classNames(
        'flex w-full flex-col gap-2',
        message.isMe ? 'items-end' : 'items-start'
      )}
    >
      <div
        className={classNames(
          'flex items-center gap-2',
          message.isMe && 'flex-row-reverse'
        )}
      >
        <span
          className={classNames(
            'flex max-w-[90%] flex-col gap-2 rounded-[1.2rem] p-2 text-sm',
            message.isMe ? 'bg-accent text-background' : 'bg-background'
          )}
        >
          {message.content}
        </span>

        <span className="select-none whitespace-nowrap text-[0.625rem] text-foreground-light">
          {format(new Date(message.date), 'h:mm a')}
        </span>
      </div>
    </div>
  );
}

// Drag and drop icon
{
  /* <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z" fill="#E7E6E7"/>
<path d="M6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1Z" fill="#E7E6E7"/>
<path d="M10 1C10 1.55228 9.55228 2 9 2C8.44772 2 8 1.55228 8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447715 10 1Z" fill="#E7E6E7"/>
<path d="M2 5.00012C2 5.55241 1.55228 6.00012 1 6.00012C0.447715 6.00012 0 5.55241 0 5.00012C0 4.44784 0.447715 4.00012 1 4.00012C1.55228 4.00012 2 4.44784 2 5.00012Z" fill="#E7E6E7"/>
<path d="M6 5.00012C6 5.55241 5.55228 6.00012 5 6.00012C4.44772 6.00012 4 5.55241 4 5.00012C4 4.44784 4.44772 4.00012 5 4.00012C5.55228 4.00012 6 4.44784 6 5.00012Z" fill="#E7E6E7"/>
<path d="M10 5.00012C10 5.55241 9.55228 6.00012 9 6.00012C8.44772 6.00012 8 5.55241 8 5.00012C8 4.44784 8.44772 4.00012 9 4.00012C9.55228 4.00012 10 4.44784 10 5.00012Z" fill="#E7E6E7"/>
</svg> */
}
