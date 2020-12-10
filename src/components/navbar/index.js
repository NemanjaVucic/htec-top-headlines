import { useState } from 'react';
import clsx from 'clsx';

import MenuIcon from './Menu';
import Navlink from '../navlink';
import PATHS from '../../shared/constants/paths';
import LANGUAGES from '../../shared/constants/languages';

const headerClasses =
  'bg-white flex flex-wrap items-center lg:py-3 md:py-2 py-1 lg:px-3 md:px-2 px-1 border-gray-300 border-b';
const commonNavClasses =
  'sm:flex sm:items-center sm:w-auto sm:px-2 px-3 w-full text-center';

const Navbar = () => {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES.GB);

  const toggleNavLanguage = clsx([
    !isSideNavVisible && 'hidden',
    commonNavClasses,
    'mt-1',
  ]);

  const toggleNavPages = clsx([
    !isSideNavVisible && 'hidden',
    commonNavClasses,
  ]);

  const handleOnToggle = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  const handleLanguageChanged = (lang) => {
    if (Object.values(LANGUAGES).includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <header className={headerClasses}>
      <div className="sm:flex-1 flex-auto justify-between items-center  text-gray-700 sm:pt-0">
        <nav>
          <MenuIcon onToggle={handleOnToggle} />
          <ul>
            <div className={toggleNavPages}>
              <Navlink exact={true} path={PATHS.topNews}>
                Top News
              </Navlink>
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
              activeLanguage={language}
              language={LANGUAGES.GB}
              onLanguageChanged={handleLanguageChanged}
            >
              GB
            </Navlink>
            <Navlink
              path="#"
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

export default Navbar;
