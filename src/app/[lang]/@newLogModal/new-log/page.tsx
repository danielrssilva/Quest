'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/app/ui/button';
import IconButton from '@/app/ui/button/iconButton';
import {
  AttachIcon,
  CloseIcon,
  FolderIcon,
  SettingsIcon,
  WorldIcon,
} from '@/app/ui/icons';
import { Select, TextArea } from '@/app/ui/input/input';
import { useRouter } from 'next/navigation';

const gameMock = [
  {
    value: 'league-of-legends',
    text: 'League of Legends',
  },
  {
    value: 'valorant',
    text: 'VALORANT',
  },
  {
    value: 'overwatch-2',
    text: 'Overwatch 2',
  },
  {
    value: 'minecraft',
    text: 'Minecraft',
  },
];

interface LogProps {
  params: { lang: string };
}

export default function Log({ params }: LogProps) {
  const router = useRouter();
  const { t } = useTranslation(params.lang, 'log');
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-50 bg-opacity-60 pl-20 pr-72"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="after:background-none relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
        <div className="flex w-[38rem] grow flex-col gap-4 rounded-lg bg-white px-5 py-4">
          <div className="flex w-full justify-between">
            <div className="flex items-baseline gap-4">
              <h1 className="text-lg font-bold uppercase">{t('title')}</h1>
              <button className="has-dropdown text-sm text-accent">
                Schedule this log
                <div className="dropdown flex w-64 flex-col items-center gap-4 rounded-lg bg-white p-4">
                  <h1 className="text-lg text-foreground">Schedule</h1>
                  <div className="flex w-full justify-between gap-4">
                    <Select placeholder="05/10/23" options={[]} />
                    <Select placeholder="9:30 AM" options={[]} />
                  </div>
                </div>
              </button>
            </div>
            <div className="flex gap-2">
              <IconButton icon={<FolderIcon />} size="sm" />
              <IconButton icon={<WorldIcon />} size="sm">
                <div className="dropdown z-30 flex w-60 flex-col items-center gap-4 rounded-lg bg-white p-4">
                  <h1 className="text-lg text-foreground">Who can view</h1>
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </IconButton>
              <IconButton icon={<SettingsIcon />} size="sm">
                <div className="dropdown z-30 flex w-60 flex-col items-center gap-4 rounded-lg bg-white p-4">
                  <h1 className="text-lg text-foreground">Who can reply</h1>
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </IconButton>
              <IconButton
                icon={<CloseIcon />}
                onClick={router.back}
                size="sm"
              />
            </div>
          </div>
          <TextArea
            size="full"
            placeholder="Add your log here"
            showCount
            maxLength={500}
          />
          <div className="flex justify-between gap-4">
            <Select placeholder={t('game') || ''} options={gameMock} />
            <Select placeholder={t('genre') || ''} options={[]} />
            <Select placeholder={t('platform') || ''} options={[]} />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center items-baseline gap-2">
              <label
                htmlFor="attach-files-log-1"
                className="flex cursor-pointer items-center gap-2 text-sm text-accent"
              >
                <AttachIcon />
                {t('attach')}
              </label>
              <input
                id="attach-files-log-1"
                type="file"
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <span
                className="text-sm text-foreground-light"
                onChange={(value) => console.log(value)}
                onBlur={(e) => console.log(e)}
              >
                {t('files', { count: 0 })}
              </span>
            </div>
            <button className="text-sm text-accent">{t('remove')}</button>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Button>{t('link')}</Button>
            <Button>{t('save')}</Button>
            <Button>{t('submit')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
