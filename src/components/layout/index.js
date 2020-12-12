import clsx from 'clsx';
import { connect } from 'react-redux';

import Navbar from '../navbar';
import classes from './style.module.scss';

const Layout = ({ isSideNavVisible, children }) => {
  const layoutClasses = clsx([
    classes.layout,
    isSideNavVisible && classes['small-nav-opened'],
  ]);

  return (
    <div className={classes.container}>
      <div className={layoutClasses}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    isSideNavVisible: navbar.isNavVisible,
  };
};

export default connect(mapStateToProps)(Layout);
