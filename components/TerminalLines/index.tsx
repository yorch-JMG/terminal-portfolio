interface TerminalLineProps {
  name: string;
  args: string[];
  info: string[];
  color: string;
}
export const TerminalLine = ({name, args, info, color}: TerminalLineProps) => {
  return (
    <div>
      <div>
        <span style={{color: '#90922A'}}>art@yorchJMG: $ </span>
        <span style={{color: color}}>{name}</span>
      </div>
      <div>
        {info.map(line => (
							<div key={name + line} style={{color: '#ebdbb2'}}>{line}</div>
        ))}
      </div>
      {args.length > 0 && (
        <div>
          {args.map(arg => (
            <div key={name + arg} style={{color: '#ebdbb2'}}>{arg}</div>
          ))}
        </div>
      )}
    </div>
  );
};
