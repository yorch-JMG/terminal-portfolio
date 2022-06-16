import {NextPage} from 'next';
import {useState} from 'react';
import {Terminal} from '../components/Terminal';
import {useColorscheme} from '../hooks/UseColorscheme';

const Home: NextPage = () => {
  const [selectedColorscheme, setSelectedColorscheme] = useState(
    'gruvbox-dark',
  );
  const colorscheme = useColorscheme(selectedColorscheme);

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
