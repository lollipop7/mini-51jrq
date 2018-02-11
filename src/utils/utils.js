// 未登录跳转登录页
export const goLogin = function(){
    wx.getStorage({
        key: 'loginData',
        fail: function(){
            wx.navigateTo({
                url: '../login/login'
            });
            return;
        }
    })
}