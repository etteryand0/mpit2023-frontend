import { atom } from 'jotai';
import { Theme, ThemeKeyType, themes } from '.';
import { isSystemDark } from './utils';

export const themeKeyAtom = atom<ThemeKeyType>('light');

export const themeAtom = atom<Theme>(get => {
  const themeKey = get(themeKeyAtom);

  if (themeKey === 'system') {
    return isSystemDark ? themes.dark : themes.light;
  }

  return themes[themeKey];
});
