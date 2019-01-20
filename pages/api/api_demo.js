const app = getApp();

Page({
    data: {

    },
    onLoad(query) {
        console.log(app)
        const { navigationBarHeight, statusBarHeight } = app.getTitleBarHeights();
        app.getTitleBarHeights().then(({ navigationBarHeight, statusBarHeight }) => {
            // app.toast(`navigationBarHeight =${navigationBarHeight}  statusBarHeight=${statusBarHeight}`)
        })
    },

})