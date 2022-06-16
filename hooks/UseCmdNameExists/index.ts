import {useEffect, useState} from 'react';
import {IColorscheme} from '../../themes';
import {MatchInputWithCommand} from '../../utils/MatchInputWithCommand';
import {useCmdNameExistsColor} from '../UseCmdNameExistsColor';

export const useCmdNameExists = (command: string, theme: IColorscheme) => {
  const [commandExists, setCommandExists] = useState(false);
  const commandColor = useCmdNameExistsColor(commandExists, theme);

  useEffect(() => {
    const enteredCmd = MatchInputWithCommand(command, theme);
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
