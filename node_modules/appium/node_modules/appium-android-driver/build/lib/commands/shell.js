'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumSupport = require('appium-support');

var commands = {};

commands.mobileShell = function callee$0$0() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var args;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.relaxedSecurityEnabled) {
          _logger2['default'].errorAndThrow('Appium server must have relaxed security flag set in order to run any shell commands');
        }

        if (!_lodash2['default'].isString(opts.command)) {
          _logger2['default'].errorAndThrow('The \'command\' argument is mandatory\'');
        }
        args = opts.args;

        if (_appiumSupport.util.hasValue(args)) {
          if (!_lodash2['default'].isArray(args)) {
            args = [args];
          }
        } else {
          args = [];
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.adb.shell([opts.command].concat(_toConsumableArray(args))));

      case 6:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

exports.commands = commands;
exports['default'] = commands;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9zaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7c0JBQWdCLFdBQVc7Ozs7c0JBQ2IsUUFBUTs7Ozs2QkFDRCxnQkFBZ0I7O0FBRXJDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsUUFBUSxDQUFDLFdBQVcsR0FBRztNQUFnQixJQUFJLHlEQUFHLEVBQUU7TUFRMUMsSUFBSTs7OztBQVBSLFlBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7QUFDaEMsOEJBQUksYUFBYSx3RkFBd0YsQ0FBQztTQUMzRzs7QUFFRCxZQUFJLENBQUMsb0JBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3Qiw4QkFBSSxhQUFhLDJDQUF3QyxDQUFDO1NBQzNEO0FBQ0csWUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztBQUNwQixZQUFJLG9CQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN2QixjQUFJLENBQUMsb0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BCLGdCQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNmO1NBQ0YsTUFBTTtBQUNMLGNBQUksR0FBRyxFQUFFLENBQUM7U0FDWDs7O3lDQUVZLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLDRCQUFLLElBQUksR0FBRTs7Ozs7Ozs7OztDQUNyRCxDQUFDOztRQUVPLFFBQVEsR0FBUixRQUFRO3FCQUNGLFFBQVEiLCJmaWxlIjoibGliL2NvbW1hbmRzL3NoZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZyBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICdhcHBpdW0tc3VwcG9ydCc7XG5cbmxldCBjb21tYW5kcyA9IHt9O1xuXG5jb21tYW5kcy5tb2JpbGVTaGVsbCA9IGFzeW5jIGZ1bmN0aW9uIChvcHRzID0ge30pIHtcbiAgaWYgKCF0aGlzLnJlbGF4ZWRTZWN1cml0eUVuYWJsZWQpIHtcbiAgICBsb2cuZXJyb3JBbmRUaHJvdyhgQXBwaXVtIHNlcnZlciBtdXN0IGhhdmUgcmVsYXhlZCBzZWN1cml0eSBmbGFnIHNldCBpbiBvcmRlciB0byBydW4gYW55IHNoZWxsIGNvbW1hbmRzYCk7XG4gIH1cblxuICBpZiAoIV8uaXNTdHJpbmcob3B0cy5jb21tYW5kKSkge1xuICAgIGxvZy5lcnJvckFuZFRocm93KGBUaGUgJ2NvbW1hbmQnIGFyZ3VtZW50IGlzIG1hbmRhdG9yeSdgKTtcbiAgfVxuICBsZXQgYXJncyA9IG9wdHMuYXJncztcbiAgaWYgKHV0aWwuaGFzVmFsdWUoYXJncykpIHtcbiAgICBpZiAoIV8uaXNBcnJheShhcmdzKSkge1xuICAgICAgYXJncyA9IFthcmdzXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXJncyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IHRoaXMuYWRiLnNoZWxsKFtvcHRzLmNvbW1hbmQsIC4uLmFyZ3NdKTtcbn07XG5cbmV4cG9ydCB7IGNvbW1hbmRzIH07XG5leHBvcnQgZGVmYXVsdCBjb21tYW5kcztcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4vLi4ifQ==
