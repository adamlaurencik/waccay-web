import Login from '../pages/Login';
import CreatePost from '../pages/CreatePost';
import NewsFeed from '../pages/NewsFeed';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

export enum Routes {
  LOGIN = '/login',
  CREATE_POST = '/create-post',
  NEWS_FEED = '/news-feed',
  PROFILE = '/profile',
  REGISTER = '/register',
}

type RouteType = {
  path: Routes;
  component: React.FC;
  public?: true;
};

export const routes: RouteType[] = [
  {
    component: Login,
    path: Routes.LOGIN,
    public: true,
  },
  {
    component: CreatePost,
    path: Routes.CREATE_POST,
  },
  {
    component: NewsFeed,
    path: Routes.NEWS_FEED,
  },
  {
    component: Profile,
    path: Routes.PROFILE,
  },
  {
    component: Register,
    path: Routes.REGISTER,
    public: true,
  },
];
