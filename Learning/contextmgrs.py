# This module will teach about context managers and their importance in the
# environment. Context mangers allow you to define an __enter__ and __exit__
# method to force something to happen even if your program crashes or is exited
# uncleanly. Let's start with something easy to demonstrate.


# First we define our method we want as a class:
class context(object):

    # We have to define an init method, I've created a variable so as we can
    # see the exit method is working with input and I've also defined a list
    # and a dict variable so as we can force an exception.
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


# Now that we've got the basics let's look at a real example. If you would like
# to use this script on your own box for reference install mysql, mysql-server,
# and mysql-devel and pip3 install mysqlclient. Then go through the
# mysql_secure_installation prompts setting the pass to mysqlpass and creating
# the testdb database and testtable table within that database.

# Importing anything we might need
import MySQLdb


# The class the we are creating doesn't sanatize inputs or validate user input
# which is something that shoul always be done in a production environment.

class mysqlcon(object):

    # The init method in this case is where we will pass all the user
    # information like database, user, host, etc.
    def __init__(self):
        self.user = 'root'
        self.host = 'localhost'
        self.passwd = 'mysqlpass'
        self.db = 'testdb'
        self.cur = None

    # The enter method is where we will build our connection object, return set
    # it in the class variable and return it, so as we can work on it.
    def __enter__(self):
        db = MySQLdb.connect(host=self.host,
                             user=self.user,
                             passwd=self.passwd,
                             db=self.db)
        self.cur = db.cursor()
        return self.cur

    # Now the important part of the __exit__ method, closing the db connection.
    # We're doing this because we need to ensure that no matter what the
    # connection to the db is closed and we don't take up extra memory on the
    # system with orphaned mysql connections.
    def __exit__(self, type, value, traceback):
        # ensure there is a db connection first.
        if self.cur:
            print("Exit method successful! Closing connection: {c}".format(c=self.cur))
            self.cur.close()
        if traceback:
            print(type, value, traceback)

# Now that we've created our mysql class let's create a function to easily
# execute sql query's. Ideally we would have the mysqlcon class return the
# entire connection object rather than just the cursor but for demonstration
# this should work just fine.


def mysqlexec(query):
    result = None
    # now that we have a mysql context manager class we can use the with
    # keyword to utilize it. Like so:
    with mysqlcon() as conn:
        conn.execute(query)
        result = conn.fetchall()
    return result
