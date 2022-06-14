import React, {useState} from 'react';
import {ICommand} from '../../commands/AllCommands';
import {MatchInputWithCommand} from '../../utils/MatchInputWithCommand';

export const Terminal: React.FC = () => {
  const [command, setCommand] = useState('');
  const [terminalLines, setTerminalLines] = useState<ICommand[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
		if (command === 'clear') {
    	setCommand('');
			return setTerminalLines([]);
		}
    const commandFound = MatchInputWithCommand(command);
    setTerminalLines(prevArray => [commandFound, ...prevArray]);
    console.log(command);
    setCommand('');
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full">
        <div>
          {terminalLines
            .map((line, idx) => {
              return <div key={idx}>{line.name}</div>;
            })
            .reverse()}
        </div>
        <form onSubmit={handleSubmit}>
          <label>art@yorchJMG: $</label>
          <input
            onChange={handleChange}
            value={command}
            className="caret-black"
          />
        </form>
      </div>
    </div>
  );
};
