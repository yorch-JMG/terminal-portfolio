import {NextPage} from 'next';
import {useEffect, useState} from 'react';
import {Terminal} from '../components/Terminal';
import {defaultColorscheme, IColorscheme} from '../themes';
import {MatchColorScheme} from '../utils/MatchColorSchemeBg';

const Home: NextPage = () => {
  const [selectedColorscheme, setSelectedColorscheme] = useState(
    'gruvbox-dark',
  );
  const [colorscheme, setColorscheme] = useState(defaultColorscheme);
  useEffect(() => {
    const matchingTheme = MatchColorScheme(selectedColorscheme);
    setColorscheme(matchingTheme);
    console.log(selectedColorscheme);
  }, [selectedColorscheme]);
  return (
    <div
      className="tracking-tighter h-screen"
      style={{backgroundColor: colorscheme.bgColor}}>
      <select
        value={selectedColorscheme}
        onChange={e => {
          setSelectedColorscheme(e.target.value);
        }}
        name="colorscheme">
        <option value="gruvbox-dark">gruvbox dark</option>
        <option value="gruvbox-light">gruvbox light</option>
        <option value="dracula">dracula</option>
      </select>
      <Terminal theme={colorscheme} />
    </div>
  );
};

export default Home;
