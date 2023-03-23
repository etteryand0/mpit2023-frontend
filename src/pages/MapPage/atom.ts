import { atom } from 'jotai';

export const bottomSheetOpenAtom = atom(false);

export const bottomSheetPageAtom = atom(0);

type BottomSheetOpenEvent = {
  type: 'roomClick' | 'tabClick';
  payload: any;
};

export const bottomSheetOpenEventAtom = atom<BottomSheetOpenEvent>({
  type: 'tabClick',
  payload: null,
});
