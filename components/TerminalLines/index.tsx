import {useCmdNameExists} from '../../hooks/UseCmdNameExists';
import {IColorscheme} from '../../themes';

interface TerminalLineProps {
  name: string;
  args: string[];
  info: string[];
  theme: IColorscheme;
}
export const TerminalLine = ({name, args, info, theme}: TerminalLineProps) => {
  const {commandExists, commandColor} = useCmdNameExists(name, theme);
  return (
    <div>
      <div>
        <span style={{color: theme.cmdColor}}>art@yorchJMG: $ </span>
        <span style={{color: commandColor}}>{name}</span>
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
