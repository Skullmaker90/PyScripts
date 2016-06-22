# Decorators are really cool because they have access to the inner workings of
# the function that is passed to it. We will demonstrate a couple examples
# here.

# Can be used for curency:


# US Dollar
def usd(func):
    def wrap(n):
        return '${n:,}'.format(n=n)
    return wrap


# Euro
def eur(func):
    def wrap(n):
        return '€{n:,}'.format(n=n)
    return wrap


# Yen
def jpy(func):
    def wrap(n):
        return '¥{n:,}'.format(n=n)
    return wrap

# Now we define our number function.


@usd
def numusd(n):
    return n


@eur
def numeur(n):
    return n


@jpy
def numjpy(n):
    return n


# Although programming is supposed to be all about efficenct and writing out
# the same code 20+ times for all the different currency's can be a hassle. We
# can fix the situation by writing one all inclusive decorator. Like so:

def cur(currency):
    def universal(func):
        def wrap(n):
            return '{c}{n:,}'.format(c=currency, n=n)
        return wrap
    return universal

# Now let's create a dict with all the currency formats.

cd = {'usd': '$', 'eur': '€', 'jpy': '¥'}

# Now adding any currency decorator is super easy.


@cur(cd['usd'])
def numuni(n):
    return n
