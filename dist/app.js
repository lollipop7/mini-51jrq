'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home/home', 'pages/home/homedetail', 'pages/corpview/corpview', 'pages/corporation/corporation', 'pages/personal/personal', 'pages/login/login'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '51金融圈',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        "color": "#a0a0a0",
        "selectedColor": "#FFA315",
        "backgroundColor": "#ffffff",
        list: [{
          'pagePath': 'pages/home/home',
          'text': '主页',
          'iconPath': '/images/icons/home.png',
          'selectedIconPath': '/images/icons/home_hl.png'
        }, {
          'pagePath': 'pages/corporation/corporation',
          'text': '公司',
          'iconPath': '/images/icons/corp.png',
          'selectedIconPath': '/images/icons/corp_hl.png'
        }, {
          'pagePath': 'pages/personal/personal',
          'text': '我的',
          'iconPath': '/images/icons/pers.png',
          'selectedIconPath': '/images/icons/pers_hl.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）


  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'getUserInfo',


    // sleep (s) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('promise resolved')
    //     }, s * 1000)
    //   })
    // }

    // async testAsync () {
    //   const data = await this.sleep(3)
    // }

    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUE2Q0Usc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTFDZkEsTUEwQ2UsR0ExQ047QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwsdUJBRkssRUFHTCx5QkFISyxFQUlMLCtCQUpLLEVBS0wseUJBTEssRUFNTCxtQkFOSyxDQURBO0FBU1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixPQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FURDtBQWVQQyxjQUFRO0FBQ04saUJBQVMsU0FESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sMkJBQW1CLFNBSGI7QUFJTkMsY0FBTSxDQUFDO0FBQ0wsc0JBQVksaUJBRFA7QUFFTCxrQkFBUSxJQUZIO0FBR0wsc0JBQVksd0JBSFA7QUFJTCw4QkFBb0I7QUFKZixTQUFELEVBS0g7QUFDRCxzQkFBWSwrQkFEWDtBQUVELGtCQUFRLElBRlA7QUFHRCxzQkFBWSx3QkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQUxHLEVBVUg7QUFDRCxzQkFBWSx5QkFEWDtBQUVELGtCQUFRLElBRlA7QUFHRCxzQkFBWSx3QkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQVZHO0FBSkE7QUFmRCxLQTBDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztnQ0FFWUMsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLSixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS0ksV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS0osVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJNLElBQUlOLFFBQS9CO0FBQ0FFLGdCQUFNQSxHQUFHSSxJQUFJTixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUE1RTBCLGVBQUtPLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9ob21lL2hvbWUnLCAgICAgIFxyXG4gICAgICAncGFnZXMvaG9tZS9ob21lZGV0YWlsJywgICAgICBcclxuICAgICAgJ3BhZ2VzL2NvcnB2aWV3L2NvcnB2aWV3JyxcclxuICAgICAgJ3BhZ2VzL2NvcnBvcmF0aW9uL2NvcnBvcmF0aW9uJywgICAgICBcclxuICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3BlcnNvbmFsJyxcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICc1MemHkeiejeWciCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgXCJjb2xvclwiOiBcIiNhMGEwYTBcIixcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI0ZGQTMxNVwiLFxyXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgbGlzdDogW3sgXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgICAgJ3RleHQnOiAn5Li76aG1JyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9ob21lLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9ob21lX2hsLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9jb3Jwb3JhdGlvbi9jb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgJ3RleHQnOiAn5YWs5Y+4JyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9jb3JwLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9jb3JwX2hsLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9wZXJzb25hbC9wZXJzb25hbCcsXHJcbiAgICAgICAgJ3RleHQnOiAn5oiR55qEJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9wZXJzLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9wZXJzX2hsLnBuZydcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgLy/lvZPlsI/nqIvluo/liJ3lp4vljJblrozmiJDml7bvvIzkvJrop6blj5Egb25MYXVuY2jvvIjlhajlsYDlj6rop6blj5HkuIDmrKHvvIlcclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIC8vIHRoaXMudGVzdEFzeW5jKCk7XHJcbiAgfVxyXG5cclxuICAvLyBzbGVlcCAocykge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgLy8gICAgIH0sIHMgKiAxMDAwKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gIC8vIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=