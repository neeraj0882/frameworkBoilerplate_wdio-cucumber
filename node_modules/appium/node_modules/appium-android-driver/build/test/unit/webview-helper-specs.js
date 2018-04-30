'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _libWebviewHelpers = require('../../lib/webview-helpers');

var _libWebviewHelpers2 = _interopRequireDefault(_libWebviewHelpers);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var sandbox = _sinon2['default'].sandbox.create();

describe('Webview Helpers', function () {
  var adb = new _appiumAdb2['default']();

  afterEach(function () {
    sandbox.restore();
  });

  describe('procFromWebview', function () {
    var webview = 'WEBVIEW_123';
    var pkg = 'io.appium.android.apis';

    it('should get package name when all fields are filled', function callee$2$0() {
      var name;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(adb, 'shell', function () {
              return 'USER           PID  PPID     VSZ    RSS WCHAN            ADDR S NAME\n' + 'root             1     0    9948   2344 SyS_epoll_wait      0 S init\n' + 'root             2     0       0      0 kthreadd            0 S [kthreadd]\n' + 'root             3     2       0      0 smpboot_thread_fn   0 S [ksoftirqd/0]\n' + 'root             5     2       0      0 worker_thread       0 S [kworker/0:0H]\n' + 'root             7     2       0      0 rcu_gp_kthread      0 S [rcu_preempt]\n' + 'u0_a88         123  1313 1513968 135756 ffffffff            0 R io.appium.android.apis\n';
            });

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].procFromWebview(adb, webview));

          case 3:
            name = context$3$0.sent;

            name.should.eql(pkg);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should get package name when some fields are empty', function callee$2$0() {
      var name;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(adb, 'shell', function () {
              return 'USER           PID  PPID     VSZ    RSS WCHAN            ADDR S NAME\n' + 'root             1     0    9948   2344 SyS_epoll_wait      0 S init\n' + 'root             2     0       0      0 kthreadd            0 S [kthreadd]\n' + 'root             3     2       0      0 smpboot_thread_fn   0 S [ksoftirqd/0]\n' + 'root             5     2       0      0 worker_thread       0 S [kworker/0:0H]\n' + 'root             7     2       0      0 rcu_gp_kthread      0 S [rcu_preempt]\n' + 'u0_a88         123  1313 1513968 135756                     0 R io.appium.android.apis\n';
            });

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].procFromWebview(adb, webview));

          case 3:
            name = context$3$0.sent;

            name.should.eql(pkg);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should get package name when some headers are empty', function callee$2$0() {
      var name;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(adb, 'shell', function () {
              return 'USER           PID  PPID     VSZ    RSS WCHAN            ADDR   NAME\n' + 'root             1     0    9948   2344 SyS_epoll_wait      0 S init\n' + 'root             2     0       0      0 kthreadd            0 S [kthreadd]\n' + 'root             3     2       0      0 smpboot_thread_fn   0 S [ksoftirqd/0]\n' + 'root             5     2       0      0 worker_thread       0 S [kworker/0:0H]\n' + 'root             7     2       0      0 rcu_gp_kthread      0 S [rcu_preempt]\n' + 'u0_a88         123  1313 1513968 135756 ffffffff            0 R io.appium.android.apis\n';
            });

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].procFromWebview(adb, webview));

          case 3:
            name = context$3$0.sent;

            name.should.eql(pkg);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
    it('should get package name when some headers and fields are empty', function callee$2$0() {
      var name;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(adb, 'shell', function () {
              return 'USER           PID  PPID     VSZ    RSS WCHAN            ADDR   NAME\n' + 'root             1     0    9948   2344 SyS_epoll_wait      0 S init\n' + 'root             2     0       0      0 kthreadd            0 S [kthreadd]\n' + 'root             3     2       0      0 smpboot_thread_fn   0 S [ksoftirqd/0]\n' + 'root             5     2       0      0 worker_thread       0 S [kworker/0:0H]\n' + 'root             7     2       0      0 rcu_gp_kthread      0 S [rcu_preempt]\n' + 'u0_a88         123  1313 1513968 135756                     0 R io.appium.android.apis\n';
            });

            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].procFromWebview(adb, webview));

          case 3:
            name = context$3$0.sent;

            name.should.eql(pkg);

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });

  describe('When the webviews are obtained', function () {
    describe('for an app that embeds Chromium', function () {
      var webViews = undefined;

      beforeEach(function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              sandbox.stub(adb, 'shell', function () {
                return 'Num       RefCount Protocol Flags    Type St Inode Path\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2818 /dev/socket/ss_conn_daemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  9231 @mcdaemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01 245445 @webview_devtools_remote_123\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2826 /dev/socket/installd\n';
              });

              context$4$0.next = 3;
              return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb, 'webview_devtools_remote_123'));

            case 3:
              webViews = context$4$0.sent;

            case 4:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('then the unix sockets are queried', function () {
        adb.shell.calledOnce.should.be['true'];
        adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
      });

      it('then the webview is returned', function () {
        webViews.length.should.equal(1);
        webViews.should.deep.equal(['WEBVIEW_123']);
      });
    });

    describe('for a Chromium webview', function () {
      var webViews = undefined;

      beforeEach(function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              sandbox.stub(adb, 'shell', function () {
                return 'Num       RefCount Protocol Flags    Type St Inode Path\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2818 /dev/socket/ss_conn_daemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  9231 @mcdaemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01 245445 @chrome_devtools_remote\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2826 /dev/socket/installd\n';
              });

              context$4$0.next = 3;
              return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb, 'chrome_devtools_remote'));

            case 3:
              webViews = context$4$0.sent;

            case 4:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('then the unix sockets are queried', function () {
        adb.shell.calledOnce.should.be['true'];
        adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
      });

      it('then the webview is returned', function () {
        webViews.length.should.equal(1);
        webViews.should.deep.equal(['CHROMIUM']);
      });
    });

    describe('and no webviews exist', function () {
      var webViews = undefined;

      beforeEach(function callee$3$0() {
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              sandbox.stub(adb, 'shell', function () {
                return 'Num       RefCount Protocol Flags    Type St Inode Path\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2818 /dev/socket/ss_conn_daemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  9231 @mcdaemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2826 /dev/socket/installd\n';
              });

              context$4$0.next = 3;
              return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb));

            case 3:
              webViews = context$4$0.sent;

            case 4:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('then the unix sockets are queried', function () {
        adb.shell.calledOnce.should.be['true'];
        adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
      });

      it('then no webviews are returned', function () {
        webViews.length.should.equal(0);
      });
    });

    describe('and crosswalk webviews exist', function () {
      var webViews = undefined;

      beforeEach(function () {
        sandbox.stub(adb, 'shell', function () {
          return 'Num       RefCount Protocol Flags    Type St Inode Path\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2818 /dev/socket/ss_conn_daemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  9231 @mcdaemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01 245445 @com.application.myapp_devtools_remote\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2826 /dev/socket/installd\n';
        });
      });

      describe('and the device socket is not specified', function () {
        beforeEach(function callee$4$0() {
          return _regeneratorRuntime.async(function callee$4$0$(context$5$0) {
            while (1) switch (context$5$0.prev = context$5$0.next) {
              case 0:
                context$5$0.next = 2;
                return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb));

              case 2:
                webViews = context$5$0.sent;

              case 3:
              case 'end':
                return context$5$0.stop();
            }
          }, null, this);
        });

        it('then the unix sockets are queried', function () {
          adb.shell.calledOnce.should.be['true'];
          adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
        });

        it('then the webview is returned', function () {
          webViews.length.should.equal(1);
          webViews.should.deep.equal(['WEBVIEW_com.application.myapp']);
        });
      });

      describe('and the device socket is specified', function () {
        beforeEach(function callee$4$0() {
          return _regeneratorRuntime.async(function callee$4$0$(context$5$0) {
            while (1) switch (context$5$0.prev = context$5$0.next) {
              case 0:
                context$5$0.next = 2;
                return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb, 'com.application.myapp_devtools_remote'));

              case 2:
                webViews = context$5$0.sent;

              case 3:
              case 'end':
                return context$5$0.stop();
            }
          }, null, this);
        });

        it('then the unix sockets are queried', function () {
          adb.shell.calledOnce.should.be['true'];
          adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
        });

        it('then the webview is returned', function () {
          webViews.length.should.equal(1);
          webViews.should.deep.equal(['WEBVIEW_com.application.myapp']);
        });
      });

      describe('and the device socket is specified but is not found', function () {
        beforeEach(function callee$4$0() {
          return _regeneratorRuntime.async(function callee$4$0$(context$5$0) {
            while (1) switch (context$5$0.prev = context$5$0.next) {
              case 0:
                context$5$0.next = 2;
                return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb, 'com.application.myotherapp_devtools_remote'));

              case 2:
                webViews = context$5$0.sent;

              case 3:
              case 'end':
                return context$5$0.stop();
            }
          }, null, this);
        });

        it('then the unix sockets are queried', function () {
          adb.shell.calledOnce.should.be['true'];
          adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
        });

        it('then no webviews are returned', function () {
          webViews.length.should.equal(0);
        });
      });
    });

    describe('and webviews exist', function () {
      var webViews = undefined;

      beforeEach(function callee$3$0() {
        var shellStub;
        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              shellStub = sandbox.stub(adb, 'shell');

              shellStub.onCall(0).returns('Num               RefCount Protocol Flags    Type St Inode Path\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2818 /dev/socket/ss_conn_daemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  9231 @mcdaemon\n' + '0000000000000000: 00000002 00000000 00010000 0001 01 245445 @webview_devtools_remote_1234\n' + '0000000000000000: 00000002 00000000 00010000 0001 01  2826 /dev/socket/installd\n');
              shellStub.onCall(1).returns('USER    PID  PPID VSIZE   RSS   WCHAN              PC   NAME\n' + 'root      1     0  5792   988   SyS_epoll_ 0000000000 S /init\n' + 'root      2     0     0     0   kthreadd   0000000000 S kthreadd\n' + 'root   1234     2     0     0   SyS_epoll_ 0000000000 S com.application.myapp\n');

              context$4$0.next = 5;
              return _regeneratorRuntime.awrap(_libWebviewHelpers2['default'].getWebviews(adb));

            case 5:
              webViews = context$4$0.sent;

            case 6:
            case 'end':
              return context$4$0.stop();
          }
        }, null, this);
      });

      it('then the unix sockets and process list are queried', function () {
        adb.shell.calledTwice.should.be['true'];
        adb.shell.getCall(0).args[0].should.deep.equal(['cat', '/proc/net/unix']);
        adb.shell.getCall(1).args[0].should.equal('ps');
      });

      it('then the webview is returned', function () {
        webViews.length.should.equal(1);
        webViews.should.deep.equal(['WEBVIEW_com.application.myapp']);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC93ZWJ2aWV3LWhlbHBlci1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7cUJBQWtCLE9BQU87Ozs7aUNBQ0wsMkJBQTJCOzs7O3lCQUMvQixZQUFZOzs7O0FBRTVCLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFckMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQVk7QUFDdEMsTUFBSSxHQUFHLEdBQUcsNEJBQVMsQ0FBQzs7QUFFcEIsV0FBUyxDQUFDLFlBQVk7QUFDcEIsV0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ25CLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBWTtBQUN0QyxRQUFNLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDOUIsUUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUM7O0FBRXJDLE1BQUUsQ0FBQyxvREFBb0QsRUFBRTtVQVduRCxJQUFJOzs7O0FBVlIsbUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZO0FBQ3JDLHFCQUFPLHdFQUF3RSxHQUN4RSx3RUFBd0UsR0FDeEUsOEVBQThFLEdBQzlFLGlGQUFpRixHQUNqRixrRkFBa0YsR0FDbEYsaUZBQWlGLEdBQ2pGLDBGQUEwRixDQUFDO2FBQ25HLENBQUMsQ0FBQzs7OzZDQUVjLCtCQUFRLGVBQWUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOzs7QUFBbEQsZ0JBQUk7O0FBQ1IsZ0JBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0tBQ3RCLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxvREFBb0QsRUFBRTtVQVduRCxJQUFJOzs7O0FBVlIsbUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZO0FBQ3JDLHFCQUFPLHdFQUF3RSxHQUN4RSx3RUFBd0UsR0FDeEUsOEVBQThF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QUFDOzs7K0NBRTlGLCtCQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUM7OztBQUF6QyxzQkFBUTs7Ozs7OztPQUNULENBQUMsQ0FBQzs7QUFFSCxRQUFFLENBQUMsb0RBQW9ELEVBQUUsWUFBWTtBQUNuRSxXQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7QUFDckMsV0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUMxRSxXQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNqRCxDQUFDLENBQUM7O0FBRUgsUUFBRSxDQUFDLDhCQUE4QixFQUFFLFlBQVk7QUFDN0MsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO09BQy9ELENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvd2Vidmlldy1oZWxwZXItc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vbGliL3dlYnZpZXctaGVscGVycyc7XG5pbXBvcnQgQURCIGZyb20gJ2FwcGl1bS1hZGInO1xuXG5sZXQgc2FuZGJveCA9IHNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG5cbmRlc2NyaWJlKCdXZWJ2aWV3IEhlbHBlcnMnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhZGIgPSBuZXcgQURCKCk7XG5cbiAgYWZ0ZXJFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Byb2NGcm9tV2VidmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB3ZWJ2aWV3ID0gJ1dFQlZJRVdfMTIzJztcbiAgICBjb25zdCBwa2cgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcyc7XG5cbiAgICBpdCgnc2hvdWxkIGdldCBwYWNrYWdlIG5hbWUgd2hlbiBhbGwgZmllbGRzIGFyZSBmaWxsZWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoYWRiLCAnc2hlbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnVVNFUiAgICAgICAgICAgUElEICBQUElEICAgICBWU1ogICAgUlNTIFdDSEFOICAgICAgICAgICAgQUREUiBTIE5BTUVcXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDEgICAgIDAgICAgOTk0OCAgIDIzNDQgU3lTX2Vwb2xsX3dhaXQgICAgICAwIFMgaW5pdFxcbicgK1xuICAgICAgICAgICAgICAgJ3Jvb3QgICAgICAgICAgICAgMiAgICAgMCAgICAgICAwICAgICAgMCBrdGhyZWFkZCAgICAgICAgICAgIDAgUyBba3RocmVhZGRdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICAzICAgICAyICAgICAgIDAgICAgICAwIHNtcGJvb3RfdGhyZWFkX2ZuICAgMCBTIFtrc29mdGlycWQvMF1cXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDUgICAgIDIgICAgICAgMCAgICAgIDAgd29ya2VyX3RocmVhZCAgICAgICAwIFMgW2t3b3JrZXIvMDowSF1cXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDcgICAgIDIgICAgICAgMCAgICAgIDAgcmN1X2dwX2t0aHJlYWQgICAgICAwIFMgW3JjdV9wcmVlbXB0XVxcbicgK1xuICAgICAgICAgICAgICAgJ3UwX2E4OCAgICAgICAgIDEyMyAgMTMxMyAxNTEzOTY4IDEzNTc1NiBmZmZmZmZmZiAgICAgICAgICAgIDAgUiBpby5hcHBpdW0uYW5kcm9pZC5hcGlzXFxuJztcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmFtZSA9IGF3YWl0IGhlbHBlcnMucHJvY0Zyb21XZWJ2aWV3KGFkYiwgd2Vidmlldyk7XG4gICAgICBuYW1lLnNob3VsZC5lcWwocGtnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdldCBwYWNrYWdlIG5hbWUgd2hlbiBzb21lIGZpZWxkcyBhcmUgZW1wdHknLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBzYW5kYm94LnN0dWIoYWRiLCAnc2hlbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnVVNFUiAgICAgICAgICAgUElEICBQUElEICAgICBWU1ogICAgUlNTIFdDSEFOICAgICAgICAgICAgQUREUiBTIE5BTUVcXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDEgICAgIDAgICAgOTk0OCAgIDIzNDQgU3lTX2Vwb2xsX3dhaXQgICAgICAwIFMgaW5pdFxcbicgK1xuICAgICAgICAgICAgICAgJ3Jvb3QgICAgICAgICAgICAgMiAgICAgMCAgICAgICAwICAgICAgMCBrdGhyZWFkZCAgICAgICAgICAgIDAgUyBba3RocmVhZGRdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICAzICAgICAyICAgICAgIDAgICAgICAwIHNtcGJvb3RfdGhyZWFkX2ZuICAgMCBTIFtrc29mdGlycWQvMF1cXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDUgICAgIDIgICAgICAgMCAgICAgIDAgd29ya2VyX3RocmVhZCAgICAgICAwIFMgW2t3b3JrZXIvMDowSF1cXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDcgICAgIDIgICAgICAgMCAgICAgIDAgcmN1X2dwX2t0aHJlYWQgICAgICAwIFMgW3JjdV9wcmVlbXB0XVxcbicgK1xuICAgICAgICAgICAgICAgJ3UwX2E4OCAgICAgICAgIDEyMyAgMTMxMyAxNTEzOTY4IDEzNTc1NiAgICAgICAgICAgICAgICAgICAgIDAgUiBpby5hcHBpdW0uYW5kcm9pZC5hcGlzXFxuJztcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbmFtZSA9IGF3YWl0IGhlbHBlcnMucHJvY0Zyb21XZWJ2aWV3KGFkYiwgd2Vidmlldyk7XG4gICAgICBuYW1lLnNob3VsZC5lcWwocGtnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdldCBwYWNrYWdlIG5hbWUgd2hlbiBzb21lIGhlYWRlcnMgYXJlIGVtcHR5JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGFkYiwgJ3NoZWxsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1VTRVIgICAgICAgICAgIFBJRCAgUFBJRCAgICAgVlNaICAgIFJTUyBXQ0hBTiAgICAgICAgICAgIEFERFIgICBOQU1FXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICAxICAgICAwICAgIDk5NDggICAyMzQ0IFN5U19lcG9sbF93YWl0ICAgICAgMCBTIGluaXRcXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDIgICAgIDAgICAgICAgMCAgICAgIDAga3RocmVhZGQgICAgICAgICAgICAwIFMgW2t0aHJlYWRkXVxcbicgK1xuICAgICAgICAgICAgICAgJ3Jvb3QgICAgICAgICAgICAgMyAgICAgMiAgICAgICAwICAgICAgMCBzbXBib290X3RocmVhZF9mbiAgIDAgUyBba3NvZnRpcnFkLzBdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICA1ICAgICAyICAgICAgIDAgICAgICAwIHdvcmtlcl90aHJlYWQgICAgICAgMCBTIFtrd29ya2VyLzA6MEhdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICA3ICAgICAyICAgICAgIDAgICAgICAwIHJjdV9ncF9rdGhyZWFkICAgICAgMCBTIFtyY3VfcHJlZW1wdF1cXG4nICtcbiAgICAgICAgICAgICAgICd1MF9hODggICAgICAgICAxMjMgIDEzMTMgMTUxMzk2OCAxMzU3NTYgZmZmZmZmZmYgICAgICAgICAgICAwIFIgaW8uYXBwaXVtLmFuZHJvaWQuYXBpc1xcbic7XG4gICAgICB9KTtcblxuICAgICAgbGV0IG5hbWUgPSBhd2FpdCBoZWxwZXJzLnByb2NGcm9tV2VidmlldyhhZGIsIHdlYnZpZXcpO1xuICAgICAgbmFtZS5zaG91bGQuZXFsKHBrZyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBnZXQgcGFja2FnZSBuYW1lIHdoZW4gc29tZSBoZWFkZXJzIGFuZCBmaWVsZHMgYXJlIGVtcHR5JywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgc2FuZGJveC5zdHViKGFkYiwgJ3NoZWxsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1VTRVIgICAgICAgICAgIFBJRCAgUFBJRCAgICAgVlNaICAgIFJTUyBXQ0hBTiAgICAgICAgICAgIEFERFIgICBOQU1FXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICAxICAgICAwICAgIDk5NDggICAyMzQ0IFN5U19lcG9sbF93YWl0ICAgICAgMCBTIGluaXRcXG4nICtcbiAgICAgICAgICAgICAgICdyb290ICAgICAgICAgICAgIDIgICAgIDAgICAgICAgMCAgICAgIDAga3RocmVhZGQgICAgICAgICAgICAwIFMgW2t0aHJlYWRkXVxcbicgK1xuICAgICAgICAgICAgICAgJ3Jvb3QgICAgICAgICAgICAgMyAgICAgMiAgICAgICAwICAgICAgMCBzbXBib290X3RocmVhZF9mbiAgIDAgUyBba3NvZnRpcnFkLzBdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICA1ICAgICAyICAgICAgIDAgICAgICAwIHdvcmtlcl90aHJlYWQgICAgICAgMCBTIFtrd29ya2VyLzA6MEhdXFxuJyArXG4gICAgICAgICAgICAgICAncm9vdCAgICAgICAgICAgICA3ICAgICAyICAgICAgIDAgICAgICAwIHJjdV9ncF9rdGhyZWFkICAgICAgMCBTIFtyY3VfcHJlZW1wdF1cXG4nICtcbiAgICAgICAgICAgICAgICd1MF9hODggICAgICAgICAxMjMgIDEzMTMgMTUxMzk2OCAxMzU3NTYgICAgICAgICAgICAgICAgICAgICAwIFIgaW8uYXBwaXVtLmFuZHJvaWQuYXBpc1xcbic7XG4gICAgICB9KTtcblxuICAgICAgbGV0IG5hbWUgPSBhd2FpdCBoZWxwZXJzLnByb2NGcm9tV2VidmlldyhhZGIsIHdlYnZpZXcpO1xuICAgICAgbmFtZS5zaG91bGQuZXFsKHBrZyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdXaGVuIHRoZSB3ZWJ2aWV3cyBhcmUgb2J0YWluZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVzY3JpYmUoJ2ZvciBhbiBhcHAgdGhhdCBlbWJlZHMgQ2hyb21pdW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgd2ViVmlld3M7XG5cbiAgICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBzYW5kYm94LnN0dWIoYWRiLCAnc2hlbGwnLCAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICdOdW0gICAgICAgUmVmQ291bnQgUHJvdG9jb2wgRmxhZ3MgICAgVHlwZSBTdCBJbm9kZSBQYXRoXFxuJyArXG4gICAgICAgICAgICAgICAgJzAwMDAwMDAwMDAwMDAwMDA6IDAwMDAwMDAyIDAwMDAwMDAwIDAwMDEwMDAwIDAwMDEgMDEgIDI4MTggL2Rldi9zb2NrZXQvc3NfY29ubl9kYWVtb25cXG4nICtcbiAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAgOTIzMSBAbWNkYWVtb25cXG4nICtcbiAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAyNDU0NDUgQHdlYnZpZXdfZGV2dG9vbHNfcmVtb3RlXzEyM1xcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICAyODI2IC9kZXYvc29ja2V0L2luc3RhbGxkXFxuJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2ViVmlld3MgPSBhd2FpdCBoZWxwZXJzLmdldFdlYnZpZXdzKGFkYiwgJ3dlYnZpZXdfZGV2dG9vbHNfcmVtb3RlXzEyMycpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCd0aGVuIHRoZSB1bml4IHNvY2tldHMgYXJlIHF1ZXJpZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkYi5zaGVsbC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgICAgICBhZGIuc2hlbGwuZ2V0Q2FsbCgwKS5hcmdzWzBdLnNob3VsZC5kZWVwLmVxdWFsKFsnY2F0JywgJy9wcm9jL25ldC91bml4J10pO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCd0aGVuIHRoZSB3ZWJ2aWV3IGlzIHJldHVybmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3ZWJWaWV3cy5sZW5ndGguc2hvdWxkLmVxdWFsKDEpO1xuICAgICAgICB3ZWJWaWV3cy5zaG91bGQuZGVlcC5lcXVhbChbJ1dFQlZJRVdfMTIzJ10pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZm9yIGEgQ2hyb21pdW0gd2VidmlldycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3ZWJWaWV3cztcblxuICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhbmRib3guc3R1YihhZGIsICdzaGVsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gJ051bSAgICAgICBSZWZDb3VudCBQcm90b2NvbCBGbGFncyAgICBUeXBlIFN0IElub2RlIFBhdGhcXG4nICtcbiAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAgMjgxOCAvZGV2L3NvY2tldC9zc19jb25uX2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICA5MjMxIEBtY2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxIDI0NTQ0NSBAY2hyb21lX2RldnRvb2xzX3JlbW90ZVxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICAyODI2IC9kZXYvc29ja2V0L2luc3RhbGxkXFxuJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2ViVmlld3MgPSBhd2FpdCBoZWxwZXJzLmdldFdlYnZpZXdzKGFkYiwgJ2Nocm9tZV9kZXZ0b29sc19yZW1vdGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgndGhlbiB0aGUgdW5peCBzb2NrZXRzIGFyZSBxdWVyaWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGIuc2hlbGwuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgYWRiLnNoZWxsLmdldENhbGwoMCkuYXJnc1swXS5zaG91bGQuZGVlcC5lcXVhbChbJ2NhdCcsICcvcHJvYy9uZXQvdW5peCddKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgndGhlbiB0aGUgd2VidmlldyBpcyByZXR1cm5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2ViVmlld3MubGVuZ3RoLnNob3VsZC5lcXVhbCgxKTtcbiAgICAgICAgd2ViVmlld3Muc2hvdWxkLmRlZXAuZXF1YWwoWydDSFJPTUlVTSddKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2FuZCBubyB3ZWJ2aWV3cyBleGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3ZWJWaWV3cztcblxuICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhbmRib3guc3R1YihhZGIsICdzaGVsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gJ051bSAgICAgICBSZWZDb3VudCBQcm90b2NvbCBGbGFncyAgICBUeXBlIFN0IElub2RlIFBhdGhcXG4nICtcbiAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAgMjgxOCAvZGV2L3NvY2tldC9zc19jb25uX2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICA5MjMxIEBtY2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICAyODI2IC9kZXYvc29ja2V0L2luc3RhbGxkXFxuJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2ViVmlld3MgPSBhd2FpdCBoZWxwZXJzLmdldFdlYnZpZXdzKGFkYik7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3RoZW4gdGhlIHVuaXggc29ja2V0cyBhcmUgcXVlcmllZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRiLnNoZWxsLmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgICAgIGFkYi5zaGVsbC5nZXRDYWxsKDApLmFyZ3NbMF0uc2hvdWxkLmRlZXAuZXF1YWwoWydjYXQnLCAnL3Byb2MvbmV0L3VuaXgnXSk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3RoZW4gbm8gd2Vidmlld3MgYXJlIHJldHVybmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3ZWJWaWV3cy5sZW5ndGguc2hvdWxkLmVxdWFsKDApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnYW5kIGNyb3Nzd2FsayB3ZWJ2aWV3cyBleGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3ZWJWaWV3cztcblxuICAgICAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhbmRib3guc3R1YihhZGIsICdzaGVsbCcsICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gJ051bSAgICAgICBSZWZDb3VudCBQcm90b2NvbCBGbGFncyAgICBUeXBlIFN0IElub2RlIFBhdGhcXG4nICtcbiAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAgMjgxOCAvZGV2L3NvY2tldC9zc19jb25uX2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICA5MjMxIEBtY2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxIDI0NTQ0NSBAY29tLmFwcGxpY2F0aW9uLm15YXBwX2RldnRvb2xzX3JlbW90ZVxcbicgK1xuICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICAyODI2IC9kZXYvc29ja2V0L2luc3RhbGxkXFxuJztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgZGVzY3JpYmUoJ2FuZCB0aGUgZGV2aWNlIHNvY2tldCBpcyBub3Qgc3BlY2lmaWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3ZWJWaWV3cyA9IGF3YWl0IGhlbHBlcnMuZ2V0V2Vidmlld3MoYWRiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3RoZW4gdGhlIHVuaXggc29ja2V0cyBhcmUgcXVlcmllZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhZGIuc2hlbGwuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgICBhZGIuc2hlbGwuZ2V0Q2FsbCgwKS5hcmdzWzBdLnNob3VsZC5kZWVwLmVxdWFsKFsnY2F0JywgJy9wcm9jL25ldC91bml4J10pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgndGhlbiB0aGUgd2VidmlldyBpcyByZXR1cm5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3ZWJWaWV3cy5sZW5ndGguc2hvdWxkLmVxdWFsKDEpO1xuICAgICAgICAgIHdlYlZpZXdzLnNob3VsZC5kZWVwLmVxdWFsKFsnV0VCVklFV19jb20uYXBwbGljYXRpb24ubXlhcHAnXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGRlc2NyaWJlKCdhbmQgdGhlIGRldmljZSBzb2NrZXQgaXMgc3BlY2lmaWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3ZWJWaWV3cyA9IGF3YWl0IGhlbHBlcnMuZ2V0V2Vidmlld3MoYWRiLCAnY29tLmFwcGxpY2F0aW9uLm15YXBwX2RldnRvb2xzX3JlbW90ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgndGhlbiB0aGUgdW5peCBzb2NrZXRzIGFyZSBxdWVyaWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFkYi5zaGVsbC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgICAgICAgIGFkYi5zaGVsbC5nZXRDYWxsKDApLmFyZ3NbMF0uc2hvdWxkLmRlZXAuZXF1YWwoWydjYXQnLCAnL3Byb2MvbmV0L3VuaXgnXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCd0aGVuIHRoZSB3ZWJ2aWV3IGlzIHJldHVybmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdlYlZpZXdzLmxlbmd0aC5zaG91bGQuZXF1YWwoMSk7XG4gICAgICAgICAgd2ViVmlld3Muc2hvdWxkLmRlZXAuZXF1YWwoWydXRUJWSUVXX2NvbS5hcHBsaWNhdGlvbi5teWFwcCddKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgZGVzY3JpYmUoJ2FuZCB0aGUgZGV2aWNlIHNvY2tldCBpcyBzcGVjaWZpZWQgYnV0IGlzIG5vdCBmb3VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2ViVmlld3MgPSBhd2FpdCBoZWxwZXJzLmdldFdlYnZpZXdzKGFkYiwgJ2NvbS5hcHBsaWNhdGlvbi5teW90aGVyYXBwX2RldnRvb2xzX3JlbW90ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgndGhlbiB0aGUgdW5peCBzb2NrZXRzIGFyZSBxdWVyaWVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFkYi5zaGVsbC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgICAgICAgIGFkYi5zaGVsbC5nZXRDYWxsKDApLmFyZ3NbMF0uc2hvdWxkLmRlZXAuZXF1YWwoWydjYXQnLCAnL3Byb2MvbmV0L3VuaXgnXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCd0aGVuIG5vIHdlYnZpZXdzIGFyZSByZXR1cm5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3ZWJWaWV3cy5sZW5ndGguc2hvdWxkLmVxdWFsKDApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2FuZCB3ZWJ2aWV3cyBleGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3ZWJWaWV3cztcblxuICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzaGVsbFN0dWIgPSBzYW5kYm94LnN0dWIoYWRiLCAnc2hlbGwnKTtcblxuICAgICAgICBzaGVsbFN0dWIub25DYWxsKDApLnJldHVybnMoJ051bSAgICAgICAgICAgICAgIFJlZkNvdW50IFByb3RvY29sIEZsYWdzICAgIFR5cGUgU3QgSW5vZGUgUGF0aFxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzAwMDAwMDAwMDAwMDAwMDA6IDAwMDAwMDAyIDAwMDAwMDAwIDAwMDEwMDAwIDAwMDEgMDEgIDI4MTggL2Rldi9zb2NrZXQvc3NfY29ubl9kYWVtb25cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcwMDAwMDAwMDAwMDAwMDAwOiAwMDAwMDAwMiAwMDAwMDAwMCAwMDAxMDAwMCAwMDAxIDAxICA5MjMxIEBtY2RhZW1vblxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzAwMDAwMDAwMDAwMDAwMDA6IDAwMDAwMDAyIDAwMDAwMDAwIDAwMDEwMDAwIDAwMDEgMDEgMjQ1NDQ1IEB3ZWJ2aWV3X2RldnRvb2xzX3JlbW90ZV8xMjM0XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMDAwMDAwMDAwMDAwMDAwMDogMDAwMDAwMDIgMDAwMDAwMDAgMDAwMTAwMDAgMDAwMSAwMSAgMjgyNiAvZGV2L3NvY2tldC9pbnN0YWxsZFxcbicpO1xuICAgICAgICBzaGVsbFN0dWIub25DYWxsKDEpLnJldHVybnMoJ1VTRVIgICAgUElEICBQUElEIFZTSVpFICAgUlNTICAgV0NIQU4gICAgICAgICAgICAgIFBDICAgTkFNRVxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jvb3QgICAgICAxICAgICAwICA1NzkyICAgOTg4ICAgU3lTX2Vwb2xsXyAwMDAwMDAwMDAwIFMgL2luaXRcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyb290ICAgICAgMiAgICAgMCAgICAgMCAgICAgMCAgIGt0aHJlYWRkICAgMDAwMDAwMDAwMCBTIGt0aHJlYWRkXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncm9vdCAgIDEyMzQgICAgIDIgICAgIDAgICAgIDAgICBTeVNfZXBvbGxfIDAwMDAwMDAwMDAgUyBjb20uYXBwbGljYXRpb24ubXlhcHBcXG4nKTtcblxuICAgICAgICB3ZWJWaWV3cyA9IGF3YWl0IGhlbHBlcnMuZ2V0V2Vidmlld3MoYWRiKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdCgndGhlbiB0aGUgdW5peCBzb2NrZXRzIGFuZCBwcm9jZXNzIGxpc3QgYXJlIHF1ZXJpZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkYi5zaGVsbC5jYWxsZWRUd2ljZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgICAgYWRiLnNoZWxsLmdldENhbGwoMCkuYXJnc1swXS5zaG91bGQuZGVlcC5lcXVhbChbJ2NhdCcsICcvcHJvYy9uZXQvdW5peCddKTtcbiAgICAgICAgYWRiLnNoZWxsLmdldENhbGwoMSkuYXJnc1swXS5zaG91bGQuZXF1YWwoJ3BzJyk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3RoZW4gdGhlIHdlYnZpZXcgaXMgcmV0dXJuZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdlYlZpZXdzLmxlbmd0aC5zaG91bGQuZXF1YWwoMSk7XG4gICAgICAgIHdlYlZpZXdzLnNob3VsZC5kZWVwLmVxdWFsKFsnV0VCVklFV19jb20uYXBwbGljYXRpb24ubXlhcHAnXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4vLi4ifQ==
