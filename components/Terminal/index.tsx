import React, {useState} from 'react';

export const Terminal: React.FC = () => {
  const [command, setCommand] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTerminalLines(prevArray => [command, ...prevArray]);
    console.log(command);
    setCommand('');
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full">
        <div>
          {terminalLines.map((line, idx) => {
            return <div key={idx}>{line}</div>;
          }).reverse()}
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
