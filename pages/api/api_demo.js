const app =getApp();

Page({
    data:{
        
    },
    doGetRequest(){
        console.log("doGetRequest");
        my.httpRequest({
            url: 'http://rap2api.taobao.org/app/mock/94657/getData',
            method: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log('success---'+JSON.stringify(res));
            },
            fail: function(res) {

            },
            complete: function(res) {

            }
          });
    },
    doPostRequest(){
        console.log("doPostRequest");
        my.httpRequest({
            url: 'http://rap2api.taobao.org/app/mock/94657/example/login',
            method: 'POST',
            data:{
                username:'mth',
                password:'123456'                    
            },
            dataType: 'json',
            success: function(res) {
                console.log('success---'+JSON.stringify(res));
            },
            fail: function(res) {

            },
            complete: function(res) {

            }
          });
    },
    doAlert(){
        my.alert({
            title: '亲',
            content: '您本月的账单已出',
            buttonText: '我知道了',
            success: () => {
              my.alert({
                content: '用户点击了「我知道了」',
              });
            },
          });
    },
    showToast(){
        my.showToast({
            content: '操作成功',
            duration: 3000,
            success: () => {
              my.alert({
                content: 'toast 消失了',
              });
            },
          });
    }
})