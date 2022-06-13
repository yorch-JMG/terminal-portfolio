import { ICommand } from "../../commands/AllCommands";

export const MatchInputWithCommand = (AllCommands: ICommand[], input: string) => {
	let foundCommand;
	for(let command of AllCommands){
		if(command.name === input){
			foundCommand = command;
		}
	}
	if(foundCommand) return foundCommand
	return null
}
