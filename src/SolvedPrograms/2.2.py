# Take input from the user and convert it to an integer
n = int(input("Enter a number: "))

# Use bitwise AND operation to check if the number is odd
# If n & 1 is True (non-zero), it means the number is odd
if n & 1:
    print(n, "is an odd number.")
else:
    # If n & 1 is False (zero), the number is even
    print(n, "is an even number.")
