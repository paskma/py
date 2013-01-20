import py

def deprecated_call(func, *args, **kwargs):
    """ assert that calling func(*args, **kwargs)
        triggers a DeprecationWarning. 
    """ 
    warningmodule = py.std.warnings
    l = []
    oldwarn_explicit = getattr(warningmodule, 'warn_explicit')
    def warn_explicit(*args, **kwargs): 
        l.append(args) 
        oldwarn_explicit(*args, **kwargs)
    oldwarn = getattr(warningmodule, 'warn')
    def warn(*args, **kwargs): 
        l.append(args) 
        oldwarn(*args, **kwargs)
        
    warningmodule.warn_explicit = warn_explicit
    warningmodule.warn = warn
    try:
        ret = func(*args, **kwargs)
    finally:
        warningmodule.warn_explicit = warn_explicit
        warningmodule.warn = warn
    if not l:
        print warningmodule
        raise AssertionError("%r did not produce DeprecationWarning" %(func,))
    return ret

