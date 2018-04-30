'use strict';

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _appiumAndroidBootstrap = require('appium-android-bootstrap');

var _appiumAndroidBootstrap2 = _interopRequireDefault(_appiumAndroidBootstrap);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mockFs = require('mock-fs');

var _mockFs2 = _interopRequireDefault(_mockFs);

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var _appiumSupport = require('appium-support');

var support = _interopRequireWildcard(_appiumSupport);

var _temp = require('temp');

var _temp2 = _interopRequireDefault(_temp);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

var _libCommandsActions = require('../../../lib/commands/actions');

var _libCommandsActions2 = _interopRequireDefault(_libCommandsActions);

var _teen_process = require('teen_process');

var teen_process = _interopRequireWildcard(_teen_process);

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Actions', function () {
  beforeEach(function () {
    driver = new _2['default']();
    driver.adb = new _appiumAdb2['default']();
    driver.bootstrap = new _appiumAndroidBootstrap2['default']();
    sandbox.stub(driver.bootstrap, 'sendAction');
  });
  afterEach(function () {
    sandbox.restore();
  });
  describe('keyevent', function () {
    it('shoudle be able to execute keyevent via pressKeyCode', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'pressKeyCode');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.keyevent('66', 'meta'));

          case 3:
            driver.pressKeyCode.calledWithExactly('66', 'meta').should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should set metastate to null by default', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'pressKeyCode');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.keyevent('66'));

          case 3:
            driver.pressKeyCode.calledWithExactly('66', null).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('pressKeyCode', function () {
    it('shoudle be able to press key code', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.pressKeyCode('66', 'meta'));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('pressKeyCode', { keycode: '66', metastate: 'meta' }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should set metastate to null by default', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.pressKeyCode('66'));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('pressKeyCode', { keycode: '66', metastate: null }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('longPressKeyCode', function () {
    it('shoudle be able to press key code', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.longPressKeyCode('66', 'meta'));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('longPressKeyCode', { keycode: '66', metastate: 'meta' }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should set metastate to null by default', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.longPressKeyCode('66'));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('longPressKeyCode', { keycode: '66', metastate: null }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getOrientation', function () {
    it('shoudle be able to get orientation', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.bootstrap.sendAction.withArgs('orientation', { naturalOrientation: false }).returns('landscape');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getOrientation().should.become('LANDSCAPE'));

          case 3:
            driver.bootstrap.sendAction.calledWithExactly('orientation', { naturalOrientation: false }).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('setOrientation', function () {
    it('shoudle be able to set orientation', function callee$2$0() {
      var opts;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            opts = { orientation: 'SOMESCAPE', naturalOrientation: false };
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setOrientation('somescape'));

          case 3:
            driver.bootstrap.sendAction.calledWithExactly('orientation', opts).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('fakeFlick', function () {
    it('shoudle be able to do fake flick', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.fakeFlick(12, 34));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('flick', { xSpeed: 12, ySpeed: 34 }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('fakeFlickElement', function () {
    it('shoudle be able to do fake flick on element', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.fakeFlickElement(5000, 56, 78, 1.32));

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('element:flick', { xoffset: 56, yoffset: 78, speed: 1.32, elementId: 5000 }).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('swipe', function () {
    it('should swipe an element', function () {
      var swipeOpts = { startX: 10, startY: 11, endX: 20, endY: 22,
        steps: 3, elementId: 'someElementId' };
      driver.swipe(10, 11, 20, 22, 0.1, null, 'someElementId');
      driver.bootstrap.sendAction.calledWithExactly('element:swipe', swipeOpts).should.be['true'];
    });
    it('should swipe without an element', function () {
      driver.swipe(0, 0, 1, 1, 0, 1);
      driver.bootstrap.sendAction.calledWith('swipe').should.be['true'];
    });
    it('should set start point to (0.5;0.5) if startX and startY are "null"', function callee$2$0() {
      var swipeOpts;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            swipeOpts = { startX: 0.5, startY: 0.5, endX: 0, endY: 0, steps: 0 };

            sandbox.stub(driver, 'doSwipe');
            driver.swipe('null', 'null', 0, 0, 0);
            driver.doSwipe.calledWithExactly(swipeOpts).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('pinchClose', function () {
    it('should be able to pinch in element', function callee$2$0() {
      var pinchOpts;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            pinchOpts = { direction: 'in', elementId: 'el01', percent: 0.5, steps: 5 };
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.pinchClose(null, null, null, null, null, 0.5, 5, 'el01'));

          case 3:
            driver.bootstrap.sendAction.calledWithExactly('element:pinch', pinchOpts).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('pinchOpen', function () {
    it('should be able to pinch out element', function callee$2$0() {
      var pinchOpts;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            pinchOpts = { direction: 'out', elementId: 'el01', percent: 0.5, steps: 5 };
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.pinchOpen(null, null, null, null, null, 0.5, 5, 'el01'));

          case 3:
            driver.bootstrap.sendAction.calledWithExactly('element:pinch', pinchOpts).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('flick', function () {
    it('should call fakeFlickElement if element is passed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'fakeFlickElement');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.flick('elem', null, null, 1, 2, 3));

          case 3:
            driver.fakeFlickElement.calledWith('elem', 1, 2, 3).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should call fakeFlick if element is not passed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'fakeFlick');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.flick(null, 1, 2));

          case 3:
            driver.fakeFlick.calledWith(1, 2).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('drag', function () {
    var dragOpts = {
      elementId: 'elem1', destElId: 'elem2',
      startX: 1, startY: 2, endX: 3, endY: 4, steps: 1
    };
    it('should drag an element', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.drag(1, 2, 3, 4, 0.02, null, 'elem1', 'elem2');
            driver.bootstrap.sendAction.calledWithExactly('element:drag', dragOpts).should.be['true'];

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should drag without an element', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            dragOpts.elementId = null;
            driver.drag(1, 2, 3, 4, 0.02, null, null, 'elem2');
            driver.bootstrap.sendAction.calledWithExactly('drag', dragOpts).should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('lock', function () {
    it('should call adb.lock()', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'lock');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.lock());

          case 3:
            driver.adb.lock.calledOnce.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('isLocked', function () {
    it('should call adb.isScreenLocked()', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isScreenLocked').returns('lock_status');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.isLocked().should.become('lock_status'));

          case 3:
            driver.adb.isScreenLocked.calledOnce.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('openNotifications', function () {
    it('should be able to open notifications', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.openNotifications());

          case 2:
            driver.bootstrap.sendAction.calledWithExactly('openNotification').should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('setLocation', function () {
    it('should be able to set location', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'sendTelnetCommand');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setLocation('lat', 'long'));

          case 3:
            driver.adb.sendTelnetCommand.calledWithExactly('geo fix long lat').should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('pullFile', function () {
    it('should be able to pull file from device', function callee$2$0() {
      var localFile;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            localFile = 'local/tmp_file';

            sandbox.stub(_temp2['default'], 'path').returns(localFile);
            sandbox.stub(driver.adb, 'pull');
            sandbox.stub(support.fs, 'readFile').withArgs(localFile).returns('appium');
            sandbox.stub(support.fs, 'exists').withArgs(localFile).returns(true);
            sandbox.stub(support.fs, 'unlink');
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(driver.pullFile('remote_path').should.become('YXBwaXVt'));

          case 8:
            driver.adb.pull.calledWithExactly('remote_path', localFile).should.be['true'];
            support.fs.unlink.calledWithExactly(localFile).should.be['true'];

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should be able to pull file located in application container from the device', function callee$2$0() {
      var localFile, packageId, remotePath, tmpPath;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            localFile = 'local/tmp_file';
            packageId = 'com.myapp';
            remotePath = 'path/in/container';
            tmpPath = '/data/local/tmp/container';

            sandbox.stub(_temp2['default'], 'path').returns(localFile);
            sandbox.stub(driver.adb, 'pull');
            sandbox.stub(driver.adb, 'shell');
            sandbox.stub(support.fs, 'readFile').withArgs(localFile).returns('appium');
            sandbox.stub(support.fs, 'exists').withArgs(localFile).returns(true);
            sandbox.stub(support.fs, 'unlink');
            context$3$0.next = 12;
            return _regeneratorRuntime.awrap(driver.pullFile('@' + packageId + '/' + remotePath).should.become('YXBwaXVt'));

          case 12:
            driver.adb.pull.calledWithExactly(tmpPath, localFile).should.be['true'];
            driver.adb.shell.calledWithExactly(['run-as', packageId, 'chmod 777 \'/data/data/' + packageId + '/' + remotePath + '\'']).should.be['true'];
            driver.adb.shell.calledWithExactly(['cp', '-f', '/data/data/' + packageId + '/' + remotePath, tmpPath]).should.be['true'];
            support.fs.unlink.calledWithExactly(localFile).should.be['true'];
            driver.adb.shell.calledWithExactly(['rm', '-f', tmpPath]).should.be['true'];

          case 17:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('pushFile', function () {
    it('should be able to push file to device', function callee$2$0() {
      var localFile, content;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            localFile = 'local/tmp_file';
            content = 'appium';

            sandbox.stub(_temp2['default'], 'path').returns(localFile);
            sandbox.stub(driver.adb, 'push');
            sandbox.stub(support.fs, 'writeFile');
            sandbox.stub(support.fs, 'exists').withArgs(localFile).returns(true);
            sandbox.stub(support.fs, 'unlink');
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.pushFile('remote_path', 'YXBwaXVt'));

          case 9:
            support.fs.writeFile.calledWithExactly(localFile, content, 'binary').should.be['true'];
            support.fs.unlink.calledWithExactly(localFile).should.be['true'];
            driver.adb.push.calledWithExactly(localFile, 'remote_path').should.be['true'];

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should be able to push file located in application container to the device', function callee$2$0() {
      var localFile, content, packageId, remotePath, tmpPath;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            localFile = 'local/tmp_file';
            content = 'appium';
            packageId = 'com.myapp';
            remotePath = 'path/in/container';
            tmpPath = '/data/local/tmp/container';

            sandbox.stub(_temp2['default'], 'path').returns(localFile);
            sandbox.stub(driver.adb, 'push');
            sandbox.stub(driver.adb, 'shell');
            sandbox.stub(support.fs, 'writeFile');
            sandbox.stub(support.fs, 'exists').withArgs(localFile).returns(true);
            sandbox.stub(support.fs, 'unlink');
            context$3$0.next = 13;
            return _regeneratorRuntime.awrap(driver.pushFile('@' + packageId + '/' + remotePath, 'YXBwaXVt'));

          case 13:
            support.fs.writeFile.calledWithExactly(localFile, content, 'binary').should.be['true'];
            driver.adb.push.calledWithExactly(localFile, tmpPath).should.be['true'];
            driver.adb.shell.calledWithExactly(['run-as', packageId, 'mkdir -p \'/data/data/' + packageId + '/path/in\'']).should.be['true'];
            driver.adb.shell.calledWithExactly(['run-as', packageId, 'touch \'/data/data/' + packageId + '/' + remotePath + '\'']).should.be['true'];
            driver.adb.shell.calledWithExactly(['run-as', packageId, 'chmod 777 \'/data/data/' + packageId + '/' + remotePath + '\'']).should.be['true'];
            driver.adb.shell.calledWithExactly(['cp', '-f', tmpPath, '/data/data/' + packageId + '/' + remotePath]).should.be['true'];
            support.fs.unlink.calledWithExactly(localFile).should.be['true'];
            driver.adb.shell.calledWithExactly(['rm', '-f', tmpPath]).should.be['true'];

          case 21:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('pullFolder', function () {
    var zippedDir = undefined,
        unzippedDir = undefined,
        tempDir = undefined,
        tempPathStub = undefined;

    before(function () {
      var _mockFS;

      // Create in-memory mock file system for file writes
      zippedDir = '/mock/path/to/zipped';
      unzippedDir = '/mock/path/to/unzipped';
      tempDir = '/mock/path/to/temp-dir';
      (0, _mockFs2['default'])((_mockFS = {}, _defineProperty(_mockFS, zippedDir, {}), _defineProperty(_mockFS, unzippedDir, {}), _defineProperty(_mockFS, tempDir, {}), _mockFS));

      // Stub temp.path to use an in-memory filepath
      tempPathStub = _sinon2['default'].stub(_temp2['default'], 'path', function () {
        return tempDir;
      });
    });

    after(function () {
      tempPathStub.restore();
      _mockFs2['default'].restore();
    });

    it('should pull a folder and return base64 zip', function callee$2$0() {
      var adbPullStub, pull, zippedBase64;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        var _this = this;

        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adbPullStub = undefined;

            pull = function pull(ignore, localPath) {
              return _regeneratorRuntime.async(function pull$(context$4$0) {
                while (1) switch (context$4$0.prev = context$4$0.next) {
                  case 0:
                    context$4$0.next = 2;
                    return _regeneratorRuntime.awrap(support.fs.writeFile(_path2['default'].resolve(localPath, 'a.txt'), 'hello world', { flags: 'w' }));

                  case 2:
                    context$4$0.next = 4;
                    return _regeneratorRuntime.awrap(support.fs.writeFile(_path2['default'].resolve(localPath, 'b.txt'), 'foobar', { flags: 'w' }));

                  case 4:
                  case 'end':
                    return context$4$0.stop();
                }
              }, null, _this);
            };

            if (!driver.adb) {
              driver.adb = { pull: pull };
            } else {
              adbPullStub = _sinon2['default'].stub(driver.adb, 'pull', pull);
            }

            // Call 'driver.pullFolder' and zip the base64 contents to a .zip file
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.pullFolder('/does/not/matter'));

          case 5:
            zippedBase64 = context$3$0.sent;

            (typeof zippedBase64).should.equal('string');
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(support.fs.writeFile(_path2['default'].resolve(zippedDir, 'zipped.zip'), zippedBase64, { encoding: 'base64', flags: 'w' }));

          case 9:
            context$3$0.next = 11;
            return _regeneratorRuntime.awrap(support.zip.extractAllTo(_path2['default'].resolve(zippedDir, 'zipped.zip'), unzippedDir));

          case 11:
            context$3$0.next = 13;
            return _regeneratorRuntime.awrap(support.fs.readFile(_path2['default'].resolve(unzippedDir, 'a.txt'), 'utf8').should.eventually.equal('hello world'));

          case 13:
            context$3$0.next = 15;
            return _regeneratorRuntime.awrap(support.fs.readFile(_path2['default'].resolve(unzippedDir, 'b.txt'), 'utf8').should.eventually.equal('foobar'));

          case 15:

            // Restore stub
            if (adbPullStub) {
              adbPullStub.restore();
            } else {
              delete driver.adb;
            }

          case 16:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('fingerprint', function () {
    it('should call fingerprint adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'fingerprint');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.fingerprint(1111));

          case 4:
            driver.adb.fingerprint.calledWithExactly(1111).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'fingerprint');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.fingerprint(1111).should.be.rejectedWith('fingerprint method is only available for emulators'));

          case 4:
            driver.adb.fingerprint.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('sendSMS', function () {
    it('should call sendSMS adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'sendSMS');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.sendSMS(4509, 'Hello Appium'));

          case 4:
            driver.adb.sendSMS.calledWithExactly(4509, 'Hello Appium').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'sendSMS');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.sendSMS(4509, 'Hello Appium').should.be.rejectedWith('sendSMS method is only available for emulators'));

          case 4:
            driver.adb.sendSMS.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('gsmCall', function () {
    it('should call gsmCall adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmCall');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmCall(4509, 'call'));

          case 4:
            driver.adb.gsmCall.calledWithExactly(4509, 'call').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmCall');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmCall(4509, 'call').should.be.rejectedWith('gsmCall method is only available for emulators'));

          case 4:
            driver.adb.gsmCall.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('gsmSignal', function () {
    it('should call gsmSignal adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmSignal');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmSignal(3));

          case 4:
            driver.adb.gsmSignal.calledWithExactly(3).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmSignal');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmSignal(3).should.be.rejectedWith('gsmSignal method is only available for emulators'));

          case 4:
            driver.adb.gsmSignal.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('gsmVoice', function () {
    it('should call gsmVoice adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmVoice');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmVoice('roaming'));

          case 4:
            driver.adb.gsmVoice.calledWithExactly('roaming').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'gsmVoice');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.gsmVoice('roaming').should.be.rejectedWith('gsmVoice method is only available for emulators'));

          case 4:
            driver.adb.gsmVoice.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('powerAC', function () {
    it('should call powerAC adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'powerAC');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.powerAC('off'));

          case 4:
            driver.adb.powerAC.calledWithExactly('off').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'powerAC');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.powerAC('roaming').should.be.rejectedWith('powerAC method is only available for emulators'));

          case 4:
            driver.adb.powerAC.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('powerCapacity', function () {
    it('should call powerCapacity adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'powerCapacity');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.powerCapacity(5));

          case 4:
            driver.adb.powerCapacity.calledWithExactly(5).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'powerCapacity');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.powerCapacity(5).should.be.rejectedWith('powerCapacity method is only available for emulators'));

          case 4:
            driver.adb.powerCapacity.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('networkSpeed', function () {
    it('should call networkSpeed adb command for emulator', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'networkSpeed');
            sandbox.stub(driver, 'isEmulator').returns(true);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.networkSpeed('gsm'));

          case 4:
            driver.adb.networkSpeed.calledWithExactly('gsm').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw exception for real device', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'networkSpeed');
            sandbox.stub(driver, 'isEmulator').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.networkSpeed('gsm').should.be.rejectedWith('networkSpeed method is only available for emulators'));

          case 4:
            driver.adb.networkSpeed.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getScreenshotDataWithAdbShell', function () {
    var defaultDir = '/data/local/tmp/';
    var png = '/path/sc.png';
    var localFile = 'local_file';
    beforeEach(function () {
      sandbox.stub(_temp2['default'], 'path');
      sandbox.stub(support.fs, 'exists');
      sandbox.stub(support.fs, 'unlink');
      sandbox.stub(driver.adb, 'shell');
      sandbox.stub(driver.adb, 'pull');
      sandbox.stub(_path2['default'].posix, 'resolve');
      sandbox.stub(_jimp2['default'], 'read');
      sandbox.stub(driver.adb, 'fileSize');
      _temp2['default'].path.returns(localFile);
      support.fs.exists.withArgs(localFile).returns(true);
      support.fs.unlink.withArgs(localFile).returns(true);
      _path2['default'].posix.resolve.withArgs(defaultDir, 'screenshot.png').returns(png);
      driver.adb.fileSize.withArgs(png).returns(1);
      _jimp2['default'].read.withArgs(localFile).returns('screenshoot_context');
    });
    it('should be able to get screenshot via adb shell', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbShell(driver.adb, {}).should.become('screenshoot_context'));

          case 2:
            driver.adb.shell.calledWithExactly(['/system/bin/rm', png + ';', '/system/bin/screencap', '-p', png]).should.be['true'];
            driver.adb.pull.calledWithExactly(png, localFile).should.be['true'];
            _jimp2['default'].read.calledWithExactly(localFile).should.be['true'];
            support.fs.exists.calledTwice.should.be['true'];
            support.fs.unlink.calledTwice.should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be possible to change default png dir', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            _path2['default'].posix.resolve.withArgs('/custom/path/tmp/', 'screenshot.png').returns(png);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbShell(driver.adb, { androidScreenshotPath: '/custom/path/tmp/' }).should.become('screenshoot_context'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if size of the screenshot is zero', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.fileSize.withArgs(png).returns(0);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbShell(driver.adb, {}).should.be.rejectedWith('equals to zero'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getScreenshotDataWithAdbExecOut', function () {
    it('should be able to take screenshot via exec-out', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(teen_process, 'exec');
            sandbox.stub(_jimp2['default'], 'read');
            teen_process.exec.returns({ stdout: 'stdout', stderr: '' });
            driver.adb.executable.path = 'path/to/adb';
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbExecOut(driver.adb));

          case 6:
            teen_process.exec.calledWithExactly(driver.adb.executable.path, driver.adb.executable.defaultArgs.concat(['exec-out', '/system/bin/screencap', '-p']), { encoding: 'binary', isBuffer: true }).should.be['true'];
            _jimp2['default'].read.calledWithExactly('stdout').should.be['true'];

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if size of the screenshot is zero', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(teen_process, 'exec');
            teen_process.exec.returns({ stdout: '', stderr: '' });
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbExecOut(driver.adb).should.be.rejectedWith('Screenshot returned no data'));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if code is not 0', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(teen_process, 'exec');
            teen_process.exec.returns({ code: 1, stdout: '', stderr: '' });
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbExecOut(driver.adb).should.be.rejectedWith('Screenshot returned error, code: \'1\', stderr: \'\''));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if stderr is not empty', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(teen_process, 'exec');
            teen_process.exec.returns({ code: 0, stdout: '', stderr: 'Oops' });
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libCommandsActions2['default'].getScreenshotDataWithAdbExecOut(driver.adb).should.be.rejectedWith('Screenshot returned error, code: \'0\', stderr: \'Oops\''));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getScreenshot', function () {
    var image = undefined;
    beforeEach(function () {
      image = new _jimp2['default'](1, 1);
      sandbox.stub(driver.adb, 'getApiLevel');
      sandbox.stub(driver.adb, 'getScreenOrientation');
      sandbox.stub(driver, 'getScreenshotDataWithAdbExecOut');
      sandbox.stub(driver, 'getScreenshotDataWithAdbShell');
      sandbox.stub(image, 'getBuffer', function (mime, cb) {
        // eslint-disable-line promise/prefer-await-to-callbacks
        return cb.call(this, null, new Buffer('appium'));
      });
      sandbox.stub(image, 'rotate');
      driver.adb.getScreenOrientation.returns(2);
      image.rotate.withArgs(-180).returns(image);
    });
    it('should be able to take screenshot via exec-out (API level > 20)', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(24);
            driver.getScreenshotDataWithAdbExecOut.withArgs(driver.adb).returns(image);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getScreenshot().should.become('YXBwaXVt'));

          case 4:
            driver.getScreenshotDataWithAdbExecOut.calledOnce.should.be['true'];
            driver.getScreenshotDataWithAdbShell.notCalled.should.be['true'];
            image.getBuffer.calledWith(_jimp2['default'].MIME_PNG).should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to take screenshot via adb shell (API level <= 20)', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(20);
            driver.getScreenshotDataWithAdbShell.withArgs(driver.adb, driver.opts).returns(image);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getScreenshot().should.become('YXBwaXVt'));

          case 4:
            driver.getScreenshotDataWithAdbShell.calledOnce.should.be['true'];
            driver.getScreenshotDataWithAdbExecOut.notCalled.should.be['true'];
            image.getBuffer.calledWith(_jimp2['default'].MIME_PNG).should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should tries to take screenshot via adb shell if exec-out failed (API level > 20)', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(24);
            driver.getScreenshotDataWithAdbExecOut.throws();
            driver.getScreenshotDataWithAdbShell.withArgs(driver.adb, driver.opts).returns(image);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getScreenshot().should.become('YXBwaXVt'));

          case 5:
            driver.getScreenshotDataWithAdbShell.calledOnce.should.be['true'];
            driver.getScreenshotDataWithAdbShell.calledOnce.should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if adb shell failed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(20);
            driver.getScreenshotDataWithAdbShell.throws();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getScreenshot().should.be.rejectedWith('Cannot get screenshot'));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should rotate image if API level < 23', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(22);
            driver.getScreenshotDataWithAdbExecOut.withArgs(driver.adb).returns(image);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getScreenshot());

          case 4:
            driver.adb.getScreenOrientation.calledOnce.should.be['true'];
            image.rotate.calledOnce.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should not rotate image if API level >= 23', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.adb.getApiLevel.returns(23);
            driver.getScreenshotDataWithAdbExecOut.withArgs(driver.adb).returns(image);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getScreenshot());

          case 4:
            driver.adb.getScreenOrientation.notCalled.should.be['true'];
            image.rotate.notCalled.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should not throws error if rotate image failed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            image.rotate.resetBehavior();
            image.rotate.throws();
            driver.adb.getApiLevel.returns(22);
            driver.getScreenshotDataWithAdbExecOut.withArgs(driver.adb).returns(image);
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(driver.getScreenshot().should.be.fulfilled);

          case 6:
            image.rotate.threw().should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});

// Stub in driver.adb and make it pull a folder with two files

// Extract the zip file and verify it's contents
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9hY3Rpb25zLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3FCQUMzQixPQUFPOzs7O3NDQUNILDBCQUEwQjs7OztvQkFDL0IsTUFBTTs7OztzQkFDSixTQUFTOzs7O2dCQUNGLFVBQVU7Ozs7NkJBQ1gsZ0JBQWdCOztJQUE3QixPQUFPOztvQkFDRixNQUFNOzs7O3lCQUNQLFlBQVk7Ozs7b0JBQ1gsTUFBTTs7OztrQ0FDSCwrQkFBK0I7Ozs7NEJBQ3JCLGNBQWM7O0lBQWhDLFlBQVk7O0FBRXhCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLE9BQU8sR0FBRyxtQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDOUIsWUFBVSxDQUFDLFlBQVk7QUFDckIsVUFBTSxHQUFHLG1CQUFtQixDQUFDO0FBQzdCLFVBQU0sQ0FBQyxHQUFHLEdBQUcsNEJBQVMsQ0FBQztBQUN2QixVQUFNLENBQUMsU0FBUyxHQUFHLHlDQUFlLENBQUM7QUFDbkMsV0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQzlDLENBQUMsQ0FBQztBQUNILFdBQVMsQ0FBQyxZQUFZO0FBQ3BCLFdBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNuQixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsVUFBVSxFQUFFLFlBQVk7QUFDL0IsTUFBRSxDQUFDLHNEQUFzRCxFQUFFOzs7O0FBQ3pELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzs7NkNBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7O0FBQ25DLGtCQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDcEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHlDQUF5QyxFQUFFOzs7O0FBQzVDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzs7NkNBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7QUFDM0Isa0JBQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNsRSxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsY0FBYyxFQUFFLFlBQVk7QUFDbkMsTUFBRSxDQUFDLG1DQUFtQyxFQUFFOzs7Ozs2Q0FDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOzs7QUFDdkMsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN4QixpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUNyRSxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHlDQUF5QyxFQUFFOzs7Ozs2Q0FDdEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7OztBQUMvQixrQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3hCLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQ25FLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtBQUN2QyxNQUFFLENBQUMsbUNBQW1DLEVBQUU7Ozs7OzZDQUNoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7O0FBQzNDLGtCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDeEIsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUN6RSxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHlDQUF5QyxFQUFFOzs7Ozs2Q0FDdEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzs7O0FBQ25DLGtCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDeEIsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUN2RSxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLGdCQUFnQixFQUFFLFlBQVk7QUFDckMsTUFBRSxDQUFDLG9DQUFvQyxFQUFFOzs7O0FBQ3ZDLGtCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FDN0UsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs2Q0FDbEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs7QUFDeEQsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN4QixpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsRUFBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUM3RCxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLGdCQUFnQixFQUFFLFlBQVk7QUFDckMsTUFBRSxDQUFDLG9DQUFvQyxFQUFFO1VBQ25DLElBQUk7Ozs7QUFBSixnQkFBSSxHQUFHLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUM7OzZDQUMxRCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3hDLGtCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQy9ELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsV0FBVyxFQUFFLFlBQVk7QUFDaEMsTUFBRSxDQUFDLGtDQUFrQyxFQUFFOzs7Ozs2Q0FDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDOzs7QUFDOUIsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN4QixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUN4RSxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtBQUN2QyxNQUFFLENBQUMsNkNBQTZDLEVBQUU7Ozs7OzZDQUMxQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDOzs7QUFDakQsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN4QixpQkFBaUIsQ0FBQyxlQUFlLEVBQ2hDLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQzFELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsT0FBTyxFQUFFLFlBQVk7QUFDNUIsTUFBRSxDQUFDLHlCQUF5QixFQUFFLFlBQVk7QUFDeEMsVUFBSSxTQUFTLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUMxQyxhQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUN2RCxZQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FDdEUsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0tBQ25CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxpQ0FBaUMsRUFBRSxZQUFZO0FBQ2hELFlBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0tBQ2hFLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxxRUFBcUUsRUFBRTtVQUNwRSxTQUFTOzs7O0FBQVQscUJBQVMsR0FBRyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQzs7QUFDdEUsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLGtCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDNUQsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFlBQVksRUFBRSxZQUFZO0FBQ2pDLE1BQUUsQ0FBQyxvQ0FBb0MsRUFBRTtVQUNuQyxTQUFTOzs7O0FBQVQscUJBQVMsR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7OzZDQUN0RSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7OztBQUNyRSxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUN0RSxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZO0FBQ2hDLE1BQUUsQ0FBQyxxQ0FBcUMsRUFBRTtVQUNwQyxTQUFTOzs7O0FBQVQscUJBQVMsR0FBRyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7OzZDQUN2RSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7OztBQUNwRSxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUN0RSxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZO0FBQzVCLE1BQUUsQ0FBQyxtREFBbUQsRUFBRTs7OztBQUN0RCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7NkNBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUMvQyxrQkFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDcEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLGdEQUFnRCxFQUFFOzs7O0FBQ25ELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQzs7NkNBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUM5QixrQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNsRCxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsTUFBTSxFQUFFLFlBQVk7QUFDM0IsUUFBSSxRQUFRLEdBQUc7QUFDYixlQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPO0FBQ3JDLFlBQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDakQsQ0FBQztBQUNGLE1BQUUsQ0FBQyx3QkFBd0IsRUFBRTs7OztBQUMzQixrQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FDcEUsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ25CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxnQ0FBZ0MsRUFBRTs7OztBQUNuQyxvQkFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDMUIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELGtCQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQzVELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsTUFBTSxFQUFFLFlBQVk7QUFDM0IsTUFBRSxDQUFDLHdCQUF3QixFQUFFOzs7O0FBQzNCLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7OzZDQUMzQixNQUFNLENBQUMsSUFBSSxFQUFFOzs7QUFDbkIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDM0MsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZO0FBQy9CLE1BQUUsQ0FBQyxrQ0FBa0MsRUFBRTs7OztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs2Q0FDNUQsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDOzs7QUFDcEQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDckQsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLG1CQUFtQixFQUFFLFlBQVk7QUFDeEMsTUFBRSxDQUFDLHNDQUFzQyxFQUFFOzs7Ozs2Q0FDbkMsTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7QUFDaEMsa0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQzlELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsYUFBYSxFQUFFLFlBQVk7QUFDbEMsTUFBRSxDQUFDLGdDQUFnQyxFQUFFOzs7O0FBQ25DLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7NkNBQ3hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzs7O0FBQ3ZDLGtCQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQy9ELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsVUFBVSxFQUFFLFlBQVk7QUFDL0IsTUFBRSxDQUFDLHlDQUF5QyxFQUFFO1VBQ3hDLFNBQVM7Ozs7QUFBVCxxQkFBUyxHQUFHLGdCQUFnQjs7QUFDaEMsbUJBQU8sQ0FBQyxJQUFJLG9CQUFPLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRSxtQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsbUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7NkNBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7OztBQUM5RCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUN4RCxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDbEIsbUJBQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUMvRCxDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLDhFQUE4RSxFQUFFO1VBQzdFLFNBQVMsRUFDUCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE9BQU87Ozs7QUFIVCxxQkFBUyxHQUFHLGdCQUFnQjtBQUMxQixxQkFBUyxHQUFHLFdBQVc7QUFDdkIsc0JBQVUsR0FBRyxtQkFBbUI7QUFDaEMsbUJBQU8sR0FBRywyQkFBMkI7O0FBQzNDLG1CQUFPLENBQUMsSUFBSSxvQkFBTyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRSxtQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsbUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7NkNBQzdCLE1BQU0sQ0FBQyxRQUFRLE9BQUssU0FBUyxTQUFJLFVBQVUsQ0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7QUFDOUUsa0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDckUsa0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsOEJBQTJCLFNBQVMsU0FBSSxVQUFVLFFBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUM5SCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxrQkFBZ0IsU0FBUyxTQUFJLFVBQVUsRUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUNsSCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQzlELGtCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDMUUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWTtBQUMvQixNQUFFLENBQUMsdUNBQXVDLEVBQUU7VUFDdEMsU0FBUyxFQUNULE9BQU87Ozs7QUFEUCxxQkFBUyxHQUFHLGdCQUFnQjtBQUM1QixtQkFBTyxHQUFHLFFBQVE7O0FBQ3RCLG1CQUFPLENBQUMsSUFBSSxvQkFBTyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRSxtQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs2Q0FDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDOzs7QUFDaEQsbUJBQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ3BGLG1CQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDOUQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDNUUsQ0FBQyxDQUFDOztBQUVILE1BQUUsQ0FBQyw0RUFBNEUsRUFBRTtVQUMzRSxTQUFTLEVBQ1QsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTzs7OztBQUpULHFCQUFTLEdBQUcsZ0JBQWdCO0FBQzVCLG1CQUFPLEdBQUcsUUFBUTtBQUNoQixxQkFBUyxHQUFHLFdBQVc7QUFDdkIsc0JBQVUsR0FBRyxtQkFBbUI7QUFDaEMsbUJBQU8sR0FBRywyQkFBMkI7O0FBQzNDLG1CQUFPLENBQUMsSUFBSSxvQkFBTyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JFLG1CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7OzZDQUM3QixNQUFNLENBQUMsUUFBUSxPQUFLLFNBQVMsU0FBSSxVQUFVLEVBQUksVUFBVSxDQUFDOzs7QUFDaEUsbUJBQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ3BGLGtCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ3JFLGtCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLDZCQUEwQixTQUFTLGdCQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDdkgsa0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsMEJBQXVCLFNBQVMsU0FBSSxVQUFVLFFBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUMxSCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyw4QkFBMkIsU0FBUyxTQUFJLFVBQVUsUUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQzlILGtCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxrQkFBZ0IsU0FBUyxTQUFJLFVBQVUsQ0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ2xILG1CQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDOUQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUMxRSxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsWUFBWSxFQUFFLFlBQVk7QUFDakMsUUFBSSxTQUFTLFlBQUE7UUFBRSxXQUFXLFlBQUE7UUFBRSxPQUFPLFlBQUE7UUFBRSxZQUFZLFlBQUEsQ0FBQzs7QUFFbEQsVUFBTSxDQUFDLFlBQVk7Ozs7QUFFakIsZUFBUyxHQUFHLHNCQUFzQixDQUFDO0FBQ25DLGlCQUFXLEdBQUcsd0JBQXdCLENBQUM7QUFDdkMsYUFBTyxHQUFHLHdCQUF3QixDQUFDO0FBQ25DLHVFQUNHLFNBQVMsRUFBRyxFQUFFLDRCQUNkLFdBQVcsRUFBRyxFQUFFLDRCQUNoQixPQUFPLEVBQUcsRUFBRSxZQUNiLENBQUM7OztBQUdILGtCQUFZLEdBQUcsbUJBQU0sSUFBSSxvQkFBTyxNQUFNLEVBQUU7ZUFBTSxPQUFPO09BQUEsQ0FBQyxDQUFDO0tBQ3hELENBQUMsQ0FBQzs7QUFFSCxTQUFLLENBQUMsWUFBWTtBQUNoQixrQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZCLDBCQUFPLE9BQU8sRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsNENBQTRDLEVBQUU7VUFFM0MsV0FBVyxFQUNULElBQUksRUFXSixZQUFZOzs7Ozs7QUFaZCx1QkFBVzs7QUFDVCxnQkFBSSxHQUFHLFNBQVAsSUFBSSxDQUFVLE1BQU0sRUFBRSxTQUFTOzs7OztxREFDN0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsa0JBQUssT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUM7Ozs7cURBQ25GLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDOzs7Ozs7O2FBQ3JGOztBQUNELGdCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNmLG9CQUFNLENBQUMsR0FBRyxHQUFHLEVBQUMsSUFBSSxFQUFKLElBQUksRUFBQyxDQUFDO2FBQ3JCLE1BQU07QUFDTCx5QkFBVyxHQUFHLG1CQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNwRDs7Ozs2Q0FHMEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzs7O0FBQTFELHdCQUFZOztBQUNsQixhQUFDLE9BQU8sWUFBWSxDQUFBLENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7NkNBQ3ZDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUM7Ozs7NkNBRzNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGtCQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsV0FBVyxDQUFDOzs7OzZDQUM1RSxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBSyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7Ozs2Q0FDdEcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQUssT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7Ozs7O0FBR3ZHLGdCQUFJLFdBQVcsRUFBRTtBQUNmLHlCQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkIsTUFBTTtBQUNMLHFCQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDbkI7Ozs7Ozs7S0FDRixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsYUFBYSxFQUFFLFlBQVk7QUFDbEMsTUFBRSxDQUFDLGtEQUFrRCxFQUFFOzs7O0FBQ3JELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NkNBQzNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDOzs7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUMvRCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsd0NBQXdDLEVBQUU7Ozs7QUFDM0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNyQyxZQUFZLENBQUMsb0RBQW9ELENBQUM7OztBQUNyRSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNqRCxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDOUIsTUFBRSxDQUFDLDhDQUE4QyxFQUFFOzs7O0FBQ2pELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NkNBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQzs7O0FBQzFDLGtCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQ3ZELE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsd0NBQXdDLEVBQUU7Ozs7QUFDM0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQ3ZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdEQUFnRCxDQUFDOzs7QUFDM0Usa0JBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDN0MsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQzlCLE1BQUUsQ0FBQyw4Q0FBOEMsRUFBRTs7OztBQUNqRCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OzZDQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7OztBQUNsQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuRSxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsd0NBQXdDLEVBQUU7Ozs7QUFDM0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdEQUFnRCxDQUFDOzs7QUFDM0Usa0JBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDN0MsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZO0FBQ2hDLE1BQUUsQ0FBQyxnREFBZ0QsRUFBRTs7OztBQUNuRCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OzZDQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FDdEMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ25CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx3Q0FBd0MsRUFBRTs7OztBQUMzQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7OzZDQUM1QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxrREFBa0QsQ0FBQzs7O0FBQzdFLGtCQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQy9DLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztBQUNILFVBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWTtBQUMvQixNQUFFLENBQUMsK0NBQStDLEVBQUU7Ozs7QUFDbEQsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs2Q0FDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7OztBQUNoQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQzdDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsd0NBQXdDLEVBQUU7Ozs7QUFDM0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsaURBQWlELENBQUM7OztBQUM1RSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUM5QyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDOUIsTUFBRSxDQUFDLDhDQUE4QyxFQUFFOzs7O0FBQ2pELG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NkNBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOzs7QUFDM0Isa0JBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUN4QyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDbkIsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHdDQUF3QyxFQUFFOzs7O0FBQzNDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7NkNBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdEQUFnRCxDQUFDOzs7QUFDM0Usa0JBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDN0MsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZO0FBQ3BDLE1BQUUsQ0FBQyxvREFBb0QsRUFBRTs7OztBQUN2RCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzFDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7OzZDQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O0FBQzdCLGtCQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FDMUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ25CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx3Q0FBd0MsRUFBRTs7OztBQUMzQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzFDLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7OzZDQUM1QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxzREFBc0QsQ0FBQzs7O0FBQ2pGLGtCQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ25ELENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztBQUNILFVBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWTtBQUNuQyxNQUFFLENBQUMsbURBQW1ELEVBQUU7Ozs7QUFDdEQsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN6QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs2Q0FDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7OztBQUNoQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQzdDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsd0NBQXdDLEVBQUU7Ozs7QUFDM0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN6QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMscURBQXFELENBQUM7OztBQUNoRixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNsRCxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsK0JBQStCLEVBQUUsWUFBWTtBQUNwRCxRQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztBQUN0QyxRQUFNLEdBQUcsR0FBRyxjQUFjLENBQUM7QUFDM0IsUUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQy9CLGNBQVUsQ0FBQyxZQUFZO0FBQ3JCLGFBQU8sQ0FBQyxJQUFJLG9CQUFPLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLGFBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuQyxhQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsYUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGFBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxhQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFLLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxhQUFPLENBQUMsSUFBSSxvQkFBTyxNQUFNLENBQUMsQ0FBQztBQUMzQixhQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckMsd0JBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixhQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELGFBQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEQsd0JBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLFlBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0Msd0JBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUM5RCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsZ0RBQWdELEVBQUU7Ozs7OzZDQUM3QyxnQ0FBUSw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDOzs7QUFDdkMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsZ0JBQWdCLEVBQUssR0FBRyxRQUN4RCx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDeEQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDakUsOEJBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUN0RCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUM3QyxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUM5QyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsOENBQThDLEVBQUU7Ozs7QUFDakQsOEJBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OzZDQUMxRSxnQ0FBUSw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUNsRCxFQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzs7Ozs7OztLQUN4QyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsc0RBQXNELEVBQUU7Ozs7QUFDekQsa0JBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7OzZDQUN2QyxnQ0FBUSw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN4RCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7OztLQUM1QyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsaUNBQWlDLEVBQUUsWUFBWTtBQUN0RCxNQUFFLENBQUMsZ0RBQWdELEVBQUU7Ozs7QUFDbkQsbUJBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLG1CQUFPLENBQUMsSUFBSSxvQkFBTyxNQUFNLENBQUMsQ0FBQztBQUMzQix3QkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0FBQzFELGtCQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDOzs2Q0FDckMsZ0NBQVEsK0JBQStCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7O0FBQ3pELHdCQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUM5QixNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFDdEQsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUN2RCw4QkFBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ3RELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxzREFBc0QsRUFBRTs7OztBQUN6RCxtQkFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkMsd0JBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQzs7NkNBQzlDLGdDQUFRLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDdEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUM7Ozs7Ozs7S0FDekQsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHFDQUFxQyxFQUFFOzs7O0FBQ3hDLG1CQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuQyx3QkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7OzZDQUN2RCxnQ0FBUSwrQkFBK0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSx3REFBb0Q7Ozs7Ozs7S0FDOUUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDJDQUEyQyxFQUFFOzs7O0FBQzlDLG1CQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuQyx3QkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7OzZDQUMzRCxnQ0FBUSwrQkFBK0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSw0REFBd0Q7Ozs7Ozs7S0FDbEYsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZO0FBQ3BDLFFBQUksS0FBSyxZQUFBLENBQUM7QUFDVixjQUFVLENBQUMsWUFBWTtBQUNyQixXQUFLLEdBQUcsc0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGFBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4QyxhQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNqRCxhQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3hELGFBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLCtCQUErQixDQUFDLENBQUM7QUFDdEQsYUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRTs7QUFDbkQsZUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztPQUNsRCxDQUFDLENBQUM7QUFDSCxhQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5QixZQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxXQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsaUVBQWlFLEVBQUU7Ozs7QUFDcEUsa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLCtCQUErQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDckUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7QUFDdEQsa0JBQU0sQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0FBQ2pFLGtCQUFNLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUM5RCxpQkFBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsa0JBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQzFELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxtRUFBbUUsRUFBRTs7OztBQUN0RSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLGtCQUFNLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7NkNBQ2hGLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7O0FBQ3RELGtCQUFNLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUMvRCxrQkFBTSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDaEUsaUJBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGtCQUFLLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUMxRCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsbUZBQW1GLEVBQUU7Ozs7QUFDdEYsa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLCtCQUErQixDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hELGtCQUFNLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7NkNBQ2hGLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7O0FBQ3RELGtCQUFNLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUMvRCxrQkFBTSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDaEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHdDQUF3QyxFQUFFOzs7O0FBQzNDLGtCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7NkNBQ3hDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQzs7Ozs7OztLQUM3RSxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsdUNBQXVDLEVBQUU7Ozs7QUFDMUMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLCtCQUErQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDckUsTUFBTSxDQUFDLGFBQWEsRUFBRTs7O0FBQzVCLGtCQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDMUQsaUJBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUN4QyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsNENBQTRDLEVBQUU7Ozs7QUFDL0Msa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLCtCQUErQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDckUsTUFBTSxDQUFDLGFBQWEsRUFBRTs7O0FBQzVCLGtCQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDekQsaUJBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUN2QyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsZ0RBQWdELEVBQUU7Ozs7QUFDbkQsaUJBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDN0IsaUJBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLCtCQUErQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs2Q0FDckUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUzs7O0FBQ2hELGlCQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUNyQyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2NvbW1hbmRzL2FjdGlvbnMtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgQm9vdHN0cmFwIGZyb20gJ2FwcGl1bS1hbmRyb2lkLWJvb3RzdHJhcCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtb2NrRlMgZnJvbSAnbW9jay1mcyc7XG5pbXBvcnQgQW5kcm9pZERyaXZlciBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgKiBhcyBzdXBwb3J0IGZyb20gJ2FwcGl1bS1zdXBwb3J0JztcbmltcG9ydCB0ZW1wIGZyb20gJ3RlbXAnO1xuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcbmltcG9ydCBqaW1wIGZyb20gJ2ppbXAnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vbGliL2NvbW1hbmRzL2FjdGlvbnMnO1xuaW1wb3J0ICogYXMgdGVlbl9wcm9jZXNzIGZyb20gJ3RlZW5fcHJvY2Vzcyc7XG5cbmxldCBkcml2ZXI7XG5sZXQgc2FuZGJveCA9IHNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5kZXNjcmliZSgnQWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICBkcml2ZXIuYWRiID0gbmV3IEFEQigpO1xuICAgIGRyaXZlci5ib290c3RyYXAgPSBuZXcgQm9vdHN0cmFwKCk7XG4gICAgc2FuZGJveC5zdHViKGRyaXZlci5ib290c3RyYXAsICdzZW5kQWN0aW9uJyk7XG4gIH0pO1xuICBhZnRlckVhY2goZnVuY3Rpb24gKCkge1xuICAgIHNhbmRib3gucmVzdG9yZSgpO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2tleWV2ZW50JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91ZGxlIGJlIGFibGUgdG8gZXhlY3V0ZSBrZXlldmVudCB2aWEgcHJlc3NLZXlDb2RlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3ByZXNzS2V5Q29kZScpO1xuICAgICAgYXdhaXQgZHJpdmVyLmtleWV2ZW50KCc2NicsICdtZXRhJyk7XG4gICAgICBkcml2ZXIucHJlc3NLZXlDb2RlLmNhbGxlZFdpdGhFeGFjdGx5KCc2NicsICdtZXRhJykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzZXQgbWV0YXN0YXRlIHRvIG51bGwgYnkgZGVmYXVsdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdwcmVzc0tleUNvZGUnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5rZXlldmVudCgnNjYnKTtcbiAgICAgIGRyaXZlci5wcmVzc0tleUNvZGUuY2FsbGVkV2l0aEV4YWN0bHkoJzY2JywgbnVsbCkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgncHJlc3NLZXlDb2RlJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91ZGxlIGJlIGFibGUgdG8gcHJlc3Mga2V5IGNvZGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIucHJlc3NLZXlDb2RlKCc2NicsICdtZXRhJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdwcmVzc0tleUNvZGUnLCB7a2V5Y29kZTogJzY2JywgbWV0YXN0YXRlOiAnbWV0YSd9KVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzZXQgbWV0YXN0YXRlIHRvIG51bGwgYnkgZGVmYXVsdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5wcmVzc0tleUNvZGUoJzY2Jyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdwcmVzc0tleUNvZGUnLCB7a2V5Y29kZTogJzY2JywgbWV0YXN0YXRlOiBudWxsfSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2xvbmdQcmVzc0tleUNvZGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VkbGUgYmUgYWJsZSB0byBwcmVzcyBrZXkgY29kZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5sb25nUHJlc3NLZXlDb2RlKCc2NicsICdtZXRhJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdsb25nUHJlc3NLZXlDb2RlJywge2tleWNvZGU6ICc2NicsIG1ldGFzdGF0ZTogJ21ldGEnfSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2V0IG1ldGFzdGF0ZSB0byBudWxsIGJ5IGRlZmF1bHQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIubG9uZ1ByZXNzS2V5Q29kZSgnNjYnKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvblxuICAgICAgICAuY2FsbGVkV2l0aEV4YWN0bHkoJ2xvbmdQcmVzc0tleUNvZGUnLCB7a2V5Y29kZTogJzY2JywgbWV0YXN0YXRlOiBudWxsfSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2dldE9yaWVudGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91ZGxlIGJlIGFibGUgdG8gZ2V0IG9yaWVudGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmJvb3RzdHJhcC5zZW5kQWN0aW9uLndpdGhBcmdzKCdvcmllbnRhdGlvbicsIHtuYXR1cmFsT3JpZW50YXRpb246IGZhbHNlfSlcbiAgICAgICAgLnJldHVybnMoJ2xhbmRzY2FwZScpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldE9yaWVudGF0aW9uKCkuc2hvdWxkLmJlY29tZSgnTEFORFNDQVBFJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdvcmllbnRhdGlvbicsIHtuYXR1cmFsT3JpZW50YXRpb246IGZhbHNlfSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3NldE9yaWVudGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91ZGxlIGJlIGFibGUgdG8gc2V0IG9yaWVudGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IG9wdHMgPSB7b3JpZW50YXRpb246ICdTT01FU0NBUEUnLCBuYXR1cmFsT3JpZW50YXRpb246IGZhbHNlfTtcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignc29tZXNjYXBlJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aEV4YWN0bHkoJ29yaWVudGF0aW9uJywgb3B0cylcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2Zha2VGbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWRsZSBiZSBhYmxlIHRvIGRvIGZha2UgZmxpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIuZmFrZUZsaWNrKDEyLCAzNCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdmbGljaycsIHt4U3BlZWQ6IDEyLCB5U3BlZWQ6IDM0fSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnZmFrZUZsaWNrRWxlbWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWRsZSBiZSBhYmxlIHRvIGRvIGZha2UgZmxpY2sgb24gZWxlbWVudCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5mYWtlRmxpY2tFbGVtZW50KDUwMDAsIDU2LCA3OCwgMS4zMik7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb25cbiAgICAgICAgLmNhbGxlZFdpdGhFeGFjdGx5KCdlbGVtZW50OmZsaWNrJyxcbiAgICAgICAgICB7eG9mZnNldDogNTYsIHlvZmZzZXQ6IDc4LCBzcGVlZDogMS4zMiwgZWxlbWVudElkOiA1MDAwfSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3N3aXBlJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgc3dpcGUgYW4gZWxlbWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBzd2lwZU9wdHMgPSB7c3RhcnRYOiAxMCwgc3RhcnRZOiAxMSwgZW5kWDogMjAsIGVuZFk6IDIyLFxuICAgICAgICAgICAgICAgICAgICAgICBzdGVwczogMywgZWxlbWVudElkOiAnc29tZUVsZW1lbnRJZCd9O1xuICAgICAgZHJpdmVyLnN3aXBlKDEwLCAxMSwgMjAsIDIyLCAwLjEsIG51bGwsICdzb21lRWxlbWVudElkJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aEV4YWN0bHkoJ2VsZW1lbnQ6c3dpcGUnLCBzd2lwZU9wdHMpXG4gICAgICAgIC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHN3aXBlIHdpdGhvdXQgYW4gZWxlbWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5zd2lwZSgwLCAwLCAxLCAxLCAwLCAxKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvbi5jYWxsZWRXaXRoKCdzd2lwZScpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc2V0IHN0YXJ0IHBvaW50IHRvICgwLjU7MC41KSBpZiBzdGFydFggYW5kIHN0YXJ0WSBhcmUgXCJudWxsXCInLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgc3dpcGVPcHRzID0ge3N0YXJ0WDogMC41LCBzdGFydFk6IDAuNSwgZW5kWDogMCwgZW5kWTogMCwgc3RlcHM6IDB9O1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2RvU3dpcGUnKTtcbiAgICAgIGRyaXZlci5zd2lwZSgnbnVsbCcsICdudWxsJywgMCwgMCwgMCk7XG4gICAgICBkcml2ZXIuZG9Td2lwZS5jYWxsZWRXaXRoRXhhY3RseShzd2lwZU9wdHMpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3BpbmNoQ2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHBpbmNoIGluIGVsZW1lbnQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcGluY2hPcHRzID0ge2RpcmVjdGlvbjogJ2luJywgZWxlbWVudElkOiAnZWwwMScsIHBlcmNlbnQ6IDAuNSwgc3RlcHM6IDV9O1xuICAgICAgYXdhaXQgZHJpdmVyLnBpbmNoQ2xvc2UobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMC41LCA1LCAnZWwwMScpO1xuICAgICAgZHJpdmVyLmJvb3RzdHJhcC5zZW5kQWN0aW9uLmNhbGxlZFdpdGhFeGFjdGx5KCdlbGVtZW50OnBpbmNoJywgcGluY2hPcHRzKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgncGluY2hPcGVuJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBwaW5jaCBvdXQgZWxlbWVudCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwaW5jaE9wdHMgPSB7ZGlyZWN0aW9uOiAnb3V0JywgZWxlbWVudElkOiAnZWwwMScsIHBlcmNlbnQ6IDAuNSwgc3RlcHM6IDV9O1xuICAgICAgYXdhaXQgZHJpdmVyLnBpbmNoT3BlbihudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAwLjUsIDUsICdlbDAxJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aEV4YWN0bHkoJ2VsZW1lbnQ6cGluY2gnLCBwaW5jaE9wdHMpXG4gICAgICAgIC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdmbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgZmFrZUZsaWNrRWxlbWVudCBpZiBlbGVtZW50IGlzIHBhc3NlZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdmYWtlRmxpY2tFbGVtZW50Jyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZmxpY2soJ2VsZW0nLCBudWxsLCBudWxsLCAxLCAyLCAzKTtcbiAgICAgIGRyaXZlci5mYWtlRmxpY2tFbGVtZW50LmNhbGxlZFdpdGgoJ2VsZW0nLCAxLCAyLCAzKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGNhbGwgZmFrZUZsaWNrIGlmIGVsZW1lbnQgaXMgbm90IHBhc3NlZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdmYWtlRmxpY2snKTtcbiAgICAgIGF3YWl0IGRyaXZlci5mbGljayhudWxsLCAxLCAyKTtcbiAgICAgIGRyaXZlci5mYWtlRmxpY2suY2FsbGVkV2l0aCgxLCAyKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBkcmFnT3B0cyA9IHtcbiAgICAgIGVsZW1lbnRJZDogJ2VsZW0xJywgZGVzdEVsSWQ6ICdlbGVtMicsXG4gICAgICBzdGFydFg6IDEsIHN0YXJ0WTogMiwgZW5kWDogMywgZW5kWTogNCwgc3RlcHM6IDFcbiAgICB9O1xuICAgIGl0KCdzaG91bGQgZHJhZyBhbiBlbGVtZW50JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmRyYWcoMSwgMiwgMywgNCwgMC4wMiwgbnVsbCwgJ2VsZW0xJywgJ2VsZW0yJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aEV4YWN0bHkoJ2VsZW1lbnQ6ZHJhZycsIGRyYWdPcHRzKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBkcmFnIHdpdGhvdXQgYW4gZWxlbWVudCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyYWdPcHRzLmVsZW1lbnRJZCA9IG51bGw7XG4gICAgICBkcml2ZXIuZHJhZygxLCAyLCAzLCA0LCAwLjAyLCBudWxsLCBudWxsLCAnZWxlbTInKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvbi5jYWxsZWRXaXRoRXhhY3RseSgnZHJhZycsIGRyYWdPcHRzKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnbG9jaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgYWRiLmxvY2soKScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnbG9jaycpO1xuICAgICAgYXdhaXQgZHJpdmVyLmxvY2soKTtcbiAgICAgIGRyaXZlci5hZGIubG9jay5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2lzTG9ja2VkJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgY2FsbCBhZGIuaXNTY3JlZW5Mb2NrZWQoKScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnaXNTY3JlZW5Mb2NrZWQnKS5yZXR1cm5zKCdsb2NrX3N0YXR1cycpO1xuICAgICAgYXdhaXQgZHJpdmVyLmlzTG9ja2VkKCkuc2hvdWxkLmJlY29tZSgnbG9ja19zdGF0dXMnKTtcbiAgICAgIGRyaXZlci5hZGIuaXNTY3JlZW5Mb2NrZWQuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdvcGVuTm90aWZpY2F0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gb3BlbiBub3RpZmljYXRpb25zJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLm9wZW5Ob3RpZmljYXRpb25zKCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aEV4YWN0bHkoJ29wZW5Ob3RpZmljYXRpb24nKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnc2V0TG9jYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHNldCBsb2NhdGlvbicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnc2VuZFRlbG5ldENvbW1hbmQnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRMb2NhdGlvbignbGF0JywgJ2xvbmcnKTtcbiAgICAgIGRyaXZlci5hZGIuc2VuZFRlbG5ldENvbW1hbmQuY2FsbGVkV2l0aEV4YWN0bHkoJ2dlbyBmaXggbG9uZyBsYXQnKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgncHVsbEZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHB1bGwgZmlsZSBmcm9tIGRldmljZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBsb2NhbEZpbGUgPSAnbG9jYWwvdG1wX2ZpbGUnO1xuICAgICAgc2FuZGJveC5zdHViKHRlbXAsICdwYXRoJykucmV0dXJucyhsb2NhbEZpbGUpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdwdWxsJyk7XG4gICAgICBzYW5kYm94LnN0dWIoc3VwcG9ydC5mcywgJ3JlYWRGaWxlJykud2l0aEFyZ3MobG9jYWxGaWxlKS5yZXR1cm5zKCdhcHBpdW0nKTtcbiAgICAgIHNhbmRib3guc3R1YihzdXBwb3J0LmZzLCAnZXhpc3RzJykud2l0aEFyZ3MobG9jYWxGaWxlKS5yZXR1cm5zKHRydWUpO1xuICAgICAgc2FuZGJveC5zdHViKHN1cHBvcnQuZnMsICd1bmxpbmsnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5wdWxsRmlsZSgncmVtb3RlX3BhdGgnKS5zaG91bGQuYmVjb21lKCdZWEJ3YVhWdCcpO1xuICAgICAgZHJpdmVyLmFkYi5wdWxsLmNhbGxlZFdpdGhFeGFjdGx5KCdyZW1vdGVfcGF0aCcsIGxvY2FsRmlsZSlcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgICAgc3VwcG9ydC5mcy51bmxpbmsuY2FsbGVkV2l0aEV4YWN0bHkobG9jYWxGaWxlKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBwdWxsIGZpbGUgbG9jYXRlZCBpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZnJvbSB0aGUgZGV2aWNlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGxvY2FsRmlsZSA9ICdsb2NhbC90bXBfZmlsZSc7XG4gICAgICBjb25zdCBwYWNrYWdlSWQgPSAnY29tLm15YXBwJztcbiAgICAgIGNvbnN0IHJlbW90ZVBhdGggPSAncGF0aC9pbi9jb250YWluZXInO1xuICAgICAgY29uc3QgdG1wUGF0aCA9ICcvZGF0YS9sb2NhbC90bXAvY29udGFpbmVyJztcbiAgICAgIHNhbmRib3guc3R1Yih0ZW1wLCAncGF0aCcpLnJldHVybnMobG9jYWxGaWxlKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAncHVsbCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdzaGVsbCcpO1xuICAgICAgc2FuZGJveC5zdHViKHN1cHBvcnQuZnMsICdyZWFkRmlsZScpLndpdGhBcmdzKGxvY2FsRmlsZSkucmV0dXJucygnYXBwaXVtJyk7XG4gICAgICBzYW5kYm94LnN0dWIoc3VwcG9ydC5mcywgJ2V4aXN0cycpLndpdGhBcmdzKGxvY2FsRmlsZSkucmV0dXJucyh0cnVlKTtcbiAgICAgIHNhbmRib3guc3R1YihzdXBwb3J0LmZzLCAndW5saW5rJyk7XG4gICAgICBhd2FpdCBkcml2ZXIucHVsbEZpbGUoYEAke3BhY2thZ2VJZH0vJHtyZW1vdGVQYXRofWApLnNob3VsZC5iZWNvbWUoJ1lYQndhWFZ0Jyk7XG4gICAgICBkcml2ZXIuYWRiLnB1bGwuY2FsbGVkV2l0aEV4YWN0bHkodG1wUGF0aCwgbG9jYWxGaWxlKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2hlbGwuY2FsbGVkV2l0aEV4YWN0bHkoWydydW4tYXMnLCBwYWNrYWdlSWQsIGBjaG1vZCA3NzcgJy9kYXRhL2RhdGEvJHtwYWNrYWdlSWR9LyR7cmVtb3RlUGF0aH0nYF0pLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zaGVsbC5jYWxsZWRXaXRoRXhhY3RseShbJ2NwJywgJy1mJywgYC9kYXRhL2RhdGEvJHtwYWNrYWdlSWR9LyR7cmVtb3RlUGF0aH1gLCB0bXBQYXRoXSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBzdXBwb3J0LmZzLnVubGluay5jYWxsZWRXaXRoRXhhY3RseShsb2NhbEZpbGUpLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zaGVsbC5jYWxsZWRXaXRoRXhhY3RseShbJ3JtJywgJy1mJywgdG1wUGF0aF0pLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncHVzaEZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHB1c2ggZmlsZSB0byBkZXZpY2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbG9jYWxGaWxlID0gJ2xvY2FsL3RtcF9maWxlJztcbiAgICAgIGxldCBjb250ZW50ID0gJ2FwcGl1bSc7XG4gICAgICBzYW5kYm94LnN0dWIodGVtcCwgJ3BhdGgnKS5yZXR1cm5zKGxvY2FsRmlsZSk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3B1c2gnKTtcbiAgICAgIHNhbmRib3guc3R1YihzdXBwb3J0LmZzLCAnd3JpdGVGaWxlJyk7XG4gICAgICBzYW5kYm94LnN0dWIoc3VwcG9ydC5mcywgJ2V4aXN0cycpLndpdGhBcmdzKGxvY2FsRmlsZSkucmV0dXJucyh0cnVlKTtcbiAgICAgIHNhbmRib3guc3R1YihzdXBwb3J0LmZzLCAndW5saW5rJyk7XG4gICAgICBhd2FpdCBkcml2ZXIucHVzaEZpbGUoJ3JlbW90ZV9wYXRoJywgJ1lYQndhWFZ0Jyk7XG4gICAgICBzdXBwb3J0LmZzLndyaXRlRmlsZS5jYWxsZWRXaXRoRXhhY3RseShsb2NhbEZpbGUsIGNvbnRlbnQsICdiaW5hcnknKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIHN1cHBvcnQuZnMudW5saW5rLmNhbGxlZFdpdGhFeGFjdGx5KGxvY2FsRmlsZSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLnB1c2guY2FsbGVkV2l0aEV4YWN0bHkobG9jYWxGaWxlLCAncmVtb3RlX3BhdGgnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBwdXNoIGZpbGUgbG9jYXRlZCBpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgdG8gdGhlIGRldmljZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBsb2NhbEZpbGUgPSAnbG9jYWwvdG1wX2ZpbGUnO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnYXBwaXVtJztcbiAgICAgIGNvbnN0IHBhY2thZ2VJZCA9ICdjb20ubXlhcHAnO1xuICAgICAgY29uc3QgcmVtb3RlUGF0aCA9ICdwYXRoL2luL2NvbnRhaW5lcic7XG4gICAgICBjb25zdCB0bXBQYXRoID0gJy9kYXRhL2xvY2FsL3RtcC9jb250YWluZXInO1xuICAgICAgc2FuZGJveC5zdHViKHRlbXAsICdwYXRoJykucmV0dXJucyhsb2NhbEZpbGUpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdwdXNoJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NoZWxsJyk7XG4gICAgICBzYW5kYm94LnN0dWIoc3VwcG9ydC5mcywgJ3dyaXRlRmlsZScpO1xuICAgICAgc2FuZGJveC5zdHViKHN1cHBvcnQuZnMsICdleGlzdHMnKS53aXRoQXJncyhsb2NhbEZpbGUpLnJldHVybnModHJ1ZSk7XG4gICAgICBzYW5kYm94LnN0dWIoc3VwcG9ydC5mcywgJ3VubGluaycpO1xuICAgICAgYXdhaXQgZHJpdmVyLnB1c2hGaWxlKGBAJHtwYWNrYWdlSWR9LyR7cmVtb3RlUGF0aH1gLCAnWVhCd2FYVnQnKTtcbiAgICAgIHN1cHBvcnQuZnMud3JpdGVGaWxlLmNhbGxlZFdpdGhFeGFjdGx5KGxvY2FsRmlsZSwgY29udGVudCwgJ2JpbmFyeScpLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5wdXNoLmNhbGxlZFdpdGhFeGFjdGx5KGxvY2FsRmlsZSwgdG1wUGF0aCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLnNoZWxsLmNhbGxlZFdpdGhFeGFjdGx5KFsncnVuLWFzJywgcGFja2FnZUlkLCBgbWtkaXIgLXAgJy9kYXRhL2RhdGEvJHtwYWNrYWdlSWR9L3BhdGgvaW4nYF0pLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zaGVsbC5jYWxsZWRXaXRoRXhhY3RseShbJ3J1bi1hcycsIHBhY2thZ2VJZCwgYHRvdWNoICcvZGF0YS9kYXRhLyR7cGFja2FnZUlkfS8ke3JlbW90ZVBhdGh9J2BdKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2hlbGwuY2FsbGVkV2l0aEV4YWN0bHkoWydydW4tYXMnLCBwYWNrYWdlSWQsIGBjaG1vZCA3NzcgJy9kYXRhL2RhdGEvJHtwYWNrYWdlSWR9LyR7cmVtb3RlUGF0aH0nYF0pLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zaGVsbC5jYWxsZWRXaXRoRXhhY3RseShbJ2NwJywgJy1mJywgdG1wUGF0aCwgYC9kYXRhL2RhdGEvJHtwYWNrYWdlSWR9LyR7cmVtb3RlUGF0aH1gXSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBzdXBwb3J0LmZzLnVubGluay5jYWxsZWRXaXRoRXhhY3RseShsb2NhbEZpbGUpLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zaGVsbC5jYWxsZWRXaXRoRXhhY3RseShbJ3JtJywgJy1mJywgdG1wUGF0aF0pLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3B1bGxGb2xkZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHppcHBlZERpciwgdW56aXBwZWREaXIsIHRlbXBEaXIsIHRlbXBQYXRoU3R1YjtcblxuICAgIGJlZm9yZShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDcmVhdGUgaW4tbWVtb3J5IG1vY2sgZmlsZSBzeXN0ZW0gZm9yIGZpbGUgd3JpdGVzXG4gICAgICB6aXBwZWREaXIgPSAnL21vY2svcGF0aC90by96aXBwZWQnO1xuICAgICAgdW56aXBwZWREaXIgPSAnL21vY2svcGF0aC90by91bnppcHBlZCc7XG4gICAgICB0ZW1wRGlyID0gJy9tb2NrL3BhdGgvdG8vdGVtcC1kaXInO1xuICAgICAgbW9ja0ZTKHtcbiAgICAgICAgW3ppcHBlZERpcl06IHt9LFxuICAgICAgICBbdW56aXBwZWREaXJdOiB7fSxcbiAgICAgICAgW3RlbXBEaXJdOiB7fSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTdHViIHRlbXAucGF0aCB0byB1c2UgYW4gaW4tbWVtb3J5IGZpbGVwYXRoXG4gICAgICB0ZW1wUGF0aFN0dWIgPSBzaW5vbi5zdHViKHRlbXAsICdwYXRoJywgKCkgPT4gdGVtcERpcik7XG4gICAgfSk7XG5cbiAgICBhZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICB0ZW1wUGF0aFN0dWIucmVzdG9yZSgpO1xuICAgICAgbW9ja0ZTLnJlc3RvcmUoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcHVsbCBhIGZvbGRlciBhbmQgcmV0dXJuIGJhc2U2NCB6aXAnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdHViIGluIGRyaXZlci5hZGIgYW5kIG1ha2UgaXQgcHVsbCBhIGZvbGRlciB3aXRoIHR3byBmaWxlc1xuICAgICAgbGV0IGFkYlB1bGxTdHViO1xuICAgICAgY29uc3QgcHVsbCA9IGFzeW5jIChpZ25vcmUsIGxvY2FsUGF0aCkgPT4ge1xuICAgICAgICBhd2FpdCBzdXBwb3J0LmZzLndyaXRlRmlsZShwYXRoLnJlc29sdmUobG9jYWxQYXRoLCAnYS50eHQnKSwgJ2hlbGxvIHdvcmxkJywge2ZsYWdzOiAndyd9KTtcbiAgICAgICAgYXdhaXQgc3VwcG9ydC5mcy53cml0ZUZpbGUocGF0aC5yZXNvbHZlKGxvY2FsUGF0aCwgJ2IudHh0JyksICdmb29iYXInLCB7ZmxhZ3M6ICd3J30pO1xuICAgICAgfTtcbiAgICAgIGlmICghZHJpdmVyLmFkYikge1xuICAgICAgICBkcml2ZXIuYWRiID0ge3B1bGx9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRiUHVsbFN0dWIgPSBzaW5vbi5zdHViKGRyaXZlci5hZGIsICdwdWxsJywgcHVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGwgJ2RyaXZlci5wdWxsRm9sZGVyJyBhbmQgemlwIHRoZSBiYXNlNjQgY29udGVudHMgdG8gYSAuemlwIGZpbGVcbiAgICAgIGNvbnN0IHppcHBlZEJhc2U2NCA9IGF3YWl0IGRyaXZlci5wdWxsRm9sZGVyKCcvZG9lcy9ub3QvbWF0dGVyJyk7XG4gICAgICAodHlwZW9mIHppcHBlZEJhc2U2NCkuc2hvdWxkLmVxdWFsKCdzdHJpbmcnKTtcbiAgICAgIGF3YWl0IHN1cHBvcnQuZnMud3JpdGVGaWxlKHBhdGgucmVzb2x2ZSh6aXBwZWREaXIsICd6aXBwZWQuemlwJyksIHppcHBlZEJhc2U2NCwge2VuY29kaW5nOiAnYmFzZTY0JywgZmxhZ3M6ICd3J30pO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSB6aXAgZmlsZSBhbmQgdmVyaWZ5IGl0J3MgY29udGVudHNcbiAgICAgIGF3YWl0IHN1cHBvcnQuemlwLmV4dHJhY3RBbGxUbyhwYXRoLnJlc29sdmUoemlwcGVkRGlyLCAnemlwcGVkLnppcCcpLCB1bnppcHBlZERpcik7XG4gICAgICBhd2FpdCBzdXBwb3J0LmZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZSh1bnppcHBlZERpciwgJ2EudHh0JyksICd1dGY4Jykuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ2hlbGxvIHdvcmxkJyk7XG4gICAgICBhd2FpdCBzdXBwb3J0LmZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZSh1bnppcHBlZERpciwgJ2IudHh0JyksICd1dGY4Jykuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ2Zvb2JhcicpO1xuXG4gICAgICAvLyBSZXN0b3JlIHN0dWJcbiAgICAgIGlmIChhZGJQdWxsU3R1Yikge1xuICAgICAgICBhZGJQdWxsU3R1Yi5yZXN0b3JlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgZHJpdmVyLmFkYjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdmaW5nZXJwcmludCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgZmluZ2VycHJpbnQgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdmaW5nZXJwcmludCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLmZpbmdlcnByaW50KDExMTEpO1xuICAgICAgZHJpdmVyLmFkYi5maW5nZXJwcmludC5jYWxsZWRXaXRoRXhhY3RseSgxMTExKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBmb3IgcmVhbCBkZXZpY2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2ZpbmdlcnByaW50Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnaXNFbXVsYXRvcicpLnJldHVybnMoZmFsc2UpO1xuICAgICAgYXdhaXQgZHJpdmVyLmZpbmdlcnByaW50KDExMTEpLnNob3VsZC5iZVxuICAgICAgICAucmVqZWN0ZWRXaXRoKCdmaW5nZXJwcmludCBtZXRob2QgaXMgb25seSBhdmFpbGFibGUgZm9yIGVtdWxhdG9ycycpO1xuICAgICAgZHJpdmVyLmFkYi5maW5nZXJwcmludC5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnc2VuZFNNUycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgc2VuZFNNUyBhZGIgY29tbWFuZCBmb3IgZW11bGF0b3InLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NlbmRTTVMnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyh0cnVlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5zZW5kU01TKDQ1MDksICdIZWxsbyBBcHBpdW0nKTtcbiAgICAgIGRyaXZlci5hZGIuc2VuZFNNUy5jYWxsZWRXaXRoRXhhY3RseSg0NTA5LCAnSGVsbG8gQXBwaXVtJylcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGZvciByZWFsIGRldmljZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnc2VuZFNNUycpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKGZhbHNlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5zZW5kU01TKDQ1MDksICdIZWxsbyBBcHBpdW0nKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgnc2VuZFNNUyBtZXRob2QgaXMgb25seSBhdmFpbGFibGUgZm9yIGVtdWxhdG9ycycpO1xuICAgICAgZHJpdmVyLmFkYi5zZW5kU01TLm5vdENhbGxlZC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnc21DYWxsJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgY2FsbCBnc21DYWxsIGFkYiBjb21tYW5kIGZvciBlbXVsYXRvcicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnZ3NtQ2FsbCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdzbUNhbGwoNDUwOSwgJ2NhbGwnKTtcbiAgICAgIGRyaXZlci5hZGIuZ3NtQ2FsbC5jYWxsZWRXaXRoRXhhY3RseSg0NTA5LCAnY2FsbCcpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGZvciByZWFsIGRldmljZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnZ3NtQ2FsbCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKGZhbHNlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nc21DYWxsKDQ1MDksICdjYWxsJylcbiAgICAgICAgLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoJ2dzbUNhbGwgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBlbXVsYXRvcnMnKTtcbiAgICAgIGRyaXZlci5hZGIuZ3NtQ2FsbC5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnZ3NtU2lnbmFsJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgY2FsbCBnc21TaWduYWwgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdnc21TaWduYWwnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyh0cnVlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nc21TaWduYWwoMyk7XG4gICAgICBkcml2ZXIuYWRiLmdzbVNpZ25hbC5jYWxsZWRXaXRoRXhhY3RseSgzKVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBleGNlcHRpb24gZm9yIHJlYWwgZGV2aWNlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdnc21TaWduYWwnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyhmYWxzZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ3NtU2lnbmFsKDMpXG4gICAgICAgIC5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKCdnc21TaWduYWwgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBlbXVsYXRvcnMnKTtcbiAgICAgIGRyaXZlci5hZGIuZ3NtU2lnbmFsLm5vdENhbGxlZC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnc21Wb2ljZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgZ3NtVm9pY2UgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdnc21Wb2ljZScpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdzbVZvaWNlKCdyb2FtaW5nJyk7XG4gICAgICBkcml2ZXIuYWRiLmdzbVZvaWNlLmNhbGxlZFdpdGhFeGFjdGx5KCdyb2FtaW5nJylcbiAgICAgICAgLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGZvciByZWFsIGRldmljZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnZ3NtVm9pY2UnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyhmYWxzZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ3NtVm9pY2UoJ3JvYW1pbmcnKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgnZ3NtVm9pY2UgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBlbXVsYXRvcnMnKTtcbiAgICAgIGRyaXZlci5hZGIuZ3NtVm9pY2Uubm90Q2FsbGVkLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3Bvd2VyQUMnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBjYWxsIHBvd2VyQUMgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdwb3dlckFDJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnaXNFbXVsYXRvcicpLnJldHVybnModHJ1ZSk7XG4gICAgICBhd2FpdCBkcml2ZXIucG93ZXJBQygnb2ZmJyk7XG4gICAgICBkcml2ZXIuYWRiLnBvd2VyQUMuY2FsbGVkV2l0aEV4YWN0bHkoJ29mZicpXG4gICAgICAgIC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBmb3IgcmVhbCBkZXZpY2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3Bvd2VyQUMnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyhmYWxzZSk7XG4gICAgICBhd2FpdCBkcml2ZXIucG93ZXJBQygncm9hbWluZycpXG4gICAgICAgIC5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKCdwb3dlckFDIG1ldGhvZCBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgZW11bGF0b3JzJyk7XG4gICAgICBkcml2ZXIuYWRiLnBvd2VyQUMubm90Q2FsbGVkLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3Bvd2VyQ2FwYWNpdHknLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBjYWxsIHBvd2VyQ2FwYWNpdHkgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdwb3dlckNhcGFjaXR5Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnaXNFbXVsYXRvcicpLnJldHVybnModHJ1ZSk7XG4gICAgICBhd2FpdCBkcml2ZXIucG93ZXJDYXBhY2l0eSg1KTtcbiAgICAgIGRyaXZlci5hZGIucG93ZXJDYXBhY2l0eS5jYWxsZWRXaXRoRXhhY3RseSg1KVxuICAgICAgICAuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBleGNlcHRpb24gZm9yIHJlYWwgZGV2aWNlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdwb3dlckNhcGFjaXR5Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnaXNFbXVsYXRvcicpLnJldHVybnMoZmFsc2UpO1xuICAgICAgYXdhaXQgZHJpdmVyLnBvd2VyQ2FwYWNpdHkoNSlcbiAgICAgICAgLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoJ3Bvd2VyQ2FwYWNpdHkgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBlbXVsYXRvcnMnKTtcbiAgICAgIGRyaXZlci5hZGIucG93ZXJDYXBhY2l0eS5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnbmV0d29ya1NwZWVkJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgY2FsbCBuZXR3b3JrU3BlZWQgYWRiIGNvbW1hbmQgZm9yIGVtdWxhdG9yJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICduZXR3b3JrU3BlZWQnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdpc0VtdWxhdG9yJykucmV0dXJucyh0cnVlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5uZXR3b3JrU3BlZWQoJ2dzbScpO1xuICAgICAgZHJpdmVyLmFkYi5uZXR3b3JrU3BlZWQuY2FsbGVkV2l0aEV4YWN0bHkoJ2dzbScpXG4gICAgICAgIC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBmb3IgcmVhbCBkZXZpY2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ25ldHdvcmtTcGVlZCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2lzRW11bGF0b3InKS5yZXR1cm5zKGZhbHNlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5uZXR3b3JrU3BlZWQoJ2dzbScpXG4gICAgICAgIC5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKCduZXR3b3JrU3BlZWQgbWV0aG9kIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBlbXVsYXRvcnMnKTtcbiAgICAgIGRyaXZlci5hZGIubmV0d29ya1NwZWVkLm5vdENhbGxlZC5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkZWZhdWx0RGlyID0gJy9kYXRhL2xvY2FsL3RtcC8nO1xuICAgIGNvbnN0IHBuZyA9ICcvcGF0aC9zYy5wbmcnO1xuICAgIGNvbnN0IGxvY2FsRmlsZSA9ICdsb2NhbF9maWxlJztcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yih0ZW1wLCAncGF0aCcpO1xuICAgICAgc2FuZGJveC5zdHViKHN1cHBvcnQuZnMsICdleGlzdHMnKTtcbiAgICAgIHNhbmRib3guc3R1YihzdXBwb3J0LmZzLCAndW5saW5rJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NoZWxsJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3B1bGwnKTtcbiAgICAgIHNhbmRib3guc3R1YihwYXRoLnBvc2l4LCAncmVzb2x2ZScpO1xuICAgICAgc2FuZGJveC5zdHViKGppbXAsICdyZWFkJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2ZpbGVTaXplJyk7XG4gICAgICB0ZW1wLnBhdGgucmV0dXJucyhsb2NhbEZpbGUpO1xuICAgICAgc3VwcG9ydC5mcy5leGlzdHMud2l0aEFyZ3MobG9jYWxGaWxlKS5yZXR1cm5zKHRydWUpO1xuICAgICAgc3VwcG9ydC5mcy51bmxpbmsud2l0aEFyZ3MobG9jYWxGaWxlKS5yZXR1cm5zKHRydWUpO1xuICAgICAgcGF0aC5wb3NpeC5yZXNvbHZlLndpdGhBcmdzKGRlZmF1bHREaXIsICdzY3JlZW5zaG90LnBuZycpLnJldHVybnMocG5nKTtcbiAgICAgIGRyaXZlci5hZGIuZmlsZVNpemUud2l0aEFyZ3MocG5nKS5yZXR1cm5zKDEpO1xuICAgICAgamltcC5yZWFkLndpdGhBcmdzKGxvY2FsRmlsZSkucmV0dXJucygnc2NyZWVuc2hvb3RfY29udGV4dCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBnZXQgc2NyZWVuc2hvdCB2aWEgYWRiIHNoZWxsJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgaGVscGVycy5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbChkcml2ZXIuYWRiLCB7fSlcbiAgICAgICAgLnNob3VsZC5iZWNvbWUoJ3NjcmVlbnNob290X2NvbnRleHQnKTtcbiAgICAgIGRyaXZlci5hZGIuc2hlbGwuY2FsbGVkV2l0aEV4YWN0bHkoWycvc3lzdGVtL2Jpbi9ybScsIGAke3BuZ307YFxuICAgICAgICAsICcvc3lzdGVtL2Jpbi9zY3JlZW5jYXAnLCAnLXAnLCBwbmddKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIucHVsbC5jYWxsZWRXaXRoRXhhY3RseShwbmcsIGxvY2FsRmlsZSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBqaW1wLnJlYWQuY2FsbGVkV2l0aEV4YWN0bHkobG9jYWxGaWxlKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIHN1cHBvcnQuZnMuZXhpc3RzLmNhbGxlZFR3aWNlLnNob3VsZC5iZS50cnVlO1xuICAgICAgc3VwcG9ydC5mcy51bmxpbmsuY2FsbGVkVHdpY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBiZSBwb3NzaWJsZSB0byBjaGFuZ2UgZGVmYXVsdCBwbmcgZGlyJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgcGF0aC5wb3NpeC5yZXNvbHZlLndpdGhBcmdzKCcvY3VzdG9tL3BhdGgvdG1wLycsICdzY3JlZW5zaG90LnBuZycpLnJldHVybnMocG5nKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiU2hlbGwoZHJpdmVyLmFkYlxuICAgICAgICAsIHthbmRyb2lkU2NyZWVuc2hvdFBhdGg6ICcvY3VzdG9tL3BhdGgvdG1wLyd9KVxuICAgICAgICAuc2hvdWxkLmJlY29tZSgnc2NyZWVuc2hvb3RfY29udGV4dCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgc2l6ZSBvZiB0aGUgc2NyZWVuc2hvdCBpcyB6ZXJvJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmFkYi5maWxlU2l6ZS53aXRoQXJncyhwbmcpLnJldHVybnMoMCk7XG4gICAgICBhd2FpdCBoZWxwZXJzLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYlNoZWxsKGRyaXZlci5hZGIsIHt9KVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgnZXF1YWxzIHRvIHplcm8nKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJFeGVjT3V0JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byB0YWtlIHNjcmVlbnNob3QgdmlhIGV4ZWMtb3V0JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKHRlZW5fcHJvY2VzcywgJ2V4ZWMnKTtcbiAgICAgIHNhbmRib3guc3R1YihqaW1wLCAncmVhZCcpO1xuICAgICAgdGVlbl9wcm9jZXNzLmV4ZWMucmV0dXJucyh7c3Rkb3V0OiAnc3Rkb3V0Jywgc3RkZXJyOiAnJ30pO1xuICAgICAgZHJpdmVyLmFkYi5leGVjdXRhYmxlLnBhdGggPSAncGF0aC90by9hZGInO1xuICAgICAgYXdhaXQgaGVscGVycy5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJFeGVjT3V0KGRyaXZlci5hZGIpO1xuICAgICAgdGVlbl9wcm9jZXNzLmV4ZWMuY2FsbGVkV2l0aEV4YWN0bHkoZHJpdmVyLmFkYi5leGVjdXRhYmxlLnBhdGgsXG4gICAgICAgIGRyaXZlci5hZGIuZXhlY3V0YWJsZS5kZWZhdWx0QXJnc1xuICAgICAgICAgIC5jb25jYXQoWydleGVjLW91dCcsICcvc3lzdGVtL2Jpbi9zY3JlZW5jYXAnLCAnLXAnXSksXG4gICAgICAgIHtlbmNvZGluZzogJ2JpbmFyeScsIGlzQnVmZmVyOiB0cnVlfSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBqaW1wLnJlYWQuY2FsbGVkV2l0aEV4YWN0bHkoJ3N0ZG91dCcpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgc2l6ZSBvZiB0aGUgc2NyZWVuc2hvdCBpcyB6ZXJvJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKHRlZW5fcHJvY2VzcywgJ2V4ZWMnKTtcbiAgICAgIHRlZW5fcHJvY2Vzcy5leGVjLnJldHVybnMoe3N0ZG91dDogJycsIHN0ZGVycjogJyd9KTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiRXhlY091dChkcml2ZXIuYWRiKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgnU2NyZWVuc2hvdCByZXR1cm5lZCBubyBkYXRhJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiBjb2RlIGlzIG5vdCAwJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKHRlZW5fcHJvY2VzcywgJ2V4ZWMnKTtcbiAgICAgIHRlZW5fcHJvY2Vzcy5leGVjLnJldHVybnMoe2NvZGU6IDEsIHN0ZG91dDogJycsIHN0ZGVycjogJyd9KTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiRXhlY091dChkcml2ZXIuYWRiKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aChgU2NyZWVuc2hvdCByZXR1cm5lZCBlcnJvciwgY29kZTogJzEnLCBzdGRlcnI6ICcnYCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiBzdGRlcnIgaXMgbm90IGVtcHR5JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKHRlZW5fcHJvY2VzcywgJ2V4ZWMnKTtcbiAgICAgIHRlZW5fcHJvY2Vzcy5leGVjLnJldHVybnMoe2NvZGU6IDAsIHN0ZG91dDogJycsIHN0ZGVycjogJ09vcHMnfSk7XG4gICAgICBhd2FpdCBoZWxwZXJzLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYkV4ZWNPdXQoZHJpdmVyLmFkYilcbiAgICAgICAgLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoYFNjcmVlbnNob3QgcmV0dXJuZWQgZXJyb3IsIGNvZGU6ICcwJywgc3RkZXJyOiAnT29wcydgKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRTY3JlZW5zaG90JywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBpbWFnZTtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGltYWdlID0gbmV3IGppbXAoMSwgMSk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2dldEFwaUxldmVsJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2dldFNjcmVlbk9yaWVudGF0aW9uJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiRXhlY091dCcpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldFNjcmVlbnNob3REYXRhV2l0aEFkYlNoZWxsJyk7XG4gICAgICBzYW5kYm94LnN0dWIoaW1hZ2UsICdnZXRCdWZmZXInLCBmdW5jdGlvbiAobWltZSwgY2IpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by1jYWxsYmFja3NcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgbnVsbCwgbmV3IEJ1ZmZlcignYXBwaXVtJykpO1xuICAgICAgfSk7XG4gICAgICBzYW5kYm94LnN0dWIoaW1hZ2UsICdyb3RhdGUnKTtcbiAgICAgIGRyaXZlci5hZGIuZ2V0U2NyZWVuT3JpZW50YXRpb24ucmV0dXJucygyKTtcbiAgICAgIGltYWdlLnJvdGF0ZS53aXRoQXJncygtMTgwKS5yZXR1cm5zKGltYWdlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gdGFrZSBzY3JlZW5zaG90IHZpYSBleGVjLW91dCAoQVBJIGxldmVsID4gMjApJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmFkYi5nZXRBcGlMZXZlbC5yZXR1cm5zKDI0KTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJFeGVjT3V0LndpdGhBcmdzKGRyaXZlci5hZGIpLnJldHVybnMoaW1hZ2UpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldFNjcmVlbnNob3QoKS5zaG91bGQuYmVjb21lKCdZWEJ3YVhWdCcpO1xuICAgICAgZHJpdmVyLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYkV4ZWNPdXQuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbC5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgICBpbWFnZS5nZXRCdWZmZXIuY2FsbGVkV2l0aChqaW1wLk1JTUVfUE5HKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gdGFrZSBzY3JlZW5zaG90IHZpYSBhZGIgc2hlbGwgKEFQSSBsZXZlbCA8PSAyMCknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuYWRiLmdldEFwaUxldmVsLnJldHVybnMoMjApO1xuICAgICAgZHJpdmVyLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYlNoZWxsLndpdGhBcmdzKGRyaXZlci5hZGIsIGRyaXZlci5vcHRzKS5yZXR1cm5zKGltYWdlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRTY3JlZW5zaG90KCkuc2hvdWxkLmJlY29tZSgnWVhCd2FYVnQnKTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYkV4ZWNPdXQubm90Q2FsbGVkLnNob3VsZC5iZS50cnVlO1xuICAgICAgaW1hZ2UuZ2V0QnVmZmVyLmNhbGxlZFdpdGgoamltcC5NSU1FX1BORykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0cmllcyB0byB0YWtlIHNjcmVlbnNob3QgdmlhIGFkYiBzaGVsbCBpZiBleGVjLW91dCBmYWlsZWQgKEFQSSBsZXZlbCA+IDIwKScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5hZGIuZ2V0QXBpTGV2ZWwucmV0dXJucygyNCk7XG4gICAgICBkcml2ZXIuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiRXhlY091dC50aHJvd3MoKTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbC53aXRoQXJncyhkcml2ZXIuYWRiLCBkcml2ZXIub3B0cykucmV0dXJucyhpbWFnZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0U2NyZWVuc2hvdCgpLnNob3VsZC5iZWNvbWUoJ1lYQndhWFZ0Jyk7XG4gICAgICBkcml2ZXIuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiU2hlbGwuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJTaGVsbC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgYWRiIHNoZWxsIGZhaWxlZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5hZGIuZ2V0QXBpTGV2ZWwucmV0dXJucygyMCk7XG4gICAgICBkcml2ZXIuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiU2hlbGwudGhyb3dzKCk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0U2NyZWVuc2hvdCgpLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoJ0Nhbm5vdCBnZXQgc2NyZWVuc2hvdCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcm90YXRlIGltYWdlIGlmIEFQSSBsZXZlbCA8IDIzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmFkYi5nZXRBcGlMZXZlbC5yZXR1cm5zKDIyKTtcbiAgICAgIGRyaXZlci5nZXRTY3JlZW5zaG90RGF0YVdpdGhBZGJFeGVjT3V0LndpdGhBcmdzKGRyaXZlci5hZGIpLnJldHVybnMoaW1hZ2UpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldFNjcmVlbnNob3QoKTtcbiAgICAgIGRyaXZlci5hZGIuZ2V0U2NyZWVuT3JpZW50YXRpb24uY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGltYWdlLnJvdGF0ZS5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbm90IHJvdGF0ZSBpbWFnZSBpZiBBUEkgbGV2ZWwgPj0gMjMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuYWRiLmdldEFwaUxldmVsLnJldHVybnMoMjMpO1xuICAgICAgZHJpdmVyLmdldFNjcmVlbnNob3REYXRhV2l0aEFkYkV4ZWNPdXQud2l0aEFyZ3MoZHJpdmVyLmFkYikucmV0dXJucyhpbWFnZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgZHJpdmVyLmFkYi5nZXRTY3JlZW5PcmllbnRhdGlvbi5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgICBpbWFnZS5yb3RhdGUubm90Q2FsbGVkLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbm90IHRocm93cyBlcnJvciBpZiByb3RhdGUgaW1hZ2UgZmFpbGVkJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgaW1hZ2Uucm90YXRlLnJlc2V0QmVoYXZpb3IoKTtcbiAgICAgIGltYWdlLnJvdGF0ZS50aHJvd3MoKTtcbiAgICAgIGRyaXZlci5hZGIuZ2V0QXBpTGV2ZWwucmV0dXJucygyMik7XG4gICAgICBkcml2ZXIuZ2V0U2NyZWVuc2hvdERhdGFXaXRoQWRiRXhlY091dC53aXRoQXJncyhkcml2ZXIuYWRiKS5yZXR1cm5zKGltYWdlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRTY3JlZW5zaG90KCkuc2hvdWxkLmJlLmZ1bGZpbGxlZDtcbiAgICAgIGltYWdlLnJvdGF0ZS50aHJldygpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLiJ9
