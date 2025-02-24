# def funny (joke,jokes):
#     print(f"""funny jokes,
#     yeah
#     {joke}
#     {jokes}""")
#
# print("Tell me a joke")
# funny(joke="yeah buddy",jokes="Light weight baby")
# print("Yeah nice")
#
from sys import excepthook

# def number_ellaborater(number):
#     actualnumber = number.split(" ")
#     numbers = {
#         "1" : "one",
#         "2" : "two",
#         "3"  : "three",
#     }
#     out = ""
#     for num in actualnumber :
#         out += numbers.get(num,num) + " "
#     return out
#
# enterinput = input("enter a number : ")
# print(number_ellaborater(enterinput))



try:
    enter_a_decimal = float(input("Enter a decimal : "))
    value = 1000
    income = value / enter_a_decimal
    print(enter_a_decimal)
    print(income)
except ValueError:
    print("Invalid decimal")
except ZeroDivisionError:
    print("Value cannot be zero")

