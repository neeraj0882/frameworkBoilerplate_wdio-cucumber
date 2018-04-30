'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _appiumBaseDriver = require('appium-base-driver');

var _asyncbox = require('asyncbox');

var commands = {},
    helpers = {},
    extensions = {};

commands.doTouchAction = function callee$0$0(action, opts) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.t0 = action;
        context$1$0.next = context$1$0.t0 === 'tap' ? 3 : context$1$0.t0 === 'press' ? 6 : context$1$0.t0 === 'release' ? 9 : context$1$0.t0 === 'moveTo' ? 12 : context$1$0.t0 === 'wait' ? 15 : context$1$0.t0 === 'longPress' ? 18 : context$1$0.t0 === 'cancel' ? 22 : 24;
        break;

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.tap(opts.element, opts.x, opts.y, opts.count));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.touchDown(opts.element, opts.x, opts.y));

      case 8:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.touchUp(opts.element, opts.x, opts.y));

      case 11:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(this.touchMove(opts.element, opts.x, opts.y));

      case 14:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 15:
        context$1$0.next = 17;
        return _regeneratorRuntime.awrap(_bluebird2['default'].delay(opts.ms));

      case 17:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 18:
        if (typeof opts.duration === 'undefined' || !opts.duration) {
          opts.duration = 1000;
        }
        context$1$0.next = 21;
        return _regeneratorRuntime.awrap(this.touchLongClick(opts.element, opts.x, opts.y, opts.duration));

      case 21:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 22:
        // TODO: clarify behavior of 'cancel' action and fix this
        _logger2['default'].warn("Cancel action currently has no effect");
        return context$1$0.abrupt('break', 25);

      case 24:
        _logger2['default'].errorAndThrow('unknown action ' + action);

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// drag is *not* press-move-release, so we need to translate
// drag works fine for scroll, as well
helpers.doTouchDrag = function callee$0$0(gestures) {
  var longPress, moveTo, startX, startY, endX, endY, _ref, x, y, _ref2, apiLevel, duration;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        longPress = gestures[0];
        moveTo = gestures[1];
        startX = longPress.options.x || 0, startY = longPress.options.y || 0, endX = moveTo.options.x || 0, endY = moveTo.options.y || 0;

        if (!longPress.options.element) {
          context$1$0.next = 11;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.getLocationInView(longPress.options.element));

      case 6:
        _ref = context$1$0.sent;
        x = _ref.x;
        y = _ref.y;

        startX += x || 0;
        startY += y || 0;

      case 11:
        if (!moveTo.options.element) {
          context$1$0.next = 19;
          break;
        }

        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(this.getLocationInView(moveTo.options.element));

      case 14:
        _ref2 = context$1$0.sent;
        x = _ref2.x;
        y = _ref2.y;

        endX += x || 0;
        endY += y || 0;

      case 19:
        context$1$0.next = 21;
        return _regeneratorRuntime.awrap(this.adb.getApiLevel());

      case 21:
        apiLevel = context$1$0.sent;
        duration = apiLevel >= 5 ? 2 : 1;

        // make sure that if the long press has a duration, we use it.
        if (longPress.options && longPress.options.duration) {
          duration = Math.max(longPress.options.duration / 1000, duration);
        }

        // `drag` will take care of whether there is an element or not at that level
        context$1$0.next = 26;
        return _regeneratorRuntime.awrap(this.drag(startX, startY, endX, endY, duration, 1, longPress.options.element, moveTo.options.element));

      case 26:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 27:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Release gesture needs element or co-ordinates to release it from that position
// or else release gesture is performed from center of the screen, so to fix it
// This method sets co-ordinates/element to release gesture if it has no options set already.
helpers.fixRelease = function callee$0$0(gestures) {
  var release, ref, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, gesture, opts, loc, size;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        release = _lodash2['default'].last(gestures);

        // sometimes there are no options
        release.options = release.options || {};
        // nothing to do if release options are already set

        if (!(release.options.element || release.options.x && release.options.y)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt('return');

      case 4:
        // without coordinates, `release` uses the center of the screen, which,
        // generally speaking, is not what we want
        // therefore: loop backwards and use the last command with an element and/or
        // offset coordinates
        gestures = _lodash2['default'].clone(gestures);
        ref = null;
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 9;
        _iterator = _getIterator(gestures.reverse());

      case 11:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 20;
          break;
        }

        gesture = _step.value;
        opts = gesture.options;

        if (!(opts.element || opts.x && opts.y)) {
          context$1$0.next = 17;
          break;
        }

        ref = gesture;
        return context$1$0.abrupt('break', 20);

      case 17:
        _iteratorNormalCompletion = true;
        context$1$0.next = 11;
        break;

      case 20:
        context$1$0.next = 26;
        break;

      case 22:
        context$1$0.prev = 22;
        context$1$0.t0 = context$1$0['catch'](9);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 26:
        context$1$0.prev = 26;
        context$1$0.prev = 27;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 29:
        context$1$0.prev = 29;

        if (!_didIteratorError) {
          context$1$0.next = 32;
          break;
        }

        throw _iteratorError;

      case 32:
        return context$1$0.finish(29);

      case 33:
        return context$1$0.finish(26);

      case 34:
        if (!ref) {
          context$1$0.next = 51;
          break;
        }

        opts = ref.options;

        if (!opts.element) {
          context$1$0.next = 50;
          break;
        }

        context$1$0.next = 39;
        return _regeneratorRuntime.awrap(this.getLocationInView(opts.element));

      case 39:
        loc = context$1$0.sent;

        if (!(opts.x && opts.y)) {
          context$1$0.next = 44;
          break;
        }

        // this is an offset from the element
        release.options = {
          x: loc.x + opts.x,
          y: loc.y + opts.y
        };
        context$1$0.next = 48;
        break;

      case 44:
        context$1$0.next = 46;
        return _regeneratorRuntime.awrap(this.getSize(opts.element));

      case 46:
        size = context$1$0.sent;

        release.options = {
          x: loc.x + size.width / 2,
          y: loc.y + size.height / 2
        };

      case 48:
        context$1$0.next = 51;
        break;

      case 50:
        release.options = _lodash2['default'].pick(opts, 'x', 'y');

      case 51:
        return context$1$0.abrupt('return', release);

      case 52:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[9, 22, 26, 34], [27,, 29, 33]]);
};

