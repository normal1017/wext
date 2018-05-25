/**
 * 网络请求接口模块
 * @module urls
 * @author 诺墨 <normal@normalcoder.com>
 */
const HOST = 'https://yourhost/';
const urls = {
    host: HOST,
    UserLogin: HOST + '/User/login', //小程序用户登陆接口
    UserUpdateInfo: HOST + '/User/UserUpdateInfo', //用户信息更新接口
};
module.exports = {
    urls
};