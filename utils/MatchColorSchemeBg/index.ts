import {AllColorschemes, defaultColorscheme} from '../../themes';

export const MatchColorScheme= (input: string) => {
  for (let i = 0; i < AllColorschemes.length; i++) {
    if (AllColorschemes[i].name === input) {
      return AllColorschemes[i];
    }
  }
	return defaultColorscheme
};
