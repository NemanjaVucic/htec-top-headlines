import clsx from 'clsx';

import Navbar from '../navbar';
import classes from './style.module.scss';
import PATHS from '../../shared/constants/paths';

const Layout = ({ pathname, children }) => {
  const layoutClasses = clsx([
    classes.layout,
    PATHS.categories === pathname && classes.categories,
    PATHS.search === pathname && classes.search,
  ]);

  return (
    <div className={layoutClasses}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
