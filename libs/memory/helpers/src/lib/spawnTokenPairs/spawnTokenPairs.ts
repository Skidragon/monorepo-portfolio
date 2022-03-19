import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Token } from '@sd/memory/types';
import {
  faCoffee,
  faAnchor,
  faAppleWhole,
  faBasketball,
  faBahai,
  faBicycle,
  faBomb,
  faBrain,
  faBurger,
  faFire,
  faWater,
  faEarth,
  faAddressBook,
  faHandsClapping,
  faTrailer,
  faCar,
  faCalendarWeek,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
const icons: IconProp[] = [
  faCoffee,
  faAnchor,
  faAppleWhole,
  faBasketball,
  faBahai,
  faBicycle,
  faBomb,
  faBrain,
  faBurger,
  faFire,
  faWater,
  faEarth,
  faAddressBook,
  faHandsClapping,
  faTrailer,
  faCar,
  faCalendarWeek,
  faCode,
];
export const spawnTokenPairs = (pairsAmount = 8, type: string) => {
  const tokens: Token[] = [];
  let id = 0;
  for (let i = 0; i < pairsAmount; i++) {
    const value = type === 'numbers' ? i + 1 : icons[i];
    const token: Token = {
      id: id,
      value: value,
      state: 'HIDE_VALUE',
    };
    const matchingToken = {
      ...token,
      id: id + 1,
    };
    tokens.push(...[token, matchingToken]);
    id += 2;
  }

  return tokens;
};
