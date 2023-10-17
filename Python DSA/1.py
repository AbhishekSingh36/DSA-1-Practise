# list of 10 random integers, count the print of even and odd
# 10 random int check the +ve and -ve integers

numbers = [17, 8, 42, 5, 19, 64, 33, 22, 7, 12]

even_count = 0
odd_count = 0

for oddeven in numbers:
    if oddeven % 2 == 0:
        even_count += 1
    else:
        odd_count +=1

print(even_count,odd_count)

numberss = [17, -8, 42, 5, 19, 64, -33, -22, 7, 12]

pos_count = 0
neg_count = 0

for count in numberss:
    if count>0:
        pos_count += 1
    else:
        neg_count +=1
print(pos_count,neg_count)



swap_list = ["doggie", "cat", "racoon", "kangroo"]

initial_element = swap_list[0]
last_element = swap_list[-1]

list = swap_list

list[0] = last_element
list[-1] = initial_element

print(swap_list)
print(list)

# swap_list = ["doggie", "cat", "racoon", "kangroo"]

# list = swap_list
# list[0] = swap_list[-1]
# list[-1] = swap_list[0]

# print(list)
# print(swap_list)