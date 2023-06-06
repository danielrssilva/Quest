import { replace, split } from 'lodash';

export const separateNicknameGametag = (username = '') => {
  const [nickname, gametag] = split(username, '-', 2);
  return { nickname, gametag };
};

export const getUserGametag = (username = '', gametag = '') => {
  return `${clearSpaces(username)}-${gametag}`;
};

export const clearSpaces = (username = '') => {
  return replace(username, /\s/g, '');
};
