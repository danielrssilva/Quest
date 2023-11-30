import Link from 'next/link';
import { getUserGametag } from '@/app/utils';
import { format } from 'date-fns';
import Avatar from './avatar';

export interface UserProps {
  user: Author | NewsAuthor;
  date: string;
  lang: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Author({ user, date, lang }: UserProps) {
  const { username, gametag, avatar } = user;

  return (
    <Link
      href={`/${lang}/profile/${getUserGametag(username, gametag)}`}
      className="relative flex"
    >
      <Avatar avatar={avatar} />
      <div className="flex justify-between">
        <div className="ml-2 flex flex-col justify-center">
          <div className="family-lato flex gap-1 font-semibold">{username}</div>
          <span className="whitespace-nowrap text-xs text-accent">
            {date && format(new Date(date), 'MMM dd/yy')}
          </span>
        </div>
      </div>
    </Link>
  );
}
