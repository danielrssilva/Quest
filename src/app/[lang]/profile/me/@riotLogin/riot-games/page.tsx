'use client';

import { useRouter } from 'next/navigation';

import { useTranslation } from '@/app/i18n/client';
import Button from '@/app/ui/button';
import { Input } from '@/app/ui/input/input';
import IconButton from '@/app/ui/button/iconButton';
import { CloseIcon } from '@/app/ui/icons';

interface LogProps {
  params: { lang: string };
}

export default function Log({ params }: LogProps) {
  const { t } = useTranslation(params.lang, 'profile');
  const router = useRouter();

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-50 bg-opacity-60 pl-20 pr-72"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="after:background-none relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
        <div className="flex w-96 grow flex-col items-center gap-4 rounded-lg bg-white px-5 py-4">
          <div className="flex w-full items-center justify-between ">
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-foreground"
              >
                <path
                  d="M11.5001 18.4995L12.5001 20.9995L20.5001 22.4995L21.0001 18.4995H11.5001Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 16.5652H3L1.5 7.5L15 1.5L22.5 3L21 16.5H17.5L16.5 7H16L15 16.5H12.5L11.5 9H10.5V16.5652H8L6.5 10H6V16.5652Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-lg">Riot account</h1>
            </div>

            <IconButton icon={<CloseIcon />} onClick={router.back} />
          </div>
          <Input placeholder="Game name" />
          <Input placeholder="Tag line" />
          <div className="flex gap-4">
            <Button onClick={router.back}>{t('crop-save')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
