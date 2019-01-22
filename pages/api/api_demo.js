const app = getApp();


// 用于吸顶的顶部状态栏样式配置
const stickyStyle = {
    background: 'red',
    position: 'fixed',
    top: 0,
    color: 'black',
    zIndex: 10,
};

// 用于未吸顶的顶部状态栏样式配置
const noStickyStyle = {
    background: 'blue',
    zIndex: 10,
};

Page({
    data: {
        scrollToLower: false,
        items: [1, 2, 3, 4],
        shopListCanScroll: false,
    },
    onLoad(query) {
        const { navigationBarHeight, statusBarHeight } = app.getTitleBarHeights();
        app.getTitleBarHeights().then(({ navigationBarHeight, statusBarHeight }) => {
            // app.toast(`navigationBarHeight =${navigationBarHeight}  statusBarHeight=${statusBarHeight}`)
            const screenWidth = app.screenWidth;
            const screenHeight = app.screenHeight;
            app.toast(screenHeight)
            const stikyHeaderHeight =
                (750 / screenWidth) * (navigationBarHeight + statusBarHeight) + 50;

            const menuHeight =
                (750 / screenWidth) * screenHeight - stikyHeaderHeight;

            const titleBarHeight = navigationBarHeight + statusBarHeight;
            stickyStyle.paddingTop = `${titleBarHeight}px`;
            this.setData({
                titleBarHeight,
                menuHeight,
            })
        })
        this.setData({
            systemInfo: app.SystemInfo,
        })
    },
    onScroll(event) {
        if (!event || !event.detail) {
            return;
        }
        this.scrollToLowerHeight = this.scrollTop;
        if (!this.data.scrollToLower) {
            this.setData(
                {
                    scrollToLower: true
                }
            );
        }
        const { scrollTop } = event.detail;
        this.scrollTop = scrollTop;
        if (this.data.scrollToLower) {
            if (this.scrollTop < this.scrollToLowerHeight) {
                this.setData({ scrollToLower: false, shopListCanScroll: false });
            }
        } else {
            if (this.scrollTop >= this.scrollToLowerHeight) {
                this.setData({ scrollToLower: true, shopListCanScroll: true });
            }
        }

        let moveHeight = (this.data.systemInfo.windowWidth / 375) * 56 || 56;

        let sticky = this.data.sticky;

        if (scrollTop >= moveHeight && !sticky) {
            this.setData({
                stickyStyle: stickyStyle,
                sticky: true,
            })
            my.setNavigationBar({
                barTextStyle: 'dark',
                title: "",
            });
        } else if (scrollTop < moveHeight && sticky) {
            this.setData({
                stickyStyle: noStickyStyle,
                sticky: false,
            })
            my.setNavigationBar({
                barTextStyle: 'light',
                title: ' ',
            });
        }
    },
    onScrollToUpper() {
        app.toast('UPIPPUPUPUPUPUPUUP')
    },
    onScrollToLower() {
        app.toast('onScrollToLoweronScrollToLower')
        this.setData({
            shopListCanScroll: true,
        })
    }
})