import {useEffect, useState} from 'react';
import {IColorscheme} from '../../themes';
import {MatchInputWithCommand} from '../../utils/MatchInputWithCommand';
import {useCmdNameExistsColor} from '../UseCmdNameExistsColor';
import {useCurrentTheme} from '../UseCurrentTheme';

export const useCmdNameExists = (command: string, theme: IColorscheme) => {
  const [commandExists, setCommandExists] = useState(false);
  const currentTheme = useCurrentTheme(theme);
  const commandColor = useCmdNameExistsColor(commandExists, currentTheme);

  useEffect(() => {
    console.log(currentTheme);
    const enteredCmd = MatchInputWithCommand(command, currentTheme);
    if (enteredCmd.commandFound || command === 'clear') {
      setCommandExists(true);
    } else {
      setCommandExists(false);
    }
  }, [command]);

  return {
    commandExists,
    commandColor,
  };
};
