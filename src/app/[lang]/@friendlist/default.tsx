import Layout, { LayoutProps } from './(friendlist)/layout';

import Pages from './(friendlist)/@contentManager/@pages/layout';
import FriendList from './(friendlist)/@contentManager/@friendList/default';
import ContentManager from './(friendlist)/@contentManager/layout';
import UserManager from './(friendlist)/@userManager/default';
import CurrentUser from './(friendlist)/@userManager/@currentUser/default';
import NoUser from './(friendlist)/@userManager/@noUser/default';
import PendingProfile from './(friendlist)/@contentManager/@pages/@pendingProfile/default';
import Login from './(friendlist)/@contentManager/@pages/@login/default';
import Landing from './(friendlist)/@contentManager/@pages/@landing/default';
import Register from './(friendlist)/@contentManager/@pages/@register/default';

export default async function Default(props: LayoutProps) {
  return Layout({
    ...props,
    userManager: (
      <UserManager
        {...{
          ...props,
          currentUser: <CurrentUser {...props} />,
          noUser: <NoUser />,
        }}
      />
    ),
    contentManager: (
      <ContentManager
        {...{
          ...props,
          pages: (
            <Pages
              {...{
                ...props,
                landing: <Landing />,
                login: <Login />,
                register: <Register />,
                pendingProfile: <PendingProfile />,
              }}
            />
          ),
          friendList: <FriendList {...props} />,
        }}
      />
    ),
  });
}
