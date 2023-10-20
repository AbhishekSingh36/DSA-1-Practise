list = [1,2,3,4,5,2,2,3,3,4,4,4,7]

initial_count = 1
max_count = 1
tem_list = list[0]
list.sort()

for index in range(1, len(list)):
    if (list[index] == list[index-1]):
        initial_count += 1
    else:
        initial_count = 1
    
    if(initial_count>max_count):
        max_count = initial_count
        tem_list = list[index-1]

print(tem_list)
print(list)
print(len(list))

