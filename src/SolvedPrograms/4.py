# Take input from the user for the lower limit and convert it to an integer
lower = int(input("Enter the lower limit for the range: "))

# Take input from the user for the upper limit and convert it to an integer
upper = int(input("Enter the upper limit for the range: "))

# Loop through each number in the specified range
for i in range(lower, upper + 1):
    
    # Check if the number is odd
    if i % 2 != 0:
        
        # If the number is odd, print it
        print(i)