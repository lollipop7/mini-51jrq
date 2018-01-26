import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';
// const apimall = 'https://m.51jrq.com/';

//首页获取猎头职位
 const  getHunterjob = (params) => wxRequest(params, apimall + 'mobile/api/hunterjob');

 //查看职位详细
 const viewHunterjob = (params) => wxRequest(params, apimall + 'mobile/api/hunterjob');

//  公司-获取公司列表及公司详情
 const getCorpListView = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

module.exports = {
    getHunterjob, 
    viewHunterjob,
    getCorpListView
}
  