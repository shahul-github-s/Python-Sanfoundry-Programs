# If num % 2 == 0, it returns "even"; otherwise, it returns "odd"
check_number = lambda num: "even" if num % 2 == 0 else "odd"

# Take input from the user and convert it to an integer
number = int(input("Enter a number: "))

# Call the lambda function and store the result (either "even" or "odd")
result = check_number(number)

# Print the result
print(number, "is an", result, "number.")