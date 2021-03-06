
""" tests of rest reporter backend
"""

import py
from py.__.test.rsession.testing.test_reporter import AbstractTestReporter,\
     DummyChannel
from py.__.test.rsession import repevent
from py.__.test.rsession.rest import RestReporter, NoLinkWriter
from py.__.rest.rst import *
from py.__.test.rsession.hostmanage import HostInfo
from py.__.test.rsession.outcome import Outcome

class Container(object):
    def __init__(self, **args):
        for arg, val in args.items():
            setattr(self, arg, val) 

class RestTestReporter(RestReporter):
    def __init__(self, *args, **kwargs):
        if args:
            super(RestReporter, self).__init__(*args, **kwargs)

class TestRestUnits(object):
    def setup_method(self, method):
        config = py.test.config._reparse(["some_sub"])
        config.option.verbose = False
        self.config = config
        hosts = [HostInfo('localhost')]
        method.im_func.func_globals['ch'] = DummyChannel(hosts[0])
        method.im_func.func_globals['reporter'] = r = RestReporter(config,
                                                                hosts)
        method.im_func.func_globals['stdout'] = s = py.std.StringIO.StringIO()
        r.out = s # XXX will need to become a real reporter some time perhaps?
        r.linkwriter = NoLinkWriter()

    def test_report_unknown(self):
        self.config.option.verbose = True
        reporter.report_unknown('foo')
        assert stdout.getvalue() == 'Unknown report\\: foo\n\n'
        self.config.option.verbose = False
    
    def test_report_SendItem(self):
        event = repevent.SendItem(item='foo/bar.py', channel=ch)
        reporter.report(event)
        assert stdout.getvalue() == ''
        stdout.seek(0)
        stdout.truncate()
        reporter.config.option.verbose = True
        reporter.report(event)
        assert stdout.getvalue() == ('sending item foo/bar.py to '
                                     'localhost\n\n')
    
    def test_report_HostRSyncing(self):
        event = repevent.HostRSyncing(HostInfo('localhost:/foo/bar'), "a",
                                      "b", False)
        reporter.report(event)
        assert stdout.getvalue() == ('::\n\n   localhost: RSYNC ==> '
                                     '/foo/bar\n\n')

    def test_report_HostRSyncRootReady(self):
        h = HostInfo('localhost')
        reporter.hosts_to_rsync = 1
        reporter.report(repevent.HostGatewayReady(h, ["a"]))
        event = repevent.HostRSyncRootReady(h, "a")
        reporter.report(event)
        assert stdout.getvalue() == '::\n\n   localhost: READY\n\n'

    def test_report_TestStarted(self):
        event = repevent.TestStarted([HostInfo('localhost'),
                                          HostInfo('foo.com')],
                                     "aa", ["a", "b"])
        reporter.report(event)
        assert stdout.getvalue() == """\
===========================================
Running tests on hosts\: localhost, foo.com
===========================================

"""
    
    def test_report_ItemStart(self):
        class FakeModule(py.test.collect.Module):
            def __init__(self, parent):
                self.parent = parent
                self.fspath = py.path.local('.')
            def _tryiter(self):
                return ['test_foo', 'test_bar']
            def listnames(self):
                return ['package', 'foo', 'bar.py']

        parent = Container(parent=None, fspath=py.path.local('.'))
        event = repevent.ItemStart(item=FakeModule(parent))
        reporter.report(event)
        assert stdout.getvalue() == """\
Testing module foo/bar.py (2 items)
-----------------------------------

"""

    def test_print_summary(self):
        reporter.timestart = 10
        reporter.timeend = 20
        reporter.timersync = 15
        reporter.print_summary(10, '', '')
        assert stdout.getvalue() == """\
10 tests run in 10.00s (rsync\: 5.00)
-------------------------------------

"""

    def test_ReceivedItemOutcome_PASSED(self):
        outcome = Outcome()
        item = Container(listnames=lambda: ['', 'foo.py', 'bar', '()', 'baz'])
        event = repevent.ReceivedItemOutcome(channel=ch, outcome=outcome, item=item)
        reporter.report(event)
        assert stdout.getvalue() == ('* localhost\\: **PASSED** '
                                     'foo.py/bar()/baz\n\n')

    def test_ReceivedItemOutcome_SKIPPED(self):
        outcome = Outcome(skipped="reason")
        item = Container(listnames=lambda: ['', 'foo.py', 'bar', '()', 'baz'])
        event = repevent.ReceivedItemOutcome(channel=ch, outcome=outcome, item=item)
        reporter.report(event)
        assert stdout.getvalue() == ('* localhost\\: **SKIPPED** '
                                     'foo.py/bar()/baz\n\n')

    def test_ReceivedItemOutcome_FAILED(self):
        outcome = Outcome(excinfo="xxx")
        item = Container(listnames=lambda: ['', 'foo.py', 'bar', '()', 'baz'])
        event = repevent.ReceivedItemOutcome(channel=ch, outcome=outcome, item=item)
        reporter.report(event)
        assert stdout.getvalue() == """\
* localhost\: **FAILED** `traceback0`_ foo.py/bar()/baz

"""

    def test_ReceivedItemOutcome_FAILED_stdout(self):
        excinfo = Container(
            typename='FooError',
            value='A foo has occurred',
            traceback=[
                Container(
                    path='foo/bar.py',
                    lineno=1,
                    relline=1,
                    source='foo()',
                ),
                Container(
                    path='foo/baz.py',
                    lineno=4,
                    relline=1,
                    source='raise FooError("A foo has occurred")',
                ),
            ]
        )
        outcome = Outcome(excinfo=excinfo)
        outcome.stdout = '<printed>'
        outcome.stderr = ''
        parent = Container(parent=None, fspath=py.path.local('.'))
        item = Container(listnames=lambda: ['', 'foo.py', 'bar', '()', 'baz'],
                         parent=parent, fspath=py.path.local('foo'))
        event = repevent.ReceivedItemOutcome(channel=ch, outcome=outcome,
                                           item=item)
        reporter.report(event)
        reporter.timestart = 10
        reporter.timeend = 20
        reporter.timersync = 15
        reporter.print_summary(10, '', '')

        reporter.print_summary(1, 'skipped', 'failed')
        out = stdout.getvalue()
        assert out.find('<printed>') > -1

    def test_skips(self):
        class FakeOutcome(Container, repevent.ReceivedItemOutcome):
            pass

        class FakeTryiter(Container, repevent.SkippedTryiter):
            pass
        
        reporter.skips()
        assert stdout.getvalue() == ''
        reporter.skipped_tests_outcome = [
            FakeOutcome(outcome=Container(skipped='problem X'),
                        item=Container(listnames=lambda: ['foo', 'bar.py'])),
            FakeTryiter(excinfo=Container(value='problem Y'),
                        item=Container(listnames=lambda: ['foo', 'baz.py']))]
        reporter.skips()
        assert stdout.getvalue() == """\
Reasons for skipped tests\:
+++++++++++++++++++++++++++

* foo/bar.py\: problem X

* foo/baz.py\: problem Y

"""

    def test_failures(self):
        class FakeOutcome(Container, repevent.ReceivedItemOutcome):
            pass

        parent = Container(parent=None, fspath=py.path.local('.'))
        reporter.failed_tests_outcome = [
            FakeOutcome(
                outcome=Container(
                    signal=False,
                    excinfo=Container(
                        typename='FooError',
                        value='A foo has occurred',
                        traceback=[
                            Container(
                                path='foo/bar.py',
                                lineno=1,
                                relline=1,
                                source='foo()',
                            ),
                            Container(
                                path='foo/baz.py',
                                lineno=4,
                                relline=1,
                                source='raise FooError("A foo has occurred")',
                            ),
                        ]
                    ),
                    stdout='',
                    stderr='',
                ),
                item=Container(
                    listnames=lambda: ['package', 'foo', 'bar.py',
                                       'baz', '()'],
                    parent=parent,
                    fspath=py.path.local('.'),
                ),
                channel=ch,
            ),
        ]
        reporter.config.option.tbstyle = 'no'
        reporter.failures()
        expected = """\
Exceptions\:
++++++++++++

foo/bar.py/baz() on localhost
+++++++++++++++++++++++++++++

.. _`traceback0`:


FooError
++++++++

::

  A foo has occurred

"""
        assert stdout.getvalue() == expected

        reporter.config.option.tbstyle = 'short'
        stdout.seek(0)
        stdout.truncate()
        reporter.failures()
        expected = """\
Exceptions\:
++++++++++++

foo/bar.py/baz() on localhost
+++++++++++++++++++++++++++++

.. _`traceback0`:


::

  foo/bar.py line 1
    foo()
  foo/baz.py line 4
    raise FooError("A foo has occurred")

FooError
++++++++

::

  A foo has occurred

"""
        assert stdout.getvalue() == expected

        reporter.config.option.tbstyle = 'long'
        stdout.seek(0)
        stdout.truncate()
        reporter.failures()
        expected = """\
Exceptions\:
++++++++++++

foo/bar.py/baz() on localhost
+++++++++++++++++++++++++++++

.. _`traceback0`:


+++++++++++++++++
foo/bar.py line 1
+++++++++++++++++

::

      foo()

+++++++++++++++++
foo/baz.py line 4
+++++++++++++++++

::

      raise FooError("A foo has occurred")

FooError
++++++++

::

  A foo has occurred

"""
        assert stdout.getvalue() == expected
        

class TestRestReporter(AbstractTestReporter):
    reporter = RestReporter

    def test_failed_to_load(self):
        py.test.skip("Not implemented")
    
    def test_report_received_item_outcome(self):
        py.test.skip("Relying on exact output matching")
        val = self.report_received_item_outcome()
        expected = """\
* localhost\: **FAILED** `traceback0`_\n  py/test/rsession/testing/test\_slave.py/funcpass

* localhost\: **SKIPPED** py/test/rsession/testing/test\_slave.py/funcpass

* localhost\: **FAILED** `traceback1`_\n  py/test/rsession/testing/test\_slave.py/funcpass

* localhost\: **PASSED** py/test/rsession/testing/test\_slave.py/funcpass

"""
        print val
        assert val == expected

