'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _2 = require('../../..');

var _3 = _interopRequireDefault(_2);

var _libCommandsPerformanceJs = require('../../../lib/commands/performance.js');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _asyncbox = require('asyncbox');

var asyncbox = _interopRequireWildcard(_asyncbox);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var PACKAGE_NAME = 'io.appium.android.apis';
var RETRY_PAUSE = 1000;
var RETRY_COUNT = 2;

var sandbox = _sinon2['default'].sandbox.create();
var adb = undefined;
var driver = undefined;

describe('performance data', function () {
  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          adb = new _appiumAdb2['default']();
          driver = new _3['default']();
          driver.adb = adb;
          sandbox.stub(adb);
          sandbox.stub(asyncbox, 'retryInterval', function callee$2$0(times, sleepMs, fn) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(fn());

                case 2:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 3:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this);
          });

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
  afterEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          sandbox.restore();

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
  describe('getPerformanceDataTypes', function () {
    it('should get the list of available getPerformance data type', function () {
      var types = driver.getPerformanceDataTypes();
      types.should.eql(_lodash2['default'].keys(_libCommandsPerformanceJs.SUPPORTED_PERFORMANCE_DATA_TYPES));
    });
  });
  describe('getPerformanceData', function () {
    it('should return battery info', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'getBatteryInfo').returns('data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getPerformanceData(null, 'batteryinfo').should.become('data'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return cpu info', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'getCPUInfo').withArgs('pkg').returns('data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getPerformanceData('pkg', 'cpuinfo').should.become('data'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return memory info', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'getMemoryInfo').withArgs('pkg').returns('data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getPerformanceData('pkg', 'memoryinfo').should.become('data'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return network info', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'getNetworkTrafficInfo').returns('data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getPerformanceData(null, 'networkinfo').should.become('data'));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if data type is not valid', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.getPerformanceData(null, 'invalid').should.be.rejectedWith(/No performance data of type 'invalid' found./));

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getCPUInfo', function () {
    it('should return cpu data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.withArgs(['dumpsys', 'cpuinfo', '|', 'grep', '\'' + PACKAGE_NAME + '\'']).returns(' +0% 2209/io.appium.android.apis: 14% user + 23% kernel');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getCPUInfo(PACKAGE_NAME));

          case 3:
            context$3$0.t0 = [_libCommandsPerformanceJs.CPU_KEYS, ['14', '23']];
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if no data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns(null);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getCPUInfo(PACKAGE_NAME, 1).should.be.rejectedWith(/No data from dumpsys/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if cpu data is not in valid format', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns('invalid data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getCPUInfo(PACKAGE_NAME, 1).should.be.rejectedWith(/Unable to parse cpu data/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getBatteryInfo', function () {
    it('should return battery info', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.withArgs(['dumpsys', 'battery', '|', 'grep', 'level']).returns('  level: 47');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getBatteryInfo().should.become([_libCommandsPerformanceJs.BATTERY_KEYS, ['47']]));

          case 3:
            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if data is not valid', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns('invalid data');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getBatteryInfo(1).should.be.rejectedWith(/Unable to parse battery data/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if no data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns(null);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getBatteryInfo(1).should.be.rejectedWith(/No data from dumpsys/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getMemoryInfo', function () {
    var shellArgs = ['dumpsys', 'meminfo', '\'' + PACKAGE_NAME + '\'', '|', 'grep', '-E', "'Native|Dalvik|EGL|GL|TOTAL'"];
    var dumpsysDataAPI19 = '\n                          Pss  Private  Private  Swapped     Heap     Heap     Heap\n                        Total    Dirty    Clean    Dirty     Size    Alloc     Free\n                       ------   ------   ------   ------   ------   ------   ------\n         Native Heap      107      102        0        0      112      111      555\n         Dalvik Heap      108      103        0        0      555      555      555\n        Dalvik Other      555      555        0        0\n          EGL mtrack      109      104        0      555        0        0        0\n           GL mtrack      110      105        0      555        0        0        0\n               TOTAL      555      555      555        0               555      555\n               TOTAL      106      101      555        0      555      555      555';
    var dumpsysDataAPI18 = '\n                                Shared  Private     Heap     Heap     Heap\n                          Pss    Dirty    Dirty     Size    Alloc     Free\n                       ------   ------   ------   ------   ------   ------\n              Native      107      555      102      112      111      555\n              Dalvik      108      555      103      555      555      555\n                 EGL      109      555      104      555        0        0\n                  GL      110      555      105      555        0        0\n               TOTAL      106      555      101      555      555      555';
    var expectedResult = [_libCommandsPerformanceJs.MEMORY_KEYS, ['101', '102', '103', '104', '105', // private dirty total|native|dalvik|egl|gl
    '106', '107', '108', '109', '110', // pss           total|native|dalvik|egl|gl
    '111', '112']]; // native        heap_alloc|heap_size
    it('should return memory info for API>18', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.getApiLevel.returns(19);
            adb.shell.withArgs(shellArgs).returns(dumpsysDataAPI19);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getMemoryInfo(PACKAGE_NAME));

          case 4:
            context$3$0.t0 = expectedResult;
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should return memory info for API<=18', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.getApiLevel.returns(18);
            adb.shell.withArgs(shellArgs).returns(dumpsysDataAPI18);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getMemoryInfo(PACKAGE_NAME));

          case 4:
            context$3$0.t0 = expectedResult;
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if data is not valid', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns('TOTAL nodex nodex nodex nodex nodex nodex nodex');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getMemoryInfo(PACKAGE_NAME, 1).should.be.rejectedWith(/Unable to parse memory data/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if no data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns(null);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getMemoryInfo(PACKAGE_NAME, 1).should.be.rejectedWith(/No data from dumpsys/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
  describe('getNetworkTrafficInfo', function () {
    var shellArgs = ['dumpsys', 'netstats'];
    var header = '\n      Xt stats:\n        Pending bytes: pbytes\n        History since boot:\n        ident=[[type=MOBILE, subType=COMBINED, subscriberId=555]] uid=-1 set=ALL tag=0x0\n          NetworkStatsHistory: bucketDuration=dur';
    var data = header + '\n            st=start1 rb=rb1 rp=rp1 tb=tb1 tp=tp1 op=op1\n            st=start2 rb=rb2 rp=rp2 tb=tb2 tp=tp2 op=op2';
    var dataInOldFormat = header + '\n            bucketStart=start1 activeTime=time1 rxBytes=rb1 rxPackets=rp1 txBytes=tb1 txPackets=tp1 operations=op1\n            bucketStart=start2 activeTime=time2 rxBytes=rb2 rxPackets=rp2 txBytes=tb2 txPackets=tp2 operations=op2';
    it('should return network stats', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.withArgs(shellArgs).returns(data);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getNetworkTrafficInfo());

          case 3:
            context$3$0.t0 = [_libCommandsPerformanceJs.NETWORK_KEYS[1], ['start1', undefined, 'rb1', 'rp1', 'tb1', 'tp1', 'op1', 'dur'], ['start2', undefined, 'rb2', 'rp2', 'tb2', 'tp2', 'op2', 'dur']];
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be able to parse data in old format', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.withArgs(shellArgs).returns(dataInOldFormat);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getNetworkTrafficInfo());

          case 3:
            context$3$0.t0 = [_libCommandsPerformanceJs.NETWORK_KEYS[0], ['start1', 'time1', 'rb1', 'rp1', 'tb1', 'tp1', 'op1', 'dur'], ['start2', 'time2', 'rb2', 'rp2', 'tb2', 'tp2', 'op2', 'dur']];
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

            asyncbox.retryInterval.calledWith(RETRY_COUNT, RETRY_PAUSE).should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should be fulfilled if history is empty', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns(header);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getNetworkTrafficInfo());

          case 3:
            context$3$0.t0 = [];
            context$3$0.sent.should.be.deep.equal(context$3$0.t0);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if data is not valid', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns('nodex');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getNetworkTrafficInfo(1).should.be.rejectedWith(/Unable to parse network traffic data/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should throw error if no data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            adb.shell.returns(null);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getNetworkTrafficInfo(1).should.be.rejectedWith(/No data from dumpsys/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9wZXJmb3JtYW5jZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7cUJBQzNCLE9BQU87Ozs7aUJBQ0MsVUFBVTs7Ozt3Q0FFVCxzQ0FBc0M7O3NCQUNuRCxRQUFROzs7O3lCQUNOLFlBQVk7Ozs7d0JBQ0YsVUFBVTs7SUFBeEIsUUFBUTs7QUFFcEIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFNLFlBQVksR0FBRyx3QkFBd0IsQ0FBQztBQUM5QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDekIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDOztBQUV0QixJQUFJLE9BQU8sR0FBRyxtQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsSUFBSSxHQUFHLFlBQUEsQ0FBQztBQUNSLElBQUksTUFBTSxZQUFBLENBQUM7O0FBRVgsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVk7QUFDdkMsWUFBVSxDQUFDOzs7Ozs7QUFDVCxhQUFHLEdBQUcsNEJBQVMsQ0FBQztBQUNoQixnQkFBTSxHQUFHLG1CQUFtQixDQUFDO0FBQzdCLGdCQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNqQixpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixpQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLG9CQUFPLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTs7Ozs7bURBQ2xELEVBQUUsRUFBRTs7Ozs7Ozs7OztXQUNsQixDQUFDLENBQUM7Ozs7Ozs7R0FDSixDQUFDLENBQUM7QUFDSCxXQUFTLENBQUM7Ozs7QUFDUixpQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7O0dBQ25CLENBQUMsQ0FBQztBQUNILFVBQVEsQ0FBQyx5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RUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7NkJBRmxELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUNsRCxLQUFLOztBQUVSLG9CQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQzVFLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx5Q0FBeUMsRUFBRTs7OztBQUM1QyxlQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7NkNBQ25CLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTs7OzZCQUF1QixFQUFFOzZCQUF2QixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLOzs7Ozs7O0tBQzVELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyx5Q0FBeUMsRUFBRTs7OztBQUM1QyxlQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7NkNBQ3JCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUM1QyxZQUFZLENBQUMsc0NBQXNDLENBQUM7Ozs7Ozs7S0FDeEQsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLCtCQUErQixFQUFFOzs7O0FBQ2xDLGVBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs2Q0FDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQzVDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQzs7Ozs7OztLQUN4QyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2NvbW1hbmRzL3BlcmZvcm1hbmNlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IEFuZHJvaWREcml2ZXIgZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IHsgU1VQUE9SVEVEX1BFUkZPUk1BTkNFX0RBVEFfVFlQRVMsIE5FVFdPUktfS0VZUywgQ1BVX0tFWVMsIEJBVFRFUllfS0VZUyxcbiAgICAgICAgIE1FTU9SWV9LRVlTfSBmcm9tICcuLi8uLi8uLi9saWIvY29tbWFuZHMvcGVyZm9ybWFuY2UuanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XG5pbXBvcnQgKiBhcyBhc3luY2JveCBmcm9tICdhc3luY2JveCc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmNvbnN0IFBBQ0tBR0VfTkFNRSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcbmNvbnN0IFJFVFJZX1BBVVNFID0gMTAwMDtcbmNvbnN0IFJFVFJZX0NPVU5UID0gMjtcblxubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xubGV0IGFkYjtcbmxldCBkcml2ZXI7XG5cbmRlc2NyaWJlKCdwZXJmb3JtYW5jZSBkYXRhJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhZGIgPSBuZXcgQURCKCk7XG4gICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICBkcml2ZXIuYWRiID0gYWRiO1xuICAgIHNhbmRib3guc3R1YihhZGIpO1xuICAgIHNhbmRib3guc3R1Yihhc3luY2JveCwgJ3JldHJ5SW50ZXJ2YWwnLCBhc3luYyAodGltZXMsIHNsZWVwTXMsIGZuKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgZm4oKTtcbiAgICB9KTtcbiAgfSk7XG4gIGFmdGVyRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gIH0pO1xuICBkZXNjcmliZSgnZ2V0UGVyZm9ybWFuY2VEYXRhVHlwZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBnZXQgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGdldFBlcmZvcm1hbmNlIGRhdGEgdHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB0eXBlcyA9IGRyaXZlci5nZXRQZXJmb3JtYW5jZURhdGFUeXBlcygpO1xuICAgICAgdHlwZXMuc2hvdWxkLmVxbChfLmtleXMoU1VQUE9SVEVEX1BFUkZPUk1BTkNFX0RBVEFfVFlQRVMpKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRQZXJmb3JtYW5jZURhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYmF0dGVyeSBpbmZvJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldEJhdHRlcnlJbmZvJykucmV0dXJucygnZGF0YScpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldFBlcmZvcm1hbmNlRGF0YShudWxsLCAnYmF0dGVyeWluZm8nKS5zaG91bGQuYmVjb21lKCdkYXRhJyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gY3B1IGluZm8nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnZ2V0Q1BVSW5mbycpLndpdGhBcmdzKCdwa2cnKS5yZXR1cm5zKCdkYXRhJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0UGVyZm9ybWFuY2VEYXRhKCdwa2cnLCAnY3B1aW5mbycpLnNob3VsZC5iZWNvbWUoJ2RhdGEnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBtZW1vcnkgaW5mbycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdnZXRNZW1vcnlJbmZvJykud2l0aEFyZ3MoJ3BrZycpLnJldHVybnMoJ2RhdGEnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRQZXJmb3JtYW5jZURhdGEoJ3BrZycsICdtZW1vcnlpbmZvJykuc2hvdWxkLmJlY29tZSgnZGF0YScpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIG5ldHdvcmsgaW5mbycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdnZXROZXR3b3JrVHJhZmZpY0luZm8nKS5yZXR1cm5zKCdkYXRhJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0UGVyZm9ybWFuY2VEYXRhKG51bGwsICduZXR3b3JraW5mbycpLnNob3VsZC5iZWNvbWUoJ2RhdGEnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGVycm9yIGlmIGRhdGEgdHlwZSBpcyBub3QgdmFsaWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0UGVyZm9ybWFuY2VEYXRhKG51bGwsICdpbnZhbGlkJylcbiAgICAgICAgLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoL05vIHBlcmZvcm1hbmNlIGRhdGEgb2YgdHlwZSAnaW52YWxpZCcgZm91bmQuLyk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnZ2V0Q1BVSW5mbycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBjcHUgZGF0YScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkYi5zaGVsbC53aXRoQXJncyhbJ2R1bXBzeXMnLCAnY3B1aW5mbycsICd8JywgJ2dyZXAnLCBgJyR7UEFDS0FHRV9OQU1FfSdgXSlcbiAgICAgICAgLnJldHVybnMoJyArMCUgMjIwOS9pby5hcHBpdW0uYW5kcm9pZC5hcGlzOiAxNCUgdXNlciArIDIzJSBrZXJuZWwnKTtcbiAgICAgIChhd2FpdCBkcml2ZXIuZ2V0Q1BVSW5mbyhQQUNLQUdFX05BTUUpKS5zaG91bGQuYmUuZGVlcFxuICAgICAgICAuZXF1YWwoW0NQVV9LRVlTLCBbJzE0JywgJzIzJ11dKTtcbiAgICAgIGFzeW5jYm94LnJldHJ5SW50ZXJ2YWwuY2FsbGVkV2l0aChSRVRSWV9DT1VOVCwgUkVUUllfUEFVU0UpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgbm8gZGF0YScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkYi5zaGVsbC5yZXR1cm5zKG51bGwpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldENQVUluZm8oUEFDS0FHRV9OQU1FLCAxKS5zaG91bGQuYmVcbiAgICAgICAgLnJlamVjdGVkV2l0aCgvTm8gZGF0YSBmcm9tIGR1bXBzeXMvKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGVycm9yIGlmIGNwdSBkYXRhIGlzIG5vdCBpbiB2YWxpZCBmb3JtYXQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwucmV0dXJucygnaW52YWxpZCBkYXRhJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0Q1BVSW5mbyhQQUNLQUdFX05BTUUsIDEpLnNob3VsZC5iZVxuICAgICAgICAucmVqZWN0ZWRXaXRoKC9VbmFibGUgdG8gcGFyc2UgY3B1IGRhdGEvKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdnZXRCYXR0ZXJ5SW5mbycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBiYXR0ZXJ5IGluZm8nLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwud2l0aEFyZ3MoWydkdW1wc3lzJywgJ2JhdHRlcnknLCAnfCcsICdncmVwJywgJ2xldmVsJ10pXG4gICAgICAgIC5yZXR1cm5zKCcgIGxldmVsOiA0NycpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldEJhdHRlcnlJbmZvKCkuc2hvdWxkLmJlY29tZShbQkFUVEVSWV9LRVlTLCBbJzQ3J11dKTtcbiAgICAgIGFzeW5jYm94LnJldHJ5SW50ZXJ2YWwuY2FsbGVkV2l0aChSRVRSWV9DT1VOVCwgUkVUUllfUEFVU0UpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgZGF0YSBpcyBub3QgdmFsaWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwucmV0dXJucygnaW52YWxpZCBkYXRhJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0QmF0dGVyeUluZm8oMSkuc2hvdWxkLmJlXG4gICAgICAgIC5yZWplY3RlZFdpdGgoL1VuYWJsZSB0byBwYXJzZSBiYXR0ZXJ5IGRhdGEvKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGVycm9yIGlmIG5vIGRhdGEnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwucmV0dXJucyhudWxsKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRCYXR0ZXJ5SW5mbygxKS5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKC9ObyBkYXRhIGZyb20gZHVtcHN5cy8pO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2dldE1lbW9yeUluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2hlbGxBcmdzID0gWydkdW1wc3lzJywgJ21lbWluZm8nLCBgJyR7UEFDS0FHRV9OQU1FfSdgLCAnfCcsICdncmVwJywgJy1FJywgXCInTmF0aXZlfERhbHZpa3xFR0x8R0x8VE9UQUwnXCJdO1xuICAgIGNvbnN0IGR1bXBzeXNEYXRhQVBJMTkgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBzcyAgUHJpdmF0ZSAgUHJpdmF0ZSAgU3dhcHBlZCAgICAgSGVhcCAgICAgSGVhcCAgICAgSGVhcFxuICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgICAgRGlydHkgICAgQ2xlYW4gICAgRGlydHkgICAgIFNpemUgICAgQWxsb2MgICAgIEZyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgLS0tLS0tICAgLS0tLS0tICAgLS0tLS0tICAgLS0tLS0tICAgLS0tLS0tICAgLS0tLS0tICAgLS0tLS0tXG4gICAgICAgICBOYXRpdmUgSGVhcCAgICAgIDEwNyAgICAgIDEwMiAgICAgICAgMCAgICAgICAgMCAgICAgIDExMiAgICAgIDExMSAgICAgIDU1NVxuICAgICAgICAgRGFsdmlrIEhlYXAgICAgICAxMDggICAgICAxMDMgICAgICAgIDAgICAgICAgIDAgICAgICA1NTUgICAgICA1NTUgICAgICA1NTVcbiAgICAgICAgRGFsdmlrIE90aGVyICAgICAgNTU1ICAgICAgNTU1ICAgICAgICAwICAgICAgICAwXG4gICAgICAgICAgRUdMIG10cmFjayAgICAgIDEwOSAgICAgIDEwNCAgICAgICAgMCAgICAgIDU1NSAgICAgICAgMCAgICAgICAgMCAgICAgICAgMFxuICAgICAgICAgICBHTCBtdHJhY2sgICAgICAxMTAgICAgICAxMDUgICAgICAgIDAgICAgICA1NTUgICAgICAgIDAgICAgICAgIDAgICAgICAgIDBcbiAgICAgICAgICAgICAgIFRPVEFMICAgICAgNTU1ICAgICAgNTU1ICAgICAgNTU1ICAgICAgICAwICAgICAgICAgICAgICAgNTU1ICAgICAgNTU1XG4gICAgICAgICAgICAgICBUT1RBTCAgICAgIDEwNiAgICAgIDEwMSAgICAgIDU1NSAgICAgICAgMCAgICAgIDU1NSAgICAgIDU1NSAgICAgIDU1NWA7XG4gICAgY29uc3QgZHVtcHN5c0RhdGFBUEkxOCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hhcmVkICBQcml2YXRlICAgICBIZWFwICAgICBIZWFwICAgICBIZWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBzcyAgICBEaXJ0eSAgICBEaXJ0eSAgICAgU2l6ZSAgICBBbGxvYyAgICAgRnJlZVxuICAgICAgICAgICAgICAgICAgICAgICAtLS0tLS0gICAtLS0tLS0gICAtLS0tLS0gICAtLS0tLS0gICAtLS0tLS0gICAtLS0tLS1cbiAgICAgICAgICAgICAgTmF0aXZlICAgICAgMTA3ICAgICAgNTU1ICAgICAgMTAyICAgICAgMTEyICAgICAgMTExICAgICAgNTU1XG4gICAgICAgICAgICAgIERhbHZpayAgICAgIDEwOCAgICAgIDU1NSAgICAgIDEwMyAgICAgIDU1NSAgICAgIDU1NSAgICAgIDU1NVxuICAgICAgICAgICAgICAgICBFR0wgICAgICAxMDkgICAgICA1NTUgICAgICAxMDQgICAgICA1NTUgICAgICAgIDAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIEdMICAgICAgMTEwICAgICAgNTU1ICAgICAgMTA1ICAgICAgNTU1ICAgICAgICAwICAgICAgICAwXG4gICAgICAgICAgICAgICBUT1RBTCAgICAgIDEwNiAgICAgIDU1NSAgICAgIDEwMSAgICAgIDU1NSAgICAgIDU1NSAgICAgIDU1NWA7XG4gICAgY29uc3QgZXhwZWN0ZWRSZXN1bHQgPSBbTUVNT1JZX0tFWVMsXG4gICAgICBbJzEwMScsICcxMDInLCAnMTAzJywgJzEwNCcsICcxMDUnLCAvLyBwcml2YXRlIGRpcnR5IHRvdGFsfG5hdGl2ZXxkYWx2aWt8ZWdsfGdsXG4gICAgICAgJzEwNicsICcxMDcnLCAnMTA4JywgJzEwOScsICcxMTAnLCAvLyBwc3MgICAgICAgICAgIHRvdGFsfG5hdGl2ZXxkYWx2aWt8ZWdsfGdsXG4gICAgICAgJzExMScsICcxMTInXV07ICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgICAgICAgIGhlYXBfYWxsb2N8aGVhcF9zaXplXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gbWVtb3J5IGluZm8gZm9yIEFQST4xOCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkYi5nZXRBcGlMZXZlbC5yZXR1cm5zKDE5KTtcbiAgICAgIGFkYi5zaGVsbC53aXRoQXJncyhzaGVsbEFyZ3MpLnJldHVybnMoZHVtcHN5c0RhdGFBUEkxOSk7XG4gICAgICAoYXdhaXQgZHJpdmVyLmdldE1lbW9yeUluZm8oUEFDS0FHRV9OQU1FKSkuc2hvdWxkLmJlLmRlZXBcbiAgICAgICAgLmVxdWFsKGV4cGVjdGVkUmVzdWx0KTtcbiAgICAgIGFzeW5jYm94LnJldHJ5SW50ZXJ2YWwuY2FsbGVkV2l0aChSRVRSWV9DT1VOVCwgUkVUUllfUEFVU0UpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIG1lbW9yeSBpbmZvIGZvciBBUEk8PTE4JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYWRiLmdldEFwaUxldmVsLnJldHVybnMoMTgpO1xuICAgICAgYWRiLnNoZWxsLndpdGhBcmdzKHNoZWxsQXJncykucmV0dXJucyhkdW1wc3lzRGF0YUFQSTE4KTtcbiAgICAgIChhd2FpdCBkcml2ZXIuZ2V0TWVtb3J5SW5mbyhQQUNLQUdFX05BTUUpKS5zaG91bGQuYmUuZGVlcFxuICAgICAgICAuZXF1YWwoZXhwZWN0ZWRSZXN1bHQpO1xuICAgICAgYXN5bmNib3gucmV0cnlJbnRlcnZhbC5jYWxsZWRXaXRoKFJFVFJZX0NPVU5ULCBSRVRSWV9QQVVTRSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiBkYXRhIGlzIG5vdCB2YWxpZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkYi5zaGVsbC5yZXR1cm5zKCdUT1RBTCBub2RleCBub2RleCBub2RleCBub2RleCBub2RleCBub2RleCBub2RleCcpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldE1lbW9yeUluZm8oUEFDS0FHRV9OQU1FLCAxKS5zaG91bGQuYmVcbiAgICAgICAgLnJlamVjdGVkV2l0aCgvVW5hYmxlIHRvIHBhcnNlIG1lbW9yeSBkYXRhLyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBlcnJvciBpZiBubyBkYXRhJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYWRiLnNoZWxsLnJldHVybnMobnVsbCk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0TWVtb3J5SW5mbyhQQUNLQUdFX05BTUUsIDEpLnNob3VsZC5iZVxuICAgICAgICAucmVqZWN0ZWRXaXRoKC9ObyBkYXRhIGZyb20gZHVtcHN5cy8pO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ2dldE5ldHdvcmtUcmFmZmljSW5mbycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaGVsbEFyZ3MgPSBbJ2R1bXBzeXMnLCAnbmV0c3RhdHMnXTtcbiAgICBjb25zdCBoZWFkZXIgPSBgXG4gICAgICBYdCBzdGF0czpcbiAgICAgICAgUGVuZGluZyBieXRlczogcGJ5dGVzXG4gICAgICAgIEhpc3Rvcnkgc2luY2UgYm9vdDpcbiAgICAgICAgaWRlbnQ9W1t0eXBlPU1PQklMRSwgc3ViVHlwZT1DT01CSU5FRCwgc3Vic2NyaWJlcklkPTU1NV1dIHVpZD0tMSBzZXQ9QUxMIHRhZz0weDBcbiAgICAgICAgICBOZXR3b3JrU3RhdHNIaXN0b3J5OiBidWNrZXREdXJhdGlvbj1kdXJgO1xuICAgIGNvbnN0IGRhdGEgPSBoZWFkZXIgKyBgXG4gICAgICAgICAgICBzdD1zdGFydDEgcmI9cmIxIHJwPXJwMSB0Yj10YjEgdHA9dHAxIG9wPW9wMVxuICAgICAgICAgICAgc3Q9c3RhcnQyIHJiPXJiMiBycD1ycDIgdGI9dGIyIHRwPXRwMiBvcD1vcDJgO1xuICAgIGNvbnN0IGRhdGFJbk9sZEZvcm1hdCA9IGhlYWRlciArIGBcbiAgICAgICAgICAgIGJ1Y2tldFN0YXJ0PXN0YXJ0MSBhY3RpdmVUaW1lPXRpbWUxIHJ4Qnl0ZXM9cmIxIHJ4UGFja2V0cz1ycDEgdHhCeXRlcz10YjEgdHhQYWNrZXRzPXRwMSBvcGVyYXRpb25zPW9wMVxuICAgICAgICAgICAgYnVja2V0U3RhcnQ9c3RhcnQyIGFjdGl2ZVRpbWU9dGltZTIgcnhCeXRlcz1yYjIgcnhQYWNrZXRzPXJwMiB0eEJ5dGVzPXRiMiB0eFBhY2tldHM9dHAyIG9wZXJhdGlvbnM9b3AyYDtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBuZXR3b3JrIHN0YXRzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYWRiLnNoZWxsLndpdGhBcmdzKHNoZWxsQXJncykucmV0dXJucyhkYXRhKTtcbiAgICAgIChhd2FpdCBkcml2ZXIuZ2V0TmV0d29ya1RyYWZmaWNJbmZvKCkpLnNob3VsZC5iZS5kZWVwXG4gICAgICAgIC5lcXVhbChbTkVUV09SS19LRVlTWzFdLCBbJ3N0YXJ0MScsIHVuZGVmaW5lZCwgJ3JiMScsICdycDEnLCAndGIxJywgJ3RwMScsICdvcDEnLCAnZHVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3N0YXJ0MicsIHVuZGVmaW5lZCwgJ3JiMicsICdycDInLCAndGIyJywgJ3RwMicsICdvcDInLCAnZHVyJ11dKTtcbiAgICAgIGFzeW5jYm94LnJldHJ5SW50ZXJ2YWwuY2FsbGVkV2l0aChSRVRSWV9DT1VOVCwgUkVUUllfUEFVU0UpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgYWJsZSB0byBwYXJzZSBkYXRhIGluIG9sZCBmb3JtYXQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwud2l0aEFyZ3Moc2hlbGxBcmdzKS5yZXR1cm5zKGRhdGFJbk9sZEZvcm1hdCk7XG4gICAgICAoYXdhaXQgZHJpdmVyLmdldE5ldHdvcmtUcmFmZmljSW5mbygpKS5zaG91bGQuYmUuZGVlcFxuICAgICAgICAuZXF1YWwoW05FVFdPUktfS0VZU1swXSwgWydzdGFydDEnLCAndGltZTEnLCAncmIxJywgJ3JwMScsICd0YjEnLCAndHAxJywgJ29wMScsICdkdXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnc3RhcnQyJywgJ3RpbWUyJywgJ3JiMicsICdycDInLCAndGIyJywgJ3RwMicsICdvcDInLCAnZHVyJ11dKTtcbiAgICAgIGFzeW5jYm94LnJldHJ5SW50ZXJ2YWwuY2FsbGVkV2l0aChSRVRSWV9DT1VOVCwgUkVUUllfUEFVU0UpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYmUgZnVsZmlsbGVkIGlmIGhpc3RvcnkgaXMgZW1wdHknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwucmV0dXJucyhoZWFkZXIpO1xuICAgICAgKGF3YWl0IGRyaXZlci5nZXROZXR3b3JrVHJhZmZpY0luZm8oKSkuc2hvdWxkLmJlLmRlZXAuZXF1YWwoW10pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgZGF0YSBpcyBub3QgdmFsaWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGIuc2hlbGwucmV0dXJucygnbm9kZXgnKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXROZXR3b3JrVHJhZmZpY0luZm8oMSkuc2hvdWxkLmJlXG4gICAgICAgIC5yZWplY3RlZFdpdGgoL1VuYWJsZSB0byBwYXJzZSBuZXR3b3JrIHRyYWZmaWMgZGF0YS8pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgbm8gZGF0YScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkYi5zaGVsbC5yZXR1cm5zKG51bGwpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldE5ldHdvcmtUcmFmZmljSW5mbygxKS5zaG91bGQuYmVcbiAgICAgICAgLnJlamVjdGVkV2l0aCgvTm8gZGF0YSBmcm9tIGR1bXBzeXMvKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4ifQ==
