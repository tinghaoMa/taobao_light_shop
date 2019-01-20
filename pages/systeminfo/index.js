export default {
    getStatusBarHeight() {
        const app = getApp();
        const {
            isAndroid,
            screenDensity,
            statusBarHeight,
            pixelRatio
        } = app;
        if (statusBarHeight) {
            return Promise.resolve(statusBarHeight);
        }
        return new Promise((resolve, reject) => {
            my.getStatusBarHeight({
                success(res) {
                    let height = res.height;
                    if (isAndroid) {
                        height = height / screenDensity;
                    } else {
                        // const rate = screenWidth / 750;
                        height = height / pixelRatio;
                        // rate * height;
                    }

                    app.statusBarHeight = height;

                    resolve(height);

                },
                fail() {

                    resolve(24);
                }
            });
        });
    },
    getNavigationBarHeight() {
        const app = getApp();
        const {
            isAndroid,
            screenDensity,
            navigationBarHeight,
            pixelRatio
        } = app;
        if (navigationBarHeight) {
            return Promise.resolve(navigationBarHeight);
        }
        const that = this;
        return new Promise((resolve, reject) => {
            my.getNavigationBarHeight({
                success(res) {
                    app.toast(res)
                    that
                        .getStatusBarHeight()
                        .then(statusBarHeight => {

                            let height = res.height;
                            if (isAndroid) {
                                height = height / screenDensity - statusBarHeight;
                            } else {
                                height = height / pixelRatio - statusBarHeight;
                            }
                            app.navigationBarHeight = height;
                            resolve(height);
                        })
                        .catch(() => resolve(48));
                },
                fail() {
                    resolve(48);
                }
            });
        });
    },
    getTitleBarHeights() {
        return this.getNavigationBarHeight().then(navigationBarHeight => {
            return this.getStatusBarHeight().then(statusBarHeight => {
                return { navigationBarHeight, statusBarHeight };
            });
        });
    }
}