'use strict';

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _libBasedriverHelpers = require('../../lib/basedriver/helpers');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _appiumSupport = require('appium-support');

var _mockFs = require('mock-fs');

var _mockFs2 = _interopRequireDefault(_mockFs);

_chai2['default'].use(_chaiAsPromised2['default']);
var should = _chai2['default'].should();

describe('helpers', function () {
  describe('#isPackageOrBundle', function () {
    it('should accept packages and bundles', function () {
      (0, _libBasedriverHelpers.isPackageOrBundle)('io.appium.testapp').should.be['true'];
    });
    it('should not accept non-packages or non-bundles', function () {
      (0, _libBasedriverHelpers.isPackageOrBundle)('foo').should.be['false'];
      (0, _libBasedriverHelpers.isPackageOrBundle)('/path/to/an.app').should.be['false'];
      (0, _libBasedriverHelpers.isPackageOrBundle)('/path/to/an.apk').should.be['false'];
    });
  });

  describe('#unzipFile', function () {
    var mockDir = 'path/to/mock/dir';
    before(function callee$2$0() {
      var fakeIOSAppZip;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            // Start mock filesystem
            (0, _mockFs2['default'])(_defineProperty({}, mockDir, {}));

            // Write the base64 contents of FakeIOSApp.app.zip to the mock filesystem

            fakeIOSAppZip = 'UEsDBBQACAAIABF8/EYAAAAAAAAAAAAAAAAOABAARmFrZUlPU0FwcC5hcHBVWAwALwO4VQIDuFX1ARQAK8nILFYAorz8EoWi1MScnEqFxDyFxIICLgBQSwcIR93jPhoAAAAaAAAAUEsBAhUDFAAIAAgAEXz8Rkfd4z4aAAAAGgAAAA4ADAAAAAAAAAAAQKSBAAAAAEZha2VJT1NBcHAuYXBwVVgIAC8DuFUCA7hVUEsFBgAAAAABAAEASAAAAGYAAAAAAA==';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_appiumSupport.fs.writeFile(_path2['default'].resolve(mockDir, 'FakeIOSApp.app.zip'), fakeIOSAppZip, 'base64'));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    after(function () {
      _mockFs2['default'].restore();
    });

    it('should unzip a .zip file (force isWindows to be true so we can test the internal zip library)', function callee$2$0() {
      var forceWindows;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            forceWindows = _sinon2['default'].stub(_appiumSupport.system, 'isWindows', function () {
              return true;
            });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap((0, _libBasedriverHelpers.unzipFile)(_path2['default'].resolve(mockDir, 'FakeIOSApp.app.zip')));

          case 3:
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(_appiumSupport.fs.readFile(_path2['default'].resolve(mockDir, 'FakeIOSApp.app'), 'utf8').should.eventually.deep.equal('this is not really an app\n'));

          case 5:
            forceWindows.restore();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('#renameKey', function () {
    it('should translate key in an object', function () {
      (0, _libBasedriverHelpers.renameKey)({ 'foo': 'hello world' }, 'foo', 'bar').should.eql({ 'bar': 'hello world' });
    });
    it('should translate key in an object within an object', function () {
      (0, _libBasedriverHelpers.renameKey)({ 'key': { 'foo': 'hello world' } }, 'foo', 'bar').should.eql({ 'key': { 'bar': 'hello world' } });
    });
    it('should translate key in an object with an array', function () {
      (0, _libBasedriverHelpers.renameKey)([{ 'key': { 'foo': 'hello world' } }, { 'foo': 'HELLO WORLD' }], 'foo', 'bar').should.eql([{ 'key': { 'bar': 'hello world' } }, { 'bar': 'HELLO WORLD' }]);
    });
    it('should not do anything to primitives', function () {
      [0, 1, -1, true, false, null, undefined, "", "Hello World"].forEach(function (item) {
        should.equal((0, _libBasedriverHelpers.renameKey)(item), item);
      });
    });
    it('should rename keys on big complex objects', function () {
      var input = [{ 'foo': 'bar' }, {
        hello: {
          world: {
            'foo': 'BAR'
          }
        },
        foo: 'bahr'
      }, 'foo', null, 0];
      var expectedOutput = [{ 'FOO': 'bar' }, {
        hello: {
          world: {
            'FOO': 'BAR'
          }
        },
        FOO: 'bahr'
      }, 'foo', null, 0];
      (0, _libBasedriverHelpers.renameKey)(input, 'foo', 'FOO').should.deep.equal(expectedOutput);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYmFzZWRyaXZlci9oZWxwZXJzLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29DQUF3RCw4QkFBOEI7O29CQUNyRSxNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztvQkFDNUIsTUFBTTs7OztxQkFDTCxPQUFPOzs7OzZCQUNFLGdCQUFnQjs7c0JBQ3hCLFNBQVM7Ozs7QUFFNUIsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQztBQUN6QixJQUFNLE1BQU0sR0FBRyxrQkFBSyxNQUFNLEVBQUUsQ0FBQzs7QUFFN0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQzlCLFVBQVEsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZO0FBQ3pDLE1BQUUsQ0FBQyxvQ0FBb0MsRUFBRSxZQUFZO0FBQ25ELG1EQUFrQixtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztLQUN2RCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsK0NBQStDLEVBQUUsWUFBWTtBQUM5RCxtREFBa0IsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBTSxDQUFDO0FBQ3pDLG1EQUFrQixpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQU0sQ0FBQztBQUNyRCxtREFBa0IsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFNLENBQUM7S0FDdEQsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxZQUFZLEVBQUUsWUFBWTtBQUNqQyxRQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztBQUNqQyxVQUFNLENBQUM7VUFRQyxhQUFhOzs7OztBQU5uQix5REFDRyxPQUFPLEVBQUcsRUFBRSxFQUNiLENBQUM7Ozs7QUFJRyx5QkFBYSxHQUFHLDBRQUEwUTs7NkNBQzFSLGtCQUFHLFNBQVMsQ0FBQyxrQkFBSyxPQUFPLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEVBQUUsYUFBYSxFQUFFLFFBQVEs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QUFJLEVBQ0osQ0FBQyxDQUNGLENBQUM7QUFDRiwyQ0FBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ2xFLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Jhc2Vkcml2ZXIvaGVscGVycy1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGFja2FnZU9yQnVuZGxlLCB1bnppcEZpbGUsIHJlbmFtZUtleSB9IGZyb20gJy4uLy4uL2xpYi9iYXNlZHJpdmVyL2hlbHBlcnMnO1xuaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgeyBzeXN0ZW0sIGZzIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xuaW1wb3J0IG1vY2tGUyBmcm9tICdtb2NrLWZzJztcblxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuY29uc3Qgc2hvdWxkID0gY2hhaS5zaG91bGQoKTtcblxuZGVzY3JpYmUoJ2hlbHBlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIGRlc2NyaWJlKCcjaXNQYWNrYWdlT3JCdW5kbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBhY2NlcHQgcGFja2FnZXMgYW5kIGJ1bmRsZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpc1BhY2thZ2VPckJ1bmRsZSgnaW8uYXBwaXVtLnRlc3RhcHAnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIG5vdCBhY2NlcHQgbm9uLXBhY2thZ2VzIG9yIG5vbi1idW5kbGVzJywgZnVuY3Rpb24gKCkge1xuICAgICAgaXNQYWNrYWdlT3JCdW5kbGUoJ2ZvbycpLnNob3VsZC5iZS5mYWxzZTtcbiAgICAgIGlzUGFja2FnZU9yQnVuZGxlKCcvcGF0aC90by9hbi5hcHAnKS5zaG91bGQuYmUuZmFsc2U7XG4gICAgICBpc1BhY2thZ2VPckJ1bmRsZSgnL3BhdGgvdG8vYW4uYXBrJykuc2hvdWxkLmJlLmZhbHNlO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnI3VuemlwRmlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9ja0RpciA9ICdwYXRoL3RvL21vY2svZGlyJztcbiAgICBiZWZvcmUoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gU3RhcnQgbW9jayBmaWxlc3lzdGVtXG4gICAgICBtb2NrRlMoe1xuICAgICAgICBbbW9ja0Rpcl06IHt9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFdyaXRlIHRoZSBiYXNlNjQgY29udGVudHMgb2YgRmFrZUlPU0FwcC5hcHAuemlwIHRvIHRoZSBtb2NrIGZpbGVzeXN0ZW1cblxuICAgICAgY29uc3QgZmFrZUlPU0FwcFppcCA9ICdVRXNEQkJRQUNBQUlBQkY4L0VZQUFBQUFBQUFBQUFBQUFBQU9BQkFBUm1GclpVbFBVMEZ3Y0M1aGNIQlZXQXdBTHdPNFZRSUR1RlgxQVJRQUs4bklMRllBb3J6OEVvV2kxTVNjbkVxRnhEeUZ4SUlDTGdCUVN3Y0lSOTNqUGhvQUFBQWFBQUFBVUVzQkFoVURGQUFJQUFnQUVYejhSa2ZkNHo0YUFBQUFHZ0FBQUE0QURBQUFBQUFBQUFBQVFLU0JBQUFBQUVaaGEyVkpUMU5CY0hBdVlYQndWVmdJQUM4RHVGVUNBN2hWVUVzRkJnQUFBQUFCQUFFQVNBQUFBR1lBQUFBQUFBPT0nO1xuICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKHBhdGgucmVzb2x2ZShtb2NrRGlyLCAnRmFrZUlPU0FwcC5hcHAuemlwJyksIGZha2VJT1NBcHBaaXAsICdiYXNlNjQnKTtcbiAgICB9KTtcblxuICAgIGFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vY2tGUy5yZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVuemlwIGEgLnppcCBmaWxlIChmb3JjZSBpc1dpbmRvd3MgdG8gYmUgdHJ1ZSBzbyB3ZSBjYW4gdGVzdCB0aGUgaW50ZXJuYWwgemlwIGxpYnJhcnkpJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZm9yY2VXaW5kb3dzID0gc2lub24uc3R1YihzeXN0ZW0sICdpc1dpbmRvd3MnLCAoKSA9PiB0cnVlKTtcbiAgICAgIGF3YWl0IHVuemlwRmlsZShwYXRoLnJlc29sdmUobW9ja0RpciwgJ0Zha2VJT1NBcHAuYXBwLnppcCcpKTtcbiAgICAgIGF3YWl0IGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShtb2NrRGlyLCAnRmFrZUlPU0FwcC5hcHAnKSwgJ3V0ZjgnKS5zaG91bGQuZXZlbnR1YWxseS5kZWVwLmVxdWFsKCd0aGlzIGlzIG5vdCByZWFsbHkgYW4gYXBwXFxuJyk7XG4gICAgICBmb3JjZVdpbmRvd3MucmVzdG9yZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnI3JlbmFtZUtleScsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHRyYW5zbGF0ZSBrZXkgaW4gYW4gb2JqZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVuYW1lS2V5KHsnZm9vJzogJ2hlbGxvIHdvcmxkJ30sICdmb28nLCAnYmFyJykuc2hvdWxkLmVxbCh7J2Jhcic6ICdoZWxsbyB3b3JsZCd9KTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRyYW5zbGF0ZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGhpbiBhbiBvYmplY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW5hbWVLZXkoeydrZXknOiB7J2Zvbyc6ICdoZWxsbyB3b3JsZCd9fSwgJ2ZvbycsICdiYXInKS5zaG91bGQuZXFsKHsna2V5JzogeydiYXInOiAnaGVsbG8gd29ybGQnfX0pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdHJhbnNsYXRlIGtleSBpbiBhbiBvYmplY3Qgd2l0aCBhbiBhcnJheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbmFtZUtleShbXG4gICAgICAgIHsna2V5Jzogeydmb28nOiAnaGVsbG8gd29ybGQnfX0sXG4gICAgICAgIHsnZm9vJzogJ0hFTExPIFdPUkxEJ31cbiAgICAgIF0sICdmb28nLCAnYmFyJykuc2hvdWxkLmVxbChbXG4gICAgICAgIHsna2V5JzogeydiYXInOiAnaGVsbG8gd29ybGQnfX0sXG4gICAgICAgIHsnYmFyJzogJ0hFTExPIFdPUkxEJ31cbiAgICAgIF0pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbm90IGRvIGFueXRoaW5nIHRvIHByaW1pdGl2ZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBbMCwgMSwgLTEsIHRydWUsIGZhbHNlLCBudWxsLCB1bmRlZmluZWQsIFwiXCIsIFwiSGVsbG8gV29ybGRcIl0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBzaG91bGQuZXF1YWwocmVuYW1lS2V5KGl0ZW0pLCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmVuYW1lIGtleXMgb24gYmlnIGNvbXBsZXggb2JqZWN0cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gW1xuICAgICAgICB7J2Zvbyc6ICdiYXInfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlbGxvOiB7XG4gICAgICAgICAgICB3b3JsZDoge1xuICAgICAgICAgICAgICAnZm9vJzogJ0JBUicsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb286ICdiYWhyJ1xuICAgICAgICB9LFxuICAgICAgICAnZm9vJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgMFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGV4cGVjdGVkT3V0cHV0ID0gW1xuICAgICAgICB7J0ZPTyc6ICdiYXInfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlbGxvOiB7XG4gICAgICAgICAgICB3b3JsZDoge1xuICAgICAgICAgICAgICAnRk9PJzogJ0JBUicsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBGT086ICdiYWhyJ1xuICAgICAgICB9LFxuICAgICAgICAnZm9vJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgMFxuICAgICAgXTtcbiAgICAgIHJlbmFtZUtleShpbnB1dCwgJ2ZvbycsICdGT08nKS5zaG91bGQuZGVlcC5lcXVhbChleHBlY3RlZE91dHB1dCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uIn0=
