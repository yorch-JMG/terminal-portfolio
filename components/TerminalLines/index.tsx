import {GRUVBOX} from '../../themes/gruvbox';

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
        <span style={{color: GRUVBOX.greenColor}}>art@yorchJMG: $ </span>
        <span style={{color: color}}>{name}</span>
      </div>
      <pre>
        {}
        {info.map(line => (
          <div key={name + line} style={{color: GRUVBOX.normalTextColor}}>
            {line}
          </div>
        ))}
      </pre>
      {args.length > 0 && (
        <div>
          {args.map(arg => (
            <div key={name + arg} style={{color: GRUVBOX.normalTextColor}}>
              {arg}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
