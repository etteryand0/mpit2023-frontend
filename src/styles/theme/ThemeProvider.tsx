import { useAtomValue } from 'jotai';
import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { themeAtom } from './atom';

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const theme = useAtomValue(themeAtom);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
