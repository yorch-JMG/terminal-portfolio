import {AllCommands, ICommand} from '../../commands/AllCommands';

export const MatchInputWithCommand= (
  input: string,
) : ICommand => {
	for (let i = 0; i < AllCommands.length; i++) {
    if (AllCommands[i].name === input) {
			console.log(input)
      return AllCommands[i];
    }
  }
  return {
    name: `Command ${input} not found`,
    info: ['Make sure to read the output of `help` \n'],
    args: [],
  };
};
