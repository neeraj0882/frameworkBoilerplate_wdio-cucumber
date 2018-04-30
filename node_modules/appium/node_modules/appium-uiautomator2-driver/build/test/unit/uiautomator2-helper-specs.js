'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _libHelpers = require('../../lib/helpers');

var helpers = _interopRequireWildcard(_libHelpers);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _appiumTestSupport = require('appium-test-support');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('UiAutomator2 Driver  Helpers', function () {
  var adb = new _appiumAdb2['default']();

  describe('ensureInternetPermissionForApp', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    var app = '/path/to/app.apk';
    it('should do nothing if app has internet perm', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('hasInternetPermissionFromManifest').once().withExactArgs(app).returns(true);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(helpers.ensureInternetPermissionForApp(adb, app));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw an error if app doesnt have internet perms', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('hasInternetPermissionFromManifest').once().withExactArgs(app).returns(false);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(helpers.ensureInternetPermissionForApp(adb, app).should.be.rejectedWith(/INTERNET/));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  }));
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC91aWF1dG9tYXRvcjItaGVscGVyLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OzswQkFDcEIsbUJBQW1COztJQUFoQyxPQUFPOzt5QkFDSCxZQUFZOzs7O2lDQUNGLHFCQUFxQjs7QUFHL0Msa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsOEJBQThCLEVBQUUsWUFBWTtBQUNuRCxNQUFJLEdBQUcsR0FBRyw0QkFBUyxDQUFDOztBQUVwQixVQUFRLENBQUMsZ0NBQWdDLEVBQUUsa0NBQVUsRUFBQyxHQUFHLEVBQUgsR0FBRyxFQUFDLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDckUsUUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUM7QUFDL0IsTUFBRSxDQUFDLDRDQUE0QyxFQUFFOzs7O0FBQy9DLGlCQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUNqRCxJQUFJLEVBQUUsQ0FDTixhQUFhLENBQUMsR0FBRyxDQUFDLENBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NkNBQ2IsT0FBTyxDQUFDLDhCQUE4QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7OztBQUN0RCxpQkFBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztLQUNwQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMseURBQXlELEVBQUU7Ozs7QUFDNUQsaUJBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQ2pELElBQUksRUFBRSxDQUNOLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDZCxPQUFPLENBQUMsOEJBQThCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNqRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7OztBQUN2QyxpQkFBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztLQUNwQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUMsQ0FBQztDQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvdWlhdXRvbWF0b3IyLWhlbHBlci1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi8uLi9saWIvaGVscGVycyc7XG5pbXBvcnQgQURCIGZyb20gJ2FwcGl1bS1hZGInO1xuaW1wb3J0IHsgd2l0aE1vY2tzIH0gZnJvbSAnYXBwaXVtLXRlc3Qtc3VwcG9ydCc7XG5cblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ1VpQXV0b21hdG9yMiBEcml2ZXIgIEhlbHBlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhZGIgPSBuZXcgQURCKCk7XG5cbiAgZGVzY3JpYmUoJ2Vuc3VyZUludGVybmV0UGVybWlzc2lvbkZvckFwcCcsIHdpdGhNb2Nrcyh7YWRifSwgKG1vY2tzKSA9PiB7XG4gICAgY29uc3QgYXBwID0gJy9wYXRoL3RvL2FwcC5hcGsnO1xuICAgIGl0KCdzaG91bGQgZG8gbm90aGluZyBpZiBhcHAgaGFzIGludGVybmV0IHBlcm0nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaGFzSW50ZXJuZXRQZXJtaXNzaW9uRnJvbU1hbmlmZXN0JylcbiAgICAgICAgICAub25jZSgpXG4gICAgICAgICAgLndpdGhFeGFjdEFyZ3MoYXBwKVxuICAgICAgICAgIC5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgaGVscGVycy5lbnN1cmVJbnRlcm5ldFBlcm1pc3Npb25Gb3JBcHAoYWRiLCBhcHApO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgYXBwIGRvZXNudCBoYXZlIGludGVybmV0IHBlcm1zJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2hhc0ludGVybmV0UGVybWlzc2lvbkZyb21NYW5pZmVzdCcpXG4gICAgICAgICAgLm9uY2UoKVxuICAgICAgICAgIC53aXRoRXhhY3RBcmdzKGFwcClcbiAgICAgICAgICAucmV0dXJucyhmYWxzZSk7XG4gICAgICBhd2FpdCBoZWxwZXJzLmVuc3VyZUludGVybmV0UGVybWlzc2lvbkZvckFwcChhZGIsIGFwcClcbiAgICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgvSU5URVJORVQvKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSkpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uIn0=
