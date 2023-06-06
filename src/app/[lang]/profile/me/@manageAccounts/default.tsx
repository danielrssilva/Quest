'use client';

import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';

interface ManageAccounts {
  params: {
    lang: string;
    gametag: string;
  };
}

export default function EditProfile({ params }: ManageAccounts) {
  const { t } = useTranslation(params.lang, 'profile');

  return (
    <div className="flex w-[55.35rem] flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold uppercase">{t('link-accounts')}</h1>
        <button className="uppercase text-accent">{t('unlink')}</button>
      </div>
      <div className="grid w-full grid-cols-3 gap-4">
        <Link
          href={`/${params.lang}/profile/me/riot-games`}
          className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
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
          Riot account
        </Link>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M12 22.5002C14.7648 22.5002 17.28 21.4316 19.1551 19.685C18.0097 16.115 15.135 12.1724 12.0003 9.13086C8.86547 12.1724 5.9906 16.115 4.84503 19.6851C6.72016 21.4317 9.23531 22.5002 12 22.5002Z"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 12C1.5 14.2098 2.18262 16.2601 3.34851 17.9516C4.50535 13.3434 6.56077 9.56131 9.35022 6.82483C7.76775 5.60485 6.22266 4.69875 4.89852 4.26562C2.80939 6.18482 1.5 8.93949 1.5 12Z"
              strokeLinejoin="round"
            />
            <path
              d="M20.6515 17.9513C21.8174 16.2597 22.5 14.2094 22.5 11.9996C22.5 8.93934 21.1908 6.18482 19.1018 4.26562C17.7777 4.69868 16.2325 5.60476 14.65 6.82475C17.4393 9.56121 19.4947 13.3432 20.6515 17.9513Z"
              strokeLinejoin="round"
            />
            <path
              d="M12 1.5C10.3393 1.5 8.76867 1.88554 7.37268 2.57201C9.03897 3.04833 10.5861 3.7592 12 4.68582C13.414 3.7592 14.9611 3.04833 16.6274 2.57201C15.2314 1.88554 13.6608 1.5 12 1.5Z"
              strokeLinejoin="round"
            />
          </svg>
          Xbox Live account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path d="M13.5 4.5V12.5" strokeLinejoin="round" />
            <path
              d="M9 18.5L12 20L15 18.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 5H6V12H8" strokeLinejoin="round" />
            <path d="M6 8.5H8" strokeLinejoin="round" />
            <path
              d="M9.5 12.5V9.5M9.5 9.5V5H10.5C11.0523 5 11.5 5.44772 11.5 6V8.5C11.5 9.05228 11.0523 9.5 10.5 9.5H9.5Z"
              strokeLinejoin="round"
            />
            <path
              d="M18 7.5V5.5C18 5.22386 17.7761 5 17.5 5H16C15.7239 5 15.5 5.22386 15.5 5.5V11.5C15.5 11.7761 15.7239 12 16 12H17.5C17.7761 12 18 11.7761 18 11.5V9.5"
              strokeLinejoin="round"
            />
            <path d="M5.5 15.5H17.5" strokeLinejoin="round" />
            <path
              d="M3 18.5V2.5C3 1.94772 3.44772 1.5 4 1.5H20C20.5523 1.5 21 1.94772 21 2.5V18.5L12 22.5L3 18.5Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Epic account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M15.5 10.75C16.3284 10.75 17 10.0784 17 9.25C17 8.42157 16.3284 7.75 15.5 7.75C14.6716 7.75 14 8.42157 14 9.25C14 10.0784 14.6716 10.75 15.5 10.75Z"
              strokeLinejoin="round"
            />
            <path
              d="M8.25001 17.116C8.7283 17.3922 9.33989 17.2283 9.61604 16.75C9.89218 16.2717 9.7283 15.6601 9.25001 15.384L1.50275 11.7572C1.63175 6.07038 6.28215 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C7.02873 22.5 2.86435 19.0452 1.77684 14.4055L8.25001 17.116Z"
              strokeLinejoin="round"
            />
            <path
              d="M6.851 14.261C7.34464 13.7895 8.01351 13.5 8.75 13.5C8.83252 13.5 8.9142 13.5036 8.99487 13.5108L12.0076 9.48225C12.0026 9.40548 12 9.32804 12 9.25C12 7.317 13.567 5.75 15.5 5.75C17.433 5.75 19 7.317 19 9.25C19 11.0289 17.6728 12.4979 15.9546 12.7207L11.4895 16.0075C11.4964 16.0874 11.5 16.1683 11.5 16.25C11.5 17.7688 10.2688 19 8.75 19C7.23122 19 6 17.7688 6 16.25C6 16.2247 6.00034 16.1995 6.00102 16.1743"
              strokeLinejoin="round"
            />
          </svg>
          Steam account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M2.93485 15.1699L8.99201 12.7471V18.8738L6.46781 19.7152C5.15767 20.1519 3.72049 19.975 2.55538 19.2335C0.978932 18.2304 1.19991 15.8639 2.93485 15.1699Z"
              strokeLinejoin="round"
            />
            <path
              d="M5.91699 16.9072L8.99198 15.8105"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0652 18.3804L12.6653 21.4668V15.3401L17.5322 13.8351C18.8423 13.3984 20.2795 13.5753 21.4446 14.3167C23.0211 15.3199 22.8001 17.6864 21.0652 18.3804Z"
              strokeLinejoin="round"
            />
            <path
              d="M18.207 16.253L12.6651 18.4033"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6655 21.4664L8.99194 20.2339V2.5332L15.158 4.4631C16.5112 4.9062 18.1349 6.06633 18.1349 9.14302C18.1349 12.2197 16.0765 12.1533 15.5565 12.1533C15.1405 12.1533 14.4298 11.7994 14.1265 11.6225V7.61218C14.1265 7.23603 13.8263 6.58991 13.3513 6.58991C12.9786 6.58991 12.6655 7.14734 12.6655 7.61218V21.4664Z"
              strokeLinejoin="round"
            />
          </svg>
          PSN account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M6 9C6.82843 9 7.5 8.32843 7.5 7.5C7.5 6.67157 6.82843 6 6 6C5.17157 6 4.5 6.67157 4.5 7.5C4.5 8.32843 5.17157 9 6 9Z"
              strokeLinejoin="round"
            />
            <path
              d="M18 14.5C18.8284 14.5 19.5 13.8284 19.5 13C19.5 12.1716 18.8284 11.5 18 11.5C17.1716 11.5 16.5 12.1716 16.5 13C16.5 13.8284 17.1716 14.5 18 14.5Z"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 22H10.5V2H5.5C3.29086 2 1.5 3.79086 1.5 6V18C1.5 20.2091 3.29086 22 5.5 22Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 22H13.5V2H18.5C20.7091 2 22.5 3.79086 22.5 6V18C22.5 20.2091 20.7091 22 18.5 22Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Nintendo account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
              strokeLinejoin="round"
            />
            <path
              d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"
              strokeLinejoin="round"
            />
            <path d="M1.63269 13.6834C1.63268 9.44634 6.92438 4.57815 11.8949 6.10586C17.8459 7.93493 16.5207 14.1626 15.5542 15.8194" />
            <path d="M14.1884 10.649C10.9564 8.48822 5.76608 9.66843 5.09642 13.3803C4.02595 19.3139 10.1716 22.5 12 22.5" />
          </svg>
          Ubisoft account
        </button>
        <button className="flex h-10 w-full items-center gap-2 rounded-lg bg-white p-2 text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-accent"
          >
            <path
              d="M16.0484 6.97803L10.5 14.9995H5.5L7 12.4995H10L11.5 10.4995H3.5L2 12.4995H4.5L1.5 16.9995H12L16 10.9995L17.5 13.4995H16.2458L15 15.4995H19L20 16.9995H22.5L16.0484 6.97803Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 7H14L12.5 9H4.5L6 7Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          EA account
        </button>
      </div>
    </div>
  );
}
