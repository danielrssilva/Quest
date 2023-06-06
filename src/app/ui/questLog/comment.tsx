import { getUserGametag } from '@/app/utils';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface CommentProps {
  comment: QuestComment;
  lang: string;
}

export default function Comment({ comment, lang }: CommentProps) {
  const { author, content, date } = comment;
  const { username, gametag, nickname, avatar, badges } = author;

  return (
    <div className="relative flex w-full gap-4">
      <Link
        href={`/${lang}/profile/${getUserGametag(username, gametag)}`}
        className="relative box-border flex w-16 items-center justify-center"
      >
        <div className="z-10 rounded-full border border-solid border-accent p-1">
          <Image
            src={avatar}
            alt="user avatar"
            width={42}
            height={42}
            className="flex h-[2.625rem] w-[2.625rem] rounded-full rounded-full bg-accent-light"
            quality={70}
          />
        </div>
        <svg
          width="39"
          height="36"
          viewBox="0 0 39 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 h-full w-full"
        >
          <path
            d="M0 20.5385C0 11.4462 7.33571 2.76923 17.1786 2.76923C25.025 2.76923 31.3393 8.12308 31.3393 16.1538C31.3393 20.9538 27.5786 26.3077 21.8214 26.3077C16.7143 26.3077 13.9286 23.0769 13.9286 19.1538C13.0929 19.1538 12.5357 20.5385 12.5357 21.9231C12.5357 25.7538 17.1321 29.7692 22.5179 29.7692C29.575 29.7692 36.9107 23.3538 36.9107 13.8462C36.9107 7.93846 34.0321 3 31.5714 0C34.5893 2.53846 39 7.56923 39 15.4615C39 24.5538 31.6643 33.2308 21.8214 33.2308C13.975 33.2308 7.66071 27.8769 7.66071 19.8462C7.66071 15.0462 11.4214 9.69231 17.1786 9.69231C22.2857 9.69231 25.0714 12.9231 25.0714 16.8462C25.9071 16.8462 26.4643 15.4615 26.4643 14.0769C26.4643 10.2462 21.8679 6.23077 16.4821 6.23077C9.425 6.23077 2.08929 12.6462 2.08929 22.1538C2.08929 28.0615 4.96786 33 7.42857 36C4.41071 33.4615 0 28.4308 0 20.5385Z"
            className="fill-accent-light"
          />
        </svg>
      </Link>
      <div className="gap- flex w-full flex-col">
        <div className="flex items-center justify-between">
          <div className="family-lato flex gap-2 font-semibold">
            <span className="relative">
              {username}
              {badges && (
                <span
                  className="absolute -right-3 -top-2 h-4 w-4 text-xs"
                  dangerouslySetInnerHTML={{ __html: badges[0].icon }}
                />
              )}
            </span>
            {nickname && (
              <span className="text-xs font-normal text-foreground-light">
                ({nickname})
              </span>
            )}
          </div>
          <span className="self-end text-xs text-accent">
            {format(new Date(date), 'MMM dd/yy')}
          </span>
        </div>
        <p className="w-full text-xs text-foreground-light">{content}</p>
      </div>
    </div>
  );
}
