# Take input from the user and convert it to an integer
num = int(input("Enter a number: "))

# Check if the number is divisible by 2 (even number)
if num % 2 == 0:
    # If divisible by 2, it's an even number
    print(num, "is an even number.")
else:
    # If not divisible by 2, it's an odd number
    print(num, "is an odd number.")
