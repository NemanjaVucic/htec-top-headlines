import TopNews from './pages/top-news';
import Categories from './pages/categories';
import Search from './pages/search';
import PATHS from './shared/constants/paths';

const routes = [
  {
    path: PATHS.topNews,
    exact: true,
    component: TopNews,
  },
  {
    path: PATHS.categories,
    exact: true,
    component: Categories,
  },
  {
    path: PATHS.search,
    exact: true,
    component: Search,
  },
];

export default routes;
