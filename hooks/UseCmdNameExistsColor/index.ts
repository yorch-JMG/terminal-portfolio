import {useEffect, useState} from 'react';
import {IColorscheme} from '../../themes';

export const useCmdNameExistsColor = (
  cmdNameExists: boolean,
  theme: IColorscheme,
): string => {
  const [cmdNameColor, setCmdNameColor] = useState(theme.errorColor);

  useEffect(() => {
    if (cmdNameExists) {
      setCmdNameColor(theme.cmdColor);
    } else {
      setCmdNameColor(theme.errorColor);
    }
  }, [cmdNameExists]);

  return cmdNameColor;
};
