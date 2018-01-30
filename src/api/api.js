import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';
// const apimall = 'https://m.51jrq.com/';

//首页获取猎头职位
 const  getCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

module.exports = {
    getCompanyjob
}
  