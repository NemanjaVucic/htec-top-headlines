import { COUNTRIES } from '../../shared/constants/countries-languages';

export const selectedCountry = (language) => {
  return COUNTRIES[language] || '';
};
