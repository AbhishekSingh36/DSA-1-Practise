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