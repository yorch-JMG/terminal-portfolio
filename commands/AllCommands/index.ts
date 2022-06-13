export interface ICommand {
	name: string;
	args: string[];
}
export const AllCommands: ICommand[] = [
	{
		name: "help",
		args: []
	}
] 
