import { checkNetwork, userLogin } from './wext/wext.js';
App({
    globalData: {},
    onLaunch: function () {
        console.log('App onLaunch');
        checkNetwork();
        var that = this; 
        userLogin({ done: (res) => {
            console.log(res.data.data);
        } });
    },
    onShow: function (options) {
        checkNetwork();
    },
})