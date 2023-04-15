import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist(); // effects_UNSTABLE: [persistAtom],
export const headerFontColorAtom = atom({
  key: 'headerFontColorAtom',
  default: '#000',
});
