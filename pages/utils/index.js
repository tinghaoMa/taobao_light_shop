import SystemInfo from '../systeminfo/index';
import PlatForm from '../env-helper/index';

const {
    getNavigationBarHeight,
    getStausBarHeight,
    getTitleBarHeights
} = SystemInfo;

const {
    isIDE,
    isAndroid,
    isIOS
} = PlatForm;

export default {
    SystemInfo,
    getNavigationBarHeight,
    getStausBarHeight,
    getTitleBarHeights: getTitleBarHeights.bind(SystemInfo),
    isAndroid,
    isIDE,
    isIOS
}