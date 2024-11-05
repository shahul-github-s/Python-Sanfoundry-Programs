# Take input from the user and convert it to an integer
num = int(input("Enter number: "))

# Check if the number is greater than 0 (positive number)
if num > 0:
    # If greater than 0, it's a positive number
    print("Number is positive")
elif num == 0:
    # If equal to 0, it's neither positive nor negative
    print("Number is zero")
else:
    # If not greater than 0 and not 0, it's a negative number
    print("Number is negative")
