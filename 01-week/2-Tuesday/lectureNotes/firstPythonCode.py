# input()

# name = input("Tell me your name")



# # int(string)

# age = int(input("what is your age"))
# print(name)

# print(age * 5)

# age = 24
# age = int(input("what is your age"))

# if age >= 21:
#     print('you can drink')
# elif age < 18:
#     print('what are you doing?  you can\'t drink')
# else:
#     print('you live somewhere weird')


# count = 0

# while count <=10:
#     # count = count + 1
#     print("the count is", count)
#     count += 1

# print('Done')

# answer = ''

# while answer != 'when':
#     answer = input('Say when: ')
#     answer = answer.lower()

# print('Say cheese')

day = 0

while (day != -1):

    day = int(input("Enter in day of week: (0-6)"))

    if( day >=6):
        print('numbers must between 0 an 6')
    elif( day < -1):
        print('numbers must between 0 an 6')
    elif (day == 0):
        print('Sunday')
    elif(day ==1):
        print('Monday')
    elif(day ==2):
        print('Tuesday')
    elif(day ==3):
        print('Wednesday')
    elif(day ==4):
        print('Thursday')
    elif(day ==5):
        print('Friday')
    elif(day ==6):
        print('Saturday')

print('goodbye')



