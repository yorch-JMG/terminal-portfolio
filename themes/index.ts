export interface IColorscheme {
  name: string;
  bgColor: string;
  cmdColor: string;
  errorColor: string;
  normalTextColor: string;
}

export const defaultColorscheme: IColorscheme = {
  name: 'gruvbox-dark',
  bgColor: '#272627',
  cmdColor: '#c9cc2b',
  errorColor: '#DD0606',
  normalTextColor: '#ebdbb2',
};

export const AllColorschemes: IColorscheme[] = [
  {
    name: 'gruvbox-dark',
    bgColor: '#272627',
    cmdColor: '#c9cc2b',
    errorColor: '#DD0606',
    normalTextColor: '#ebdbb2',
  },
  {
    name: 'gruvbox-light',
    bgColor: '#FFFFFF',
    cmdColor: '#c9cc2b',
    errorColor: '#DD0606',
    normalTextColor: '#ebdbb2',
  },
  {
    name: 'dracula',
    bgColor: '#282a36',
    cmdColor: '#50fa7b',
    errorColor: '#ff5555',
    normalTextColor: '#f8f8f2',
  },
];
