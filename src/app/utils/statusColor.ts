import classNames from './classNames';
import { COLOR_MAPS, FILL_COLOR_MAPS } from './colors';

export const statusColor = {
  offline: 'disabled',
  online: 'success',
  away: 'orange',
};

const getStatusColor = (status: string) => {
  if (status !== 'online' && status !== 'offline' && status !== 'away') {
    return 'accent';
  }
  return statusColor[status] as Color;
};

const getFillColor = (status: string) => {
  return classNames(FILL_COLOR_MAPS[getStatusColor(status)]);
};

const getTextColor = (status: string) => {
  return classNames(COLOR_MAPS[getStatusColor(status)]);
};

export default getStatusColor;
export { getFillColor, getTextColor };
