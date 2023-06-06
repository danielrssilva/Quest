import { Suspense } from 'react';
import ProfileLoader from './@profile/loading';
import WishlistLoader from './@wishlist/loading';
import QuestsLoader from './@quests/loading';
import UnknownPage from '../../404';

interface MetadataProps {
  params: {
    lang: string;
    gametag: string;
  };
}

interface LayoutProps extends MetadataProps {
  profile: React.ReactNode;
  quests: React.ReactNode;
  wishlist: React.ReactNode;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: MetadataProps) {
  const response = await fetch(
    `http://localhost:3000/api/user/${params.gametag}`
  );
  const user = (await response.json()) as Profile;

  return {
    title: user.id
      ? `${user.username}#${user.gametag} | Quest Beta`
      : '404 User | Quest Beta',
  };
}

export const revalidate = 0;

export default async function Layout(props: LayoutProps) {
  const { params, profile, wishlist, quests } = props;
  const { gametag } = params;
  const response = await fetch(`http://localhost:3000/api/user/${gametag}`);
  const user = (await response.json()) as Profile;
  return user.id ? (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full justify-center gap-8">
        <Suspense fallback={<ProfileLoader />}>{profile}</Suspense>
        <Suspense fallback={<WishlistLoader />}>{wishlist}</Suspense>
      </div>
      <Suspense fallback={<QuestsLoader />}>{quests}</Suspense>
    </div>
  ) : (
    <UnknownPage params={props.params} />
  );
}
