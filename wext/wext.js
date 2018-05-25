/**
 * 集成模块
 */
import { urls } from './urls.js';
import { wxRequest } from './request.js';
import { checkNetwork } from './checkNetwork.js';
import { newDate, getDate, getDay, getDateVisible } from './time.js';
import { showModal, showToast } from './feedback.js';
import { userLogin } from './userLogin.js'
import { validateURL, validateEmail, validateTelephone, validateNull } from './validate.js'

module.exports = {
    wxRequest, //网络请求组件
    checkNetwork, //网络状态检查组件
    urls, //Url接口配置组件
    showModal, //Modal组件
    showToast, //Toast组件
    userLogin, //用户登录
    validateURL, //网址正则考验
    validateEmail, //Email正则考验
    validateTelephone, //手机号码正则考验
    validateNull, //字符串为空考验
    newDate, //获取当前时间戳
    getDate, //获取当前日期
    getDay, //获取当前时间为星期几
    getDateVisible, //把时间转化为「 多久前」
};