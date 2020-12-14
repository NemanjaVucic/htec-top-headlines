import {
  TOGGLE_MENU,
  SET_LANGUAGE,
  SET_MENU_OPEN_TO_FALSE,
} from '../constants';

export const toggleMenu = (isNavbarVisible) => {
  return {
    type: TOGGLE_MENU,
    isNavbarVisible,
  };
};

export const setMenuToFalse = () => {
  return {
    type: SET_MENU_OPEN_TO_FALSE,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language,
  };
};
