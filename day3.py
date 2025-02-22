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


list = [2,3,4,5,6,10]
max = list[0]
for numbers in list:
    if numbers > max:
        max = numbers
print(max)
