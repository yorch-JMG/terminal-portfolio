import {useEffect, useState} from 'react';
import {defaultColorscheme} from '../../themes';
import {MatchColorScheme} from '../../utils/MatchColorSchemeBg';

export const useColorscheme = (colorschemeName: string) => {
  const [colorscheme, setColorscheme] = useState(defaultColorscheme);

  useEffect(() => {
    const matchingTheme = MatchColorScheme(colorschemeName);
    setColorscheme(matchingTheme);
    console.log(colorschemeName);
  }, [colorschemeName]);

  return colorscheme;
};
