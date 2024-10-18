def is_odd(n):
    # Base case: If the number is less than 2, check if it's 0 (even)
    if (n < 2):
        return n
    
    # Recursive case: Reduce the number by 2 and check again
    return is_odd(n - 2)

# Take input from the user and convert it to an integer
num = int(input("Enter number:"))

# Call the check function and print whether the number is even or odd
if is_odd(num) :
    print(num,"is Odd!")
else:
    print(num," is odd!")
