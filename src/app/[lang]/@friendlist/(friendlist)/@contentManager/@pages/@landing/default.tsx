'use client';

import { useLandingFormContext } from '@/app/stores/landingForm';

export default function Landing() {
  const { setPage } = useLandingFormContext();
  return (
    <div className="flex flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-[2.2rem] font-bold uppercase">Join the Quest!</h1>
      <p className="text-thin">Find friends and discover new games</p>
      <div className="flex gap-8">
        <button
          className="text-lg uppercase text-accent"
          onClick={() => setPage('login')}
        >
          Log in
        </button>
        <button
          className="text-lg uppercase text-accent"
          onClick={() => setPage('register')}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
