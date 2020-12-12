import { TOGGLE_MENU, SET_LANGUAGE } from '../constants';
import LANGUAGES from '../../../shared/constants/languages';

const initialState = {
  isNavVisible: false,
  language: LANGUAGES.GB,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isNavVisible: !action.isNavbarVisible,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default navbarReducer;
