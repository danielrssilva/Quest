'use client';

import { useTranslation } from '@/app/i18n';
import Achievements from '@/app/ui/quests';

interface QuestsProps {
  params: {
    lang: string;
    gametag: string;
  };
}

export default async function Quests({ params }: QuestsProps) {
  const { t } = await useTranslation(params.lang, 'quests');
  const response = await fetch(
    `http://localhost:3000/api/user/${params.gametag}/quests`,
    { next: { revalidate: 0 } }
  );
  const userQuest = (await response.json()) as UserQuest;
  const { profileQuests, questsTotal, completedTotal } = userQuest;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('quests')}</h1>
      <div className="flex gap-4">
        <Achievements quests={profileQuests} t={t} />
        <div className="ml-4 box-border flex w-[8.6525rem] items-center justify-center rounded-lg bg-white text-lg">
          {completedTotal}/{questsTotal}
        </div>
      </div>
    </div>
  );
}
