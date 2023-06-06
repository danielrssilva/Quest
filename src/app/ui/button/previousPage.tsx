'use client';

import Button from '@/app/ui/button';
import { useRouter } from 'next/navigation';

export default function PreviousPageButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      size="md"
      className="fixed left-24 top-4"
      iconButton
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6 0.571442L4.57142 7.60001C4.51675 7.65132 4.47319 7.71328 4.4434 7.78208C4.41362 7.85087 4.39825 7.92505 4.39825 8.00001C4.39825 8.07498 4.41362 8.14915 4.4434 8.21795C4.47319 8.28675 4.51675 8.34871 4.57142 8.40001L11.6 15.4286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
