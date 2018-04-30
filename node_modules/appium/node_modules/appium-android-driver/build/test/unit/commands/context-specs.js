'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _libWebviewHelpers = require('../../../lib/webview-helpers');

var _libWebviewHelpers2 = _interopRequireDefault(_libWebviewHelpers);

var _libCommandsContext = require('../../../lib/commands/context');

var _ = require('../../..');

var _2 = _interopRequireDefault(_);

var _appiumChromedriver = require('appium-chromedriver');

var _appiumChromedriver2 = _interopRequireDefault(_appiumChromedriver);

var _portfinder = require('portfinder');

var _portfinder2 = _interopRequireDefault(_portfinder);

var _appiumBaseDriver = require('appium-base-driver');

var driver = undefined;
var stubbedChromedriver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
var expect = _chai2['default'].expect;
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Context', function () {
  beforeEach(function () {
    sandbox.stub(_portfinder2['default'], 'getPort', function (cb) {
      // eslint-disable-line promise/prefer-await-to-callbacks
      return cb(null, 4444); // eslint-disable-line promise/prefer-await-to-callbacks
    });
    driver = new _2['default']();
    driver.adb = sandbox.stub();
    driver.adb.curDeviceId = 'device_id';
    driver.adb.getAdbServerPort = sandbox.stub().returns(5555);
    sandbox.stub(_appiumChromedriver2['default'].prototype, 'restart');
    sandbox.stub(_appiumChromedriver2['default'].prototype, 'start');
    sandbox.stub(_appiumChromedriver2['default'].prototype.proxyReq, 'bind').returns('proxy');

    stubbedChromedriver = _sinon2['default'].stub();
    stubbedChromedriver.proxyReq = _sinon2['default'].stub();
    stubbedChromedriver.proxyReq.bind = _sinon2['default'].stub();
    stubbedChromedriver.restart = _sinon2['default'].stub();
    stubbedChromedriver.stop = sandbox.stub().throws();
    stubbedChromedriver.removeAllListeners = sandbox.stub();
  });
  afterEach(function () {
    sandbox.restore();
  });
  describe('getCurrentContext', function () {
    it('should return current context', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.curContext = 'current_context';
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getCurrentContext().should.become('current_context'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return NATIVE_APP if no context is set', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.curContext = null;
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getCurrentContext().should.become(_libWebviewHelpers.NATIVE_WIN));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getContexts', function () {
    it('should get Chromium context where appropriate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _2['default']({ browserName: 'Chrome' });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getContexts());

          case 3:
            context$3$0.t0 = context$3$0.sent;
            context$3$0.t1 = _libWebviewHelpers.CHROMIUM_WIN;
            expect(context$3$0.t0).to.include(context$3$0.t1);

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should use ADB to figure out which webviews are available', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(_libWebviewHelpers2['default'], 'getWebviews');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getContexts());

          case 3:
            context$3$0.t0 = context$3$0.sent;
            context$3$0.t1 = _libWebviewHelpers.CHROMIUM_WIN;
            expect(context$3$0.t0).to.not.include(context$3$0.t1);

            _libWebviewHelpers2['default'].getWebviews.calledOnce.should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('setContext', function () {
    beforeEach(function () {
      sandbox.stub(driver, 'getContexts').returns(['DEFAULT', 'WV', 'ANOTHER']);
      sandbox.stub(driver, 'switchContext');
    });
    it('should switch to default context if name is null', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'defaultContextName').returns('DEFAULT');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setContext(null));

          case 3:
            driver.switchContext.calledWithExactly('DEFAULT').should.be['true'];
            driver.curContext.should.be.equal('DEFAULT');

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should switch to default web view if name is WEBVIEW', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'defaultWebviewName').returns('WV');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setContext(_libWebviewHelpers.WEBVIEW_WIN));

          case 3:
            driver.switchContext.calledWithExactly('WV').should.be['true'];
            driver.curContext.should.be.equal('WV');

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if context does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setContext('fake').should.be.rejectedWith(_appiumBaseDriver.errors.NoSuchContextError));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should not switch to context if already in it', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.curContext = 'ANOTHER';
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setContext('ANOTHER'));

          case 3:
            driver.switchContext.notCalled.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('switchContext', function () {
    beforeEach(function () {
      sandbox.stub(driver, 'stopChromedriverProxies');
      sandbox.stub(driver, 'startChromedriverProxy');
      sandbox.stub(driver, 'suspendChromedriverProxy');
      sandbox.stub(driver, 'isChromedriverContext');
      driver.curContext = 'current_cntx';
    });
    it('should start chrome driver proxy if requested context is webview', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.isChromedriverContext.returns(true);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.switchContext('context'));

          case 3:
            driver.startChromedriverProxy.calledWithExactly('context').should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should stop chromedriver proxy if current context is webview and requested context is not', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts = { recreateChromeDriverSessions: true };
            driver.isChromedriverContext.withArgs('requested_cntx').returns(false);
            driver.isChromedriverContext.withArgs('current_cntx').returns(true);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.switchContext('requested_cntx'));

          case 5:
            driver.stopChromedriverProxies.calledOnce.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should suspend chrome driver proxy if current context is webview and requested context is not', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts = { recreateChromeDriverSessions: false };
            driver.isChromedriverContext.withArgs('requested_cntx').returns(false);
            driver.isChromedriverContext.withArgs('current_cntx').returns(true);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.switchContext('requested_cntx'));

          case 5:
            driver.suspendChromedriverProxy.calledOnce.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if requested and current context are not webview', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.isChromedriverContext.withArgs('requested_cntx').returns(false);
            driver.isChromedriverContext.withArgs('current_cntx').returns(false);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.switchContext('requested_cntx').should.be.rejectedWith(/switching to context/));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('defaultContextName', function () {
    it('should return NATIVE_WIN', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.defaultContextName().should.be.equal(_libWebviewHelpers.NATIVE_WIN));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('defaultWebviewName', function () {
    it('should return WEBVIEW with package', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts = { appPackage: 'pkg' };
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.defaultWebviewName().should.be.equal(_libWebviewHelpers.WEBVIEW_BASE + 'pkg'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('isWebContext', function () {
    it('should return true if current context is not native', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.curContext = 'current_context';
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.isWebContext().should.be['true']);

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('startChromedriverProxy', function () {
    beforeEach(function () {
      sandbox.stub(driver, 'onChromedriverStop');
    });
    it('should start new chromedriver session', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_1'));

          case 2:
            driver.sessionChromedrivers.WEBVIEW_1.should.be.equal(driver.chromedriver);
            driver.chromedriver.start.getCall(0).args[0].chromeOptions.androidDeviceSerial.should.be.equal('device_id');
            driver.chromedriver.proxyPort.should.be.equal(4444);
            driver.chromedriver.proxyReq.bind.calledWithExactly(driver.chromedriver);
            driver.proxyReqRes.should.be.equal('proxy');
            driver.jwpProxyActive.should.be['true'];

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to extract package from context name', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.appPackage = 'pkg';
            driver.opts.extractChromeAndroidPackageFromContextName = true;
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_com.pkg'));

          case 4:
            driver.chromedriver.start.getCall(0).args[0].chromeOptions.should.be.deep.include({ androidPackage: 'com.pkg' });

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should use package from opts if package extracted from context is empty', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.appPackage = 'pkg';
            driver.opts.extractChromeAndroidPackageFromContextName = true;
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_'));

          case 4:
            driver.chromedriver.start.getCall(0).args[0].chromeOptions.should.be.deep.include({ androidPackage: 'pkg' });

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should handle chromedriver event with STATE_STOPPED state', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_1'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.chromedriver.emit(_appiumChromedriver2['default'].EVENT_CHANGED, { state: _appiumChromedriver2['default'].STATE_STOPPED }));

          case 4:
            driver.onChromedriverStop.calledWithExactly('WEBVIEW_1').should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should ignore events if status is not STATE_STOPPED', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_1'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.chromedriver.emit(_appiumChromedriver2['default'].EVENT_CHANGED, { state: 'unhandled_state' }));

          case 4:
            driver.onChromedriverStop.notCalled.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should reconnect if session already exists', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            stubbedChromedriver.hasWorkingWebview = _sinon2['default'].stub().returns(true);
            driver.sessionChromedrivers = { WEBVIEW_1: stubbedChromedriver };
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_1'));

          case 4:
            driver.chromedriver.restart.notCalled.should.be['true'];
            driver.chromedriver.should.be.equal(stubbedChromedriver);

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should restart if chromedriver has not working web view', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            stubbedChromedriver.hasWorkingWebview = _sinon2['default'].stub().returns(false);
            driver.sessionChromedrivers = { WEBVIEW_1: stubbedChromedriver };
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('WEBVIEW_1'));

          case 4:
            driver.chromedriver.restart.calledOnce.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('suspendChromedriverProxy', function () {
    it('should suspend chrome driver proxy', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.suspendChromedriverProxy());

          case 2:
            (driver.chromedriver == null).should.be['true'];
            (driver.proxyReqRes == null).should.be['true'];
            driver.jwpProxyActive.should.be['false'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('onChromedriverStop', function () {
    it('should call startUnexpectedShutdown if chromedriver in active context', function callee$2$0() {
      var arg0;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            _sinon2['default'].stub(driver, 'startUnexpectedShutdown');
            driver.curContext = 'WEBVIEW_1';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.onChromedriverStop('WEBVIEW_1'));

          case 4:
            arg0 = driver.startUnexpectedShutdown.getCall(0).args[0];

            arg0.should.be.an('error');
            arg0.message.should.include('Chromedriver quit unexpectedly during session');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should delete session if chromedriver in non-active context', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.curContext = 'WEBVIEW_1';
            driver.sessionChromedrivers = { WEBVIEW_2: 'CHROMIUM' };
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.onChromedriverStop('WEBVIEW_2'));

          case 4:
            driver.sessionChromedrivers.should.be.empty;

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('stopChromedriverProxies', function () {
    it('should stop all chromedriver', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.sessionChromedrivers = { WEBVIEW_1: stubbedChromedriver, WEBVIEW_2: stubbedChromedriver };
            sandbox.stub(driver, 'suspendChromedriverProxy');
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.stopChromedriverProxies());

          case 4:
            driver.suspendChromedriverProxy.calledOnce.should.be['true'];
            stubbedChromedriver.removeAllListeners.calledWithExactly(_appiumChromedriver2['default'].EVENT_CHANGED).should.be['true'];
            stubbedChromedriver.removeAllListeners.calledTwice.should.be['true'];
            stubbedChromedriver.stop.calledTwice.should.be['true'];
            driver.sessionChromedrivers.should.be.empty;

          case 9:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('isChromedriverContext', function () {
    it('should return true if context is webview or chromium', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.isChromedriverContext(_libWebviewHelpers.WEBVIEW_WIN + '_1').should.be['true']);

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.isChromedriverContext(_libWebviewHelpers.CHROMIUM_WIN).should.be['true']);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('setupNewChromedriver', function () {
    it('should be able to set app package from chrome options', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ chromeOptions: { androidPackage: 'apkg' } }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidPackage.should.be.equal('apkg');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should use prefixed chromeOptions', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({
              'goog:chromeOptions': {
                androidPackage: 'apkg'
              }
            }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidPackage.should.be.equal('apkg');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should merge chromeOptions', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({
              chromeOptions: {
                androidPackage: 'apkg'
              },
              'goog:chromeOptions': {
                androidWaitPackage: 'bpkg'
              },
              'appium:chromeOptions': {
                androidActivity: 'aact'
              }
            }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidPackage.should.be.equal('apkg');
            chromedriver.start.getCall(0).args[0].chromeOptions.androidActivity.should.be.equal('aact');
            chromedriver.start.getCall(0).args[0].chromeOptions.androidWaitPackage.should.be.equal('bpkg');

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to set androidActivity chrome option', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ chromeAndroidActivity: 'act' }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidActivity.should.be.equal('act');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to set androidProcess chrome option', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ chromeAndroidProcess: 'proc' }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidProcess.should.be.equal('proc');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to set loggingPrefs capability', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ enablePerformanceLogging: true }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].loggingPrefs.should.deep.equal({ performance: 'ALL' });

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should set androidActivity to appActivity if browser name is chromium-webview', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ browserName: 'chromium-webview',
              appActivity: 'app_act' }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].chromeOptions.androidActivity.should.be.equal('app_act');

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to set loggingPrefs capability', function callee$2$0() {
      var chromedriver;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap((0, _libCommandsContext.setupNewChromedriver)({ pageLoadStrategy: "strategy" }));

          case 2:
            chromedriver = context$3$0.sent;

            chromedriver.start.getCall(0).args[0].pageLoadStrategy.should.be.equal("strategy");

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9jb250ZXh0LXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7cUJBQzNCLE9BQU87Ozs7aUNBRTJDLDhCQUE4Qjs7OztrQ0FDN0QsK0JBQStCOztnQkFDMUMsVUFBVTs7OztrQ0FDWCxxQkFBcUI7Ozs7MEJBQ3ZCLFlBQVk7Ozs7Z0NBQ1osb0JBQW9COztBQUUzQyxJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsSUFBSSxtQkFBbUIsWUFBQSxDQUFDO0FBQ3hCLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxrQkFBSyxNQUFNLENBQUM7QUFDekIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDOUIsWUFBVSxDQUFDLFlBQVk7QUFDckIsV0FBTyxDQUFDLElBQUksMEJBQWEsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFOztBQUNoRCxhQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0FBQ0gsVUFBTSxHQUFHLG1CQUFtQixDQUFDO0FBQzdCLFVBQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLFVBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxVQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0QsV0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBYSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEQsV0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBYSxTQUFT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WTs7Ozs7NkNBQVMsOENBQXFCLEVBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFDLENBQUM7OztBQUF6RSx3QkFBWTs7QUFDaEIsd0JBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7S0FDaEMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9jb250ZXh0LXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyB3ZWJ2aWV3SGVscGVycyxcbiAgICAgICAgIE5BVElWRV9XSU4sIFdFQlZJRVdfQkFTRSwgV0VCVklFV19XSU4sIENIUk9NSVVNX1dJTiB9IGZyb20gJy4uLy4uLy4uL2xpYi93ZWJ2aWV3LWhlbHBlcnMnO1xuaW1wb3J0IHsgc2V0dXBOZXdDaHJvbWVkcml2ZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvY29tbWFuZHMvY29udGV4dCc7XG5pbXBvcnQgQW5kcm9pZERyaXZlciBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgQ2hyb21lZHJpdmVyIGZyb20gJ2FwcGl1bS1jaHJvbWVkcml2ZXInO1xuaW1wb3J0IFBvcnRGaW5kZXIgZnJvbSAncG9ydGZpbmRlcic7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICdhcHBpdW0tYmFzZS1kcml2ZXInO1xuXG5sZXQgZHJpdmVyO1xubGV0IHN0dWJiZWRDaHJvbWVkcml2ZXI7XG5sZXQgc2FuZGJveCA9IHNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG5sZXQgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5kZXNjcmliZSgnQ29udGV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgc2FuZGJveC5zdHViKFBvcnRGaW5kZXIsICdnZXRQb3J0JywgZnVuY3Rpb24gKGNiKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tY2FsbGJhY2tzXG4gICAgICByZXR1cm4gY2IobnVsbCwgNDQ0NCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tY2FsbGJhY2tzXG4gICAgfSk7XG4gICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICBkcml2ZXIuYWRiID0gc2FuZGJveC5zdHViKCk7XG4gICAgZHJpdmVyLmFkYi5jdXJEZXZpY2VJZCA9ICdkZXZpY2VfaWQnO1xuICAgIGRyaXZlci5hZGIuZ2V0QWRiU2VydmVyUG9ydCA9IHNhbmRib3guc3R1YigpLnJldHVybnMoNTU1NSk7XG4gICAgc2FuZGJveC5zdHViKENocm9tZWRyaXZlci5wcm90b3R5cGUsICdyZXN0YXJ0Jyk7XG4gICAgc2FuZGJveC5zdHViKENocm9tZWRyaXZlci5wcm90b3R5cGUsICdzdGFydCcpO1xuICAgIHNhbmRib3guc3R1YihDaHJvbWVkcml2ZXIucHJvdG90eXBlLnByb3h5UmVxLCAnYmluZCcpLnJldHVybnMoJ3Byb3h5Jyk7XG5cbiAgICBzdHViYmVkQ2hyb21lZHJpdmVyID0gc2lub24uc3R1YigpO1xuICAgIHN0dWJiZWRDaHJvbWVkcml2ZXIucHJveHlSZXEgPSBzaW5vbi5zdHViKCk7XG4gICAgc3R1YmJlZENocm9tZWRyaXZlci5wcm94eVJlcS5iaW5kID0gc2lub24uc3R1YigpO1xuICAgIHN0dWJiZWRDaHJvbWVkcml2ZXIucmVzdGFydCA9IHNpbm9uLnN0dWIoKTtcbiAgICBzdHViYmVkQ2hyb21lZHJpdmVyLnN0b3AgPSBzYW5kYm94LnN0dWIoKS50aHJvd3MoKTtcbiAgICBzdHViYmVkQ2hyb21lZHJpdmVyLnJlbW92ZUFsbExpc3RlbmVycyA9IHNhbmRib3guc3R1YigpO1xuICB9KTtcbiAgYWZ0ZXJFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRDdXJyZW50Q29udGV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBjdXJyZW50IGNvbnRleHQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dCA9ICdjdXJyZW50X2NvbnRleHQnO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldEN1cnJlbnRDb250ZXh0KCkuc2hvdWxkLmJlY29tZSgnY3VycmVudF9jb250ZXh0Jyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gTkFUSVZFX0FQUCBpZiBubyBjb250ZXh0IGlzIHNldCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5jdXJDb250ZXh0ID0gbnVsbDtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRDdXJyZW50Q29udGV4dCgpLnNob3VsZC5iZWNvbWUoTkFUSVZFX1dJTik7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnZ2V0Q29udGV4dHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBnZXQgQ2hyb21pdW0gY29udGV4dCB3aGVyZSBhcHByb3ByaWF0ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKHticm93c2VyTmFtZTogJ0Nocm9tZSd9KTtcbiAgICAgIGV4cGVjdChhd2FpdCBkcml2ZXIuZ2V0Q29udGV4dHMoKSkudG8uaW5jbHVkZShDSFJPTUlVTV9XSU4pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdXNlIEFEQiB0byBmaWd1cmUgb3V0IHdoaWNoIHdlYnZpZXdzIGFyZSBhdmFpbGFibGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIod2Vidmlld0hlbHBlcnMsICdnZXRXZWJ2aWV3cycpO1xuICAgICAgZXhwZWN0KGF3YWl0IGRyaXZlci5nZXRDb250ZXh0cygpKS50by5ub3QuaW5jbHVkZShDSFJPTUlVTV9XSU4pO1xuICAgICAgd2Vidmlld0hlbHBlcnMuZ2V0V2Vidmlld3MuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdzZXRDb250ZXh0JywgZnVuY3Rpb24gKCkge1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldENvbnRleHRzJykucmV0dXJucyhbJ0RFRkFVTFQnLCAnV1YnLCAnQU5PVEhFUiddKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdzd2l0Y2hDb250ZXh0Jyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzd2l0Y2ggdG8gZGVmYXVsdCBjb250ZXh0IGlmIG5hbWUgaXMgbnVsbCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdkZWZhdWx0Q29udGV4dE5hbWUnKS5yZXR1cm5zKCdERUZBVUxUJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0Q29udGV4dChudWxsKTtcbiAgICAgIGRyaXZlci5zd2l0Y2hDb250ZXh0LmNhbGxlZFdpdGhFeGFjdGx5KCdERUZBVUxUJykuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dC5zaG91bGQuYmUuZXF1YWwoJ0RFRkFVTFQnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHN3aXRjaCB0byBkZWZhdWx0IHdlYiB2aWV3IGlmIG5hbWUgaXMgV0VCVklFVycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdkZWZhdWx0V2Vidmlld05hbWUnKS5yZXR1cm5zKCdXVicpO1xuICAgICAgYXdhaXQgZHJpdmVyLnNldENvbnRleHQoV0VCVklFV19XSU4pO1xuICAgICAgZHJpdmVyLnN3aXRjaENvbnRleHQuY2FsbGVkV2l0aEV4YWN0bHkoJ1dWJykuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dC5zaG91bGQuYmUuZXF1YWwoJ1dWJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiBjb250ZXh0IGRvZXMgbm90IGV4aXN0JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLnNldENvbnRleHQoJ2Zha2UnKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aChlcnJvcnMuTm9TdWNoQ29udGV4dEVycm9yKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIG5vdCBzd2l0Y2ggdG8gY29udGV4dCBpZiBhbHJlYWR5IGluIGl0JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmN1ckNvbnRleHQgPSAnQU5PVEhFUic7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0Q29udGV4dCgnQU5PVEhFUicpO1xuICAgICAgZHJpdmVyLnN3aXRjaENvbnRleHQubm90Q2FsbGVkLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3N3aXRjaENvbnRleHQnLCBmdW5jdGlvbiAoKSB7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc3RvcENocm9tZWRyaXZlclByb3hpZXMnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdzdGFydENocm9tZWRyaXZlclByb3h5Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc3VzcGVuZENocm9tZWRyaXZlclByb3h5Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnaXNDaHJvbWVkcml2ZXJDb250ZXh0Jyk7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dCA9ICdjdXJyZW50X2NudHgnO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgc3RhcnQgY2hyb21lIGRyaXZlciBwcm94eSBpZiByZXF1ZXN0ZWQgY29udGV4dCBpcyB3ZWJ2aWV3JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLmlzQ2hyb21lZHJpdmVyQ29udGV4dC5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLnN3aXRjaENvbnRleHQoJ2NvbnRleHQnKTtcbiAgICAgIGRyaXZlci5zdGFydENocm9tZWRyaXZlclByb3h5LmNhbGxlZFdpdGhFeGFjdGx5KCdjb250ZXh0Jykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzdG9wIGNocm9tZWRyaXZlciBwcm94eSBpZiBjdXJyZW50IGNvbnRleHQgaXMgd2VidmlldyBhbmQgcmVxdWVzdGVkIGNvbnRleHQgaXMgbm90JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLm9wdHMgPSB7cmVjcmVhdGVDaHJvbWVEcml2ZXJTZXNzaW9uczogdHJ1ZX07XG4gICAgICBkcml2ZXIuaXNDaHJvbWVkcml2ZXJDb250ZXh0LndpdGhBcmdzKCdyZXF1ZXN0ZWRfY250eCcpLnJldHVybnMoZmFsc2UpO1xuICAgICAgZHJpdmVyLmlzQ2hyb21lZHJpdmVyQ29udGV4dC53aXRoQXJncygnY3VycmVudF9jbnR4JykucmV0dXJucyh0cnVlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5zd2l0Y2hDb250ZXh0KCdyZXF1ZXN0ZWRfY250eCcpO1xuICAgICAgZHJpdmVyLnN0b3BDaHJvbWVkcml2ZXJQcm94aWVzLmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzdXNwZW5kIGNocm9tZSBkcml2ZXIgcHJveHkgaWYgY3VycmVudCBjb250ZXh0IGlzIHdlYnZpZXcgYW5kIHJlcXVlc3RlZCBjb250ZXh0IGlzIG5vdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5vcHRzID0ge3JlY3JlYXRlQ2hyb21lRHJpdmVyU2Vzc2lvbnM6IGZhbHNlfTtcbiAgICAgIGRyaXZlci5pc0Nocm9tZWRyaXZlckNvbnRleHQud2l0aEFyZ3MoJ3JlcXVlc3RlZF9jbnR4JykucmV0dXJucyhmYWxzZSk7XG4gICAgICBkcml2ZXIuaXNDaHJvbWVkcml2ZXJDb250ZXh0LndpdGhBcmdzKCdjdXJyZW50X2NudHgnKS5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLnN3aXRjaENvbnRleHQoJ3JlcXVlc3RlZF9jbnR4Jyk7XG4gICAgICBkcml2ZXIuc3VzcGVuZENocm9tZWRyaXZlclByb3h5LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiByZXF1ZXN0ZWQgYW5kIGN1cnJlbnQgY29udGV4dCBhcmUgbm90IHdlYnZpZXcnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuaXNDaHJvbWVkcml2ZXJDb250ZXh0LndpdGhBcmdzKCdyZXF1ZXN0ZWRfY250eCcpLnJldHVybnMoZmFsc2UpO1xuICAgICAgZHJpdmVyLmlzQ2hyb21lZHJpdmVyQ29udGV4dC53aXRoQXJncygnY3VycmVudF9jbnR4JykucmV0dXJucyhmYWxzZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuc3dpdGNoQ29udGV4dCgncmVxdWVzdGVkX2NudHgnKVxuICAgICAgICAuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgvc3dpdGNoaW5nIHRvIGNvbnRleHQvKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdkZWZhdWx0Q29udGV4dE5hbWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gTkFUSVZFX1dJTicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5kZWZhdWx0Q29udGV4dE5hbWUoKS5zaG91bGQuYmUuZXF1YWwoTkFUSVZFX1dJTik7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnZGVmYXVsdFdlYnZpZXdOYW1lJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIFdFQlZJRVcgd2l0aCBwYWNrYWdlJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLm9wdHMgPSB7YXBwUGFja2FnZTogJ3BrZyd9O1xuICAgICAgYXdhaXQgZHJpdmVyLmRlZmF1bHRXZWJ2aWV3TmFtZSgpLnNob3VsZC5iZS5lcXVhbChXRUJWSUVXX0JBU0UgKyAncGtnJyk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnaXNXZWJDb250ZXh0JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgY3VycmVudCBjb250ZXh0IGlzIG5vdCBuYXRpdmUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dCA9ICdjdXJyZW50X2NvbnRleHQnO1xuICAgICAgYXdhaXQgZHJpdmVyLmlzV2ViQ29udGV4dCgpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3N0YXJ0Q2hyb21lZHJpdmVyUHJveHknLCBmdW5jdGlvbiAoKSB7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnb25DaHJvbWVkcml2ZXJTdG9wJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzdGFydCBuZXcgY2hyb21lZHJpdmVyIHNlc3Npb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIuc3RhcnRDaHJvbWVkcml2ZXJQcm94eSgnV0VCVklFV18xJyk7XG4gICAgICBkcml2ZXIuc2Vzc2lvbkNocm9tZWRyaXZlcnMuV0VCVklFV18xLnNob3VsZC5iZS5lcXVhbChkcml2ZXIuY2hyb21lZHJpdmVyKTtcbiAgICAgIGRyaXZlci5jaHJvbWVkcml2ZXIuc3RhcnQuZ2V0Q2FsbCgwKS5hcmdzWzBdXG4gICAgICAgIC5jaHJvbWVPcHRpb25zLmFuZHJvaWREZXZpY2VTZXJpYWwuc2hvdWxkLmJlLmVxdWFsKCdkZXZpY2VfaWQnKTtcbiAgICAgIGRyaXZlci5jaHJvbWVkcml2ZXIucHJveHlQb3J0LnNob3VsZC5iZS5lcXVhbCg0NDQ0KTtcbiAgICAgIGRyaXZlci5jaHJvbWVkcml2ZXIucHJveHlSZXEuYmluZC5jYWxsZWRXaXRoRXhhY3RseShkcml2ZXIuY2hyb21lZHJpdmVyKTtcbiAgICAgIGRyaXZlci5wcm94eVJlcVJlcy5zaG91bGQuYmUuZXF1YWwoJ3Byb3h5Jyk7XG4gICAgICBkcml2ZXIuandwUHJveHlBY3RpdmUuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGV4dHJhY3QgcGFja2FnZSBmcm9tIGNvbnRleHQgbmFtZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRyaXZlci5vcHRzLmFwcFBhY2thZ2UgPSAncGtnJztcbiAgICAgIGRyaXZlci5vcHRzLmV4dHJhY3RDaHJvbWVBbmRyb2lkUGFja2FnZUZyb21Db250ZXh0TmFtZSA9IHRydWU7XG4gICAgICBhd2FpdCBkcml2ZXIuc3RhcnRDaHJvbWVkcml2ZXJQcm94eSgnV0VCVklFV19jb20ucGtnJyk7XG4gICAgICBkcml2ZXIuY2hyb21lZHJpdmVyLnN0YXJ0LmdldENhbGwoMCkuYXJnc1swXVxuICAgICAgICAuY2hyb21lT3B0aW9ucy5zaG91bGQuYmUuZGVlcC5pbmNsdWRlKHthbmRyb2lkUGFja2FnZTogJ2NvbS5wa2cnfSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB1c2UgcGFja2FnZSBmcm9tIG9wdHMgaWYgcGFja2FnZSBleHRyYWN0ZWQgZnJvbSBjb250ZXh0IGlzIGVtcHR5JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgZHJpdmVyLm9wdHMuYXBwUGFja2FnZSA9ICdwa2cnO1xuICAgICAgZHJpdmVyLm9wdHMuZXh0cmFjdENocm9tZUFuZHJvaWRQYWNrYWdlRnJvbUNvbnRleHROYW1lID0gdHJ1ZTtcbiAgICAgIGF3YWl0IGRyaXZlci5zdGFydENocm9tZWRyaXZlclByb3h5KCdXRUJWSUVXXycpO1xuICAgICAgZHJpdmVyLmNocm9tZWRyaXZlci5zdGFydC5nZXRDYWxsKDApLmFyZ3NbMF1cbiAgICAgICAgLmNocm9tZU9wdGlvbnMuc2hvdWxkLmJlLmRlZXAuaW5jbHVkZSh7YW5kcm9pZFBhY2thZ2U6ICdwa2cnfSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBoYW5kbGUgY2hyb21lZHJpdmVyIGV2ZW50IHdpdGggU1RBVEVfU1RPUFBFRCBzdGF0ZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5zdGFydENocm9tZWRyaXZlclByb3h5KCdXRUJWSUVXXzEnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5jaHJvbWVkcml2ZXIuZW1pdChDaHJvbWVkcml2ZXIuRVZFTlRfQ0hBTkdFRCxcbiAgICAgICAge3N0YXRlOiBDaHJvbWVkcml2ZXIuU1RBVEVfU1RPUFBFRH0pO1xuICAgICAgZHJpdmVyLm9uQ2hyb21lZHJpdmVyU3RvcC5jYWxsZWRXaXRoRXhhY3RseSgnV0VCVklFV18xJykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBpZ25vcmUgZXZlbnRzIGlmIHN0YXR1cyBpcyBub3QgU1RBVEVfU1RPUFBFRCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5zdGFydENocm9tZWRyaXZlclByb3h5KCdXRUJWSUVXXzEnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5jaHJvbWVkcml2ZXIuZW1pdChDaHJvbWVkcml2ZXIuRVZFTlRfQ0hBTkdFRCxcbiAgICAgICAge3N0YXRlOiAndW5oYW5kbGVkX3N0YXRlJ30pO1xuICAgICAgZHJpdmVyLm9uQ2hyb21lZHJpdmVyU3RvcC5ub3RDYWxsZWQuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZWNvbm5lY3QgaWYgc2Vzc2lvbiBhbHJlYWR5IGV4aXN0cycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0dWJiZWRDaHJvbWVkcml2ZXIuaGFzV29ya2luZ1dlYnZpZXcgPSBzaW5vbi5zdHViKCkucmV0dXJucyh0cnVlKTtcbiAgICAgIGRyaXZlci5zZXNzaW9uQ2hyb21lZHJpdmVycyA9IHtXRUJWSUVXXzE6IHN0dWJiZWRDaHJvbWVkcml2ZXJ9O1xuICAgICAgYXdhaXQgZHJpdmVyLnN0YXJ0Q2hyb21lZHJpdmVyUHJveHkoJ1dFQlZJRVdfMScpO1xuICAgICAgZHJpdmVyLmNocm9tZWRyaXZlci5yZXN0YXJ0Lm5vdENhbGxlZC5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5jaHJvbWVkcml2ZXIuc2hvdWxkLmJlLmVxdWFsKHN0dWJiZWRDaHJvbWVkcml2ZXIpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmVzdGFydCBpZiBjaHJvbWVkcml2ZXIgaGFzIG5vdCB3b3JraW5nIHdlYiB2aWV3JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc3R1YmJlZENocm9tZWRyaXZlci5oYXNXb3JraW5nV2VidmlldyA9IHNpbm9uLnN0dWIoKS5yZXR1cm5zKGZhbHNlKTtcbiAgICAgIGRyaXZlci5zZXNzaW9uQ2hyb21lZHJpdmVycyA9IHtXRUJWSUVXXzE6IHN0dWJiZWRDaHJvbWVkcml2ZXJ9O1xuICAgICAgYXdhaXQgZHJpdmVyLnN0YXJ0Q2hyb21lZHJpdmVyUHJveHkoJ1dFQlZJRVdfMScpO1xuICAgICAgZHJpdmVyLmNocm9tZWRyaXZlci5yZXN0YXJ0LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnc3VzcGVuZENocm9tZWRyaXZlclByb3h5JywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgc3VzcGVuZCBjaHJvbWUgZHJpdmVyIHByb3h5JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZHJpdmVyLnN1c3BlbmRDaHJvbWVkcml2ZXJQcm94eSgpO1xuICAgICAgKGRyaXZlci5jaHJvbWVkcml2ZXIgPT0gbnVsbCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICAoZHJpdmVyLnByb3h5UmVxUmVzID09IG51bGwpLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmp3cFByb3h5QWN0aXZlLnNob3VsZC5iZS5mYWxzZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdvbkNocm9tZWRyaXZlclN0b3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBjYWxsIHN0YXJ0VW5leHBlY3RlZFNodXRkb3duIGlmIGNocm9tZWRyaXZlciBpbiBhY3RpdmUgY29udGV4dCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNpbm9uLnN0dWIoZHJpdmVyLCAnc3RhcnRVbmV4cGVjdGVkU2h1dGRvd24nKTtcbiAgICAgIGRyaXZlci5jdXJDb250ZXh0ID0gJ1dFQlZJRVdfMSc7XG4gICAgICBhd2FpdCBkcml2ZXIub25DaHJvbWVkcml2ZXJTdG9wKCdXRUJWSUVXXzEnKTtcbiAgICAgIGxldCBhcmcwID0gZHJpdmVyLnN0YXJ0VW5leHBlY3RlZFNodXRkb3duLmdldENhbGwoMCkuYXJnc1swXTtcbiAgICAgIGFyZzAuc2hvdWxkLmJlLmFuKCdlcnJvcicpO1xuICAgICAgYXJnMC5tZXNzYWdlLnNob3VsZC5pbmNsdWRlKCdDaHJvbWVkcml2ZXIgcXVpdCB1bmV4cGVjdGVkbHkgZHVyaW5nIHNlc3Npb24nKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRlbGV0ZSBzZXNzaW9uIGlmIGNocm9tZWRyaXZlciBpbiBub24tYWN0aXZlIGNvbnRleHQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dCA9ICdXRUJWSUVXXzEnO1xuICAgICAgZHJpdmVyLnNlc3Npb25DaHJvbWVkcml2ZXJzID0ge1dFQlZJRVdfMjogJ0NIUk9NSVVNJ307XG4gICAgICBhd2FpdCBkcml2ZXIub25DaHJvbWVkcml2ZXJTdG9wKCdXRUJWSUVXXzInKTtcbiAgICAgIGRyaXZlci5zZXNzaW9uQ2hyb21lZHJpdmVycy5zaG91bGQuYmUuZW1wdHk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnc3RvcENocm9tZWRyaXZlclByb3hpZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBzdG9wIGFsbCBjaHJvbWVkcml2ZXInLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBkcml2ZXIuc2Vzc2lvbkNocm9tZWRyaXZlcnMgPSB7V0VCVklFV18xOiBzdHViYmVkQ2hyb21lZHJpdmVyLCBXRUJWSUVXXzI6IHN0dWJiZWRDaHJvbWVkcml2ZXJ9O1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3N1c3BlbmRDaHJvbWVkcml2ZXJQcm94eScpO1xuICAgICAgYXdhaXQgZHJpdmVyLnN0b3BDaHJvbWVkcml2ZXJQcm94aWVzKCk7XG4gICAgICBkcml2ZXIuc3VzcGVuZENocm9tZWRyaXZlclByb3h5LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICBzdHViYmVkQ2hyb21lZHJpdmVyLnJlbW92ZUFsbExpc3RlbmVyc1xuICAgICAgICAuY2FsbGVkV2l0aEV4YWN0bHkoQ2hyb21lZHJpdmVyLkVWRU5UX0NIQU5HRUQpLnNob3VsZC5iZS50cnVlO1xuICAgICAgc3R1YmJlZENocm9tZWRyaXZlci5yZW1vdmVBbGxMaXN0ZW5lcnMuY2FsbGVkVHdpY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICBzdHViYmVkQ2hyb21lZHJpdmVyLnN0b3AuY2FsbGVkVHdpY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuc2Vzc2lvbkNocm9tZWRyaXZlcnMuc2hvdWxkLmJlLmVtcHR5O1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2lzQ2hyb21lZHJpdmVyQ29udGV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIGNvbnRleHQgaXMgd2VidmlldyBvciBjaHJvbWl1bScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGRyaXZlci5pc0Nocm9tZWRyaXZlckNvbnRleHQoV0VCVklFV19XSU4gKyAnXzEnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGF3YWl0IGRyaXZlci5pc0Nocm9tZWRyaXZlckNvbnRleHQoQ0hST01JVU1fV0lOKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdzZXR1cE5ld0Nocm9tZWRyaXZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gc2V0IGFwcCBwYWNrYWdlIGZyb20gY2hyb21lIG9wdGlvbnMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2hyb21lZHJpdmVyID0gYXdhaXQgc2V0dXBOZXdDaHJvbWVkcml2ZXIoe2Nocm9tZU9wdGlvbnM6IHthbmRyb2lkUGFja2FnZTogJ2Fwa2cnfX0pO1xuICAgICAgY2hyb21lZHJpdmVyLnN0YXJ0LmdldENhbGwoMCkuYXJnc1swXS5jaHJvbWVPcHRpb25zLmFuZHJvaWRQYWNrYWdlXG4gICAgICAgIC5zaG91bGQuYmUuZXF1YWwoJ2Fwa2cnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHVzZSBwcmVmaXhlZCBjaHJvbWVPcHRpb25zJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNocm9tZWRyaXZlciA9IGF3YWl0IHNldHVwTmV3Q2hyb21lZHJpdmVyKHtcbiAgICAgICAgJ2dvb2c6Y2hyb21lT3B0aW9ucyc6IHtcbiAgICAgICAgICBhbmRyb2lkUGFja2FnZTogJ2Fwa2cnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjaHJvbWVkcml2ZXIuc3RhcnQuZ2V0Q2FsbCgwKS5hcmdzWzBdLmNocm9tZU9wdGlvbnMuYW5kcm9pZFBhY2thZ2VcbiAgICAgICAgLnNob3VsZC5iZS5lcXVhbCgnYXBrZycpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbWVyZ2UgY2hyb21lT3B0aW9ucycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjaHJvbWVkcml2ZXIgPSBhd2FpdCBzZXR1cE5ld0Nocm9tZWRyaXZlcih7XG4gICAgICAgIGNocm9tZU9wdGlvbnM6IHtcbiAgICAgICAgICBhbmRyb2lkUGFja2FnZTogJ2Fwa2cnLFxuICAgICAgICB9LFxuICAgICAgICAnZ29vZzpjaHJvbWVPcHRpb25zJzoge1xuICAgICAgICAgIGFuZHJvaWRXYWl0UGFja2FnZTogJ2Jwa2cnLFxuICAgICAgICB9LFxuICAgICAgICAnYXBwaXVtOmNocm9tZU9wdGlvbnMnOiB7XG4gICAgICAgICAgYW5kcm9pZEFjdGl2aXR5OiAnYWFjdCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNocm9tZWRyaXZlci5zdGFydC5nZXRDYWxsKDApLmFyZ3NbMF0uY2hyb21lT3B0aW9ucy5hbmRyb2lkUGFja2FnZVxuICAgICAgICAuc2hvdWxkLmJlLmVxdWFsKCdhcGtnJyk7XG4gICAgICBjaHJvbWVkcml2ZXIuc3RhcnQuZ2V0Q2FsbCgwKS5hcmdzWzBdLmNocm9tZU9wdGlvbnMuYW5kcm9pZEFjdGl2aXR5XG4gICAgICAgIC5zaG91bGQuYmUuZXF1YWwoJ2FhY3QnKTtcbiAgICAgIGNocm9tZWRyaXZlci5zdGFydC5nZXRDYWxsKDApLmFyZ3NbMF0uY2hyb21lT3B0aW9ucy5hbmRyb2lkV2FpdFBhY2thZ2VcbiAgICAgICAgLnNob3VsZC5iZS5lcXVhbCgnYnBrZycpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzZXQgYW5kcm9pZEFjdGl2aXR5IGNocm9tZSBvcHRpb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2hyb21lZHJpdmVyID0gYXdhaXQgc2V0dXBOZXdDaHJvbWVkcml2ZXIoe2Nocm9tZUFuZHJvaWRBY3Rpdml0eTogJ2FjdCd9KTtcbiAgICAgIGNocm9tZWRyaXZlci5zdGFydC5nZXRDYWxsKDApLmFyZ3NbMF0uY2hyb21lT3B0aW9ucy5hbmRyb2lkQWN0aXZpdHlcbiAgICAgICAgLnNob3VsZC5iZS5lcXVhbCgnYWN0Jyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHNldCBhbmRyb2lkUHJvY2VzcyBjaHJvbWUgb3B0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNocm9tZWRyaXZlciA9IGF3YWl0IHNldHVwTmV3Q2hyb21lZHJpdmVyKHtjaHJvbWVBbmRyb2lkUHJvY2VzczogJ3Byb2MnfSk7XG4gICAgICBjaHJvbWVkcml2ZXIuc3RhcnQuZ2V0Q2FsbCgwKS5hcmdzWzBdLmNocm9tZU9wdGlvbnMuYW5kcm9pZFByb2Nlc3NcbiAgICAgICAgLnNob3VsZC5iZS5lcXVhbCgncHJvYycpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzZXQgbG9nZ2luZ1ByZWZzIGNhcGFiaWxpdHknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2hyb21lZHJpdmVyID0gYXdhaXQgc2V0dXBOZXdDaHJvbWVkcml2ZXIoe2VuYWJsZVBlcmZvcm1hbmNlTG9nZ2luZzogdHJ1ZX0pO1xuICAgICAgY2hyb21lZHJpdmVyLnN0YXJ0LmdldENhbGwoMCkuYXJnc1swXS5sb2dnaW5nUHJlZnNcbiAgICAgICAgLnNob3VsZC5kZWVwLmVxdWFsKHtwZXJmb3JtYW5jZTogJ0FMTCd9KTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHNldCBhbmRyb2lkQWN0aXZpdHkgdG8gYXBwQWN0aXZpdHkgaWYgYnJvd3NlciBuYW1lIGlzIGNocm9taXVtLXdlYnZpZXcnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2hyb21lZHJpdmVyID0gYXdhaXQgc2V0dXBOZXdDaHJvbWVkcml2ZXIoe2Jyb3dzZXJOYW1lOiAnY2hyb21pdW0td2VidmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcEFjdGl2aXR5OiAnYXBwX2FjdCd9KTtcbiAgICAgIGNocm9tZWRyaXZlci5zdGFydC5nZXRDYWxsKDApLmFyZ3NbMF0uY2hyb21lT3B0aW9ucy5hbmRyb2lkQWN0aXZpdHlcbiAgICAgICAgLnNob3VsZC5iZS5lcXVhbCgnYXBwX2FjdCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzZXQgbG9nZ2luZ1ByZWZzIGNhcGFiaWxpdHknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY2hyb21lZHJpdmVyID0gYXdhaXQgc2V0dXBOZXdDaHJvbWVkcml2ZXIoe3BhZ2VMb2FkU3RyYXRlZ3k6IFwic3RyYXRlZ3lcIn0pO1xuICAgICAgY2hyb21lZHJpdmVyLnN0YXJ0LmdldENhbGwoMCkuYXJnc1swXS5wYWdlTG9hZFN0cmF0ZWd5XG4gICAgICAgIC5zaG91bGQuYmUuZXF1YWwoXCJzdHJhdGVneVwiKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4ifQ==
