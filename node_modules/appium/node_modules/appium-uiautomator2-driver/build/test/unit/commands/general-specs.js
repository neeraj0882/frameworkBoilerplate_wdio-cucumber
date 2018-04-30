'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('General', function () {
  describe('getWindowRect', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']();

          case 1:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    afterEach(function () {
      sandbox.restore();
    });

    it('should get window size', function callee$2$0() {
      var result;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'getWindowSize').withArgs().returns({ width: 300, height: 400 });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getWindowRect());

          case 3:
            result = context$3$0.sent;

            result.width.should.be.equal(300);
            result.height.should.be.equal(400);
            result.x.should.be.equal(0);
            result.y.should.be.equal(0);

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9nZW5lcmFsLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7cUJBQzNCLE9BQU87Ozs7Z0JBQ2EsVUFBVTs7OztBQUVoRCxJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsSUFBSSxPQUFPLEdBQUcsbUJBQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQzlCLFVBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWTtBQUNwQyxjQUFVLENBQUM7Ozs7QUFDVCxrQkFBTSxHQUFHLG1CQUErQixDQUFDOzs7Ozs7O0tBQzFDLENBQUMsQ0FBQztBQUNILGFBQVMsQ0FBQyxZQUFZO0FBQ3BCLGFBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLHdCQUF3QixFQUFFO1VBR3JCLE1BQU07Ozs7QUFGWixtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQ2hDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7OzZDQUM5QixNQUFNLENBQUMsYUFBYSxFQUFFOzs7QUFBckMsa0JBQU07O0FBQ1osa0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsa0JBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsa0JBQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7S0FDN0IsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9nZW5lcmFsLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIgZnJvbSAnLi4vLi4vLi4nO1xuXG5sZXQgZHJpdmVyO1xubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ0dlbmVyYWwnLCBmdW5jdGlvbiAoKSB7XG4gIGRlc2NyaWJlKCdnZXRXaW5kb3dSZWN0JywgZnVuY3Rpb24gKCkge1xuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXIoKTtcbiAgICB9KTtcbiAgICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGdldCB3aW5kb3cgc2l6ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdnZXRXaW5kb3dTaXplJylcbiAgICAgICAgICAud2l0aEFyZ3MoKS5yZXR1cm5zKHt3aWR0aDogMzAwLCBoZWlnaHQ6IDQwMH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHJpdmVyLmdldFdpbmRvd1JlY3QoKTtcbiAgICAgIHJlc3VsdC53aWR0aC5zaG91bGQuYmUuZXF1YWwoMzAwKTtcbiAgICAgIHJlc3VsdC5oZWlnaHQuc2hvdWxkLmJlLmVxdWFsKDQwMCk7XG4gICAgICByZXN1bHQueC5zaG91bGQuYmUuZXF1YWwoMCk7XG4gICAgICByZXN1bHQueS5zaG91bGQuYmUuZXF1YWwoMCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uIn0=
