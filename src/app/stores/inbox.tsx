'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface ContextProps {
  isOpen: boolean;
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  toggleOpen: () => void;
  open: () => void;
  openChat: (user: FriendListUser) => void;
  inbox: Inbox;
  updateInbox: Dispatch<SetStateAction<Inbox>>;
  currentChat: Chat | null;
  setCurrentChat: Dispatch<SetStateAction<Chat | null>>;
}

const initialContext: ContextProps = {
  toggleCollapsed: () => {
    return;
  },
  toggleOpen: () => {
    return;
  },
  open: () => {
    return;
  },
  setCurrentChat: () => {
    return;
  },
  openChat: () => {
    return;
  },
  updateInbox: () => {
    return;
  },
  isOpen: false,
  isCollapsed: true,
  currentChat: null,
  inbox: {
    chats: [
      {
        author: {
          id: 'dadba4b4-8b48-41a0-b17f-0c2c6fdd78a69',
          username: 'Hya',
          gametag: 'QUEEN',
          nickname: 'Danny',
          avatar:
            'https://pbs.twimg.com/profile_images/1654531758052737025/JuzwlvZ2_400x400.jpg',
          badges: [],
        },
        messages: [
          {
            id: 'message1',
            content: 'Hello, how are you?',
            date: '2021-10-10',
          },
          {
            id: 'mymessage1',
            content: 'I am fine, thanks!',
            date: '2021-10-10',
            isMe: true,
          },
        ],
        newMessages: [],
        latestMessages: [],
      },
      {
        author: {
          id: '927ef51b-6f43-481a-a1a6-4c5cba6cc960',
          username: 'V O I D',
          gametag: '666',
          nickname: '',
          avatar:
            'https://pbs.twimg.com/profile_images/1509653601072959489/6R9tyCE2_400x400.jpg',
          badges: [],
        },
        messages: [
          {
            id: 'message2',
            content: 'Hey Franky!',
            date: '2021-10-10',
          },
          {
            id: 'mymessage2',
            content: 'Howdy!',
            date: '2021-10-10',
            isMe: true,
          },
        ],
        newMessages: [
          {
            id: 'message3',
            content: 'Do you know Hya#QUEEN?',
            date: '2021-10-10',
          },
          {
            id: 'message4',
            content:
              'Et praesent netus facilisis cras. Maecenas interdum placerat phasellus vitae id. Sed nunc id morbi sodales.',
            date: '2021-10-10',
          },
          {
            id: 'message5',
            content: 'Nam sit in maecenas a ut donec.',
            date: '2021-10-10',
          },
        ],
        latestMessages: [],
      },
    ],
  },
};

const InboxContext = createContext<ContextProps>(initialContext);

export const InboxContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [inbox, updateInbox] = useState<Inbox>(initialContext.inbox);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
  };

  const open = () => {
    setIsOpen(true);
    setIsCollapsed(false);
  };

  const openChat = (user: FriendListUser) => {
    const chat = inbox.chats.find((chat) => chat.author.id === user.id) || {
      messages: [],
      newMessages: [],
      latestMessages: [],
      author: user as Author,
    };
    setCurrentChat(chat);
  };

  return (
    <InboxContext.Provider
      value={{
        isOpen,
        open,
        toggleOpen,
        isCollapsed,
        toggleCollapsed,
        inbox,
        updateInbox,
        currentChat,
        setCurrentChat,
        openChat,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInboxContext = () => useContext(InboxContext);
