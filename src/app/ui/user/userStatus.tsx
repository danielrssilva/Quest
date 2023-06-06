import Link from 'next/link';
import Tag from '../tag';
import { getStatusColor } from '@/app/utils';
import { TFunction } from 'i18next';

interface UserStatusProps {
  status: string | GameAndIcon;
  lang: string;
  t: TFunction;
}

export default function UserStatus({ status, lang, t }: UserStatusProps) {
  const isStatusGame = typeof status !== 'string';
  const currentStatus = isStatusGame ? status.name : status;
  const statusColor = getStatusColor(currentStatus);

  return isStatusGame ? (
    <Link href={`/${lang}/${status.name}`} className="-ml-1">
      <Tag color={statusColor} icon={status.icon}>
        {t(currentStatus)}
      </Tag>
    </Link>
  ) : (
    <div className="-ml-1">
      <Tag color={statusColor}>{t(currentStatus)}</Tag>
    </div>
  );
}
