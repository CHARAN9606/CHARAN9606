import random

class Dice:
    def roll(self):
        first_value = random.randint(1,6)
        second_value = random.randint(1,6)
        return (first_value,second_value)


roll_a_dice = Dice()
print(roll_a_dice.roll())


