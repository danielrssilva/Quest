import '../styles/Common.scss';
import 'cropperjs/dist/cropper.css';
import { ReactNode } from 'react';
import { UserContextProvider } from '../stores/user';
import { FriendListContextProvider } from '../stores/friendlist';
import { LandingFormContextProvider } from '../stores/landingForm';
import { InboxContextProvider } from '../stores/inbox';
import { FavoritesContextProvider } from '../stores/favorites';

export const metadata = {
  title: 'Quest Beta',
  description: 'Find friends and discover new games',
};

export default async function RootLayout(props: RootLayoutProps) {
  const {
    params,
    navigation,
    children,
    floatNavigation,
    newLogModal,
    inbox,
    friendlist,
  } = props;
  const { lang } = params;
  return (
    <html lang={lang}>
      <body className="h-screen w-full">
        <UserContextProvider>
          <FavoritesContextProvider>
            <InboxContextProvider>
              <div className="flex h-screen justify-between overflow-hidden">
                {navigation}
                <div className="max-h-full w-full pl-20 pr-72">
                  <main className="content h-full w-full overflow-y-auto overflow-x-visible p-4 pb-0">
                    {children}
                    {newLogModal}
                    {floatNavigation}
                    {inbox}
                  </main>
                </div>
                <FriendListContextProvider>
                  <LandingFormContextProvider>
                    {friendlist}
                  </LandingFormContextProvider>
                </FriendListContextProvider>
              </div>
            </InboxContextProvider>
          </FavoritesContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}

interface RootLayoutProps {
  params: { lang: string };
  navigation: ReactNode;
  children: ReactNode;
  floatNavigation: ReactNode;
  friendlist: ReactNode;
  newLogModal: ReactNode;
  inbox: ReactNode;
}