// Perform one gesture
helpers.performGesture = function callee$0$0(gesture) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.doTouchAction(gesture.action, gesture.options || {}));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
        context$1$0.prev = 6;
        context$1$0.t0 = context$1$0['catch'](0);

        if (!((0, _appiumBaseDriver.isErrorType)(context$1$0.t0, _appiumBaseDriver.errors.NoSuchElementError) && gesture.action === 'release' && gesture.options.element)) {
          context$1$0.next = 14;
          break;
        }

        delete gesture.options.element;
        _logger2['default'].debug('retrying release without element opts: ' + gesture.options + '.');
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.doTouchAction(gesture.action, gesture.options || {}));

      case 13:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 14:
        throw context$1$0.t0;

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 6]]);
};

commands.performTouch = function callee$0$0(gestures) {
  var swipeOpts, actions, press, wait, fixedGestures, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, g;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.isWebContext()) {
          context$1$0.next = 2;
          break;
        }

        throw new _appiumBaseDriver.errors.NotYetImplementedError();

      case 2:
        if (!(gestures.length === 4 && gestures[0].action === 'press' && gestures[1].action === 'wait' && gestures[2].action === 'moveTo' && gestures[3].action === 'release')) {
          context$1$0.next = 9;
          break;
        }

        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.getSwipeOptions(gestures));

      case 5:
        swipeOpts = context$1$0.sent;
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.swipe(swipeOpts.startX, swipeOpts.startY, swipeOpts.endX, swipeOpts.endY, swipeOpts.duration, swipeOpts.touchCount, swipeOpts.element));

      case 8:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 9:
        actions = _lodash2['default'].map(gestures, "action");

        if (!(actions[0] === 'longPress' && actions[1] === 'moveTo' && actions[2] === 'release')) {
          context$1$0.next = 16;
          break;
        }

        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.doTouchDrag(gestures));

      case 13:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 16:
        if (actions.length === 2) {
          // `press` without a wait is too slow and gets interpretted as a `longPress`
          if (_lodash2['default'].head(actions) === 'press' && _lodash2['default'].last(actions) === 'release') {
            actions[0] = 'tap';
            gestures[0].action = 'tap';
          }

          // the `longPress` and `tap` methods release on their own
          if ((_lodash2['default'].head(actions) === 'tap' || _lodash2['default'].head(actions) === 'longPress') && _lodash2['default'].last(actions) === 'release') {
            gestures.pop();
            actions.pop();
          }
        } else {
          // longpress followed by anything other than release should become a press and wait
          if (actions[0] === 'longPress') {
            actions = ['press', 'wait'].concat(_toConsumableArray(actions.slice(1)));

            press = gestures.shift();

            press.action = 'press';
            wait = {
              action: 'wait',
              options: { ms: press.options.duration || 1000 }
            };

            delete press.options.duration;
            gestures = [press, wait].concat(_toConsumableArray(gestures));
          }
        }

        context$1$0.next = 19;
        return _regeneratorRuntime.awrap(this.parseTouch(gestures, false));

      case 19:
        fixedGestures = context$1$0.sent;

        if (!(actions[actions.length - 1] === 'release')) {
          context$1$0.next = 24;
          break;
        }

        context$1$0.next = 23;
        return _regeneratorRuntime.awrap(this.fixRelease(gestures));

      case 23:
        actions[actions.length - 1] = context$1$0.sent;

      case 24:
        _iteratorNormalCompletion2 = true;
        _didIteratorError2 = false;
        _iteratorError2 = undefined;
        context$1$0.prev = 27;
        _iterator2 = _getIterator(fixedGestures);

      case 29:
        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
          context$1$0.next = 36;
          break;
        }

        g = _step2.value;
        context$1$0.next = 33;
        return _regeneratorRuntime.awrap(this.performGesture(g));

      case 33:
        _iteratorNormalCompletion2 = true;
        context$1$0.next = 29;
        break;

      case 36:
        context$1$0.next = 42;
        break;

      case 38:
        context$1$0.prev = 38;
        context$1$0.t0 = context$1$0['catch'](27);
        _didIteratorError2 = true;
        _iteratorError2 = context$1$0.t0;

      case 42:
        context$1$0.prev = 42;
        context$1$0.prev = 43;

        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }

      case 45:
        context$1$0.prev = 45;

        if (!_didIteratorError2) {
          context$1$0.next = 48;
          break;
        }

        throw _iteratorError2;

      case 48:
        return context$1$0.finish(45);

      case 49:
        return context$1$0.finish(42);

      case 50:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[27, 38, 42, 50], [43,, 45, 49]]);
};

