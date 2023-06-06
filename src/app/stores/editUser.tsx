'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface ContextProps {
  edittedUser: User | null;
  setEdittedUser: Dispatch<SetStateAction<User | null>>;
}

const EditUserContext = createContext<ContextProps>({
  edittedUser: null,
  setEdittedUser: (): User | null => null,
});

export const EditUserContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [edittedUser, setEdittedUser] = useState<User | null>(null);

  return (
    <EditUserContext.Provider value={{ edittedUser, setEdittedUser }}>
      {children}
    </EditUserContext.Provider>
  );
};

export const useEditUserContext = () => useContext(EditUserContext);
