from ecommerce import shipping

shipping.shipping()


class Animal:
    def dog(self):
        print("move")

    def cat(self):
        print("cat")


animals = Animal()
animals.first = "dogs"
animals.dog()
print(animals.first)

predators = Animal()
predators.first = "tiger"
print(predators.first)


class Person:
    def __init__(self,name):
        self.name = name
    # def names(self):
    #     print("names")

    def talk(self):
        print(f"yeah buddy!! here i come {self.name}")


person1 = Person("Ronnie_Coleman")
person1.talk()



class Ocean:
    def Whale(self):
        print("Big")



class Bluewhale(Ocean):
    def Big(self):
        print("Sea king")




aquatic_king = Bluewhale()
aquatic_king.Whale()
aquatic_king.Big()


from converters import m_to_cm

print(m_to_cm(10))

from converters import find_maximum_number

numbers = [2,30,40,100]
print(find_maximum_number(numbers))



