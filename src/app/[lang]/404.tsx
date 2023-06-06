'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/client';

interface PageProps {
  params: {
    lang: string;
  };
}

export default function UnknownPage({ params }: PageProps) {
  const { t } = useTranslation(params.lang, '404');
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <h1 className="text-3xl">{t('title')}</h1>
      <p className="text-2xl text-foreground-light">{t('subtitle')}</p>
      <p className="w-72 text-center text-2xl text-foreground-light">
        {t('text')}
      </p>
      <Link
        href={`/${params.lang}/`}
        className="text-2xl uppercase text-accent"
      >
        {t('home')}
      </Link>
    </div>
  );
}
