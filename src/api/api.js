import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';
// const apimall = 'https://m.51jrq.com/';
const apiGps = 'http://apis.map.qq.com/ws/geocoder/v1'

//获取猎头职位
const  getCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

//逆地址解析
const getCityName = (params) => wxRequest(params, apiGps);

//  获取我的收藏及投递记录
const  getCollectJob = (params) => wxRequest(params, apimall + 'mobile/api/persoanl');

// 获取简历信息
const  getResumeInfo = (params) => wxRequest(params, apimall + 'mobile/api/my');

// 获取数据字典数据
const  getDictData = (params) => wxRequest(params, apimall + 'mobile/api/dictionary');

// 用户登录
const  loginIn = (params) => wxRequest(params, apimall + 'mobile/api/login');

// 个人用户注册获取短信验证码
const  getVerifyCode = (params) => wxRequest(params, apimall + 'mobile/api/regphone');

module.exports = {
    getCompanyjob,
    getCityName,
    getCollectJob,
    getResumeInfo,
    getDictData,
    loginIn,
    getVerifyCode 
}
  