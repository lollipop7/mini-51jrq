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
      pages: ['pages/corporation/corporation', 'pages/corporation/corpview/corpview', 'pages/home/home', 'pages/personal/personal', 'pages/login/login'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '51金融圈',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
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

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBeUNFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF0Q2ZBLE1Bc0NlLEdBdENOO0FBQ1BDLGFBQU8sQ0FDTCwrQkFESyxFQUVMLHFDQUZLLEVBR0wsaUJBSEssRUFJTCx5QkFKSyxFQUtMLG1CQUxLLENBREE7QUFRUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVJEO0FBY1BDLGNBQVE7QUFDTkMsY0FBTSxDQUFDO0FBQ0wsc0JBQVksaUJBRFA7QUFFTCxrQkFBUSxJQUZIO0FBR0wsc0JBQVksd0JBSFA7QUFJTCw4QkFBb0I7QUFKZixTQUFELEVBS0g7QUFDRCxzQkFBWSwrQkFEWDtBQUVELGtCQUFRLElBRlA7QUFHRCxzQkFBWSx3QkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQUxHLEVBVUg7QUFDRCxzQkFBWSx5QkFEWDtBQUVELGtCQUFRLElBRlA7QUFHRCxzQkFBWSx3QkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQVZHO0FBREE7QUFkRCxLQXNDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHSUMsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLWixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS1ksV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS1osVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJjLElBQUlkLFFBQS9CO0FBQ0FVLGdCQUFNQSxHQUFHSSxJQUFJZCxRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF2RTBCLGVBQUtlLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9jb3Jwb3JhdGlvbi9jb3Jwb3JhdGlvbicsXHJcbiAgICAgICdwYWdlcy9jb3Jwb3JhdGlvbi9jb3Jwdmlldy9jb3JwdmlldycsXHJcbiAgICAgICdwYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAncGFnZXMvcGVyc29uYWwvcGVyc29uYWwnLFxyXG4gICAgICAncGFnZXMvbG9naW4vbG9naW4nXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJzUx6YeR6J6N5ZyIJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBsaXN0OiBbeyBcclxuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgICAndGV4dCc6ICfkuLvpobUnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL2hvbWUucG5nJyxcclxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL2hvbWVfaGwucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2NvcnBvcmF0aW9uL2NvcnBvcmF0aW9uJyxcclxuICAgICAgICAndGV4dCc6ICflhazlj7gnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL2NvcnAucG5nJyxcclxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL2NvcnBfaGwucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL3BlcnNvbmFsL3BlcnNvbmFsJyxcclxuICAgICAgICAndGV4dCc6ICfmiJHnmoQnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL3BlcnMucG5nJyxcclxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcvaW1hZ2VzL2ljb25zL3BlcnNfaGwucG5nJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHRoaXMudGVzdEFzeW5jKCk7XHJcbiAgfVxyXG5cclxuICBzbGVlcCAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=