import { IColorscheme } from '../../themes';

interface TerminalLineProps {
  name: string;
  args: string[];
  info: string[];
  color: string;
	theme: IColorscheme;
}
export const TerminalLine = ({name, args, info, color, theme}: TerminalLineProps) => {
  return (
    <div>
      <div>
        <span style={{color: theme.cmdColor}}>art@yorchJMG: $ </span>
        <span style={{color: color}}>{name}</span>
      </div>
      <pre>
        {}
        {info.map(line => (
          <div key={name + line} style={{color: theme.normalTextColor}}>
            {line}
          </div>
        ))}
      </pre>
      {args.length > 0 && (
        <div>
          {args.map(arg => (
            <div key={name + arg} style={{color: theme.normalTextColor}}>
              {arg}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
