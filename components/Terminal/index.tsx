import React, {useEffect, useState} from 'react';
import {ICommand} from '../../commands/AllCommands';
import {IColorscheme} from '../../themes';
import {MatchInputWithCommand} from '../../utils/MatchInputWithCommand';
import {TerminalLine} from '../TerminalLines';
interface ITerminalProps {
  theme: IColorscheme;
}
export const Terminal: React.FC<ITerminalProps> = ({theme}: ITerminalProps) => {
  const [command, setCommand] = useState('');
  const [terminalLines, setTerminalLines] = useState<ICommand[]>([]);
  const [cmdNameExists, setCmdNameExists] = useState(false);
  const [cmdNameExistsColor, setCmdNameExistsColor] = useState('red');

  useEffect(() => {
    const enteredCmd = MatchInputWithCommand(command, cmdNameExistsColor, theme.errorColor);
    if (enteredCmd.commandFound || command === 'clear') {
      setCmdNameExists(true);
    } else {
      setCmdNameExists(false);
    }
  }, [command]);

  useEffect(() => {
    if (cmdNameExists) {
      setCmdNameExistsColor(theme.cmdColor);
    } else {
      setCmdNameExistsColor(theme.errorColor);
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
    const commandFound = MatchInputWithCommand(command, cmdNameExistsColor, theme.errorColor);
    setTerminalLines(prevArray => [commandFound.command, ...prevArray]);
    setCommand('');
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full">
        <div className="px-5 md:px-10">
          {terminalLines
            .map((line, idx) => {
              return (
                <div key={idx}>
                  <TerminalLine
                    name={line.name}
                    args={line.args}
                    info={line.info}
                    color={line.color}
                    theme={theme}
                  />
                </div>
              );
            })
            .reverse()}
        </div>
        <form
          onSubmit={handleSubmit}
          className="pb-8 pt-3 mt-5 shadow-lg shadow-white">
          <div className="px-5 md:px-10">
            <label style={{color: theme.cmdColor}}>art@yorchJMG: $ </label>
            <input
              onChange={handleChange}
              value={command}
              style={{
                color: cmdNameExistsColor,
                caretColor: theme.normalTextColor,
              }}
              className={`caret-black caret-2 outline-0 bg-transparent font-semibold w-max lg:w-3/4`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
