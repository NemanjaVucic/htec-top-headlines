import {
  TOGGLE_MENU,
  SET_LANGUAGE,
  SET_MENU_OPEN_TO_FALSE,
} from '../constants';
import { LANGUAGES } from '../../../shared/constants/countries-languages';

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
    case SET_MENU_OPEN_TO_FALSE:
      return {
        ...state,
        isNavVisible: false,
      };
    default:
      return state;
  }
};

export default navbarReducer;
