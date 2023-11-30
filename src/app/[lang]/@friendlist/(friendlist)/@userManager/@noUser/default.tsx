'use client';

import { useUserContext, userMock } from '@/app/stores/user';

export default function NoUser() {
  const { setUser } = useUserContext();

  return (
    <div className="box-border flex w-full items-center justify-center bg-foreground p-4">
      <div className="relative box-border flex w-full items-center justify-center">
        <div className="relative isolate">
          <div
            className="z-10 flex h-full w-full cursor-pointer justify-center rounded-full border border-solid border-background p-1"
            onClick={() => {
              setUser(userMock);
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground-light p-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.9998C15.077 11.9998 17.5714 9.50538 17.5714 6.42836C17.5714 3.35135 15.077 0.856934 12 0.856934C8.923 0.856934 6.42859 3.35135 6.42859 6.42836C6.42859 9.50538 8.923 11.9998 12 11.9998Z"
                  className="stroke-background"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5943 23.1428C21.8746 20.8986 20.4609 18.9409 18.5568 17.5519C16.6528 16.163 14.3569 15.4146 12 15.4146C9.64324 15.4146 7.34731 16.163 5.44328 17.5519C3.53924 18.9409 2.12546 20.8986 1.40576 23.1428H22.5943Z"
                  className="stroke-background"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <svg
            width="56"
            height="52"
            viewBox="0 0 56 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0 -z-10 h-full w-full"
          >
            <path
              d="M0 29.6667C0 16.5333 10.5333 4 24.6667 4C35.9333 4 45 11.7333 45 23.3333C45 30.2667 39.6 38 31.3333 38C24 38 20 33.3333 20 27.6667C18.8 27.6667 18 29.6667 18 31.6667C18 37.2 24.6 43 32.3333 43C42.4667 43 53 33.7333 53 20C53 11.4667 48.8667 4.33333 45.3333 0C49.6667 3.66667 56 10.9333 56 22.3333C56 35.4667 45.4667 48 31.3333 48C20.0667 48 11 40.2667 11 28.6667C11 21.7333 16.4 14 24.6667 14C32 14 36 18.6667 36 24.3333C37.2 24.3333 38 22.3333 38 20.3333C38 14.8 31.4 9 23.6667 9C13.5333 9 3 18.2667 3 32C3 40.5333 7.13333 47.6667 10.6667 52C6.33333 48.3333 0 41.0667 0 29.6667Z"
              fill="#4E444F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
