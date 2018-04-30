'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _2 = require('../../..');

var _3 = _interopRequireDefault(_2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _desired = require('../desired');

var _desired2 = _interopRequireDefault(_desired);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var PNG_MAGIC = '89504e47';
var PNG_MAGIC_LENGTH = 4;

var driver = undefined;
var caps = _lodash2['default'].defaults({
  appPackage: 'io.appium.android.apis',
  appActivity: '.view.TextFields'
}, _desired2['default']);

describe('actions', function () {
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = new _3['default']();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(caps));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.deleteSession());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  describe('replaceValue', function () {
    it('should replace existing value in a text field', function callee$2$0() {
      var el;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.t0 = _lodash2['default'];
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.findElements('class name', 'android.widget.EditText'));

          case 3:
            context$3$0.t1 = context$3$0.sent;
            el = context$3$0.t0.last.call(context$3$0.t0, context$3$0.t1);

            el.should.exist;
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(driver.setValue('original value', el.ELEMENT));

          case 8:
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('original value'));

          case 10:
            context$3$0.next = 12;
            return _regeneratorRuntime.awrap(driver.replaceValue('replaced value', el.ELEMENT));

          case 12:
            context$3$0.next = 14;
            return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('replaced value'));

          case 14:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('key codes', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.startActivity(caps.appPackage, caps.appActivity));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should press key code 3 without metastate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.pressKeyCode(3).should.not.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should press key code 3 with metastate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.pressKeyCode(3, 193).should.not.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should long press key code 3 without metastate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.longPressKeyCode(3).should.not.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should long press key code 3 with metastate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.longPressKeyCode(3, 193).should.not.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('getScreenshot', function () {
    it('should return valid base64-encoded screenshot', function callee$2$0() {
      var base64screenshot, imageMagic;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.getScreenshot());

          case 2:
            base64screenshot = context$3$0.sent;
            imageMagic = new Buffer(base64screenshot, 'base64').toString('hex', 0, PNG_MAGIC_LENGTH);

            imageMagic.should.be.equal(PNG_MAGIC);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9hY3Rpb25zLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2lCQUNuQixVQUFVOzs7O3NCQUN0QixRQUFROzs7O3VCQUNHLFlBQVk7Ozs7QUFHckMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDN0IsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0FBRTNCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLElBQUksR0FBRyxvQkFBRSxRQUFRLENBQUM7QUFDcEIsWUFBVSxFQUFFLHdCQUF3QjtBQUNwQyxhQUFXLEVBQUUsa0JBQWtCO0NBQ2hDLHVCQUFlLENBQUM7O0FBR2pCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWTtBQUM5QixRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLG1CQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7R0FDakMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsY0FBYyxFQUFFLFlBQVk7QUFDbkMsTUFBRSxDQUFDLCtDQUErQyxFQUFFO1VBQzlDLEVBQUU7Ozs7Ozs2Q0FBZ0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUseUJBQXlCLENBQUM7Ozs7QUFBOUUsY0FBRSxrQkFBSyxJQUFJOztBQUNmLGNBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOzs2Q0FDVixNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7Ozs7NkNBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzs7OzZDQUVwRSxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7Ozs7NkNBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7O0tBQzNFLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsV0FBVyxFQUFFLFlBQVk7QUFDaEMsY0FBVSxDQUFDOzs7Ozs2Q0FDSCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztLQUM5RCxDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLDJDQUEyQyxFQUFFOzs7Ozs2Q0FDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Ozs7O0tBQ3BELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx3Q0FBd0MsRUFBRTs7Ozs7NkNBQ3JDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7Ozs7S0FDekQsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLGdEQUFnRCxFQUFFOzs7Ozs2Q0FDN0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7Ozs7S0FDeEQsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDZDQUE2QyxFQUFFOzs7Ozs2Q0FDMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Ozs7O0tBQzdELENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7QUFDcEMsTUFBRSxDQUFDLCtDQUErQyxFQUFFO1VBQzVDLGdCQUFnQixFQUNoQixVQUFVOzs7Ozs2Q0FEZSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7QUFBL0MsNEJBQWdCO0FBQ2hCLHNCQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7O0FBQzlGLHNCQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7S0FDdkMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9jb21tYW5kcy9hY3Rpb25zLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IEFuZHJvaWREcml2ZXIgZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBERUZBVUxUX0NBUFMgZnJvbSAnLi4vZGVzaXJlZCc7XG5cblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuY29uc3QgUE5HX01BR0lDID0gJzg5NTA0ZTQ3JztcbmNvbnN0IFBOR19NQUdJQ19MRU5HVEggPSA0O1xuXG5sZXQgZHJpdmVyO1xubGV0IGNhcHMgPSBfLmRlZmF1bHRzKHtcbiAgYXBwUGFja2FnZTogJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnLFxuICBhcHBBY3Rpdml0eTogJy52aWV3LlRleHRGaWVsZHMnXG59LCBERUZBVUxUX0NBUFMpO1xuXG5cbmRlc2NyaWJlKCdhY3Rpb25zJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oY2Fwcyk7XG4gIH0pO1xuICBhZnRlcihhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgYXdhaXQgZHJpdmVyLmRlbGV0ZVNlc3Npb24oKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3JlcGxhY2VWYWx1ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHJlcGxhY2UgZXhpc3RpbmcgdmFsdWUgaW4gYSB0ZXh0IGZpZWxkJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGVsID0gXy5sYXN0KGF3YWl0IGRyaXZlci5maW5kRWxlbWVudHMoJ2NsYXNzIG5hbWUnLCAnYW5kcm9pZC53aWRnZXQuRWRpdFRleHQnKSk7XG4gICAgICBlbC5zaG91bGQuZXhpc3Q7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0VmFsdWUoJ29yaWdpbmFsIHZhbHVlJywgZWwuRUxFTUVOVCk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChlbC5FTEVNRU5UKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnb3JpZ2luYWwgdmFsdWUnKTtcblxuICAgICAgYXdhaXQgZHJpdmVyLnJlcGxhY2VWYWx1ZSgncmVwbGFjZWQgdmFsdWUnLCBlbC5FTEVNRU5UKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KGVsLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKCdyZXBsYWNlZCB2YWx1ZScpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgna2V5IGNvZGVzJywgZnVuY3Rpb24gKCkge1xuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLnN0YXJ0QWN0aXZpdHkoY2Fwcy5hcHBQYWNrYWdlLCBjYXBzLmFwcEFjdGl2aXR5KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcHJlc3Mga2V5IGNvZGUgMyB3aXRob3V0IG1ldGFzdGF0ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5wcmVzc0tleUNvZGUoMykuc2hvdWxkLm5vdC5iZS5yZWplY3RlZDtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHByZXNzIGtleSBjb2RlIDMgd2l0aCBtZXRhc3RhdGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIucHJlc3NLZXlDb2RlKDMsIDE5Mykuc2hvdWxkLm5vdC5iZS5yZWplY3RlZDtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGxvbmcgcHJlc3Mga2V5IGNvZGUgMyB3aXRob3V0IG1ldGFzdGF0ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5sb25nUHJlc3NLZXlDb2RlKDMpLnNob3VsZC5ub3QuYmUucmVqZWN0ZWQ7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBsb25nIHByZXNzIGtleSBjb2RlIDMgd2l0aCBtZXRhc3RhdGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIubG9uZ1ByZXNzS2V5Q29kZSgzLCAxOTMpLnNob3VsZC5ub3QuYmUucmVqZWN0ZWQ7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdnZXRTY3JlZW5zaG90JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHZhbGlkIGJhc2U2NC1lbmNvZGVkIHNjcmVlbnNob3QnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBiYXNlNjRzY3JlZW5zaG90ID0gYXdhaXQgZHJpdmVyLmdldFNjcmVlbnNob3QoKTtcbiAgICAgIGNvbnN0IGltYWdlTWFnaWMgPSBuZXcgQnVmZmVyKGJhc2U2NHNjcmVlbnNob3QsICdiYXNlNjQnKS50b1N0cmluZygnaGV4JywgMCwgUE5HX01BR0lDX0xFTkdUSCk7XG4gICAgICBpbWFnZU1hZ2ljLnNob3VsZC5iZS5lcXVhbChQTkdfTUFHSUMpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLiJ9
