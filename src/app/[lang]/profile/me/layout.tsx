'use client';

import { Suspense, useState } from 'react';
import ProfileLoader from './@profile/loading';
import WishlistLoader from './@wishlist/loading';
import QuestsLoader from './@quests/loading';
import { useUserContext } from '@/app/stores/user';
import UnknownPage from '../../404';
import { EditUserContextProvider } from '@/app/stores/editUser';

interface MetadataProps {
  params: {
    lang: string;
    gametag: string;
  };
}

interface LayoutProps extends MetadataProps {
  profile: React.ReactNode;
  editProfile: React.ReactNode;
  quests: React.ReactNode;
  wishlist: React.ReactNode;
  children: React.ReactNode;
  manageAccounts: React.ReactNode;
  gameLibrary: React.ReactNode;
  cropModal: React.ReactNode;
  questsModal: React.ReactNode;

  riotLogin: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const {
    profile,
    editProfile,
    wishlist,
    quests,
    manageAccounts,
    gameLibrary,
    cropModal,
    questsModal,

    riotLogin,
  } = props;
  const { user } = useUserContext();
  const [isEditing, setIsEditing] = useState(!user?.isProfileComplete);
  return user ? (
    <div className="flex w-full flex-col items-center gap-6">
      <EditUserContextProvider>
        {cropModal}
        {questsModal}
        <div className="flex w-full justify-center gap-8">
          <Suspense fallback={<ProfileLoader />}>
            <div className="relative">
              {isEditing ? editProfile : profile}
              {/* {!isEditing && ( */}
              <button
                className="absolute right-0 top-0 text-lg uppercase text-accent"
                onClick={() => setIsEditing((prev) => !prev)}
              >
                Edit profile info
              </button>
              {/* )} */}
            </div>
          </Suspense>
          <Suspense fallback={<WishlistLoader />}>{wishlist}</Suspense>
        </div>
        <Suspense fallback={<QuestsLoader />}>{quests}</Suspense>
        {manageAccounts}
        {gameLibrary}
        {riotLogin}
      </EditUserContextProvider>
    </div>
  ) : (
    <UnknownPage params={props.params} />
  );
}
