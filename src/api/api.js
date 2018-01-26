import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';

//首页获取猎头职位
 const  getHunterjob = (params) => wxRequest(params, apimall + 'mobile/api/hunterjob');

 //查看职位详细
 const viewHunterjob = (params) => wxRequest(params, apimall + 'mobile/api/hunterjob');


module.exports = {
    getHunterjob, 
    viewHunterjob
}
  