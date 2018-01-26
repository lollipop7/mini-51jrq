import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';

//首页获取猎头职位
 const  getCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

 //查看职位详细
 const viewCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');


module.exports = {
    getCompanyjob, 
    viewCompanyjob
}
  