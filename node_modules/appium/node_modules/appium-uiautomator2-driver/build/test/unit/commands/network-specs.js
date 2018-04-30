'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Network', function () {
  describe('SetNetworkConnection', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        var _this = this;

        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']();
            driver.adb = new _appiumAdb2['default']();
            sandbox.stub(driver, 'getNetworkConnection');
            sandbox.stub(driver, 'wrapBootstrapDisconnect', function callee$3$0(fn) {
              return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
                while (1) switch (context$4$0.prev = context$4$0.next) {
                  case 0:
                    context$4$0.next = 2;
                    return _regeneratorRuntime.awrap(fn());

                  case 2:
                  case 'end':
                    return context$4$0.stop();
                }
              }, null, _this);
            });
            sandbox.stub(driver.adb, 'setAirplaneMode');
            sandbox.stub(driver.adb, 'broadcastAirplaneMode');
            sandbox.stub(driver, 'setWifiState');
            sandbox.stub(driver.adb, 'setDataState');

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should turn off wifi and data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(0));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(0).should.be['true'];
            driver.adb.setDataState.calledWithExactly(0, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should turn on and broadcast airplane mode', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(1));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.setWifiState.called.should.be['false'];
            driver.adb.setDataState.called.should.be['false'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should turn on wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(2));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(1).should.be['true'];
            driver.adb.setDataState.calledWithExactly(0, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should turn on data on emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.avd = 'something';
            context$3$0.prev = 1;
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(4));

          case 4:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(0).should.be['true'];
            driver.adb.setDataState.calledWithExactly(1, true).should.be['true'];

          case 8:
            context$3$0.prev = 8;

            driver.opts.avd = undefined;
            return context$3$0.finish(8);

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this, [[1,, 8, 11]]);
    });
    it('should turn on data and wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(6));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.setWifiState.calledWithExactly(1).should.be['true'];
            driver.adb.setDataState.calledWithExactly(1, false).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9uZXR3b3JrLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7cUJBQzNCLE9BQU87Ozs7eUJBQ1QsWUFBWTs7OztnQkFDVSxVQUFVOzs7O0FBRWhELElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLE9BQU8sR0FBRyxtQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDOUIsVUFBUSxDQUFDLHNCQUFzQixFQUFFLFlBQVk7QUFDM0MsY0FBVSxDQUFDOzs7Ozs7QUFDVCxrQkFBTSxHQUFHLG1CQUErQixDQUFDO0FBQ3pDLGtCQUFNLENBQUMsR0FBRyxHQUFHLDRCQUFTLENBQUM7QUFDdkIsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDN0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHlCQUF5QixFQUFFLG9CQUFPLEVBQUU7Ozs7O3FEQUNqRCxFQUFFLEVBQUU7Ozs7Ozs7YUFDWCxDQUFDLENBQUM7QUFDSCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2xELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7O0tBQzFDLENBQUMsQ0FBQztBQUNILGFBQVMsQ0FBQyxZQUFZO0FBQ3BCLGFBQU8s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LE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7QUFFbEUsa0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQzs7Ozs7Ozs7S0FFL0IsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDhCQUE4QixFQUFFOzs7Ozs2Q0FDM0IsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7O0FBQ3BDLGtCQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDL0Qsa0JBQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ3JFLGtCQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUN4RCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNwRSxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2NvbW1hbmRzL25ldHdvcmstc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgQURCIGZyb20gJ2FwcGl1bS1hZGInO1xuaW1wb3J0IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIgZnJvbSAnLi4vLi4vLi4nO1xuXG5sZXQgZHJpdmVyO1xubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ05ldHdvcmsnLCBmdW5jdGlvbiAoKSB7XG4gIGRlc2NyaWJlKCdTZXROZXR3b3JrQ29ubmVjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkVWlhdXRvbWF0b3IyRHJpdmVyKCk7XG4gICAgICBkcml2ZXIuYWRiID0gbmV3IEFEQigpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldE5ldHdvcmtDb25uZWN0aW9uJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnd3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QnLCBhc3luYyAoZm4pID0+IHtcbiAgICAgICAgYXdhaXQgZm4oKTtcbiAgICAgIH0pO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdzZXRBaXJwbGFuZU1vZGUnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnYnJvYWRjYXN0QWlycGxhbmVNb2RlJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc2V0V2lmaVN0YXRlJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NldERhdGFTdGF0ZScpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb2ZmIHdpZmkgYW5kIGRhdGEnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oMCk7XG4gICAgICBkcml2ZXIuYWRiLnNldEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLnNldFdpZmlTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2V0RGF0YVN0YXRlLmNhbGxlZFdpdGhFeGFjdGx5KDAsIGZhbHNlKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb24gYW5kIGJyb2FkY2FzdCBhaXJwbGFuZSBtb2RlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDEpO1xuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgxKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5zZXRXaWZpU3RhdGUuY2FsbGVkLnNob3VsZC5iZS5mYWxzZTtcbiAgICAgIGRyaXZlci5hZGIuc2V0RGF0YVN0YXRlLmNhbGxlZC5zaG91bGQuYmUuZmFsc2U7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0dXJuIG9uIHdpZmknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oMik7XG4gICAgICBkcml2ZXIuYWRiLnNldEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLnNldFdpZmlTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgxKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2V0RGF0YVN0YXRlLmNhbGxlZFdpdGhFeGFjdGx5KDAsIGZhbHNlKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb24gZGF0YSBvbiBlbXVsYXRvcicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5vcHRzLmF2ZCA9ICdzb21ldGhpbmcnO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDQpO1xuICAgICAgICBkcml2ZXIuYWRiLnNldEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgZHJpdmVyLmFkYi5icm9hZGNhc3RBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICAgIGRyaXZlci5zZXRXaWZpU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICAgIGRyaXZlci5hZGIuc2V0RGF0YVN0YXRlLmNhbGxlZFdpdGhFeGFjdGx5KDEsIHRydWUpLnNob3VsZC5iZS50cnVlO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZHJpdmVyLm9wdHMuYXZkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdHVybiBvbiBkYXRhIGFuZCB3aWZpJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDYpO1xuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5zZXRXaWZpU3RhdGUuY2FsbGVkV2l0aEV4YWN0bHkoMSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLnNldERhdGFTdGF0ZS5jYWxsZWRXaXRoRXhhY3RseSgxLCBmYWxzZSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uIn0=
