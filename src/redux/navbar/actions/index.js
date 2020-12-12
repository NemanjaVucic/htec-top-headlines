import { TOGGLE_MENU, SET_LANGUAGE } from '../constants';

export const toggleMenu = (isNavbarVisible) => {
  return {
    type: TOGGLE_MENU,
    isNavbarVisible,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language,
  };
};
