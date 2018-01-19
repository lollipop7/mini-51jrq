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
      pages: ['pages/home/home', 'pages/corporation/corporation', 'pages/personal/personal', 'pages/login/login'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBd0NFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFyQ2ZBLE1BcUNlLEdBckNOO0FBQ1BDLGFBQU8sQ0FDTCxpQkFESyxFQUVMLCtCQUZLLEVBR0wseUJBSEssRUFJTCxtQkFKSyxDQURBO0FBT1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixPQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FQRDtBQWFQQyxjQUFRO0FBQ05DLGNBQU0sQ0FBQztBQUNMLHNCQUFZLGlCQURQO0FBRUwsa0JBQVEsSUFGSDtBQUdMLHNCQUFZLHdCQUhQO0FBSUwsOEJBQW9CO0FBSmYsU0FBRCxFQUtIO0FBQ0Qsc0JBQVksK0JBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksd0JBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FMRyxFQVVIO0FBQ0Qsc0JBQVkseUJBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksd0JBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FWRztBQURBO0FBYkQsS0FxQ007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR0lDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS1osVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtZLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtaLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCYyxJQUFJZCxRQUEvQjtBQUNBVSxnQkFBTUEsR0FBR0ksSUFBSWQsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBdEUwQixlQUFLZSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgJ3BhZ2VzL2NvcnBvcmF0aW9uL2NvcnBvcmF0aW9uJyxcclxuICAgICAgJ3BhZ2VzL3BlcnNvbmFsL3BlcnNvbmFsJyxcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICc1MemHkeiejeWciCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgbGlzdDogW3sgXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hvbWUvaG9tZScsXHJcbiAgICAgICAgJ3RleHQnOiAn5Li76aG1JyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9ob21lLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9ob21lX2hsLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9jb3Jwb3JhdGlvbi9jb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgJ3RleHQnOiAn5YWs5Y+4JyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9jb3JwLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9jb3JwX2hsLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9wZXJzb25hbC9wZXJzb25hbCcsXHJcbiAgICAgICAgJ3RleHQnOiAn5oiR55qEJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9wZXJzLnBuZycsXHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnL2ltYWdlcy9pY29ucy9wZXJzX2hsLnBuZydcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpO1xyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=