# This module will teach about context managers and their importance in the
# environment. Context mangers allow you to define an __enter__ and __exit__
# method to force something to happen even if your program crashes or is exited
# uncleanly. Let's start with something easy to demonstrate.


# First we define our method we want as a class:
class context(object):

    # We have to define an init method, creating a variable for use later
    def __init__(self):
        self.var = None
        self.edict = {}
        self.elist = []

    # This is where we would do any kind of object construction, I'll
    # demonstrate this in another example further down. For now we will just
    # have it return it's own class
    def __enter__(self):
        return self

    # Here is the important part of the context manager and why we use it in
    # the first place. Any actions or methods called here will execute
    # regardless of any error we throw at it. Minus things like power loss.
    def __exit__(self, type, value, traceback):
        print("This will trigger on any event! Var is {v}".format(v=self.var))

    # Just defining a method here so our class actually does something, this
    # isn't required.
    def hello(self):
        print("Hello!")

    # Here's a purposeful exception to demonstrate unclean exit methods.
    def exceptme(self):
        print(self.edict + self.elist)
