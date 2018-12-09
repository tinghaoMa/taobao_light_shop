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
    }
})