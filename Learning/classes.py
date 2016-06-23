# This module is a basic look into how classes work and why you
# should or shouldn't use them. They are a fairly easy concept to understand
# and can be found in any OO programming languages.

# Classes as an object should be thought of as a blueprint for a building that
# can be customized depending on what it's assigned to. For example a class
# that can be used to create NPC's in a game could look something like this:

# First we define our class with the class syntax.


class npc(object):

    # Now when we assign a class to a variable it is important to instantiate
    # that class. Instantiation happens inside the __init__ function and will
    # be done every time a class is assigned. For this NPC class we should have
    # a couple class member variables like so:

    def __init__(self):
        self.health = 100
        self.speed = 10
        self.name = None
        self.damage = 10

    # You can see that variables we assign here have the 'self' pretext and
    # self is also passed to the __init__ function. This is done to make them
    # variables that can be accessed by any class fuctions defined here, as we
    # will see. Let's define some class functions.

    def hit(self, damage):
        if self.health > 0:
            self.health = self.health - damage
        elif self.health <= 0:
            print("Your dead!")

    def speedup(self):
        self.speed += 20

    # Now that we have some class functions we can see the self variable being
    # of use, since it's passed in every function defined in a class any
    # function has the ability to change them.

# Classes can be instatitated like so:

bob = npc()
tom = npc()
carl = npc()

# Now the bob variable is a "Copy" of the npc class, it's also to help think of
# the 'self' variable as a changing to the name of the variable you've assined
# it to. For example if we wanted to print bob's health it would be like so:

print(bob.health)

# Let's take him down a few notches and print it again.

bob.hit(50)
print(bob.health)

# Let's give tom a speedup and print his speed.

tom.speedup()
print(tom.speed)

# Hopefully this helps simplify classes in a basic way, there is so much that
# can be done with classes and this is only the very surface!
