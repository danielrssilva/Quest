'use client';

import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import Achievements from '@/app/ui/quests';
import Link from 'next/link';

interface QuestsProps {
  params: {
    lang: string;
    gametag: string;
  };
}
export const revalidate = 1;

export default function Quests({ params }: QuestsProps) {
  const { t } = useTranslation(params.lang, 'quests');
  const { user } = useUserContext();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('quests')}</h1>
      <div className="flex gap-4">
        <Achievements quests={user?.completedQuests} t={t} />
        <Link
          href={`/${params.lang}/profile/me/quests`}
          className="ml-4 flex w-[8.6525rem] cursor-pointer items-center justify-center rounded-lg bg-white text-lg text-accent"
        >
          {t('manage')}
        </Link>
      </div>
    </div>
  );
}
