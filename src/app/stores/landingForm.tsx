'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

type Pages = 'login' | 'register' | 'landing';

interface ContextProps {
  page: Pages;
  setPage: Dispatch<SetStateAction<Pages>>;
}

const LandingFormContext = createContext<ContextProps>({
  page: 'landing',
  setPage: (): Pages => 'landing',
});

export const LandingFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [page, setPage] = useState<Pages>('landing');

  return (
    <LandingFormContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </LandingFormContext.Provider>
  );
};

export const useLandingFormContext = () => useContext(LandingFormContext);
