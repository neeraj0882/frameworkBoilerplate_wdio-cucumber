'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../..');

var _2 = _interopRequireDefault(_);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('timeout', function () {
  var driver = new _2['default']();
  var implicitWaitSpy = undefined,
      newCommandTimeoutSpy = undefined;
  before(function () {
    implicitWaitSpy = _sinon2['default'].spy(driver, 'setImplicitWait');
    newCommandTimeoutSpy = _sinon2['default'].spy(driver, 'setNewCommandTimeout');
  });
  beforeEach(function () {
    driver.implicitWaitMs = 0;
  });
  afterEach(function () {
    implicitWaitSpy.reset();
    newCommandTimeoutSpy.reset();
  });
  describe('timeouts', function () {
    describe('errors', function () {
      it('should throw an error if something random is sent', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.MJSONWP, type: 'random timeout', ms: 'howdy' }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97").should.eventually.be.rejected);

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should throw an error if timeout is negative', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.MJSONWP, type: 'random timeout', ms: -42 }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97").should.eventually.be.rejected);

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should throw an errors if timeout type is unknown', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.MJSONWP, type: 'random timeout', ms: 42 }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97").should.eventually.be.rejected);

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should throw an error if something random is sent to scriptDuration', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.W3C, script: 123, pageLoad: undefined, implicit: undefined }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97").should.eventually.be.rejected);

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should throw an error if something random is sent to pageLoadDuration', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.W3C, script: undefined, pageLoad: 123, implicit: undefined }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97").should.eventually.be.rejected);

            case 2:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
    });
    describe('implicit wait', function () {
      it('should call setImplicitWait when given an integer', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.MJSONWP, type: 'implicit', ms: 42 }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97"));

            case 2:
              implicitWaitSpy.calledOnce.should.be['true'];
              implicitWaitSpy.firstCall.args[0].should.equal(42);
              driver.implicitWaitMs.should.eql(42);

            case 5:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should call setImplicitWait when given a string', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.MJSONWP, type: 'implicit', ms: '42' }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97"));

            case 2:
              implicitWaitSpy.calledOnce.should.be['true'];
              implicitWaitSpy.firstCall.args[0].should.equal(42);
              driver.implicitWaitMs.should.eql(42);

            case 5:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('should call setImplicitWait when given an integer to implicitDuration', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.W3C, script: undefined, pageLoad: undefined, implicit: 42 }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97"));

            case 2:
              implicitWaitSpy.calledOnce.should.be['true'];
              implicitWaitSpy.firstCall.args[0].should.equal(42);
              driver.implicitWaitMs.should.eql(42);

            case 5:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
      it('should call setImplicitWait when given a string to implicitDuration', function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              context$4$0.next = 2;
              return _regeneratorRuntime.awrap(driver.timeouts({ protocol: _2['default'].DRIVER_PROTOCOL.W3C, script: undefined, pageLoad: undefined, implicit: '42' }, "1dcfe021-8fc8-49bd-8dac-e986d3091b97"));

            case 2:
              implicitWaitSpy.calledOnce.should.be['true'];
              implicitWaitSpy.firstCall.args[0].should.equal(42);
              driver.implicitWaitMs.should.eql(42);

            case 5:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });
    });
  });
  describe('implicitWait', function () {
    it('should call setImplicitWait when given an integer', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.setImplicitWait(42);
            implicitWaitSpy.calledOnce.should.be['true'];
            implicitWaitSpy.firstCall.args[0].should.equal(42);
            driver.implicitWaitMs.should.eql(42);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should call setImplicitWait when given a string', function () {
      driver.implicitWait('42');
      implicitWaitSpy.calledOnce.should.be['true'];
      implicitWaitSpy.firstCall.args[0].should.equal(42);
      driver.implicitWaitMs.should.eql(42);
    });
    it('should throw an error if something random is sent', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.implicitWait('howdy').should.eventually.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw an error if timeout is negative', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.implicitWait(-42).should.eventually.be.rejected);

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('set implicit wait', function () {
    it('should set the implicit wait with an integer', function () {
      driver.setImplicitWait(42);
      driver.implicitWaitMs.should.eql(42);
    });
    describe('with managed driver', function () {
      var managedDriver1 = new _2['default']();
      var managedDriver2 = new _2['default']();
      before(function () {
        driver.addManagedDriver(managedDriver1);
        driver.addManagedDriver(managedDriver2);
      });
      after(function () {
        driver.managedDrivers = [];
      });
      it('should set the implicit wait on managed drivers', function () {
        driver.setImplicitWait(42);
        driver.implicitWaitMs.should.eql(42);
        managedDriver1.implicitWaitMs.should.eql(42);
        managedDriver2.implicitWaitMs.should.eql(42);
      });
    });
  });
  describe('set new command timeout', function () {
    it('should set the new command timeout with an integer', function () {
      driver.setNewCommandTimeout(42);
      driver.newCommandTimeoutMs.should.eql(42);
    });
    describe('with managed driver', function () {
      var managedDriver1 = new _2['default']();
      var managedDriver2 = new _2['default']();
      before(function () {
        driver.addManagedDriver(managedDriver1);
        driver.addManagedDriver(managedDriver2);
      });
      after(function () {
        driver.managedDrivers = [];
      });
      it('should set the new command timeout on managed drivers', function () {
        driver.setNewCommandTimeout(42);
        driver.newCommandTimeoutMs.should.eql(42);
        managedDriver1.newCommandTimeoutMs.should.eql(42);
        managedDriver2.newCommandTimeoutMs.should.eql(42);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYmFzZWRyaXZlci90aW1lb3V0LXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7Z0JBQ3RCLE9BQU87Ozs7cUJBQ1osT0FBTzs7OztBQUd6QixrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBR3pCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWTtBQUM5QixNQUFJLE1BQU0sR0FBRyxtQkFBZ0IsQ0FBQztBQUM5QixNQUFJLGVBQWUsWUFBQTtNQUFFLG9CQUFvQixZQUFBLENBQUM7QUFDMUMsUUFBTSxDQUFDLFlBQVk7QUFDakIsbUJBQWUsR0FBRyxtQkFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDdkQsd0JBQW9CLEdBQUcsbUJBQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0dBQ2xFLENBQUMsQ0FBQztBQUNILFlBQVUsQ0FBQyxZQUFZO0FBQ3JCLFVBQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0dBQzNCLENBQUMsQ0FBQztBQUNILFdBQVMsQ0FBQyxZQUFZO0FBQ3BCLG1CQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEIsd0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7R0FDOUIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZO0FBQy9CLFlBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWTtBQUM3QixRQUFFLENBQUMsbURBQW1ELEVBQUU7Ozs7OytDQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsUUFBUSxFQUFFLGNBQVcsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQyxFQUFFLHNDQUFzQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFB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LENBQUM7QUFDdEMsVUFBSSxjQUFjLEdBQUcsbUJBQWdCLENBQUM7QUFDdEMsWUFBTSxDQUFDLFlBQVk7QUFDakIsY0FBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hDLGNBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztPQUN6QyxDQUFDLENBQUM7QUFDSCxXQUFLLENBQUMsWUFBWTtBQUNoQixjQUFNLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztPQUM1QixDQUFDLENBQUM7QUFDSCxRQUFFLENBQUMsdURBQXVELEVBQUUsWUFBWTtBQUN0RSxjQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEMsY0FBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsc0JBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELHNCQUFjLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUNuRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9iYXNlZHJpdmVyL3RpbWVvdXQtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBCYXNlRHJpdmVyIGZyb20gJy4uLy4uJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5cblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuXG5kZXNjcmliZSgndGltZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGRyaXZlciA9IG5ldyBCYXNlRHJpdmVyKCk7XG4gIGxldCBpbXBsaWNpdFdhaXRTcHksIG5ld0NvbW1hbmRUaW1lb3V0U3B5O1xuICBiZWZvcmUoZnVuY3Rpb24gKCkge1xuICAgIGltcGxpY2l0V2FpdFNweSA9IHNpbm9uLnNweShkcml2ZXIsICdzZXRJbXBsaWNpdFdhaXQnKTtcbiAgICBuZXdDb21tYW5kVGltZW91dFNweSA9IHNpbm9uLnNweShkcml2ZXIsICdzZXROZXdDb21tYW5kVGltZW91dCcpO1xuICB9KTtcbiAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgZHJpdmVyLmltcGxpY2l0V2FpdE1zID0gMDtcbiAgfSk7XG4gIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgaW1wbGljaXRXYWl0U3B5LnJlc2V0KCk7XG4gICAgbmV3Q29tbWFuZFRpbWVvdXRTcHkucmVzZXQoKTtcbiAgfSk7XG4gIGRlc2NyaWJlKCd0aW1lb3V0cycsIGZ1bmN0aW9uICgpIHtcbiAgICBkZXNjcmliZSgnZXJyb3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiBzb21ldGhpbmcgcmFuZG9tIGlzIHNlbnQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF3YWl0IGRyaXZlci50aW1lb3V0cyh7cHJvdG9jb2w6IEJhc2VEcml2ZXIuRFJJVkVSX1BST1RPQ09MLk1KU09OV1AsIHR5cGU6ICdyYW5kb20gdGltZW91dCcsIG1zOiAnaG93ZHknfSwgXCIxZGNmZTAyMS04ZmM4LTQ5YmQtOGRhYy1lOTg2ZDMwOTFiOTdcIikuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgdGltZW91dCBpcyBuZWdhdGl2ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXdhaXQgZHJpdmVyLnRpbWVvdXRzKHtwcm90b2NvbDogQmFzZURyaXZlci5EUklWRVJfUFJPVE9DT0wuTUpTT05XUCwgdHlwZTogJ3JhbmRvbSB0aW1lb3V0JywgbXM6IC00Mn0sIFwiMWRjZmUwMjEtOGZjOC00OWJkLThkYWMtZTk4NmQzMDkxYjk3XCIpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkO1xuICAgICAgfSk7XG4gICAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9ycyBpZiB0aW1lb3V0IHR5cGUgaXMgdW5rbm93bicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXdhaXQgZHJpdmVyLnRpbWVvdXRzKHtwcm90b2NvbDogQmFzZURyaXZlci5EUklWRVJfUFJPVE9DT0wuTUpTT05XUCwgdHlwZTogJ3JhbmRvbSB0aW1lb3V0JywgbXM6IDQyfSwgXCIxZGNmZTAyMS04ZmM4LTQ5YmQtOGRhYy1lOTg2ZDMwOTFiOTdcIikuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc29tZXRoaW5nIHJhbmRvbSBpcyBzZW50IHRvIHNjcmlwdER1cmF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FpdCBkcml2ZXIudGltZW91dHMoe3Byb3RvY29sOiBCYXNlRHJpdmVyLkRSSVZFUl9QUk9UT0NPTC5XM0MsIHNjcmlwdDogMTIzLCBwYWdlTG9hZDogdW5kZWZpbmVkLCBpbXBsaWNpdDogdW5kZWZpbmVkfSwgXCIxZGNmZTAyMS04ZmM4LTQ5YmQtOGRhYy1lOTg2ZDMwOTFiOTdcIikuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc29tZXRoaW5nIHJhbmRvbSBpcyBzZW50IHRvIHBhZ2VMb2FkRHVyYXRpb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF3YWl0IGRyaXZlci50aW1lb3V0cyh7cHJvdG9jb2w6IEJhc2VEcml2ZXIuRFJJVkVSX1BST1RPQ09MLlczQywgc2NyaXB0OiB1bmRlZmluZWQsIHBhZ2VMb2FkOiAxMjMsIGltcGxpY2l0OiB1bmRlZmluZWR9LCBcIjFkY2ZlMDIxLThmYzgtNDliZC04ZGFjLWU5ODZkMzA5MWI5N1wiKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKCdpbXBsaWNpdCB3YWl0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaXQoJ3Nob3VsZCBjYWxsIHNldEltcGxpY2l0V2FpdCB3aGVuIGdpdmVuIGFuIGludGVnZXInLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF3YWl0IGRyaXZlci50aW1lb3V0cyh7cHJvdG9jb2w6IEJhc2VEcml2ZXIuRFJJVkVSX1BST1RPQ09MLk1KU09OV1AsIHR5cGU6ICdpbXBsaWNpdCcsIG1zOiA0Mn0sIFwiMWRjZmUwMjEtOGZjOC00OWJkLThkYWMtZTk4NmQzMDkxYjk3XCIpO1xuICAgICAgICBpbXBsaWNpdFdhaXRTcHkuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgaW1wbGljaXRXYWl0U3B5LmZpcnN0Q2FsbC5hcmdzWzBdLnNob3VsZC5lcXVhbCg0Mik7XG4gICAgICAgIGRyaXZlci5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICAgIH0pO1xuICAgICAgaXQoJ3Nob3VsZCBjYWxsIHNldEltcGxpY2l0V2FpdCB3aGVuIGdpdmVuIGEgc3RyaW5nJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FpdCBkcml2ZXIudGltZW91dHMoe3Byb3RvY29sOiBCYXNlRHJpdmVyLkRSSVZFUl9QUk9UT0NPTC5NSlNPTldQLCB0eXBlOiAnaW1wbGljaXQnLCBtczogJzQyJ30sIFwiMWRjZmUwMjEtOGZjOC00OWJkLThkYWMtZTk4NmQzMDkxYjk3XCIpO1xuICAgICAgICBpbXBsaWNpdFdhaXRTcHkuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgaW1wbGljaXRXYWl0U3B5LmZpcnN0Q2FsbC5hcmdzWzBdLnNob3VsZC5lcXVhbCg0Mik7XG4gICAgICAgIGRyaXZlci5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgnc2hvdWxkIGNhbGwgc2V0SW1wbGljaXRXYWl0IHdoZW4gZ2l2ZW4gYW4gaW50ZWdlciB0byBpbXBsaWNpdER1cmF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FpdCBkcml2ZXIudGltZW91dHMoe3Byb3RvY29sOiBCYXNlRHJpdmVyLkRSSVZFUl9QUk9UT0NPTC5XM0MsIHNjcmlwdDogdW5kZWZpbmVkLCBwYWdlTG9hZDogdW5kZWZpbmVkLCBpbXBsaWNpdDogNDJ9LCBcIjFkY2ZlMDIxLThmYzgtNDliZC04ZGFjLWU5ODZkMzA5MWI5N1wiKTtcbiAgICAgICAgaW1wbGljaXRXYWl0U3B5LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICAgIGltcGxpY2l0V2FpdFNweS5maXJzdENhbGwuYXJnc1swXS5zaG91bGQuZXF1YWwoNDIpO1xuICAgICAgICBkcml2ZXIuaW1wbGljaXRXYWl0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgY2FsbCBzZXRJbXBsaWNpdFdhaXQgd2hlbiBnaXZlbiBhIHN0cmluZyB0byBpbXBsaWNpdER1cmF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FpdCBkcml2ZXIudGltZW91dHMoe3Byb3RvY29sOiBCYXNlRHJpdmVyLkRSSVZFUl9QUk9UT0NPTC5XM0MsIHNjcmlwdDogdW5kZWZpbmVkLCBwYWdlTG9hZDogdW5kZWZpbmVkLCBpbXBsaWNpdDogJzQyJ30sIFwiMWRjZmUwMjEtOGZjOC00OWJkLThkYWMtZTk4NmQzMDkxYjk3XCIpO1xuICAgICAgICBpbXBsaWNpdFdhaXRTcHkuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgaW1wbGljaXRXYWl0U3B5LmZpcnN0Q2FsbC5hcmdzWzBdLnNob3VsZC5lcXVhbCg0Mik7XG4gICAgICAgIGRyaXZlci5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2ltcGxpY2l0V2FpdCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgc2V0SW1wbGljaXRXYWl0IHdoZW4gZ2l2ZW4gYW4gaW50ZWdlcicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5zZXRJbXBsaWNpdFdhaXQoNDIpO1xuICAgICAgaW1wbGljaXRXYWl0U3B5LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICBpbXBsaWNpdFdhaXRTcHkuZmlyc3RDYWxsLmFyZ3NbMF0uc2hvdWxkLmVxdWFsKDQyKTtcbiAgICAgIGRyaXZlci5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGNhbGwgc2V0SW1wbGljaXRXYWl0IHdoZW4gZ2l2ZW4gYSBzdHJpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuaW1wbGljaXRXYWl0KCc0MicpO1xuICAgICAgaW1wbGljaXRXYWl0U3B5LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICBpbXBsaWNpdFdhaXRTcHkuZmlyc3RDYWxsLmFyZ3NbMF0uc2hvdWxkLmVxdWFsKDQyKTtcbiAgICAgIGRyaXZlci5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIHNvbWV0aGluZyByYW5kb20gaXMgc2VudCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5pbXBsaWNpdFdhaXQoJ2hvd2R5Jykuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWQ7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiB0aW1lb3V0IGlzIG5lZ2F0aXZlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLmltcGxpY2l0V2FpdCgtNDIpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnc2V0IGltcGxpY2l0IHdhaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBzZXQgdGhlIGltcGxpY2l0IHdhaXQgd2l0aCBhbiBpbnRlZ2VyJywgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLnNldEltcGxpY2l0V2FpdCg0Mik7XG4gICAgICBkcml2ZXIuaW1wbGljaXRXYWl0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoJ3dpdGggbWFuYWdlZCBkcml2ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbWFuYWdlZERyaXZlcjEgPSBuZXcgQmFzZURyaXZlcigpO1xuICAgICAgbGV0IG1hbmFnZWREcml2ZXIyID0gbmV3IEJhc2VEcml2ZXIoKTtcbiAgICAgIGJlZm9yZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyaXZlci5hZGRNYW5hZ2VkRHJpdmVyKG1hbmFnZWREcml2ZXIxKTtcbiAgICAgICAgZHJpdmVyLmFkZE1hbmFnZWREcml2ZXIobWFuYWdlZERyaXZlcjIpO1xuICAgICAgfSk7XG4gICAgICBhZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyaXZlci5tYW5hZ2VkRHJpdmVycyA9IFtdO1xuICAgICAgfSk7XG4gICAgICBpdCgnc2hvdWxkIHNldCB0aGUgaW1wbGljaXQgd2FpdCBvbiBtYW5hZ2VkIGRyaXZlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyaXZlci5zZXRJbXBsaWNpdFdhaXQoNDIpO1xuICAgICAgICBkcml2ZXIuaW1wbGljaXRXYWl0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgICAgIG1hbmFnZWREcml2ZXIxLmltcGxpY2l0V2FpdE1zLnNob3VsZC5lcWwoNDIpO1xuICAgICAgICBtYW5hZ2VkRHJpdmVyMi5pbXBsaWNpdFdhaXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3NldCBuZXcgY29tbWFuZCB0aW1lb3V0JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgc2V0IHRoZSBuZXcgY29tbWFuZCB0aW1lb3V0IHdpdGggYW4gaW50ZWdlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5zZXROZXdDb21tYW5kVGltZW91dCg0Mik7XG4gICAgICBkcml2ZXIubmV3Q29tbWFuZFRpbWVvdXRNcy5zaG91bGQuZXFsKDQyKTtcbiAgICB9KTtcbiAgICBkZXNjcmliZSgnd2l0aCBtYW5hZ2VkIGRyaXZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBtYW5hZ2VkRHJpdmVyMSA9IG5ldyBCYXNlRHJpdmVyKCk7XG4gICAgICBsZXQgbWFuYWdlZERyaXZlcjIgPSBuZXcgQmFzZURyaXZlcigpO1xuICAgICAgYmVmb3JlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZHJpdmVyLmFkZE1hbmFnZWREcml2ZXIobWFuYWdlZERyaXZlcjEpO1xuICAgICAgICBkcml2ZXIuYWRkTWFuYWdlZERyaXZlcihtYW5hZ2VkRHJpdmVyMik7XG4gICAgICB9KTtcbiAgICAgIGFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZHJpdmVyLm1hbmFnZWREcml2ZXJzID0gW107XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgc2V0IHRoZSBuZXcgY29tbWFuZCB0aW1lb3V0IG9uIG1hbmFnZWQgZHJpdmVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZHJpdmVyLnNldE5ld0NvbW1hbmRUaW1lb3V0KDQyKTtcbiAgICAgICAgZHJpdmVyLm5ld0NvbW1hbmRUaW1lb3V0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgICAgIG1hbmFnZWREcml2ZXIxLm5ld0NvbW1hbmRUaW1lb3V0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgICAgIG1hbmFnZWREcml2ZXIyLm5ld0NvbW1hbmRUaW1lb3V0TXMuc2hvdWxkLmVxbCg0Mik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4vLi4ifQ==
