import clsx from 'clsx';
import { NavLink, withRouter } from 'react-router-dom';
import PATHS from '../../shared/constants/paths';

import classes from './style.module.scss';

const Navlink = ({
  path,
  children,
  location,
  activeLanguage,
  language,
  disabled = false,
  onLanguageChanged = () => {},
}) => {
  const isSelected = (linkPath) => {
    return (
      (location && location.pathname.startsWith(linkPath)) ||
      activeLanguage === language
    );
  };

  const classSelected = clsx([isSelected(path) && classes.selected]);

  const cssNavLink = clsx([
    'navlink mx-2',
    location.pathname === PATHS.article && disabled && classes.disabled,
  ]);

  return (
    <li
      className={
        (location.pathname === PATHS.article &&
          disabled &&
          'cursor-not-allowed') ||
        ''
      }
    >
      <NavLink
        to={path}
        className={cssNavLink}
        activeClassName={classSelected}
        onClick={() => onLanguageChanged(language)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default withRouter(Navlink);
