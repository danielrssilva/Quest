'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from '../user/author';
import { classNames } from '@/app/utils';
import IconButton from '../button/iconButton';
import Comment from './comment';
import { Input } from '../input/input';
import Button from '../button';
import { SendIcon, WorldIcon } from '../icons';

interface QuestLogProps {
  log: QuestLog;
  lang: string;
  isLinkedLog?: boolean;
}

const lengths = [442, 217, 142];

export default function QuestLog(props: QuestLogProps) {
  const [showComments, setShowComments] = useState(false);
  const { log, lang, isLinkedLog } = props;
  const { author, content, media, date, game, genre, platform } = log;
  const { linkedLogs, view, reply, likes, liked, commented, comments } = log;

  const toggleComments = () => {
    if (!!comments.length) {
      setShowComments((prev) => !prev);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-2">
      {isLinkedLog && (
        <div className="absolute -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-solid border-accent bg-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_46_8715)">
              <path
                d="M3.42855 5.56274L0.677125 8.28846C0.596787 8.36814 0.53302 8.46294 0.489504 8.56739C0.445988 8.67184 0.423584 8.78388 0.423584 8.89703C0.423584 9.01018 0.445988 9.12222 0.489504 9.22667C0.53302 9.33112 0.596787 9.42592 0.677125 9.5056L2.49427 11.3227C2.57395 11.4031 2.66875 11.4668 2.7732 11.5104C2.87765 11.5539 2.98969 11.5763 3.10284 11.5763C3.21599 11.5763 3.32803 11.5539 3.43248 11.5104C3.53693 11.4668 3.63173 11.4031 3.71141 11.3227L6.43713 8.57132"
                stroke="#740986"
                strokeWidth="0.857143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.57132 6.43713L11.297 3.71141C11.3774 3.63173 11.4411 3.53693 11.4847 3.43248C11.5282 3.32803 11.5506 3.21599 11.5506 3.10284C11.5506 2.98969 11.5282 2.87765 11.4847 2.7732C11.4411 2.66875 11.3774 2.57395 11.297 2.49427L9.5056 0.677125C9.42592 0.596787 9.33112 0.53302 9.22667 0.489504C9.12222 0.445988 9.01018 0.423584 8.89703 0.423584C8.78388 0.423584 8.67184 0.445988 8.56739 0.489504C8.46294 0.53302 8.36814 0.596787 8.28846 0.677125L5.56274 3.42855"
                stroke="#740986"
                strokeWidth="0.857143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.71422 4.28564L4.28564 7.71422"
                stroke="#740986"
                strokeWidth="0.857143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      )}
      <div
        className="after:background-none relative my-1 flex w-[27.75rem] flex-col items-center 
      gap-2 after:pointer-events-none after:absolute 
      after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.5rem)] 
      after:rounded-lg after:border after:border-accent after:content-['']"
      >
        {!isLinkedLog && (
          <div className="absolute left-3 top-2 stroke-[#6E696F] stroke-[0.03125rem]">
            {view === 'everyone' && <WorldIcon />}
            {/* {view === 'friends' && <GroupIcon />}
          {view === 'private' && <UserLockIcon />} */}
          </div>
        )}

        <div className="flex grow flex-col gap-2 rounded-lg bg-white px-6 py-4">
          {!isLinkedLog && (
            <div className="flex w-full items-start justify-between">
              <Author user={author} lang={lang} date={date} />
              <div>
                <IconButton
                  icon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-width-[0.5px] stroke-accent group-hover:stroke-accent"
                    >
                      <path
                        d="M6.00007 2.9999C6.71015 2.9999 7.28578 2.42426 7.28578 1.71418C7.28578 1.0041 6.71015 0.428467 6.00007 0.428467C5.28999 0.428467 4.71436 1.0041 4.71436 1.71418C4.71436 2.42426 5.28999 2.9999 6.00007 2.9999Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.00007 7.28554C6.71015 7.28554 7.28578 6.70991 7.28578 5.99983C7.28578 5.28975 6.71015 4.71411 6.00007 4.71411C5.28999 4.71411 4.71436 5.28975 4.71436 5.99983C4.71436 6.70991 5.28999 7.28554 6.00007 7.28554Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.00007 11.5714C6.71015 11.5714 7.28578 10.9958 7.28578 10.2857C7.28578 9.57563 6.71015 9 6.00007 9C5.28999 9 4.71436 9.57563 4.71436 10.2857C4.71436 10.9958 5.28999 11.5714 6.00007 11.5714Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          )}
          <div className="flex h-full w-full flex-col gap-2">
            <div className="w-full text-justify text-xs text-foreground-light">
              {content}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4 text-sm text-accent">
                {game && (
                  <Link href={`/${lang}/${game.name}`}>
                    {game.icon} {game.name}
                  </Link>
                )}
                {platform && <div>{platform}</div>}
                {genre && (
                  <div>
                    {genre.icon}
                    {genre.name}
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <div className="family-lato animate flex gap-1 text-sm text-foreground-light hover:text-accent">
                  <IconButton
                    prefix={comments.length}
                    active={(!!comments.length && showComments) || commented}
                    onClick={toggleComments}
                    icon={
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={classNames(
                          'group-hover:stroke-accent group-focus:stroke-accent group-active:stroke-accent',
                          (!!comments.length && showComments) || commented
                            ? 'stroke-accent'
                            : 'stroke-foreground-light'
                        )}
                      >
                        <g clipPath="url(#clip0_586_4069)">
                          <path
                            d="M3.85704 10.7142L0.428467 11.5713L1.28561 8.9999V1.28561C1.28561 1.05828 1.37592 0.840264 1.53666 0.679518C1.69741 0.518773 1.91542 0.428467 2.14275 0.428467H10.7142C10.9415 0.428467 11.1595 0.518773 11.3203 0.679518C11.481 0.840264 11.5713 1.05828 11.5713 1.28561V9.85704C11.5713 10.0844 11.481 10.3024 11.3203 10.4631C11.1595 10.6239 10.9415 10.7142 10.7142 10.7142H3.85704Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    }
                  />
                </div>
                <div className="family-lato animate group flex gap-1 text-sm text-foreground-light hover:text-accent focus:text-accent focus:outline-none active:text-accent">
                  <IconButton
                    prefix={likes.length}
                    active={liked}
                    icon={
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={classNames(
                          'group-hover:stroke-accent group-focus:stroke-accent group-active:stroke-accent',
                          liked ? 'stroke-accent' : 'stroke-foreground-light'
                        )}
                      >
                        <g clipPath="url(#clip0_586_4071)">
                          <path
                            d="M5.27136 0.454285C5.21954 0.423328 5.1603 0.406982 5.09994 0.406982C5.03957 0.406982 4.98033 0.423328 4.92851 0.454285C4.88576 0.488154 4.85692 0.536523 4.84744 0.590231C4.83796 0.64394 4.84851 0.699259 4.87708 0.745714C5.93136 2.57143 6.15422 5.05714 4.71422 6.42857C4.16019 5.96299 3.72034 5.37652 3.42851 4.71429C2.89599 5.01004 2.45467 5.44603 2.15245 5.97491C1.85023 6.50378 1.69867 7.10535 1.71422 7.71429C1.73596 8.2511 1.86485 8.77814 2.09331 9.26439C2.32177 9.75065 2.64519 10.1863 3.04452 10.5457C3.44386 10.9051 3.91105 11.181 4.4186 11.3572C4.92615 11.5333 5.46381 11.6062 5.99994 11.5714C8.75994 11.5714 10.1914 9.85714 10.2856 7.71429C10.3971 5.14286 8.57136 1.98 5.27136 0.454285Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.14275 7.71436C8.14275 8.16901 7.96214 8.60505 7.64065 8.92654C7.31916 9.24803 6.88312 9.42864 6.42847 9.42864"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {!!media.length && (
          <div className="flex h-full w-full gap-2">
            {media.map(({ id, url, type }) => (
              <div
                className={classNames(
                  'flex h-full w-full justify-center overflow-hidden rounded-lg bg-white'
                )}
                key={`log-${type}-${id}`}
              >
                {(type === 'image' || type === 'gif') && (
                  <Image
                    width={lengths[media.length - 1]}
                    height={lengths[media.length - 1]}
                    src={url}
                    alt="media of the log"
                  />
                )}
                {type === 'video' && (
                  <video
                    width={lengths[media.length - 1]}
                    height={lengths[media.length - 1]}
                    controls
                  >
                    <source src={url} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        )}
        {!!comments.length && showComments && (
          <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-4">
            <div className="family-lato flex justify-between text-lg font-semibold">
              Replies
            </div>
            <div className="flex max-h-80 flex-col gap-4 overflow-y-auto pt-2">
              {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} lang={lang} />
              ))}
            </div>
            {reply === 'everyone' && (
              <>
                <div className="family-lato flex justify-between pt-2 text-lg font-semibold">
                  Add a reply
                </div>
                <div className="flex w-full items-center justify-center gap-2">
                  <Input placeholder="Type your reply here" />
                  <Button iconButton>
                    <SendIcon />
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {linkedLogs.map((log) => (
        <QuestLog log={log} lang="" key={log.id} isLinkedLog />
      ))}
    </div>
  );
}
