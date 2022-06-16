import { useEffect, useState } from "react";
import { IColorscheme } from "../../themes";

export const useCurrentTheme = (theme: IColorscheme) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
		if(currentTheme !== theme) {
			setCurrentTheme(theme)
		}
  }, [theme]);

  return currentTheme;
}
