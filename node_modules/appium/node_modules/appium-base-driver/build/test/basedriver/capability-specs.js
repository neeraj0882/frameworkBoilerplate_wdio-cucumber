'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _ = require('../..');

var _2 = _interopRequireDefault(_);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _libBasedriverLogger = require('../../lib/basedriver/logger');

var _libBasedriverLogger2 = _interopRequireDefault(_libBasedriverLogger);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var should = _chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Desired Capabilities', function () {

  var d = undefined;

  beforeEach(function () {
    d = new _2['default']();
    _sinon2['default'].spy(_libBasedriverLogger2['default'], 'warn');
  });

  afterEach(function () {
    _libBasedriverLogger2['default'].warn.restore();
  });

  it('should require platformName and deviceName', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({}));

        case 3:
          context$2$0.next = 11;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('platformName');
          context$2$0.t0.message.should.contain('deviceName');
          return context$2$0.abrupt('return');

        case 11:

          should.fail('error should have been thrown');

        case 12:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 5]]);
  });

  it('should require platformName', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({ 'platformName': 'iOS' }));

        case 3:
          context$2$0.next = 10;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('deviceName');
          return context$2$0.abrupt('return');

        case 10:

          should.fail('error should have been thrown');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 5]]);
  });

  it('should require deviceName', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({ 'deviceName': 'Delorean' }));

        case 3:
          context$2$0.next = 10;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('platformName');
          return context$2$0.abrupt('return');

        case 10:

          should.fail('error should have been thrown');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 5]]);
  });

  it('should not care about cap order', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(d.createSession({
            deviceName: 'Delorean',
            platformName: 'iOS'
          }));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should check required caps which are added to driver', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          d.desiredCapConstraints = {
            necessary: {
              presence: true
            },
            proper: {
              presence: true,
              isString: true,
              inclusion: ['Delorean', 'Reventon']
            }
          };

          context$2$0.prev = 1;
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': 'iOS',
            'deviceName': 'Delorean'
          }));

        case 4:
          context$2$0.next = 12;
          break;

        case 6:
          context$2$0.prev = 6;
          context$2$0.t0 = context$2$0['catch'](1);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('necessary');
          context$2$0.t0.message.should.contain('proper');
          return context$2$0.abrupt('return');

        case 12:

          should.fail('error should have been thrown');

        case 13:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[1, 6]]);
  });

  it('should check added required caps in addition to base', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          d.desiredCapConstraints = {
            necessary: {
              presence: true
            },
            proper: {
              presence: true,
              isString: true,
              inclusion: ['Delorean', 'Reventon']
            }
          };

          context$2$0.prev = 1;
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(d.createSession({
            necessary: 'yup',
            proper: 'yup, your highness'
          }));

        case 4:
          context$2$0.next = 12;
          break;

        case 6:
          context$2$0.prev = 6;
          context$2$0.t0 = context$2$0['catch'](1);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('platformName');
          context$2$0.t0.message.should.contain('deviceName');
          return context$2$0.abrupt('return');

        case 12:

          should.fail('error should have been thrown');

        case 13:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[1, 6]]);
  });

  it('should accept extra capabilities', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': 'iOS',
            'deviceName': 'Delorean',
            'extra': 'cheese',
            'hold the': 'sauce'
          }));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should log the use of extra caps', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          this.timeout(500);

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': 'iOS',
            'deviceName': 'Delorean',
            'extra': 'cheese',
            'hold the': 'sauce'
          }));

        case 3:

          _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should be sensitive to the case of caps', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformname': 'iOS',
            'deviceName': 'Delorean'
          }));

        case 3:
          context$2$0.next = 10;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('platformName');
          return context$2$0.abrupt('return');

        case 10:

          should.fail('error should have been thrown');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 5]]);
  });

  describe('boolean capabilities', function () {
    it('should allow a string "false"', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'noReset': 'false'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.noReset.should.eql(false);

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should allow a string "true"', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'noReset': 'true'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.noReset.should.eql(true);

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should allow a string "true" in string capabilities', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'language': 'true'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.equal(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.language.should.eql('true');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('number capabilities', function () {
    it('should allow a string "1"', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'newCommandTimeout': '1'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.newCommandTimeout.should.eql(1);

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should allow a string "1.1"', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'newCommandTimeout': '1.1'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.newCommandTimeout.should.eql(1.1);

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });

    it('should allow a string "1" in string capabilities', function callee$2$0() {
      var sessions;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(d.createSession({
              'platformName': 'iOS',
              'deviceName': 'Delorean',
              'language': '1'
            }));

          case 2:
            _libBasedriverLogger2['default'].warn.callCount.should.equal(0);

            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(d.getSessions());

          case 5:
            sessions = context$3$0.sent;

            sessions[0].capabilities.language.should.eql('1');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  it('should error if objects in caps', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': { a: 'iOS' },
            'deviceName': 'Delorean'
          }));

        case 3:
          context$2$0.next = 10;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          context$2$0.t0.should.be['instanceof'](_.errors.SessionNotCreatedError);
          context$2$0.t0.message.should.contain('platformName');
          return context$2$0.abrupt('return');

        case 10:

          should.fail('error should have been thrown');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 5]]);
  });

  it('should check for deprecated caps', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          this.timeout(500);

          d.desiredCapConstraints = {
            'lynx-version': {
              deprecated: true
            }
          };

          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': 'iOS',
            'deviceName': 'Delorean',
            'lynx-version': 5
          }));

        case 4:

          _libBasedriverLogger2['default'].warn.callCount.should.be.above(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should not warn if deprecated=false', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          this.timeout(500);

          d.desiredCapConstraints = {
            'lynx-version': {
              deprecated: false
            }
          };

          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(d.createSession({
            'platformName': 'iOS',
            'deviceName': 'Delorean',
            'lynx-version': 5
          }));

        case 4:

          _libBasedriverLogger2['default'].warn.callCount.should.equal(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should not validate against null/undefined caps', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          d.desiredCapConstraints = {
            'foo': {
              isString: true
            }
          };

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: null
          }));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(d.deleteSession());

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: 1
          }).should.eventually.be.rejectedWith(/was not valid/));

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: undefined
          }));

        case 9:
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(d.deleteSession());

        case 11:
          context$2$0.next = 13;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: ''
          }));

        case 13:
          context$2$0.next = 15;
          return _regeneratorRuntime.awrap(d.deleteSession());

        case 15:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should still validate null/undefined caps whose presence is required', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          d.desiredCapConstraints = {
            foo: {
              presence: true
            }
          };

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: null
          }).should.eventually.be.rejectedWith(/blank/));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(d.createSession({
            platformName: 'iOS',
            deviceName: 'Dumb',
            foo: ''
          }).should.eventually.be.rejectedWith(/blank/));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  describe('w3c', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          it('should accept w3c capabilities', function callee$2$0() {
            var _ref, _ref2, sessionId, caps;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(d.createSession(null, null, {
                    alwaysMatch: {
                      platformName: 'iOS',
                      deviceName: 'Delorean'
                    }, firstMatch: [{}]
                  }));

                case 2:
                  _ref = context$3$0.sent;
                  _ref2 = _slicedToArray(_ref, 2);
                  sessionId = _ref2[0];
                  caps = _ref2[1];

                  sessionId.should.exist;
                  caps.should.eql({
                    platformName: 'iOS',
                    deviceName: 'Delorean'
                  });
                  context$3$0.next = 10;
                  return _regeneratorRuntime.awrap(d.deleteSession());

                case 10:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, this);
          });

          it('should ignore w3c capabilities if it is not a plain JSON object', function callee$2$0() {
            var _arr, _i, val, _ref3, _ref32, sessionId, caps;

            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  _arr = [true, "string", [], 100];
                  _i = 0;

                case 2:
                  if (!(_i < _arr.length)) {
                    context$3$0.next = 17;
                    break;
                  }

                  val = _arr[_i];
                  context$3$0.next = 6;
                  return _regeneratorRuntime.awrap(d.createSession({
                    platformName: 'iOS',
                    deviceName: 'Delorean'
                  }, null, val));

                case 6:
                  _ref3 = context$3$0.sent;
                  _ref32 = _slicedToArray(_ref3, 2);
                  sessionId = _ref32[0];
                  caps = _ref32[1];

                  sessionId.should.exist;
                  caps.should.eql({
                    platformName: 'iOS',
                    deviceName: 'Delorean'
                  });
                  context$3$0.next = 14;
                  return _regeneratorRuntime.awrap(d.deleteSession());

                case 14:
                  _i++;
                  context$3$0.next = 2;
                  break;

                case 17:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, this);
          });

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYmFzZWRyaXZlci9jYXBhYmlsaXR5LXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2dCQUE4QyxPQUFPOzs7O29CQUNwQyxNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OzttQ0FDMUIsNkJBQTZCOzs7O3FCQUM5QixPQUFPOzs7O0FBRXpCLElBQU0sTUFBTSxHQUFHLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQzdCLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZOztBQUUzQyxNQUFJLENBQUMsWUFBQSxDQUFDOztBQUVOLFlBQVUsQ0FBQyxZQUFZO0FBQ3JCLEtBQUMsR0FBRyxtQkFBZ0IsQ0FBQztBQUNyQix1QkFBTSxHQUFHLG1DQUFTLE1BQU0sQ0FBQyxDQUFDO0dBQzNCLENBQUMsQ0FBQzs7QUFFSCxXQUFTLENBQUMsWUFBWTtBQUNwQixxQ0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDdkIsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyw0Q0FBNEMsRUFBRTs7Ozs7OzJDQUV2QyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7OztBQUV6Qix5QkFBRSxNQUFNLENBQUMsRUFBRSxjQUFXLENBQUMsU0FBTyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3RELHlCQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLHlCQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztBQUl6QyxnQkFBTSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOzs7Ozs7O0dBQzlDLENBQUMsQ0FBQzs7QUFFSCxJQUFFLENBQUMsNkJBQTZCLEVBQUU7Ozs7OzsyQ0FFeEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUMsQ0FBQzs7Ozs7Ozs7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Q0FBVSxFQUFFLFVBQVU7cUJBQ3ZCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO21CQUNwQixDQUFDOzs7OztBQUxLLDJCQUFTO0FBQUUsc0JBQUk7O0FBTXRCLDJCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN2QixzQkFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZCxnQ0FBWSxFQUFFLEtBQUs7QUFDbkIsOEJBQVUsRUFBRSxVQUFVO21CQUN2QixDQUFDLENBQUM7O21EQUNHLENBQUMsQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7V0FDeEIsQ0FBQyxDQUFDOztBQUVILFlBQUUsQ0FBQyxpRUFBaUUsRUFBRTswQkFDM0QsR0FBRyxpQkFDSCxTQUFTLEVBQUUsSUFBSTs7Ozs7eUJBRFIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Ozs7Ozs7OztBQUFoQyxxQkFBRzs7bURBQ3NCLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDOUMsZ0NBQVksRUFBRSxLQUFLO0FBQ25CLDhCQUFVLEVBQUUsVUFBVTttQkFDdkIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDOzs7OztBQUhOLDJCQUFTO0FBQUUsc0JBQUk7O0FBSXRCLDJCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN2QixzQkFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZCxnQ0FBWSxFQUFFLEtBQUs7QUFDbkIsOEJBQVUsRUFBRSxVQUFVO21CQUN2QixDQUFDLENBQUM7O21EQUNHLENBQUMsQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7Ozs7OztXQUUxQixDQUFDLENBQUM7Ozs7Ozs7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9iYXNlZHJpdmVyL2NhcGFiaWxpdHktc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VEcml2ZXIsIGVycm9ycyB9IGZyb20gJy4uLy4uJztcbmltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi8uLi9saWIvYmFzZWRyaXZlci9sb2dnZXInO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcblxuY29uc3Qgc2hvdWxkID0gY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ0Rlc2lyZWQgQ2FwYWJpbGl0aWVzJywgZnVuY3Rpb24gKCkge1xuXG4gIGxldCBkO1xuXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xuICAgIGQgPSBuZXcgQmFzZURyaXZlcigpO1xuICAgIHNpbm9uLnNweShsb2dnZXIsICd3YXJuJyk7XG4gIH0pO1xuXG4gIGFmdGVyRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbG9nZ2VyLndhcm4ucmVzdG9yZSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJlcXVpcmUgcGxhdGZvcm1OYW1lIGFuZCBkZXZpY2VOYW1lJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe30pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc2hvdWxkLmJlLmluc3RhbmNlb2YoZXJyb3JzLlNlc3Npb25Ob3RDcmVhdGVkRXJyb3IpO1xuICAgICAgZS5tZXNzYWdlLnNob3VsZC5jb250YWluKCdwbGF0Zm9ybU5hbWUnKTtcbiAgICAgIGUubWVzc2FnZS5zaG91bGQuY29udGFpbignZGV2aWNlTmFtZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3VsZC5mYWlsKCdlcnJvciBzaG91bGQgaGF2ZSBiZWVuIHRocm93bicpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJlcXVpcmUgcGxhdGZvcm1OYW1lJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oeydwbGF0Zm9ybU5hbWUnOiAnaU9TJ30pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc2hvdWxkLmJlLmluc3RhbmNlb2YoZXJyb3JzLlNlc3Npb25Ob3RDcmVhdGVkRXJyb3IpO1xuICAgICAgZS5tZXNzYWdlLnNob3VsZC5jb250YWluKCdkZXZpY2VOYW1lJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvdWxkLmZhaWwoJ2Vycm9yIHNob3VsZCBoYXZlIGJlZW4gdGhyb3duJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgcmVxdWlyZSBkZXZpY2VOYW1lJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oeydkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJ30pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc2hvdWxkLmJlLmluc3RhbmNlb2YoZXJyb3JzLlNlc3Npb25Ob3RDcmVhdGVkRXJyb3IpO1xuICAgICAgZS5tZXNzYWdlLnNob3VsZC5jb250YWluKCdwbGF0Zm9ybU5hbWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGQuZmFpbCgnZXJyb3Igc2hvdWxkIGhhdmUgYmVlbiB0aHJvd24nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgY2FyZSBhYm91dCBjYXAgb3JkZXInLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgZGV2aWNlTmFtZTogJ0RlbG9yZWFuJyxcbiAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUydcbiAgICB9KTtcblxuICB9KTtcblxuICBpdCgnc2hvdWxkIGNoZWNrIHJlcXVpcmVkIGNhcHMgd2hpY2ggYXJlIGFkZGVkIHRvIGRyaXZlcicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBkLmRlc2lyZWRDYXBDb25zdHJhaW50cyA9IHtcbiAgICAgIG5lY2Vzc2FyeToge1xuICAgICAgICBwcmVzZW5jZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHByb3Blcjoge1xuICAgICAgICBwcmVzZW5jZTogdHJ1ZSxcbiAgICAgICAgaXNTdHJpbmc6IHRydWUsXG4gICAgICAgIGluY2x1c2lvbjogWydEZWxvcmVhbicsICdSZXZlbnRvbiddXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zaG91bGQuYmUuaW5zdGFuY2VvZihlcnJvcnMuU2Vzc2lvbk5vdENyZWF0ZWRFcnJvcik7XG4gICAgICBlLm1lc3NhZ2Uuc2hvdWxkLmNvbnRhaW4oJ25lY2Vzc2FyeScpO1xuICAgICAgZS5tZXNzYWdlLnNob3VsZC5jb250YWluKCdwcm9wZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGQuZmFpbCgnZXJyb3Igc2hvdWxkIGhhdmUgYmVlbiB0aHJvd24nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjaGVjayBhZGRlZCByZXF1aXJlZCBjYXBzIGluIGFkZGl0aW9uIHRvIGJhc2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgZC5kZXNpcmVkQ2FwQ29uc3RyYWludHMgPSB7XG4gICAgICBuZWNlc3Nhcnk6IHtcbiAgICAgICAgcHJlc2VuY2U6IHRydWVcbiAgICAgIH0sXG4gICAgICBwcm9wZXI6IHtcbiAgICAgICAgcHJlc2VuY2U6IHRydWUsXG4gICAgICAgIGlzU3RyaW5nOiB0cnVlLFxuICAgICAgICBpbmNsdXNpb246IFsnRGVsb3JlYW4nLCAnUmV2ZW50b24nXVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgbmVjZXNzYXJ5OiAneXVwJyxcbiAgICAgICAgcHJvcGVyOiAneXVwLCB5b3VyIGhpZ2huZXNzJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zaG91bGQuYmUuaW5zdGFuY2VvZihlcnJvcnMuU2Vzc2lvbk5vdENyZWF0ZWRFcnJvcik7XG4gICAgICBlLm1lc3NhZ2Uuc2hvdWxkLmNvbnRhaW4oJ3BsYXRmb3JtTmFtZScpO1xuICAgICAgZS5tZXNzYWdlLnNob3VsZC5jb250YWluKCdkZXZpY2VOYW1lJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvdWxkLmZhaWwoJ2Vycm9yIHNob3VsZCBoYXZlIGJlZW4gdGhyb3duJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYWNjZXB0IGV4dHJhIGNhcGFiaWxpdGllcycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgJ3BsYXRmb3JtTmFtZSc6ICdpT1MnLFxuICAgICAgJ2RldmljZU5hbWUnOiAnRGVsb3JlYW4nLFxuICAgICAgJ2V4dHJhJzogJ2NoZWVzZScsXG4gICAgICAnaG9sZCB0aGUnOiAnc2F1Y2UnXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbG9nIHRoZSB1c2Ugb2YgZXh0cmEgY2FwcycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRpbWVvdXQoNTAwKTtcblxuICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAnZGV2aWNlTmFtZSc6ICdEZWxvcmVhbicsXG4gICAgICAnZXh0cmEnOiAnY2hlZXNlJyxcbiAgICAgICdob2xkIHRoZSc6ICdzYXVjZSdcbiAgICB9KTtcblxuICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuYmUuYWJvdmUoMCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgc2Vuc2l0aXZlIHRvIHRoZSBjYXNlIG9mIGNhcHMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICAgICdwbGF0Zm9ybW5hbWUnOiAnaU9TJyxcbiAgICAgICAgJ2RldmljZU5hbWUnOiAnRGVsb3JlYW4nXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNob3VsZC5iZS5pbnN0YW5jZW9mKGVycm9ycy5TZXNzaW9uTm90Q3JlYXRlZEVycm9yKTtcbiAgICAgIGUubWVzc2FnZS5zaG91bGQuY29udGFpbigncGxhdGZvcm1OYW1lJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvdWxkLmZhaWwoJ2Vycm9yIHNob3VsZCBoYXZlIGJlZW4gdGhyb3duJyk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdib29sZWFuIGNhcGFiaWxpdGllcycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGFsbG93IGEgc3RyaW5nIFwiZmFsc2VcIicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICAgICdwbGF0Zm9ybU5hbWUnOiAnaU9TJyxcbiAgICAgICAgJ2RldmljZU5hbWUnOiAnRGVsb3JlYW4nLFxuICAgICAgICAnbm9SZXNldCc6ICdmYWxzZSdcbiAgICAgIH0pO1xuICAgICAgbG9nZ2VyLndhcm4uY2FsbENvdW50LnNob3VsZC5iZS5hYm92ZSgwKTtcblxuICAgICAgbGV0IHNlc3Npb25zID0gYXdhaXQgZC5nZXRTZXNzaW9ucygpO1xuICAgICAgc2Vzc2lvbnNbMF0uY2FwYWJpbGl0aWVzLm5vUmVzZXQuc2hvdWxkLmVxbChmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IGEgc3RyaW5nIFwidHJ1ZVwiJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgJ3BsYXRmb3JtTmFtZSc6ICdpT1MnLFxuICAgICAgICAnZGV2aWNlTmFtZSc6ICdEZWxvcmVhbicsXG4gICAgICAgICdub1Jlc2V0JzogJ3RydWUnXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuYmUuYWJvdmUoMCk7XG5cbiAgICAgIGxldCBzZXNzaW9ucyA9IGF3YWl0IGQuZ2V0U2Vzc2lvbnMoKTtcbiAgICAgIHNlc3Npb25zWzBdLmNhcGFiaWxpdGllcy5ub1Jlc2V0LnNob3VsZC5lcWwodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IGEgc3RyaW5nIFwidHJ1ZVwiIGluIHN0cmluZyBjYXBhYmlsaXRpZXMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJyxcbiAgICAgICAgJ2xhbmd1YWdlJzogJ3RydWUnXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuZXF1YWwoMCk7XG5cbiAgICAgIGxldCBzZXNzaW9ucyA9IGF3YWl0IGQuZ2V0U2Vzc2lvbnMoKTtcbiAgICAgIHNlc3Npb25zWzBdLmNhcGFiaWxpdGllcy5sYW5ndWFnZS5zaG91bGQuZXFsKCd0cnVlJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdudW1iZXIgY2FwYWJpbGl0aWVzJywgZnVuY3Rpb24gKCkge1xuICAgIGl0KCdzaG91bGQgYWxsb3cgYSBzdHJpbmcgXCIxXCInLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJyxcbiAgICAgICAgJ25ld0NvbW1hbmRUaW1lb3V0JzogJzEnXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuYmUuYWJvdmUoMCk7XG5cbiAgICAgIGxldCBzZXNzaW9ucyA9IGF3YWl0IGQuZ2V0U2Vzc2lvbnMoKTtcbiAgICAgIHNlc3Npb25zWzBdLmNhcGFiaWxpdGllcy5uZXdDb21tYW5kVGltZW91dC5zaG91bGQuZXFsKDEpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBhIHN0cmluZyBcIjEuMVwiJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgJ3BsYXRmb3JtTmFtZSc6ICdpT1MnLFxuICAgICAgICAnZGV2aWNlTmFtZSc6ICdEZWxvcmVhbicsXG4gICAgICAgICduZXdDb21tYW5kVGltZW91dCc6ICcxLjEnXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuYmUuYWJvdmUoMCk7XG5cbiAgICAgIGxldCBzZXNzaW9ucyA9IGF3YWl0IGQuZ2V0U2Vzc2lvbnMoKTtcbiAgICAgIHNlc3Npb25zWzBdLmNhcGFiaWxpdGllcy5uZXdDb21tYW5kVGltZW91dC5zaG91bGQuZXFsKDEuMSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IGEgc3RyaW5nIFwiMVwiIGluIHN0cmluZyBjYXBhYmlsaXRpZXMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJyxcbiAgICAgICAgJ2xhbmd1YWdlJzogJzEnXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuLmNhbGxDb3VudC5zaG91bGQuZXF1YWwoMCk7XG5cbiAgICAgIGxldCBzZXNzaW9ucyA9IGF3YWl0IGQuZ2V0U2Vzc2lvbnMoKTtcbiAgICAgIHNlc3Npb25zWzBdLmNhcGFiaWxpdGllcy5sYW5ndWFnZS5zaG91bGQuZXFsKCcxJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0ICgnc2hvdWxkIGVycm9yIGlmIG9iamVjdHMgaW4gY2FwcycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgJ3BsYXRmb3JtTmFtZSc6IHthOiAnaU9TJ30sXG4gICAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zaG91bGQuYmUuaW5zdGFuY2VvZihlcnJvcnMuU2Vzc2lvbk5vdENyZWF0ZWRFcnJvcik7XG4gICAgICBlLm1lc3NhZ2Uuc2hvdWxkLmNvbnRhaW4oJ3BsYXRmb3JtTmFtZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3VsZC5mYWlsKCdlcnJvciBzaG91bGQgaGF2ZSBiZWVuIHRocm93bicpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNoZWNrIGZvciBkZXByZWNhdGVkIGNhcHMnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50aW1lb3V0KDUwMCk7XG5cbiAgICBkLmRlc2lyZWRDYXBDb25zdHJhaW50cyA9IHtcbiAgICAgICdseW54LXZlcnNpb24nOiB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgICdwbGF0Zm9ybU5hbWUnOiAnaU9TJyxcbiAgICAgICdkZXZpY2VOYW1lJzogJ0RlbG9yZWFuJyxcbiAgICAgICdseW54LXZlcnNpb24nOiA1XG4gICAgfSk7XG5cbiAgICBsb2dnZXIud2Fybi5jYWxsQ291bnQuc2hvdWxkLmJlLmFib3ZlKDApO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG5vdCB3YXJuIGlmIGRlcHJlY2F0ZWQ9ZmFsc2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50aW1lb3V0KDUwMCk7XG5cbiAgICBkLmRlc2lyZWRDYXBDb25zdHJhaW50cyA9IHtcbiAgICAgICdseW54LXZlcnNpb24nOiB7XG4gICAgICAgIGRlcHJlY2F0ZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICAncGxhdGZvcm1OYW1lJzogJ2lPUycsXG4gICAgICAnZGV2aWNlTmFtZSc6ICdEZWxvcmVhbicsXG4gICAgICAnbHlueC12ZXJzaW9uJzogNVxuICAgIH0pO1xuXG4gICAgbG9nZ2VyLndhcm4uY2FsbENvdW50LnNob3VsZC5lcXVhbCgwKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgdmFsaWRhdGUgYWdhaW5zdCBudWxsL3VuZGVmaW5lZCBjYXBzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGQuZGVzaXJlZENhcENvbnN0cmFpbnRzID0ge1xuICAgICAgJ2Zvbyc6IHtcbiAgICAgICAgaXNTdHJpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUycsXG4gICAgICBkZXZpY2VOYW1lOiAnRHVtYicsXG4gICAgICBmb286IG51bGxcbiAgICB9KTtcbiAgICBhd2FpdCBkLmRlbGV0ZVNlc3Npb24oKTtcblxuICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICBwbGF0Zm9ybU5hbWU6ICdpT1MnLFxuICAgICAgZGV2aWNlTmFtZTogJ0R1bWInLFxuICAgICAgZm9vOiAxXG4gICAgfSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC93YXMgbm90IHZhbGlkLyk7XG5cbiAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgcGxhdGZvcm1OYW1lOiAnaU9TJyxcbiAgICAgIGRldmljZU5hbWU6ICdEdW1iJyxcbiAgICAgIGZvbzogdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgYXdhaXQgZC5kZWxldGVTZXNzaW9uKCk7XG5cbiAgICBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgcGxhdGZvcm1OYW1lOiAnaU9TJyxcbiAgICAgIGRldmljZU5hbWU6ICdEdW1iJyxcbiAgICAgIGZvbzogJydcbiAgICB9KTtcbiAgICBhd2FpdCBkLmRlbGV0ZVNlc3Npb24oKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzdGlsbCB2YWxpZGF0ZSBudWxsL3VuZGVmaW5lZCBjYXBzIHdob3NlIHByZXNlbmNlIGlzIHJlcXVpcmVkJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGQuZGVzaXJlZENhcENvbnN0cmFpbnRzID0ge1xuICAgICAgZm9vOiB7XG4gICAgICAgIHByZXNlbmNlOiB0cnVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGQuY3JlYXRlU2Vzc2lvbih7XG4gICAgICBwbGF0Zm9ybU5hbWU6ICdpT1MnLFxuICAgICAgZGV2aWNlTmFtZTogJ0R1bWInLFxuICAgICAgZm9vOiBudWxsXG4gICAgfSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9ibGFuay8pO1xuXG4gICAgYXdhaXQgZC5jcmVhdGVTZXNzaW9uKHtcbiAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUycsXG4gICAgICBkZXZpY2VOYW1lOiAnRHVtYicsXG4gICAgICBmb286ICcnXG4gICAgfSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9ibGFuay8pO1xuXG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd3M2MnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaXQoJ3Nob3VsZCBhY2NlcHQgdzNjIGNhcGFiaWxpdGllcycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IFtzZXNzaW9uSWQsIGNhcHNdID0gYXdhaXQgZC5jcmVhdGVTZXNzaW9uKG51bGwsIG51bGwsIHtcbiAgICAgICAgYWx3YXlzTWF0Y2g6IHtcbiAgICAgICAgICBwbGF0Zm9ybU5hbWU6ICdpT1MnLFxuICAgICAgICAgIGRldmljZU5hbWU6ICdEZWxvcmVhbidcbiAgICAgICAgfSwgZmlyc3RNYXRjaDogW3t9XSxcbiAgICAgIH0pO1xuICAgICAgc2Vzc2lvbklkLnNob3VsZC5leGlzdDtcbiAgICAgIGNhcHMuc2hvdWxkLmVxbCh7XG4gICAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUycsXG4gICAgICAgIGRldmljZU5hbWU6ICdEZWxvcmVhbicsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGQuZGVsZXRlU2Vzc2lvbigpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBpZ25vcmUgdzNjIGNhcGFiaWxpdGllcyBpZiBpdCBpcyBub3QgYSBwbGFpbiBKU09OIG9iamVjdCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAobGV0IHZhbCBvZiBbdHJ1ZSwgXCJzdHJpbmdcIiwgW10sIDEwMF0pIHtcbiAgICAgICAgY29uc3QgW3Nlc3Npb25JZCwgY2Fwc10gPSBhd2FpdCBkLmNyZWF0ZVNlc3Npb24oe1xuICAgICAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUycsXG4gICAgICAgICAgZGV2aWNlTmFtZTogJ0RlbG9yZWFuJ1xuICAgICAgICB9LCBudWxsLCB2YWwpO1xuICAgICAgICBzZXNzaW9uSWQuc2hvdWxkLmV4aXN0O1xuICAgICAgICBjYXBzLnNob3VsZC5lcWwoe1xuICAgICAgICAgIHBsYXRmb3JtTmFtZTogJ2lPUycsXG4gICAgICAgICAgZGV2aWNlTmFtZTogJ0RlbG9yZWFuJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGQuZGVsZXRlU2Vzc2lvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLiJ9
