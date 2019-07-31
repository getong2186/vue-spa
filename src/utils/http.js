/**
 * Created by yan.zhang@yunshipei.com on 17/11/2.
 * http配置（拦截器，统一处理所有http请求和响应）
 */

import axios from 'axios'
import qs from 'qs'
import _ from 'lodash'
import router from '../router'
import errCodeMapper from '@/mapper/ErrCodeMapper.js';
import { Message } from 'element-ui';
let Base64 = require('js-base64').Base64;
let xss = require('xss');

const Axios = axios.create({
    timeout: 1200000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    req => {
        // 1. XSS过滤
        if (req.params !== undefined && req.params !== 'undefined' && req.params !== null && req.params !== '') {
            for (var option in req.params) {
                req.params[option] = filterXSS(req.params[option]);
            }
        }
        if (req.data !== undefined && req.data !== 'undefined' && req.data !== null && req.data !== '') {
            req.data = JSON.parse(filterXSS(JSON.stringify(req.data)));
        }
        // 2. 设置csrf token
        let csrfToken = window.sessionStorage.getItem('ed');
        if (csrfToken !== undefined && csrfToken !== 'undefined' && csrfToken !== null && csrfToken !== '') {
            if (req.method === 'post' || req.method === 'put' || req.method === 'delete') {
                if (req.data === undefined || req.data === null) {
                    req.data = {};
                }
                req.data.rf = csrfToken.split('').reverse().join('');
            }
        }
        // 3. 如果没有license信息并且请求接口不是登录或上传license，拦截
        let licenseInfo = window.sessionStorage.getItem(Base64.encode('yspBaseInfo'));
        if (licenseInfo === undefined || licenseInfo === 'undefined' || licenseInfo === null || licenseInfo === '') {
            if (req.url.indexOf('/login') === -1 && req.url.indexOf('/license/file') === -1 && req.url.indexOf('/company/deployment') === -1 && req.url.indexOf('/sms/authCode') === -1 && req.url.indexOf('/admin/password/reset') === -1 && req.url.indexOf('/manager/company/version') === -1) {
                return false;
            }
        }
        // 4. 处理数据的前后空格
        if (req.data !== undefined) {
            for (let dataKey in req.data) {
                if (typeof req.data[dataKey] === 'string') {
                    req.data[dataKey] = _(req.data[dataKey]).trim();
                }
            }
        }
        // 5. 设置登录接口数据
        if (req.url.indexOf('/login') > -1) {
            req.headers.username = Base64.encode(req.data.username);
            req.headers.password = Base64.encode(req.data.password);
            req.data = {};
        }
        // 6. 转换下get等需要的数据
        if (req.method !== 'post' && req.method !== 'put' && req.method !== 'delete') {
            req.params = req.data;
        }
        return req
    },
    error => {
        return Promise.reject(error)
    }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        // 对响应数据做些事
        if (res.status === 200 && res.data) {
            // 设置最新csrf token
            if (res.data && res.data.cs && res.data.cs !== '') {
                window.sessionStorage.setItem('ed', res.data.cs)
            }
        } else {
            return Promise.reject(res)
        }
        return res
    },
    error => {
        console.error(error);
        if (!error.response.data.errCode) {
            switch (error.response.status) {
            case 400:
                error.message = '请求错误'
                break
            case 401:
                error.message = '未授权，请登录'
                // 清除缓存，跳转到登录页
                clearToken();
                break
            case 403:
                error.message = '拒绝访问'
                break
            case 404:
                error.message = '请求地址404'
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器内部错误'
                break
            case 501:
                error.message = '服务未实现'
                break
            case 502:
                error.message = '网关错误'
                break
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网关超时'
                break
            case 505:
                error.message = 'HTTP版本不受支持'
                break
            default:
            }
        } else {
            // 如果后台返回有具体业务状态码，获取后台返回的错误信息
            error.message = errCodeMapper.getErrMessage(error.response.data.errCode);
            // 清除缓存，跳转到登录页
            if (error.response.status === 401) {
                clearToken();
            }
        }
        Message.error(error.message);
        // 返回 response 里的错误信息
        return Promise.reject(error)
    }
)

export default Axios;


// cookie过期跳转，清除token
const clearToken = () => {
    // 清除缓存，跳转到登录页
    let yspLoginName = Base64.encode('yspLoginName');
    let yspFirstLogin = Base64.encode('yspFirstLogin');
    let yspPrivateFirstLogin = Base64.encode('yspPrivateFirstLogin');
    let yspBaseInfo = Base64.encode('yspBaseInfo');
    window.sessionStorage.removeItem(yspLoginName);
    window.sessionStorage.removeItem(yspFirstLogin);
    window.sessionStorage.removeItem(yspPrivateFirstLogin);
    window.sessionStorage.removeItem(yspBaseInfo);
    router.push({ 'path': '/' });
};
