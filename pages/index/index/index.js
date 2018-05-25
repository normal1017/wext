// pages/index/index/index.js
import { showToast } from '../../../wext/wext.js';

Page({
    data: {},
    onShareAppMessage: function () {},
    helloWext:function(){
        showToast({
            icon:'success',
            title:' Hello Wext！'
        });
    },
});
