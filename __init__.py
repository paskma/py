
# -*- coding: utf-8 -*-
"""
The py lib is a development support library featuring these tools and APIs:

- `py.test`_: cross-project testing tool with many advanced features
- `py.execnet`_: ad-hoc code distribution to SSH, Socket and local sub processes
- `py.magic.greenlet`_: micro-threads on standard CPython ("stackless-light") and PyPy
- `py.path`_: path abstractions over local and subversion files 
- `py.code`_: dynamic code compile and traceback printing support

The py lib and its tools should work well on Linux, Win32, 
OSX, Python versions 2.3-2.6.  For questions please go to
http://pylib.org/contact.html

.. _`py.test`: http://pylib.org/test.html
.. _`py.execnet`: http://pylib.org/execnet.html
.. _`py.magic.greenlet`: http://pylib.org/greenlet.html
.. _`py.path`: http://pylib.org/path.html
.. _`py.code`: http://pylib.org/code.html
 
"""
from initpkg import initpkg

version = "0.9.2"

initpkg(__name__,
    description = "py lib: agile development and test support library",
    revision = int('$LastChangedRevision: 57579 $'.split(':')[1][:-1]),
    lastchangedate = '$LastChangedDate: 2008-08-22 12:37:35 +0200 (Fri, 22 Aug 2008) $',
    version = version, 
    url = "http://pylib.org", 
    download_url = "http://codespeak.net/py/0.9.2/download.html",
    license = "MIT license",
    platforms = ['unix', 'linux', 'osx', 'cygwin', 'win32'],
    author = "holger krekel, Guido Wesdorp, Carl Friedrich Bolz, Armin Rigo, Maciej Fijalkowski & others",
    author_email = "holger at merlinux.eu, py-dev at codespeak.net",
    long_description = globals()['__doc__'],
    classifiers = [
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers", 
        "License :: OSI Approved :: MIT License",
        "Operating System :: POSIX",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: MacOS :: MacOS X",
        "Topic :: Software Development :: Testing", 
        "Topic :: Software Development :: Libraries",
        "Topic :: System :: Distributed Computing",
        "Topic :: Utilities",
        "Programming Language :: Python",
    ],


    # EXPORTED API 
    exportdefs = {
    # py lib cmdline tools 
    'cmdline.pytest'         : ('./cmdline/pytest.py', 'main',),
    'cmdline.pyrest'         : ('./cmdline/pyrest.py', 'main',),
    'cmdline.pylookup'       : ('./cmdline/pylookup.py', 'main',),
    'cmdline.pycountloc'     : ('./cmdline/pycountloc.py', 'main',),
    'cmdline.pycleanup'      : ('./cmdline/pycleanup.py', 'main',),

    # helpers for use from test functions or collectors
    'test.__doc__'           : ('./test/__init__.py', '__doc__'),
    'test.raises'            : ('./test/raises.py', 'raises'),
    'test.deprecated_call'   : ('./test/deprecate.py', 'deprecated_call'), 
    'test.skip'              : ('./test/item.py', 'skip'),
    'test.fail'              : ('./test/item.py', 'fail'),
    'test.exit'              : ('./test/session.py', 'exit'),

    # configuration/initialization related test api
    'test.config'            : ('./test/config.py', 'config_per_process'),
    'test.ensuretemp'        : ('./test/config.py', 'ensuretemp'),
    'test.cmdline.main'      : ('./test/cmdline.py', 'main'),

    # for customization of collecting/running tests
    'test.collect.Collector' : ('./test/collect.py', 'Collector'),
    'test.collect.Directory' : ('./test/collect.py', 'Directory'),
    'test.collect.Module'    : ('./test/collect.py', 'Module'),
    'test.collect.DoctestFile' : ('./test/collect.py', 'DoctestFile'),
    'test.collect.Class'     : ('./test/collect.py', 'Class'),
    'test.collect.Instance'  : ('./test/collect.py', 'Instance'),
    'test.collect.Generator' : ('./test/collect.py', 'Generator'),
    'test.collect.Item'      : ('./test/item.py', 'Item'),
    'test.collect.Function'  : ('./test/item.py', 'Function'),

    # thread related API (still in early design phase)
    '_thread.WorkerPool'      : ('./thread/pool.py', 'WorkerPool'),
    '_thread.NamedThreadPool' : ('./thread/pool.py', 'NamedThreadPool'),
    '_thread.ThreadOut'       : ('./thread/io.py', 'ThreadOut'),

    # hook into the top-level standard library
    'std'                    : ('./misc/std.py', 'std'),

    'process.__doc__'        : ('./process/__init__.py', '__doc__'),
    'process.cmdexec'        : ('./process/cmdexec.py', 'cmdexec'),

    # path implementation
    'path.__doc__'           : ('./path/__init__.py', '__doc__'),
    'path.svnwc'             : ('./path/svn/wccommand.py', 'SvnWCCommandPath'),
    'path.svnurl'            : ('./path/svn/urlcommand.py', 'SvnCommandPath'),
    'path.local'             : ('./path/local/local.py', 'LocalPath'),
    'path.SvnAuth'           : ('./path/svn/svncommon.py', 'SvnAuth'),

    # some nice slightly magic APIs
    'magic.__doc__'          : ('./magic/__init__.py', '__doc__'),
    'magic.greenlet'         : ('./magic/greenlet.py', 'greenlet'),
    'magic.invoke'           : ('./magic/invoke.py', 'invoke'),
    'magic.revoke'           : ('./magic/invoke.py', 'revoke'),
    'magic.patch'            : ('./magic/patch.py', 'patch'),
    'magic.revert'           : ('./magic/patch.py', 'revert'),
    'magic.autopath'         : ('./magic/autopath.py', 'autopath'),
    'magic.AssertionError'   : ('./magic/assertion.py', 'AssertionError'),

    # python inspection/code-generation API
    'code.__doc__'           : ('./code/__init__.py', '__doc__'),
    'code.compile'           : ('./code/source.py', 'compile_'),
    'code.Source'            : ('./code/source.py', 'Source'),
    'code.Code'              : ('./code/code.py', 'Code'),
    'code.Frame'             : ('./code/frame.py', 'Frame'),
    'code.ExceptionInfo'     : ('./code/excinfo.py', 'ExceptionInfo'),
    'code.Traceback'         : ('./code/traceback2.py', 'Traceback'),

    # backports and additions of builtins
    'builtin.__doc__'        : ('./builtin/__init__.py', '__doc__'),
    'builtin.enumerate'      : ('./builtin/enumerate.py', 'enumerate'),
    'builtin.reversed'       : ('./builtin/reversed.py',  'reversed'),
    'builtin.sorted'         : ('./builtin/sorted.py',    'sorted'),
    'builtin.BaseException'  : ('./builtin/exception.py', 'BaseException'),
    'builtin.set'            : ('./builtin/set.py',       'set'),
    'builtin.frozenset'      : ('./builtin/set.py',       'frozenset'),

    # gateways into remote contexts
    'execnet.__doc__'        : ('./execnet/__init__.py', '__doc__'),
    'execnet.SocketGateway'  : ('./execnet/register.py', 'SocketGateway'),
    'execnet.PopenGateway'   : ('./execnet/register.py', 'PopenGateway'),
    'execnet.SshGateway'     : ('./execnet/register.py', 'SshGateway'),

    # execnet scripts
    'execnet.RSync'          : ('./execnet/rsync.py', 'RSync'),

    # input-output helping 
    'io.__doc__'             : ('./io/__init__.py', '__doc__'),
    'io.dupfile'             : ('./io/dupfile.py', 'dupfile'), 
    'io.FDCapture'           : ('./io/fdcapture.py', 'FDCapture'), 
    'io.StdCapture'          : ('./io/stdcapture.py', 'StdCapture'), 
    'io.StdCaptureFD'        : ('./io/stdcapture.py', 'StdCaptureFD'), 

    # error module, defining all errno's as Classes
    'error'                  : ('./misc/error.py', 'error'),

    # small and mean xml/html generation
    'xml.__doc__'            : ('./xmlobj/__init__.py', '__doc__'),
    'xml.html'               : ('./xmlobj/html.py', 'html'),
    'xml.Tag'                : ('./xmlobj/xml.py', 'Tag'),
    'xml.raw'                : ('./xmlobj/xml.py', 'raw'),
    'xml.Namespace'          : ('./xmlobj/xml.py', 'Namespace'),
    'xml.escape'             : ('./xmlobj/misc.py', 'escape'),

    # logging API ('producers' and 'consumers' connected via keywords)
    'log.__doc__'            : ('./log/__init__.py', '__doc__'),
    'log.Producer'           : ('./log/producer.py', 'Producer'),
    'log.default'            : ('./log/producer.py', 'default'),
    'log._getstate'          : ('./log/producer.py', '_getstate'),
    'log._setstate'          : ('./log/producer.py', '_setstate'),
    'log.setconsumer'        : ('./log/consumer.py', 'setconsumer'),
    'log.Path'               : ('./log/consumer.py', 'Path'),
    'log.STDOUT'             : ('./log/consumer.py', 'STDOUT'),
    'log.STDERR'             : ('./log/consumer.py', 'STDERR'),
    'log.Syslog'             : ('./log/consumer.py', 'Syslog'),
    'log.get'                : ('./log/logger.py', 'get'), 

    # compatibility modules (taken from 2.4.4) 
    'compat.__doc__'         : ('./compat/__init__.py', '__doc__'),
    'compat.doctest'         : ('./compat/doctest.py', '*'),
    'compat.optparse'        : ('./compat/optparse.py', '*'),
    'compat.textwrap'        : ('./compat/textwrap.py', '*'),
    'compat.subprocess'      : ('./compat/subprocess.py', '*'),
})

