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

module.exports = {
    getCompanyjob,
    getCityName
}
  