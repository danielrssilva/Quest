'use client';

import { getCleanGameName } from '@/app/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Tilt } from 'react-tilt';

interface GameProps {
  game: GameExplore;
  lang: string;
}

const tiltOptions = {
  scale: 1.02,
  max: 35,
  reverse: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

export default function Game(props: GameProps) {
  const { game, lang } = props;
  return (
    <div
      className="after:background-none relative my-1 flex
      justify-center overflow-visible after:pointer-events-none 
      after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)]
      after:rounded-lg after:border after:border-accent after:content-['']"
    >
      <Tilt options={tiltOptions}>
        <Link href={`/${lang}/${getCleanGameName(game.name)}/`}>
          <div className="h-64 w-48">
            <Image
              src={game.image}
              width={192}
              height={264}
              className="h-64 w-48 rounded-lg object-cover"
              alt="game image"
              quality={100}
            />
          </div>
        </Link>
      </Tilt>
    </div>
  );
}
