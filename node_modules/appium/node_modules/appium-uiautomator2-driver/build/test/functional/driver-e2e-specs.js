'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ = require('../..');

var _desired = require('./desired');

var _helpersSession = require('./helpers/session');

var should = _chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var APIDEMOS_PACKAGE = 'io.appium.android.apis';

function killServer(adbPort) {
  var adb;
  return _regeneratorRuntime.async(function killServer$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (process.env.TESTOBJECT_E2E_TESTS) {
          context$1$0.next = 6;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_appiumAdb2['default'].createADB({ adbPort: adbPort }));

      case 3:
        adb = context$1$0.sent;
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(adb.killServer());

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

describe('createSession', function () {
  var driver = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(killServer(5037));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  describe('default adb port', function () {
    afterEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!driver) {
              context$3$0.next = 3;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.quit());

          case 3:
            driver = null;

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should start android session focusing on default pkg and act', function callee$2$0() {
      var appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

          case 2:
            driver = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 5:
            appPackage = context$3$0.sent;
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 8:
            appActivity = context$3$0.sent;

            appPackage.should.equal('io.appium.android.apis');
            appActivity.should.equal('.ApiDemos');

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should start android session focusing on custom pkg and act', function callee$2$0() {
      var caps, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal(caps.appPackage);
            appActivity.should.equal(caps.appActivity);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should error out for not apk extension', function callee$2$0() {
      var caps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!process.env.TESTOBJECT_E2E_TESTS) {
              context$3$0.next = 2;
              break;
            }

            return context$3$0.abrupt('return');

          case 2:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              app: 'foo',
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.prev = 3;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 6:
            throw new Error('Call to \'initDriver\' should not have succeeded');

          case 9:
            context$3$0.prev = 9;
            context$3$0.t0 = context$3$0['catch'](3);

            context$3$0.t0.data.should.match(/does not exist or is not accessible/);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this, [[3, 9]]);
    });
    it('should error out for invalid app path', function callee$2$0() {
      var caps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!process.env.TESTOBJECT_E2E_TESTS) {
              context$3$0.next = 2;
              break;
            }

            return context$3$0.abrupt('return');

          case 2:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              app: 'foo.apk',
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.prev = 3;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 6:
            throw new Error('Call to \'initDriver\' should not have succeeded');

          case 9:
            context$3$0.prev = 9;
            context$3$0.t0 = context$3$0['catch'](3);

            context$3$0.t0.data.should.match(/does not exist or is not accessible/);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this, [[3, 9]]);
    });
    it('should get device model, manufacturer and screen size in session details', function callee$2$0() {
      var caps, serverCaps;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              appPackage: 'io.appium.android.apis',
              appActivity: '.view.SplitTouchView'
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.sessionCapabilities());

          case 6:
            serverCaps = context$3$0.sent;

            serverCaps.deviceScreenSize.should.exist;
            serverCaps.deviceScreenDensity.should.exist;
            serverCaps.deviceModel.should.exist;
            serverCaps.deviceManufacturer.should.exist;

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('custom adb port', function () {
    // Don't do these tests on TestObject. Cannot use TestObject's ADB.
    if (process.env.TESTOBJECT_E2E_TESTS) {
      return;
    }

    var adbPort = 5042;
    var driver = undefined;

    before(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(killServer(5037));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    afterEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!driver) {
              context$3$0.next = 3;
              break;
            }

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.quit());

          case 3:
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(killServer(adbPort));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should start android session with a custom adb port', function callee$2$0() {
      var caps, appPackage, appActivity;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            caps = _Object$assign({}, _desired.APIDEMOS_CAPS, {
              adbPort: adbPort
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(caps, adbPort));

          case 3:
            driver = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getCurrentPackage());

          case 6:
            appPackage = context$3$0.sent;
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.getCurrentDeviceActivity());

          case 9:
            appActivity = context$3$0.sent;

            appPackage.should.equal('io.appium.android.apis');
            appActivity.should.equal('.ApiDemos');

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('w3c compliance', function () {
    it('should start a session with W3C caps', function callee$2$0() {
      var _ref, value, sessionId, status;

      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(_requestPromise2['default'].post({ url: 'http://' + _.DEFAULT_HOST + ':' + _.DEFAULT_PORT + '/wd/hub/session', json: {
                capabilities: {
                  alwaysMatch: _desired.APIDEMOS_CAPS,
                  firstMatch: [{}]
                }
              } }));

          case 2:
            _ref = context$3$0.sent;
            value = _ref.value;
            sessionId = _ref.sessionId;
            status = _ref.status;

            value.should.exist;
            value.capabilities.should.exist;
            value.sessionId.should.exist;
            should.not.exist(sessionId);
            should.not.exist(status);
            context$3$0.next = 13;
            return _regeneratorRuntime.awrap(_requestPromise2['default']['delete']({ url: 'http://' + _.DEFAULT_HOST + ':' + _.DEFAULT_PORT + '/wd/hub/session/' + value.sessionId }));

          case 13:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});

describe('close', function () {
  it('should close application', function callee$1$0() {
    var driver, appPackage;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap((0, _helpersSession.initDriver)(_desired.APIDEMOS_CAPS));

        case 2:
          driver = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.closeApp());

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.getCurrentPackage());

        case 7:
          appPackage = context$2$0.sent;

          if (appPackage) {
            appPackage.should.not.equal(APIDEMOS_PACKAGE);
          }

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
});

// Don't test this on TestObject. The 'app' cap gets stripped out and can't be tested

// Don't test this on TestObject. The 'app' cap gets stripped out and can't be tested
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9kcml2ZXItZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7Ozt5QkFDN0IsWUFBWTs7Ozs4QkFDUixpQkFBaUI7Ozs7Z0JBQ00sT0FBTzs7dUJBQ3BCLFdBQVc7OzhCQUNkLG1CQUFtQjs7QUFFOUMsSUFBTSxNQUFNLEdBQUcsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDN0Isa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBTSxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQzs7QUFFbEQsU0FBZSxVQUFVLENBQUUsT0FBTztNQUUxQixHQUFHOzs7O1lBREosT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0I7Ozs7Ozt5Q0FDbkIsdUJBQUksU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBQyxDQUFDOzs7QUFBcEMsV0FBRzs7eUNBQ0QsR0FBRyxDQUFDLFVBQVUsRUFBRTs7Ozs7OztDQUV6Qjs7QUFFRCxRQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7QUFDcEMsTUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFFBQU0sQ0FBQzs7Ozs7MkNBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQzs7Ozs7OztHQUN2QixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVk7QUFDdkMsYUFBUyxDQUFDOzs7O2lCQUNKLE1BQU07Ozs7Ozs2Q0FDRixNQUFNLENBQUMsSUFBSSxFQUFFOzs7QUFFckIsa0JBQU0sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7S0FDZixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLDhEQUE4RCxFQUFFO1VBRTdELFVBQVUsRUFDVixXQUFXOzs7Ozs2Q0FGQSx1REFBeUI7OztBQUF4QyxrQkFBTTs7NkNBQ2lCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTs7O0FBQTdDLHNCQUFVOzs2Q0FDVSxNQUFNLENBQUMsd0JBQXdC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LFNBQVM7QUFBRSxrQkFBTSxRQUFOLE1BQU07O0FBTWhDLGlCQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNuQixpQkFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2hDLGlCQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0Isa0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7NkNBQ25CLHFDQUFjLENBQUMsRUFBQyxHQUFHLDJFQUEyRCxLQUFLLENBQUMsU0FBUyxBQUFFLEVBQUMsQ0FBQzs7Ozs7OztLQUN4RyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZO0FBQzVCLElBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUN6QixNQUFNLEVBRU4sVUFBVTs7Ozs7MkNBRkssdURBQXlCOzs7QUFBeEMsZ0JBQU07OzJDQUNKLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Ozs7MkNBQ0EsTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7QUFBN0Msb0JBQVU7O0FBQ2QsY0FBSSxVQUFVLEVBQUU7QUFDZCxzQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7V0FDL0M7Ozs7Ozs7R0FDRixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2RyaXZlci1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UnO1xuaW1wb3J0IHsgREVGQVVMVF9IT1NULCBERUZBVUxUX1BPUlQgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBBUElERU1PU19DQVBTIH0gZnJvbSAnLi9kZXNpcmVkJztcbmltcG9ydCB7IGluaXREcml2ZXIgfSBmcm9tICcuL2hlbHBlcnMvc2Vzc2lvbic7XG5cbmNvbnN0IHNob3VsZCA9IGNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmNvbnN0IEFQSURFTU9TX1BBQ0tBR0UgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGtpbGxTZXJ2ZXIgKGFkYlBvcnQpIHtcbiAgaWYgKCFwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xuICAgIGxldCBhZGIgPSBhd2FpdCBBREIuY3JlYXRlQURCKHthZGJQb3J0fSk7XG4gICAgYXdhaXQgYWRiLmtpbGxTZXJ2ZXIoKTtcbiAgfVxufVxuXG5kZXNjcmliZSgnY3JlYXRlU2Vzc2lvbicsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGRyaXZlcjtcbiAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhd2FpdCBraWxsU2VydmVyKDUwMzcpO1xuICB9KTtcblxuICBkZXNjcmliZSgnZGVmYXVsdCBhZGIgcG9ydCcsIGZ1bmN0aW9uICgpIHtcbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRyaXZlcikge1xuICAgICAgICBhd2FpdCBkcml2ZXIucXVpdCgpO1xuICAgICAgfVxuICAgICAgZHJpdmVyID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgc3RhcnQgYW5kcm9pZCBzZXNzaW9uIGZvY3VzaW5nIG9uIGRlZmF1bHQgcGtnIGFuZCBhY3QnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKEFQSURFTU9TX0NBUFMpO1xuICAgICAgbGV0IGFwcFBhY2thZ2UgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudFBhY2thZ2UoKTtcbiAgICAgIGxldCBhcHBBY3Rpdml0eSA9IGF3YWl0IGRyaXZlci5nZXRDdXJyZW50RGV2aWNlQWN0aXZpdHkoKTtcbiAgICAgIGFwcFBhY2thZ2Uuc2hvdWxkLmVxdWFsKCdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyk7XG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoJy5BcGlEZW1vcycpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc3RhcnQgYW5kcm9pZCBzZXNzaW9uIGZvY3VzaW5nIG9uIGN1c3RvbSBwa2cgYW5kIGFjdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xuICAgICAgICBhcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsXG4gICAgICAgIGFwcEFjdGl2aXR5OiAnLnZpZXcuU3BsaXRUb3VjaFZpZXcnLFxuICAgICAgfSk7XG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xuICAgICAgbGV0IGFwcFBhY2thZ2UgPSBhd2FpdCBkcml2ZXIuZ2V0Q3VycmVudFBhY2thZ2UoKTtcbiAgICAgIGxldCBhcHBBY3Rpdml0eSA9IGF3YWl0IGRyaXZlci5nZXRDdXJyZW50RGV2aWNlQWN0aXZpdHkoKTtcbiAgICAgIGFwcFBhY2thZ2Uuc2hvdWxkLmVxdWFsKGNhcHMuYXBwUGFja2FnZSk7XG4gICAgICBhcHBBY3Rpdml0eS5zaG91bGQuZXF1YWwoY2Fwcy5hcHBBY3Rpdml0eSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBlcnJvciBvdXQgZm9yIG5vdCBhcGsgZXh0ZW5zaW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRG9uJ3QgdGVzdCB0aGlzIG9uIFRlc3RPYmplY3QuIFRoZSAnYXBwJyBjYXAgZ2V0cyBzdHJpcHBlZCBvdXQgYW5kIGNhbid0IGJlIHRlc3RlZFxuICAgICAgaWYgKHByb2Nlc3MuZW52LlRFU1RPQkpFQ1RfRTJFX1RFU1RTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xuICAgICAgICBhcHA6ICdmb28nLFxuICAgICAgICBhcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsXG4gICAgICAgIGFwcEFjdGl2aXR5OiAnLnZpZXcuU3BsaXRUb3VjaFZpZXcnLFxuICAgICAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbGwgdG8gJ2luaXREcml2ZXInIHNob3VsZCBub3QgaGF2ZSBzdWNjZWVkZWRgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZS5kYXRhLnNob3VsZC5tYXRjaCgvZG9lcyBub3QgZXhpc3Qgb3IgaXMgbm90IGFjY2Vzc2libGUvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGVycm9yIG91dCBmb3IgaW52YWxpZCBhcHAgcGF0aCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIERvbid0IHRlc3QgdGhpcyBvbiBUZXN0T2JqZWN0LiBUaGUgJ2FwcCcgY2FwIGdldHMgc3RyaXBwZWQgb3V0IGFuZCBjYW4ndCBiZSB0ZXN0ZWRcbiAgICAgIGlmIChwcm9jZXNzLmVudi5URVNUT0JKRUNUX0UyRV9URVNUUykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIEFQSURFTU9TX0NBUFMsIHtcbiAgICAgICAgYXBwOiAnZm9vLmFwaycsXG4gICAgICAgIGFwcFBhY2thZ2U6ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyxcbiAgICAgICAgYXBwQWN0aXZpdHk6ICcudmlldy5TcGxpdFRvdWNoVmlldycsXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgaW5pdERyaXZlcihjYXBzKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYWxsIHRvICdpbml0RHJpdmVyJyBzaG91bGQgbm90IGhhdmUgc3VjY2VlZGVkYCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGUuZGF0YS5zaG91bGQubWF0Y2goL2RvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCBhY2Nlc3NpYmxlLyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBnZXQgZGV2aWNlIG1vZGVsLCBtYW51ZmFjdHVyZXIgYW5kIHNjcmVlbiBzaXplIGluIHNlc3Npb24gZGV0YWlscycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgQVBJREVNT1NfQ0FQUywge1xuICAgICAgICBhcHBQYWNrYWdlOiAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsXG4gICAgICAgIGFwcEFjdGl2aXR5OiAnLnZpZXcuU3BsaXRUb3VjaFZpZXcnLFxuICAgICAgfSk7XG4gICAgICBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKGNhcHMpO1xuXG4gICAgICBsZXQgc2VydmVyQ2FwcyA9IGF3YWl0IGRyaXZlci5zZXNzaW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgICBzZXJ2ZXJDYXBzLmRldmljZVNjcmVlblNpemUuc2hvdWxkLmV4aXN0O1xuICAgICAgc2VydmVyQ2Fwcy5kZXZpY2VTY3JlZW5EZW5zaXR5LnNob3VsZC5leGlzdDtcbiAgICAgIHNlcnZlckNhcHMuZGV2aWNlTW9kZWwuc2hvdWxkLmV4aXN0O1xuICAgICAgc2VydmVyQ2Fwcy5kZXZpY2VNYW51ZmFjdHVyZXIuc2hvdWxkLmV4aXN0O1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnY3VzdG9tIGFkYiBwb3J0JywgZnVuY3Rpb24gKCkge1xuICAgIC8vIERvbid0IGRvIHRoZXNlIHRlc3RzIG9uIFRlc3RPYmplY3QuIENhbm5vdCB1c2UgVGVzdE9iamVjdCdzIEFEQi5cbiAgICBpZiAocHJvY2Vzcy5lbnYuVEVTVE9CSkVDVF9FMkVfVEVTVFMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWRiUG9ydCA9IDUwNDI7XG4gICAgbGV0IGRyaXZlcjtcblxuICAgIGJlZm9yZShhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBraWxsU2VydmVyKDUwMzcpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZHJpdmVyKSB7XG4gICAgICAgIGF3YWl0IGRyaXZlci5xdWl0KCk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGtpbGxTZXJ2ZXIoYWRiUG9ydCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHN0YXJ0IGFuZHJvaWQgc2Vzc2lvbiB3aXRoIGEgY3VzdG9tIGFkYiBwb3J0JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBBUElERU1PU19DQVBTLCB7XG4gICAgICAgIGFkYlBvcnQsXG4gICAgICB9KTtcbiAgICAgIGRyaXZlciA9IGF3YWl0IGluaXREcml2ZXIoY2FwcywgYWRiUG9ydCk7XG4gICAgICBsZXQgYXBwUGFja2FnZSA9IGF3YWl0IGRyaXZlci5nZXRDdXJyZW50UGFja2FnZSgpO1xuICAgICAgbGV0IGFwcEFjdGl2aXR5ID0gYXdhaXQgZHJpdmVyLmdldEN1cnJlbnREZXZpY2VBY3Rpdml0eSgpO1xuICAgICAgYXBwUGFja2FnZS5zaG91bGQuZXF1YWwoJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnKTtcbiAgICAgIGFwcEFjdGl2aXR5LnNob3VsZC5lcXVhbCgnLkFwaURlbW9zJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd3M2MgY29tcGxpYW5jZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHN0YXJ0IGEgc2Vzc2lvbiB3aXRoIFczQyBjYXBzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgc2Vzc2lvbklkLCBzdGF0dXMgfSA9IGF3YWl0IHJlcXVlc3QucG9zdCh7dXJsOiBgaHR0cDovLyR7REVGQVVMVF9IT1NUfToke0RFRkFVTFRfUE9SVH0vd2QvaHViL3Nlc3Npb25gLCBqc29uOiB7XG4gICAgICAgIGNhcGFiaWxpdGllczoge1xuICAgICAgICAgIGFsd2F5c01hdGNoOiBBUElERU1PU19DQVBTLFxuICAgICAgICAgIGZpcnN0TWF0Y2g6IFt7fV0sXG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICAgIHZhbHVlLnNob3VsZC5leGlzdDtcbiAgICAgIHZhbHVlLmNhcGFiaWxpdGllcy5zaG91bGQuZXhpc3Q7XG4gICAgICB2YWx1ZS5zZXNzaW9uSWQuc2hvdWxkLmV4aXN0O1xuICAgICAgc2hvdWxkLm5vdC5leGlzdChzZXNzaW9uSWQpO1xuICAgICAgc2hvdWxkLm5vdC5leGlzdChzdGF0dXMpO1xuICAgICAgYXdhaXQgcmVxdWVzdC5kZWxldGUoe3VybDogYGh0dHA6Ly8ke0RFRkFVTFRfSE9TVH06JHtERUZBVUxUX1BPUlR9L3dkL2h1Yi9zZXNzaW9uLyR7dmFsdWUuc2Vzc2lvbklkfWB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICBpdCgnc2hvdWxkIGNsb3NlIGFwcGxpY2F0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBkcml2ZXIgPSBhd2FpdCBpbml0RHJpdmVyKEFQSURFTU9TX0NBUFMpO1xuICAgIGF3YWl0IGRyaXZlci5jbG9zZUFwcCgpO1xuICAgIGxldCBhcHBQYWNrYWdlID0gYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRQYWNrYWdlKCk7XG4gICAgaWYgKGFwcFBhY2thZ2UpIHtcbiAgICAgIGFwcFBhY2thZ2Uuc2hvdWxkLm5vdC5lcXVhbChBUElERU1PU19QQUNLQUdFKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uIn0=
