export interface ICommand {
	name: string;
	info: string[];
	args: string[];
	color: string;
}
export const AllCommands: ICommand[] = [
	{
		name: "help",
		info: ['Help dialogue','Try another command'],
		args: ['args'],
		color: '#90922A'
	},
] 
