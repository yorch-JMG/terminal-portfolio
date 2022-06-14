interface TerminalLineProps {
  name: string;
  args: string[];
  info: string[];
}
export const TerminalLine = ({name, args, info}: TerminalLineProps) => {
  console.log(name);
  console.log(args);
  console.log(info);
  return (
    <div>
      <div>art@yorchJMG: $ {name}</div>
      <div>
        {info.map(line => (
          <div key={name + line}>{line}</div>
        ))}
      </div>
      {args.length > 0 && (
        <div>
          {args.map(arg => (
            <div key={name + arg}>{arg}</div>
          ))}
        </div>
      )}
    </div>
  );
};
