'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _general = require('./general');

var _general2 = _interopRequireDefault(_general);

var _touch = require('./touch');

var _touch2 = _interopRequireDefault(_touch);

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var _viewport = require('./viewport');

var _viewport2 = _interopRequireDefault(_viewport);

var _screenshot = require('./screenshot');

var _screenshot2 = _interopRequireDefault(_screenshot);

var commands = {};
_Object$assign(commands, _find2['default'], _general2['default'], _touch2['default'], _actions2['default'], _element2['default'], _network2['default'], _viewport2['default'], _screenshot2['default']);

// add other command types here
exports['default'] = commands;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFxQixRQUFROzs7O3VCQUNMLFdBQVc7Ozs7cUJBQ2IsU0FBUzs7Ozt1QkFDUCxXQUFXOzs7O3VCQUNYLFdBQVc7Ozs7dUJBQ1gsV0FBVzs7Ozt3QkFDVixZQUFZOzs7OzBCQUNWLGNBQWM7Ozs7QUFFekMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGVBQ0UsUUFBUSxnTEFVVCxDQUFDOzs7cUJBRWEsUUFBUSIsImZpbGUiOiJsaWIvY29tbWFuZHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZENtZHMgZnJvbSAnLi9maW5kJztcbmltcG9ydCBnZW5lcmFsQ21kcyBmcm9tICcuL2dlbmVyYWwnO1xuaW1wb3J0IHRvdWNoQ21kcyBmcm9tICcuL3RvdWNoJztcbmltcG9ydCBlbGVtZW50Q21kcyBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IGFjdGlvbnNDbWRzIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgbmV0d29ya0NtZHMgZnJvbSAnLi9uZXR3b3JrJztcbmltcG9ydCB2aWV3cG9ydENtZHMgZnJvbSAnLi92aWV3cG9ydCc7XG5pbXBvcnQgc2NyZWVuc2hvdENtZHMgZnJvbSAnLi9zY3JlZW5zaG90JztcblxubGV0IGNvbW1hbmRzID0ge307XG5PYmplY3QuYXNzaWduKFxuICBjb21tYW5kcyxcbiAgZmluZENtZHMsXG4gIGdlbmVyYWxDbWRzLFxuICB0b3VjaENtZHMsXG4gIGFjdGlvbnNDbWRzLFxuICBlbGVtZW50Q21kcyxcbiAgbmV0d29ya0NtZHMsXG4gIHZpZXdwb3J0Q21kcyxcbiAgc2NyZWVuc2hvdENtZHMsXG4gIC8vIGFkZCBvdGhlciBjb21tYW5kIHR5cGVzIGhlcmVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzO1xuXG4iXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uIn0=
