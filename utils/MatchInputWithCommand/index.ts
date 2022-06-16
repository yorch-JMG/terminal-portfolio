import {AllCommands, ICommand} from '../../commands/AllCommands';
import { IColorscheme } from '../../themes';

interface FoundCommand {
  command: ICommand;
  commandFound: boolean;
}

export const MatchInputWithCommand = (
  input: string,
	theme: IColorscheme
): FoundCommand => {
  for (let i = 0; i < AllCommands.length; i++) {
    if (AllCommands[i].name === input) {
      return {
        command: {...AllCommands[i], color: theme.cmdColor},
        commandFound: true,
      };
    }
  }
  return {
    command: {
      name: input,
      info: [
        `Command ${input} not found!`,
        'Make sure to read the output of `help`',
      ],
      args: [],
      color: theme.errorColor,
    },
    commandFound: false,
  };
};
