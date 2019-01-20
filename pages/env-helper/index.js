export const isIDE =
  !my.getSystemInfoSync() ||
  !my.getSystemInfoSync().platform ||
  my.getSystemInfoSync().platform === 'IDE';

export const isIOS =
  my.getSystemInfoSync() &&
  my.getSystemInfoSync().platform &&
  my.getSystemInfoSync().platform === 'iOS';

export const isAndroid =
  my.getSystemInfoSync() &&
  my.getSystemInfoSync().platform &&
  my.getSystemInfoSync().platform === 'Android';


export default {
  isIDE,
  isIOS,
  isAndroid
};
