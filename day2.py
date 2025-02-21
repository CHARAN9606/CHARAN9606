price = 100000
Credit = True
if Credit:
     down_payment = 0.1*price
else:
    down_payment = 0.2*price
print(down_payment)


name = "abcd"
if len(name) <= 3:
    print("Name must have more than 3 char")
elif len(name) >= 50:
    print("Name cant have more than 50 character")
else:
    print("Seems like a good name")

weight = eval(input("Enter your weight : "))
kg_grams = input("(K)kg or (L)lbs : ")
if kg_grams.upper() == "K" :
    converted_weight = weight * 1000
    print( f"your weight is : {converted_weight }g")
else:
    converted_weights = weight*0.45
    print(f"your weight is : {converted_weights}kg")



i = 1;
while i <= 5:
    print("1"*i)
    i= i+1


no_to_guess = 9
guess_limit = 3
no_of_guess = 0
while no_of_guess < guess_limit:
    guess = int(input("Guess : "))
    no_of_guess += 1
    if guess == no_to_guess:
        print(f"You won and no is : {no_to_guess}")
        break
else:
    print("Guesses over!")






