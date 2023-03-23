export type Theme = typeof lightTheme;

export type ThemeKeyType = keyof typeof themes | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}

const lightTheme = {
  primary: '#2388FF',
  text: '#000',
  textParagraph: '#0000007A',
  background: '#f8f8f8',
  horizontalPadding: '120px',
  paperRadius: '40px',
  paperBackground: '#fff',
};

export const themes = {
  light: lightTheme,
};
