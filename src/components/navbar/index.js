import { useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import MenuIcon from './Menu';
import Navlink from '../navlink';
import PATHS from '../../shared/constants/paths';
import { LANGUAGES } from '../../shared/constants/countries-languages';
import * as actionsNavbar from '../../redux/navbar/actions';

const headerClasses =
  'bg-white flex flex-wrap items-center lg:py-3 md:py-2 py-1 lg:px-3 md:px-2 px-1 border-gray-300 border-b rounded-t-md';
const commonNavClasses =
  'sm:flex sm:items-center sm:w-auto sm:px-2 px-3 w-full text-center';

const Navbar = ({
  isSideNavVisible,
  onToggleMenu,
  onSetLanguage,
  language,
  onSetMenuToFalse,
}) => {
  const toggleNavLanguage = clsx([
    !isSideNavVisible && 'hidden',
    commonNavClasses,
    'mt-1',
  ]);

  const handleOnToggle = () => {
    onToggleMenu(isSideNavVisible);
  };

  const handleLanguageChanged = (lang) => {
    if (Object.values(LANGUAGES).includes(lang)) {
      onSetLanguage(lang);
    }
  };

  const isMenuDisplayed = useMediaQuery({ minWidth: 640 });
  useEffect(() => {
    if (isMenuDisplayed) {
      onSetMenuToFalse();
    }
  }, [isMenuDisplayed]);

  return (
    <header className={headerClasses}>
      <div className="sm:flex-1 flex-auto justify-between items-center text-gray-700 sm:pt-0 rounded">
        <nav>
          <MenuIcon onToggle={handleOnToggle} />
          <ul>
            <div className={toggleNavLanguage}>
              <Navlink path={PATHS.topNews}>Top News</Navlink>
              <Navlink path={PATHS.categories}>Categories</Navlink>
              <Navlink path={PATHS.search}>Search</Navlink>
            </div>
          </ul>
        </nav>
      </div>

      {isSideNavVisible && (
        <div className="w-full bg-gray-700 h-1 opacity-5 mx-4 mt-1 px-2 sm:hidden" />
      )}

      <div className={toggleNavLanguage}>
        <nav>
          <ul className="sm:flex items-center justify-between text-gray-700 sm:pt-0">
            <Navlink
              path="#"
              disabled={true}
              activeLanguage={language}
              language={LANGUAGES.GB}
              onLanguageChanged={handleLanguageChanged}
            >
              GB
            </Navlink>
            <Navlink
              path="#"
              disabled={true}
              activeLanguage={language}
              language={LANGUAGES.US}
              onLanguageChanged={handleLanguageChanged}
            >
              US
            </Navlink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = ({ navbar }) => {
  return {
    isSideNavVisible: navbar.isNavVisible,
    language: navbar.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleMenu: (isNavVisible) =>
      dispatch(actionsNavbar.toggleMenu(isNavVisible)),
    onSetLanguage: (newLanguage) =>
      dispatch(actionsNavbar.setLanguage(newLanguage)),
    onSetMenuToFalse: () => dispatch(actionsNavbar.setMenuToFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
