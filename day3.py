# command = ""
# started = False
# while True:
#     command =  input("Entre the text : ").lower()
#     if command == "start":
#         if started:
#             print("car already started!")
#         else:
#             started = True
#             print("car started")
#     elif command == "stop":
#         if not started:
#             print("car is alreday stopped")
#         else:
#             started = False
#             print("car stopped ")
#     elif command == "help":
#         print('''
# start:Start the car.
# stop:Stop the car.
# exit:to end.''')
#     else:
#         print("exit!")
#         break
#
# price = [1,2,30,40]
# total = 0
# for prices in price:
#     total += prices
# print(f"Total price : {total}")

# list = [1,1,1,1,1]
# for no in list:
#     print('*' * no)

# for count in list:
#     out = ""
#     for countx in range(count):
#         out += "x"
#         print(out)


# list = [2,3,4,5,6,10]
# max = list[0]
# for numbers in list:
#     if numbers > max:
#         max = numbers
# print(max)


# numbers = [1,3,2,4,9,6,5,9,2,3,4,5]
# diff = []
# for number in  numbers:
#     if number not in diff:
#         diff.append(number)
# print(diff)
# # numbers.append(20)
# # print(numbers[2])
# # print(numbers)
#
# numbers.remove(3)
# print(numbers)


phone =input("Enter the number : ")
dict =  {
    "1" : "one",
    "2" : "Two",
    "3" : "Three",
    "4" : "Four"
}
out = ""
for number in phone :
    out += dict.get(number , "!") + " "
print(out)
