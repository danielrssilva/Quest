'use client';

import { useLandingFormContext } from '@/app/stores/landingForm';
import Button from '@/app/ui/button';
import { Input } from '@/app/ui/input/input';

export default function Register() {
  const { setPage } = useLandingFormContext();
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-8 text-center">
      <h1 className="text-[2.2rem] font-bold uppercase">Register</h1>
      <div className="flex w-full flex-col gap-4">
        <Input placeholder="Email" size="lg" />
        {/* <Input placeholder="Birthday" size="lg" /> */}
        {/* <Input placeholder="Phone number" size="lg" /> */}
        <Input placeholder="Alpha key" size="lg" />
        <Input placeholder="Password" size="lg" />
        {/* <div className="flex gap-8">
          <button
            className="text-sm uppercase text-accent"
            onClick={() => setPage('register')}
          >
            Register
          </button>
          <button
            className="text-sm uppercase text-accent"
            onClick={() => setPage('register')}
          >
            Forgot password
          </button>
        </div> */}
        <div className="flex justify-end">
          <Button iconButton size="lg" onClick={() => console.log('register')}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.571533 9.77142L3.69153 13.7829C3.79681 13.9196 3.93171 14.0308 4.0861 14.108C4.24049 14.1852 4.41036 14.2264 4.58296 14.2286C4.75278 14.2305 4.92091 14.1946 5.07511 14.1235C5.22931 14.0523 5.36571 13.9476 5.47439 13.8171L15.4287 1.77142"
                stroke="#740986"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <span className="mt-2 text-sm text-foreground-light">
          Already have an account?
        </span>
        <button
          className="text-sm uppercase text-accent"
          onClick={() => setPage('login')}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