helpers.parseTouch = function callee$0$0(gestures, multi) {
  var touchStateObjects, prevPos, time, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, state, timeOffset;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // because multi-touch releases at the end by default
        if (multi && _lodash2['default'].last(gestures).action === 'release') {
          gestures.pop();
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _asyncbox.asyncmap)(gestures, function callee$1$0(gesture) {
          var options, elementId, pos, _ref3, width, height, touchStateObject, offset;

          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                options = gesture.options || {};

                if (!_lodash2['default'].includes(['press', 'moveTo', 'tap', 'longPress'], gesture.action)) {
                  context$2$0.next = 30;
                  break;
                }

                options.offset = false;
                elementId = gesture.options.element;

                if (!elementId) {
                  context$2$0.next = 24;
                  break;
                }

                context$2$0.next = 7;
                return _regeneratorRuntime.awrap(this.getLocationInView(elementId));

              case 7:
                pos = context$2$0.sent;

                if (!(gesture.options.x || gesture.options.y)) {
                  context$2$0.next = 13;
                  break;
                }

                options.x = pos.x + (gesture.options.x || 0);
                options.y = pos.y + (gesture.options.y || 0);
                context$2$0.next = 20;
                break;

              case 13:
                context$2$0.next = 15;
                return _regeneratorRuntime.awrap(this.getSize(elementId));

              case 15:
                _ref3 = context$2$0.sent;
                width = _ref3.width;
                height = _ref3.height;

                options.x = pos.x + width / 2;
                options.y = pos.y + height / 2;

              case 20:
                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: 0.005
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 24:
                options.x = gesture.options.x || 0;
                options.y = gesture.options.y || 0;

                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: 0.005
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 28:
                context$2$0.next = 34;
                break;

              case 30:
                offset = 0.005;

                if (gesture.action === 'wait') {
                  options = gesture.options;
                  offset = parseInt(gesture.options.ms, 10) / 1000;
                }
                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: offset
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 34:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }, false));

      case 3:
        touchStateObjects = context$1$0.sent;
        prevPos = null, time = 0;
        _iteratorNormalCompletion3 = true;
        _didIteratorError3 = false;
        _iteratorError3 = undefined;
        context$1$0.prev = 8;

        for (_iterator3 = _getIterator(touchStateObjects); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          state = _step3.value;

          if (_lodash2['default'].isUndefined(state.options.x) && _lodash2['default'].isUndefined(state.options.y) && prevPos !== null) {
            // this happens with wait
            state.options.x = prevPos.x;
            state.options.y = prevPos.y;
          }
          if (state.options.offset && prevPos) {
            // the current position is an offset
            state.options.x += prevPos.x;
            state.options.y += prevPos.y;
          }
          delete state.options.offset;
          if (!_lodash2['default'].isUndefined(state.options.x) && !_lodash2['default'].isUndefined(state.options.y)) {
            prevPos = state.options;
          }

          if (multi) {
            timeOffset = state.timeOffset;

            time += timeOffset;
            state.time = _androidHelpers2['default'].truncateDecimals(time, 3);

            // multi gestures require 'touch' rather than 'options'
            if (!_lodash2['default'].isUndefined(state.options.x) && !_lodash2['default'].isUndefined(state.options.y)) {
              state.touch = {
                x: state.options.x,
                y: state.options.y
              };
            }
            delete state.options;
          }
          delete state.timeOffset;
        }
        context$1$0.next = 16;
        break;

      case 12:
        context$1$0.prev = 12;
        context$1$0.t0 = context$1$0['catch'](8);
        _didIteratorError3 = true;
        _iteratorError3 = context$1$0.t0;

      case 16:
        context$1$0.prev = 16;
        context$1$0.prev = 17;

        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }

      case 19:
        context$1$0.prev = 19;

        if (!_didIteratorError3) {
          context$1$0.next = 22;
          break;
        }

        throw _iteratorError3;

      case 22:
        return context$1$0.finish(19);

      case 23:
        return context$1$0.finish(16);

      case 24:
        return context$1$0.abrupt('return', touchStateObjects);

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[8, 12, 16, 24], [17,, 19, 23]]);
};

commands.performMultiAction = function callee$0$0(actions, elementId) {
  var states;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this2 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.isWebContext()) {
          context$1$0.next = 2;
          break;
        }

        throw new _appiumBaseDriver.errors.NotYetImplementedError();

      case 2:
        if (!(actions.length === 1)) {
          context$1$0.next = 4;
          break;
        }

        throw new Error("Multi Pointer Gestures need at least two actions. " + "Use Touch Actions for a single action.");

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap((0, _asyncbox.asyncmap)(actions, function callee$1$0(action) {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.parseTouch(action, true));

              case 2:
                return context$2$0.abrupt('return', context$2$0.sent);

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this2);
        }, false));

      case 6:
        states = context$1$0.sent;
        return context$1$0.abrupt('return', this.doPerformMultiAction(elementId, states));

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

/**
 * Reason for isolating doPerformMultiAction from performMultiAction is for reusing performMultiAction
 * across android-drivers (like appium-uiautomator2-driver) and to avoid code duplication.
 * Other android-drivers (like appium-uiautomator2-driver) need to override doPerformMultiAction
 * to facilitate performMultiAction.
 */
commands.doPerformMultiAction = function callee$0$0(elementId, states) {
  var opts;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        opts = undefined;

        if (!elementId) {
          context$1$0.next = 8;
          break;
        }

        opts = {
          elementId: elementId,
          actions: states
        };
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:performMultiPointerGesture", opts));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 8:
        opts = {
          actions: states
        };
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("performMultiPointerGesture", opts));

      case 11:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// lollipop takes a little longer to get things rolling

// this is the center of the element

// sometime the element is not available when releasing, retry without it

// press-wait-moveTo-release is `swipe`, so use native method

// some things are special

// fix release action then perform all actions

// we need to change the time (which is now an offset)
// and the position (which may be an offset)

