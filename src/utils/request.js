import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import {base_url} from './auth.js'

import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';

let serviceUrl = base_url;
// 创建axios实例
const service = axios.create({
    baseURL: serviceUrl, // api的base_url
    timeout: 15000, // 请求超时时间
    withCredentials:true
})

// respone拦截器
service.interceptors.request.use(config => {
    config.headers = { 'X-Requested-With': 'XMLHttpRequest'};
    // config.headers['X-Token'] = getToken();
    // config.data = qs.stringify(config.data);
    // config.baseURL = base_url
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

//判断是否登入
service.interceptors.response.use(
    response => {

        const res = response.data;  
        
        // if (response.config.url === '/user/status/login') {
        //     return response.data
        // }

        if (res.code == 100000) {

            MessageBox.alert("你还未登录或者重新登录", {
                confirmButtonText: '确定',
                callback: action => {
                    //跳回登入接口
                    window.location.href = "/"
                }

            })
        } else if (res.code == 100001) {

            MessageBox.alert("登入超时，请重新登入", {
                confirmButtonText: '确定',
                callback: action => {
                   //跳回登入接口
                    window.location.href = "/"
                }

            })
        } else if (res.code == 100002) {
            MessageBox.alert("抱歉你无权操作", {
                confirmButtonText: '确定',
                callback: action => {
                    //跳回登入接口
                    window.location.href = "/"
                }

            })

        } else {
            return response.data
        }
        return Promise.reject('error');
    },
    error => {
        Message.error(error);
        return Promise.reject(error)
    }
)

export default service