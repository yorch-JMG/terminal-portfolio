import React, {useEffect, useState} from 'react';
import {ICommand} from '../../commands/AllCommands';
import {MatchInputWithCommand} from '../../utils/MatchInputWithCommand';
import {TerminalLine} from '../TerminalLines';

export const Terminal: React.FC = () => {
  const [command, setCommand] = useState('');
  const [terminalLines, setTerminalLines] = useState<ICommand[]>([]);
  const [cmdNameExists, setCmdNameExists] = useState(false);
  const [cmdNameExistsColor, setCmdNameExistsColor] = useState('red');

  useEffect(() => {
    const enteredCmd = MatchInputWithCommand(command);
    if (enteredCmd.commandFound) {
      console.log(enteredCmd.commandFound);
      setCmdNameExists(true);
    } else {
      setCmdNameExists(false);
    }
    console.log(cmdNameExistsColor);
  }, [command]);

  useEffect(() => {
    if (cmdNameExists) {
      setCmdNameExistsColor('green');
    } else {
      setCmdNameExistsColor('red');
    }
  }, [cmdNameExists]);

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
    setTerminalLines(prevArray => [commandFound.command, ...prevArray]);
    console.log(command);
    setCommand('');
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full px-2 md:px-10">
        <div>
          {terminalLines
            .map((line, idx) => {
              return (
                <div key={idx}>
                  <TerminalLine
                    name={line.name}
                    args={line.args}
                    info={line.info}
                  />
                </div>
              );
            })
            .reverse()}
        </div>
        <form onSubmit={handleSubmit}>
          <label>art@yorchJMG: $ </label>
          <input
            onChange={handleChange}
            value={command}
            style={{color: cmdNameExistsColor}}
            className={`caret-black caret-2 outline-0 `}
          />
        </form>
      </div>
    </div>
  );
};
