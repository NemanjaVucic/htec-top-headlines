import TopNews from './pages/top-news';
import Article from './pages/top-news/article';
import Categories from './pages/categories';
import Category from './pages/categories/category';
import Search from './pages/search';
import PATHS from './shared/constants/paths';

const routes = [
  {
    path: PATHS.topNews,
    exact: true,
    component: TopNews,
  },
  {
    path: PATHS.article,
    component: Article,
  },
  {
    path: PATHS.categories,
    exact: true,
    component: Categories,
  },
  {
    path: PATHS.category,
    exact: true,
    component: Category,
  },
  {
    path: PATHS.search,
    exact: true,
    component: Search,
  },
];

export default routes;
