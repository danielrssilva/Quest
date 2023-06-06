'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

interface ContextMenuProps {
  open: boolean;
  user: FriendListUser | null;
}

interface ContextProps {
  list: FriendList;
  updateList: Dispatch<SetStateAction<FriendList>>;
  contextMenu: ContextMenuProps;
  clearList: () => void;
  openContextMenu: (user: FriendListUser) => void;
  clearContextMenu: () => void;
}

const emptyFriendList: FriendList = { playing: [], online: [], offline: [] };
const initialContextMenu: ContextMenuProps = {
  open: false,
  user: null,
};

const FriendListContext = createContext<ContextProps>({
  list: emptyFriendList,
  updateList: (): FriendList => emptyFriendList,
  clearList: (): void => {
    return;
  },
  contextMenu: initialContextMenu,
  openContextMenu: (): void => {
    return;
  },
  clearContextMenu: () => {
    return;
  },
});

export const FriendListContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [list, updateList] = useState<FriendList>(emptyFriendList);
  const [contextMenu, setContextMenu] = useState(initialContextMenu);
  const clearList = () => {
    updateList(emptyFriendList);
  };

  const clearContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  const openContextMenu = (user: FriendListUser) => {
    setContextMenu({ open: true, user });
  };

  return (
    <FriendListContext.Provider
      value={{
        list,
        updateList,
        clearList,
        contextMenu,
        openContextMenu,
        clearContextMenu,
      }}
    >
      {children}
    </FriendListContext.Provider>
  );
};

export const useFriendListContext = () => useContext(FriendListContext);