// Android needs at least two actions to be able to perform a multi pointer gesture
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy90b3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3NCQUFnQixXQUFXOzs7O3NCQUNiLFFBQVE7Ozs7OEJBQ0ssb0JBQW9COzs7O3dCQUNqQyxVQUFVOzs7O2dDQUNZLG9CQUFvQjs7d0JBQy9CLFVBQVU7O0FBRW5DLElBQUksUUFBUSxHQUFHLEVBQUU7SUFBRSxPQUFPLEdBQUcsRUFBRTtJQUFFLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRWpELFFBQVEsQ0FBQyxhQUFhLEdBQUcsb0JBQWdCLE1BQU0sRUFBRSxJQUFJOzs7O3lCQUMzQyxNQUFNOzhDQUNQLEtBQUssMEJBRUwsT0FBTywwQkFFUCxTQUFTLDBCQUVULFFBQVEsMkJBRVIsTUFBTSwyQkFFTixXQUFXLDJCQUtYLFFBQVE7Ozs7O3lDQWRFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozt5Q0FFbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozt5Q0FFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozt5Q0FFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozt5Q0FFNUMsc0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Ozs7OztBQUU3QixZQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFF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QUVsRixZQUFJLEdBQUc7QUFDTCxpQkFBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQzs7eUNBQ1csSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDOzs7Ozs7Ozs7O0NBRTdFLENBQUM7O0FBRUYsZUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsR0FBUixRQUFRO1FBQUUsT0FBTyxHQUFQLE9BQU87cUJBQ1gsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvdG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFuZHJvaWRIZWxwZXJzIGZyb20gJy4uL2FuZHJvaWQtaGVscGVycyc7XG5pbXBvcnQgQiBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgeyBlcnJvcnMsIGlzRXJyb3JUeXBlIH0gZnJvbSAnYXBwaXVtLWJhc2UtZHJpdmVyJztcbmltcG9ydCB7IGFzeW5jbWFwIH0gZnJvbSAnYXN5bmNib3gnO1xuXG5sZXQgY29tbWFuZHMgPSB7fSwgaGVscGVycyA9IHt9LCBleHRlbnNpb25zID0ge307XG5cbmNvbW1hbmRzLmRvVG91Y2hBY3Rpb24gPSBhc3luYyBmdW5jdGlvbiAoYWN0aW9uLCBvcHRzKSB7XG4gIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgY2FzZSAndGFwJzpcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcChvcHRzLmVsZW1lbnQsIG9wdHMueCwgb3B0cy55LCBvcHRzLmNvdW50KTtcbiAgICBjYXNlICdwcmVzcyc6XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50b3VjaERvd24ob3B0cy5lbGVtZW50LCBvcHRzLngsIG9wdHMueSk7XG4gICAgY2FzZSAncmVsZWFzZSc6XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50b3VjaFVwKG9wdHMuZWxlbWVudCwgb3B0cy54LCBvcHRzLnkpO1xuICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50b3VjaE1vdmUob3B0cy5lbGVtZW50LCBvcHRzLngsIG9wdHMueSk7XG4gICAgY2FzZSAnd2FpdCc6XG4gICAgICByZXR1cm4gYXdhaXQgQi5kZWxheShvcHRzLm1zKTtcbiAgICBjYXNlICdsb25nUHJlc3MnOlxuICAgICAgaWYgKHR5cGVvZiBvcHRzLmR1cmF0aW9uID09PSAndW5kZWZpbmVkJyB8fCAhb3B0cy5kdXJhdGlvbikge1xuICAgICAgICBvcHRzLmR1cmF0aW9uID0gMTAwMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRvdWNoTG9uZ0NsaWNrKG9wdHMuZWxlbWVudCwgb3B0cy54LCBvcHRzLnksIG9wdHMuZHVyYXRpb24pO1xuICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAvLyBUT0RPOiBjbGFyaWZ5IGJlaGF2aW9yIG9mICdjYW5jZWwnIGFjdGlvbiBhbmQgZml4IHRoaXNcbiAgICAgIGxvZy53YXJuKFwiQ2FuY2VsIGFjdGlvbiBjdXJyZW50bHkgaGFzIG5vIGVmZmVjdFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2cuZXJyb3JBbmRUaHJvdyhgdW5rbm93biBhY3Rpb24gJHthY3Rpb259YCk7XG4gIH1cbn07XG5cblxuLy8gZHJhZyBpcyAqbm90KiBwcmVzcy1tb3ZlLXJlbGVhc2UsIHNvIHdlIG5lZWQgdG8gdHJhbnNsYXRlXG4vLyBkcmFnIHdvcmtzIGZpbmUgZm9yIHNjcm9sbCwgYXMgd2VsbFxuaGVscGVycy5kb1RvdWNoRHJhZyA9IGFzeW5jIGZ1bmN0aW9uIChnZXN0dXJlcykge1xuICBsZXQgbG9uZ1ByZXNzID0gZ2VzdHVyZXNbMF07XG4gIGxldCBtb3ZlVG8gPSBnZXN0dXJlc1sxXTtcbiAgbGV0IHN0YXJ0WCA9IGxvbmdQcmVzcy5vcHRpb25zLnggfHwgMCxcbiAgICAgIHN0YXJ0WSA9IGxvbmdQcmVzcy5vcHRpb25zLnkgfHwgMCxcbiAgICAgIGVuZFggPSBtb3ZlVG8ub3B0aW9ucy54IHx8IDAsXG4gICAgICBlbmRZID0gbW92ZVRvLm9wdGlvbnMueSB8fCAwO1xuICBpZiAobG9uZ1ByZXNzLm9wdGlvbnMuZWxlbWVudCkge1xuICAgIGxldCB7eCwgeX0gPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uSW5WaWV3KGxvbmdQcmVzcy5vcHRpb25zLmVsZW1lbnQpO1xuICAgIHN0YXJ0WCArPSB4IHx8IDA7XG4gICAgc3RhcnRZICs9IHkgfHwgMDtcbiAgfVxuICBpZiAobW92ZVRvLm9wdGlvbnMuZWxlbWVudCkge1xuICAgIGxldCB7eCwgeX0gPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uSW5WaWV3KG1vdmVUby5vcHRpb25zLmVsZW1lbnQpO1xuICAgIGVuZFggKz0geCB8fCAwO1xuICAgIGVuZFkgKz0geSB8fCAwO1xuICB9XG5cbiAgbGV0IGFwaUxldmVsID0gYXdhaXQgdGhpcy5hZGIuZ2V0QXBpTGV2ZWwoKTtcbiAgLy8gbG9sbGlwb3AgdGFrZXMgYSBsaXR0bGUgbG9uZ2VyIHRvIGdldCB0aGluZ3Mgcm9sbGluZ1xuICBsZXQgZHVyYXRpb24gPSBhcGlMZXZlbCA+PSA1ID8gMiA6IDE7XG4gIC8vIG1ha2Ugc3VyZSB0aGF0IGlmIHRoZSBsb25nIHByZXNzIGhhcyBhIGR1cmF0aW9uLCB3ZSB1c2UgaXQuXG4gIGlmIChsb25nUHJlc3Mub3B0aW9ucyAmJiBsb25nUHJlc3Mub3B0aW9ucy5kdXJhdGlvbikge1xuICAgIGR1cmF0aW9uID0gTWF0aC5tYXgobG9uZ1ByZXNzLm9wdGlvbnMuZHVyYXRpb24gLyAxMDAwLCBkdXJhdGlvbik7XG4gIH1cblxuICAvLyBgZHJhZ2Agd2lsbCB0YWtlIGNhcmUgb2Ygd2hldGhlciB0aGVyZSBpcyBhbiBlbGVtZW50IG9yIG5vdCBhdCB0aGF0IGxldmVsXG4gIHJldHVybiBhd2FpdCB0aGlzLmRyYWcoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGR1cmF0aW9uLCAxLCBsb25nUHJlc3Mub3B0aW9ucy5lbGVtZW50LCBtb3ZlVG8ub3B0aW9ucy5lbGVtZW50KTtcbn07XG5cbi8vIFJlbGVhc2UgZ2VzdHVyZSBuZWVkcyBlbGVtZW50IG9yIGNvLW9yZGluYXRlcyB0byByZWxlYXNlIGl0IGZyb20gdGhhdCBwb3NpdGlvblxuLy8gb3IgZWxzZSByZWxlYXNlIGdlc3R1cmUgaXMgcGVyZm9ybWVkIGZyb20gY2VudGVyIG9mIHRoZSBzY3JlZW4sIHNvIHRvIGZpeCBpdFxuLy8gVGhpcyBtZXRob2Qgc2V0cyBjby1vcmRpbmF0ZXMvZWxlbWVudCB0byByZWxlYXNlIGdlc3R1cmUgaWYgaXQgaGFzIG5vIG9wdGlvbnMgc2V0IGFscmVhZHkuXG5oZWxwZXJzLmZpeFJlbGVhc2UgPSBhc3luYyBmdW5jdGlvbiAoZ2VzdHVyZXMpIHtcbiAgbGV0IHJlbGVhc2UgPSBfLmxhc3QoZ2VzdHVyZXMpO1xuICAvLyBzb21ldGltZXMgdGhlcmUgYXJlIG5vIG9wdGlvbnNcbiAgcmVsZWFzZS5vcHRpb25zID0gcmVsZWFzZS5vcHRpb25zIHx8IHt9O1xuICAvLyBub3RoaW5nIHRvIGRvIGlmIHJlbGVhc2Ugb3B0aW9ucyBhcmUgYWxyZWFkeSBzZXRcbiAgaWYgKHJlbGVhc2Uub3B0aW9ucy5lbGVtZW50IHx8IChyZWxlYXNlLm9wdGlvbnMueCAmJiByZWxlYXNlLm9wdGlvbnMueSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gd2l0aG91dCBjb29yZGluYXRlcywgYHJlbGVhc2VgIHVzZXMgdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuLCB3aGljaCxcbiAgLy8gZ2VuZXJhbGx5IHNwZWFraW5nLCBpcyBub3Qgd2hhdCB3ZSB3YW50XG4gIC8vIHRoZXJlZm9yZTogbG9vcCBiYWNrd2FyZHMgYW5kIHVzZSB0aGUgbGFzdCBjb21tYW5kIHdpdGggYW4gZWxlbWVudCBhbmQvb3JcbiAgLy8gb2Zmc2V0IGNvb3JkaW5hdGVzXG4gIGdlc3R1cmVzID0gXy5jbG9uZShnZXN0dXJlcyk7XG4gIGxldCByZWYgPSBudWxsO1xuICBmb3IgKGxldCBnZXN0dXJlIG9mIGdlc3R1cmVzLnJldmVyc2UoKSkge1xuICAgIGxldCBvcHRzID0gZ2VzdHVyZS5vcHRpb25zO1xuICAgIGlmIChvcHRzLmVsZW1lbnQgfHwgKG9wdHMueCAmJiBvcHRzLnkpKSB7XG4gICAgICByZWYgPSBnZXN0dXJlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChyZWYpIHtcbiAgICBsZXQgb3B0cyA9IHJlZi5vcHRpb25zO1xuICAgIGlmIChvcHRzLmVsZW1lbnQpIHtcbiAgICAgIGxldCBsb2MgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uSW5WaWV3KG9wdHMuZWxlbWVudCk7XG4gICAgICBpZiAob3B0cy54ICYmIG9wdHMueSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIG9mZnNldCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgIHJlbGVhc2Uub3B0aW9ucyA9IHtcbiAgICAgICAgICB4OiBsb2MueCArIG9wdHMueCxcbiAgICAgICAgICB5OiBsb2MueSArIG9wdHMueVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgY2VudGVyIG9mIHRoZSBlbGVtZW50XG4gICAgICAgIGxldCBzaXplID0gYXdhaXQgdGhpcy5nZXRTaXplKG9wdHMuZWxlbWVudCk7XG4gICAgICAgIHJlbGVhc2Uub3B0aW9ucyA9IHtcbiAgICAgICAgICB4OiBsb2MueCArIHNpemUud2lkdGggLyAyLFxuICAgICAgICAgIHk6IGxvYy55ICsgc2l6ZS5oZWlnaHQgLyAyXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbGVhc2Uub3B0aW9ucyA9IF8ucGljayhvcHRzLCAneCcsICd5Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWxlYXNlO1xufTtcblxuLy8gUGVyZm9ybSBvbmUgZ2VzdHVyZVxuaGVscGVycy5wZXJmb3JtR2VzdHVyZSA9IGFzeW5jIGZ1bmN0aW9uIChnZXN0dXJlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Ub3VjaEFjdGlvbihnZXN0dXJlLmFjdGlvbiwgZ2VzdHVyZS5vcHRpb25zIHx8IHt9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHNvbWV0aW1lIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgd2hlbiByZWxlYXNpbmcsIHJldHJ5IHdpdGhvdXQgaXRcbiAgICBpZiAoaXNFcnJvclR5cGUoZSwgZXJyb3JzLk5vU3VjaEVsZW1lbnRFcnJvcikgJiYgZ2VzdHVyZS5hY3Rpb24gPT09ICdyZWxlYXNlJyAmJlxuICAgICAgICBnZXN0dXJlLm9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgZGVsZXRlIGdlc3R1cmUub3B0aW9ucy5lbGVtZW50O1xuICAgICAgbG9nLmRlYnVnKGByZXRyeWluZyByZWxlYXNlIHdpdGhvdXQgZWxlbWVudCBvcHRzOiAke2dlc3R1cmUub3B0aW9uc30uYCk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb1RvdWNoQWN0aW9uKGdlc3R1cmUuYWN0aW9uLCBnZXN0dXJlLm9wdGlvbnMgfHwge30pO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5jb21tYW5kcy5wZXJmb3JtVG91Y2ggPSBhc3luYyBmdW5jdGlvbiAoZ2VzdHVyZXMpIHtcbiAgaWYgKHRoaXMuaXNXZWJDb250ZXh0KCkpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLk5vdFlldEltcGxlbWVudGVkRXJyb3IoKTtcbiAgfVxuXG4gIC8vIHByZXNzLXdhaXQtbW92ZVRvLXJlbGVhc2UgaXMgYHN3aXBlYCwgc28gdXNlIG5hdGl2ZSBtZXRob2RcbiAgaWYgKGdlc3R1cmVzLmxlbmd0aCA9PT0gNCAmJlxuICAgICAgZ2VzdHVyZXNbMF0uYWN0aW9uID09PSAncHJlc3MnICYmXG4gICAgICBnZXN0dXJlc1sxXS5hY3Rpb24gPT09ICd3YWl0JyAmJlxuICAgICAgZ2VzdHVyZXNbMl0uYWN0aW9uID09PSAnbW92ZVRvJyAmJlxuICAgICAgZ2VzdHVyZXNbM10uYWN0aW9uID09PSAncmVsZWFzZScpIHtcblxuICAgIGxldCBzd2lwZU9wdHMgPSBhd2FpdCB0aGlzLmdldFN3aXBlT3B0aW9ucyhnZXN0dXJlcyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc3dpcGUoc3dpcGVPcHRzLnN0YXJ0WCwgc3dpcGVPcHRzLnN0YXJ0WSwgc3dpcGVPcHRzLmVuZFgsXG4gICAgICAgIHN3aXBlT3B0cy5lbmRZLCBzd2lwZU9wdHMuZHVyYXRpb24sIHN3aXBlT3B0cy50b3VjaENvdW50LFxuICAgICAgICBzd2lwZU9wdHMuZWxlbWVudCk7XG4gIH1cbiAgbGV0IGFjdGlvbnMgPSBfLm1hcChnZXN0dXJlcywgXCJhY3Rpb25cIik7XG5cbiAgaWYgKGFjdGlvbnNbMF0gPT09ICdsb25nUHJlc3MnICYmIGFjdGlvbnNbMV0gPT09ICdtb3ZlVG8nICYmIGFjdGlvbnNbMl0gPT09ICdyZWxlYXNlJykge1xuICAgIC8vIHNvbWUgdGhpbmdzIGFyZSBzcGVjaWFsXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Ub3VjaERyYWcoZ2VzdHVyZXMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gYHByZXNzYCB3aXRob3V0IGEgd2FpdCBpcyB0b28gc2xvdyBhbmQgZ2V0cyBpbnRlcnByZXR0ZWQgYXMgYSBgbG9uZ1ByZXNzYFxuICAgICAgaWYgKF8uaGVhZChhY3Rpb25zKSA9PT0gJ3ByZXNzJyAmJiBfLmxhc3QoYWN0aW9ucykgPT09ICdyZWxlYXNlJykge1xuICAgICAgICBhY3Rpb25zWzBdID0gJ3RhcCc7XG4gICAgICAgIGdlc3R1cmVzWzBdLmFjdGlvbiA9ICd0YXAnO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgYGxvbmdQcmVzc2AgYW5kIGB0YXBgIG1ldGhvZHMgcmVsZWFzZSBvbiB0aGVpciBvd25cbiAgICAgIGlmICgoXy5oZWFkKGFjdGlvbnMpID09PSAndGFwJyB8fCBfLmhlYWQoYWN0aW9ucykgPT09ICdsb25nUHJlc3MnKSAmJiBfLmxhc3QoYWN0aW9ucykgPT09ICdyZWxlYXNlJykge1xuICAgICAgICBnZXN0dXJlcy5wb3AoKTtcbiAgICAgICAgYWN0aW9ucy5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9uZ3ByZXNzIGZvbGxvd2VkIGJ5IGFueXRoaW5nIG90aGVyIHRoYW4gcmVsZWFzZSBzaG91bGQgYmVjb21lIGEgcHJlc3MgYW5kIHdhaXRcbiAgICAgIGlmIChhY3Rpb25zWzBdID09PSAnbG9uZ1ByZXNzJykge1xuICAgICAgICBhY3Rpb25zID0gWydwcmVzcycsICd3YWl0JywgLi4uYWN0aW9ucy5zbGljZSgxKV07XG5cbiAgICAgICAgbGV0IHByZXNzID0gZ2VzdHVyZXMuc2hpZnQoKTtcbiAgICAgICAgcHJlc3MuYWN0aW9uID0gJ3ByZXNzJztcbiAgICAgICAgbGV0IHdhaXQgPSB7XG4gICAgICAgICAgYWN0aW9uOiAnd2FpdCcsXG4gICAgICAgICAgb3B0aW9uczoge21zOiBwcmVzcy5vcHRpb25zLmR1cmF0aW9uIHx8IDEwMDB9XG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBwcmVzcy5vcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBnZXN0dXJlcyA9IFtwcmVzcywgd2FpdCwgLi4uZ2VzdHVyZXNdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBmaXhlZEdlc3R1cmVzID0gYXdhaXQgdGhpcy5wYXJzZVRvdWNoKGdlc3R1cmVzLCBmYWxzZSk7XG4gICAgLy8gZml4IHJlbGVhc2UgYWN0aW9uIHRoZW4gcGVyZm9ybSBhbGwgYWN0aW9uc1xuICAgIGlmIChhY3Rpb25zW2FjdGlvbnMubGVuZ3RoIC0gMV0gPT09ICdyZWxlYXNlJykge1xuICAgICAgYWN0aW9uc1thY3Rpb25zLmxlbmd0aCAtIDFdID0gYXdhaXQgdGhpcy5maXhSZWxlYXNlKGdlc3R1cmVzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgZyBvZiBmaXhlZEdlc3R1cmVzKSB7XG4gICAgICBhd2FpdCB0aGlzLnBlcmZvcm1HZXN0dXJlKGcpO1xuICAgIH1cbiAgfVxufTtcblxuaGVscGVycy5wYXJzZVRvdWNoID0gYXN5bmMgZnVuY3Rpb24gKGdlc3R1cmVzLCBtdWx0aSkge1xuICAvLyBiZWNhdXNlIG11bHRpLXRvdWNoIHJlbGVhc2VzIGF0IHRoZSBlbmQgYnkgZGVmYXVsdFxuICBpZiAobXVsdGkgJiYgXy5sYXN0KGdlc3R1cmVzKS5hY3Rpb24gPT09ICdyZWxlYXNlJykge1xuICAgIGdlc3R1cmVzLnBvcCgpO1xuICB9XG5cbiAgbGV0IHRvdWNoU3RhdGVPYmplY3RzID0gYXdhaXQgYXN5bmNtYXAoZ2VzdHVyZXMsIGFzeW5jIChnZXN0dXJlKSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBnZXN0dXJlLm9wdGlvbnMgfHwge307XG4gICAgaWYgKF8uaW5jbHVkZXMoWydwcmVzcycsICdtb3ZlVG8nLCAndGFwJywgJ2xvbmdQcmVzcyddLCBnZXN0dXJlLmFjdGlvbikpIHtcbiAgICAgIG9wdGlvbnMub2Zmc2V0ID0gZmFsc2U7XG4gICAgICBsZXQgZWxlbWVudElkID0gZ2VzdHVyZS5vcHRpb25zLmVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudElkKSB7XG4gICAgICAgIGxldCBwb3MgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uSW5WaWV3KGVsZW1lbnRJZCk7XG4gICAgICAgIGlmIChnZXN0dXJlLm9wdGlvbnMueCB8fCBnZXN0dXJlLm9wdGlvbnMueSkge1xuICAgICAgICAgIG9wdGlvbnMueCA9IHBvcy54ICsgKGdlc3R1cmUub3B0aW9ucy54IHx8IDApO1xuICAgICAgICAgIG9wdGlvbnMueSA9IHBvcy55ICsgKGdlc3R1cmUub3B0aW9ucy55IHx8IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGF3YWl0IHRoaXMuZ2V0U2l6ZShlbGVtZW50SWQpO1xuICAgICAgICAgIG9wdGlvbnMueCA9IHBvcy54ICsgKHdpZHRoIC8gMik7XG4gICAgICAgICAgb3B0aW9ucy55ID0gcG9zLnkgKyAoaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdWNoU3RhdGVPYmplY3QgPSB7XG4gICAgICAgICAgYWN0aW9uOiBnZXN0dXJlLmFjdGlvbixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHRpbWVPZmZzZXQ6IDAuMDA1LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdG91Y2hTdGF0ZU9iamVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMueCA9IChnZXN0dXJlLm9wdGlvbnMueCB8fCAwKTtcbiAgICAgICAgb3B0aW9ucy55ID0gKGdlc3R1cmUub3B0aW9ucy55IHx8IDApO1xuXG4gICAgICAgIGxldCB0b3VjaFN0YXRlT2JqZWN0ID0ge1xuICAgICAgICAgIGFjdGlvbjogZ2VzdHVyZS5hY3Rpb24sXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICB0aW1lT2Zmc2V0OiAwLjAwNSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRvdWNoU3RhdGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBvZmZzZXQgPSAwLjAwNTtcbiAgICAgIGlmIChnZXN0dXJlLmFjdGlvbiA9PT0gJ3dhaXQnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBnZXN0dXJlLm9wdGlvbnM7XG4gICAgICAgIG9mZnNldCA9IChwYXJzZUludChnZXN0dXJlLm9wdGlvbnMubXMsIDEwKSAvIDEwMDApO1xuICAgICAgfVxuICAgICAgbGV0IHRvdWNoU3RhdGVPYmplY3QgPSB7XG4gICAgICAgIGFjdGlvbjogZ2VzdHVyZS5hY3Rpb24sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHRpbWVPZmZzZXQ6IG9mZnNldCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gdG91Y2hTdGF0ZU9iamVjdDtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbiAgLy8gd2UgbmVlZCB0byBjaGFuZ2UgdGhlIHRpbWUgKHdoaWNoIGlzIG5vdyBhbiBvZmZzZXQpXG4gIC8vIGFuZCB0aGUgcG9zaXRpb24gKHdoaWNoIG1heSBiZSBhbiBvZmZzZXQpXG4gIGxldCBwcmV2UG9zID0gbnVsbCxcbiAgICAgIHRpbWUgPSAwO1xuICBmb3IgKGxldCBzdGF0ZSBvZiB0b3VjaFN0YXRlT2JqZWN0cykge1xuICAgIGlmIChfLmlzVW5kZWZpbmVkKHN0YXRlLm9wdGlvbnMueCkgJiYgXy5pc1VuZGVmaW5lZChzdGF0ZS5vcHRpb25zLnkpICYmIHByZXZQb3MgIT09IG51bGwpIHtcbiAgICAgIC8vIHRoaXMgaGFwcGVucyB3aXRoIHdhaXRcbiAgICAgIHN0YXRlLm9wdGlvbnMueCA9IHByZXZQb3MueDtcbiAgICAgIHN0YXRlLm9wdGlvbnMueSA9IHByZXZQb3MueTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wdGlvbnMub2Zmc2V0ICYmIHByZXZQb3MpIHtcbiAgICAgIC8vIHRoZSBjdXJyZW50IHBvc2l0aW9uIGlzIGFuIG9mZnNldFxuICAgICAgc3RhdGUub3B0aW9ucy54ICs9IHByZXZQb3MueDtcbiAgICAgIHN0YXRlLm9wdGlvbnMueSArPSBwcmV2UG9zLnk7XG4gICAgfVxuICAgIGRlbGV0ZSBzdGF0ZS5vcHRpb25zLm9mZnNldDtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RhdGUub3B0aW9ucy54KSAmJiAhXy5pc1VuZGVmaW5lZChzdGF0ZS5vcHRpb25zLnkpKSB7XG4gICAgICBwcmV2UG9zID0gc3RhdGUub3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIGxldCB0aW1lT2Zmc2V0ID0gc3RhdGUudGltZU9mZnNldDtcbiAgICAgIHRpbWUgKz0gdGltZU9mZnNldDtcbiAgICAgIHN0YXRlLnRpbWUgPSBhbmRyb2lkSGVscGVycy50cnVuY2F0ZURlY2ltYWxzKHRpbWUsIDMpO1xuXG4gICAgICAvLyBtdWx0aSBnZXN0dXJlcyByZXF1aXJlICd0b3VjaCcgcmF0aGVyIHRoYW4gJ29wdGlvbnMnXG4gICAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RhdGUub3B0aW9ucy54KSAmJiAhXy5pc1VuZGVmaW5lZChzdGF0ZS5vcHRpb25zLnkpKSB7XG4gICAgICAgIHN0YXRlLnRvdWNoID0ge1xuICAgICAgICAgIHg6IHN0YXRlLm9wdGlvbnMueCxcbiAgICAgICAgICB5OiBzdGF0ZS5vcHRpb25zLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBzdGF0ZS5vcHRpb25zO1xuICAgIH1cbiAgICBkZWxldGUgc3RhdGUudGltZU9mZnNldDtcbiAgfVxuICByZXR1cm4gdG91Y2hTdGF0ZU9iamVjdHM7XG59O1xuXG5cbmNvbW1hbmRzLnBlcmZvcm1NdWx0aUFjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIChhY3Rpb25zLCBlbGVtZW50SWQpIHtcbiAgaWYgKHRoaXMuaXNXZWJDb250ZXh0KCkpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLk5vdFlldEltcGxlbWVudGVkRXJyb3IoKTtcbiAgfVxuXG4gIC8vIEFuZHJvaWQgbmVlZHMgYXQgbGVhc3QgdHdvIGFjdGlvbnMgdG8gYmUgYWJsZSB0byBwZXJmb3JtIGEgbXVsdGkgcG9pbnRlciBnZXN0dXJlXG4gIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpIFBvaW50ZXIgR2VzdHVyZXMgbmVlZCBhdCBsZWFzdCB0d28gYWN0aW9ucy4gXCIgK1xuICAgICAgICBcIlVzZSBUb3VjaCBBY3Rpb25zIGZvciBhIHNpbmdsZSBhY3Rpb24uXCIpO1xuICB9XG5cbiAgbGV0IHN0YXRlcyA9IGF3YWl0IGFzeW5jbWFwKGFjdGlvbnMsIGFzeW5jIChhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wYXJzZVRvdWNoKGFjdGlvbiwgdHJ1ZSk7XG4gIH0sIGZhbHNlKTtcblxuICByZXR1cm4gdGhpcy5kb1BlcmZvcm1NdWx0aUFjdGlvbihlbGVtZW50SWQsIHN0YXRlcyk7XG59O1xuXG4vKipcbiAqIFJlYXNvbiBmb3IgaXNvbGF0aW5nIGRvUGVyZm9ybU11bHRpQWN0aW9uIGZyb20gcGVyZm9ybU11bHRpQWN0aW9uIGlzIGZvciByZXVzaW5nIHBlcmZvcm1NdWx0aUFjdGlvblxuICogYWNyb3NzIGFuZHJvaWQtZHJpdmVycyAobGlrZSBhcHBpdW0tdWlhdXRvbWF0b3IyLWRyaXZlcikgYW5kIHRvIGF2b2lkIGNvZGUgZHVwbGljYXRpb24uXG4gKiBPdGhlciBhbmRyb2lkLWRyaXZlcnMgKGxpa2UgYXBwaXVtLXVpYXV0b21hdG9yMi1kcml2ZXIpIG5lZWQgdG8gb3ZlcnJpZGUgZG9QZXJmb3JtTXVsdGlBY3Rpb25cbiAqIHRvIGZhY2lsaXRhdGUgcGVyZm9ybU11bHRpQWN0aW9uLlxuICovXG5jb21tYW5kcy5kb1BlcmZvcm1NdWx0aUFjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQsIHN0YXRlcykge1xuICBsZXQgb3B0cztcbiAgaWYgKGVsZW1lbnRJZCkge1xuICAgIG9wdHMgPSB7XG4gICAgICBlbGVtZW50SWQsXG4gICAgICBhY3Rpb25zOiBzdGF0ZXNcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDpwZXJmb3JtTXVsdGlQb2ludGVyR2VzdHVyZVwiLCBvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRzID0ge1xuICAgICAgYWN0aW9uczogc3RhdGVzXG4gICAgfTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcInBlcmZvcm1NdWx0aVBvaW50ZXJHZXN0dXJlXCIsIG9wdHMpO1xuICB9XG59O1xuXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzLCBoZWxwZXJzKTtcbmV4cG9ydCB7IGNvbW1hbmRzLCBoZWxwZXJzIH07XG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8uLi8uLiJ9
