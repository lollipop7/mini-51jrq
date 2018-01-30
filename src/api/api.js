import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';
// const apimall = 'https://m.51jrq.com/';

//获取猎头职位
 const  getCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

//  获取我的收藏及投递记录
const  getCollectJob = (params) => wxRequest(params, apimall + 'mobile/api/persoanl');

module.exports = {
    getCompanyjob,
    getCollectJob 
}
  