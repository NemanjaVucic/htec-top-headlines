import clsx from 'clsx';
import { NavLink, withRouter } from 'react-router-dom';

import classes from './style.module.scss';

const Navlink = ({
  exact = false,
  path,
  children,
  location,
  activeLanguage,
  language,
  onLanguageChanged = () => {},
}) => {
  const isSelected = (linkPath) => {
    return (
      (location && location.pathname.startsWith(linkPath)) ||
      activeLanguage === language
    );
  };

  const classSelected = clsx([isSelected(path) && classes.selected]);

  return (
    <li>
      <NavLink
        exact={exact}
        to={path}
        className="navlink mx-2"
        activeClassName={classSelected}
        onClick={() => onLanguageChanged(language)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default withRouter(Navlink);
