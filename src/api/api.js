import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:8089/';
// const apimall = 'https://m.51jrq.com/';

//获取猎头职位
 const  getCompanyjob = (params) => wxRequest(params, apimall + 'mobile/api/companyjob');

module.exports = {
<<<<<<< HEAD
    getCompanyjob
=======
    getCompanyjob 
>>>>>>> c8d3d31e1d2d0fdbbd4eb6af2e7daf58a1d209cf
}
  