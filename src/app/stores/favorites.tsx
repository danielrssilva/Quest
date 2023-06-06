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
  favorites: GameAndIcon[];
  remove: (game: GameAndIcon) => void;
  add: (game: GameAndIcon) => void;
  setFavorites: Dispatch<SetStateAction<GameAndIcon[]>>;
}

const FavoritesContext = createContext<ContextProps>({
  favorites: [],
  remove: () => {
    return;
  },
  add: () => {
    return;
  },
  setFavorites: () => {
    return;
  },
});

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favorites, setFavorites] = useState<GameAndIcon[]>([]);

  const remove = (game: GameAndIcon) => {
    console.log(
      game,
      favorites.map(({ name }) => name)
    );
    setFavorites((prev) => prev.filter(({ id }) => id !== game.id));
  };

  const add = (game: GameAndIcon) => {
    if (favorites.includes(game)) {
      return;
    }
    setFavorites((prev) => [...prev, game]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, add, remove, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
