

export interface Theme {
  colors: {
    light: string;
    medium: string;
    dark: string;
    white: string;
    black: string;
    grey: string;
  }
}

export interface StyledThemeProp {
  theme: Theme
}

export interface Video {
  url: string;
  title: string;
  thumbnail: {
    large: string;
  }
  duration: number;
  description: string;
  date: string;
  iframe: string;
}
