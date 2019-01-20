const app = getApp();

Page({
    data: {

    },
    onLoad(query) {
        const { navigationBarHeight, statusBarHeight } = app.getTitleBarHeights();
        app.getTitleBarHeights().then(({ navigationBarHeight, statusBarHeight }) => {
            // app.toast(`navigationBarHeight =${navigationBarHeight}  statusBarHeight=${statusBarHeight}`)
            const screenWidth = app.screenWidth;
            const screenHeight = app.screenHeight;
            const stikyHeaderHeight =
                (750 / screenWidth) * (navigationBarHeight + statusBarHeight);
            const menuHeight =
                (750 / screenWidth) * screenHeight - stikyHeaderHeight;
            app.toast(menuHeight)
            const titleBarHeight = navigationBarHeight + statusBarHeight;
            this.setData({
                titleBarHeight,
                menuHeight,
            })
        })
    },
    onScroll() {

    },
    onScrollToUpper() {

    },
    onScrollToLower() {
        app.toast('onScrollToLoweronScrollToLower')
    }
})