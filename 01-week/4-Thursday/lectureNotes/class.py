
# Hello 
# Hello 
# Hello 

# count = 0
# while count < 3:
#     print('Hello')
#     count += 1

# alphabet = [1, 2, 3, 4, 5, 6, 7]

# new_list = alphabet[2:5]

# myVar = 1
# mvVar2 = 2
# def greeting():
#     print("hello world")
    
# if (myVar == 1):
#     print('Hello')

# greeting()

# def print_students():
#     print("Shu Pei")
#     print("Thomas")
#     print("Gustavo Fette")
#     print("Alim")


# print("Day 1: Students in SRE class")
# print("lecture: git 101")

# print_students()

# print("Day 2: Students in SRE class")
# print("lecture: git 102")

# print_students()

# print("Day 3: Students in SRE class")
# print("lecture: python 101")

# print_students()

# def myFunction():
#     for i in range(10):
#         print(i)
        
        
# def greeting():
#     print('hello')
    
# for i in range(10):
#     greeting()

# def separateRuns():
#     print('******************')
#     print()
        
# def getGroceries():
#     print('milk')
#     print('flour')
#     print('sugar')
#     print('butter')
#     separateRuns()
    
# for i in range(3):
#     getGroceries()

# def greeting(person):
#     print(f'hello {person}')
    
# greeting('Kazim')

# def add(num1, num2):
#     sum = num1 + num2
#     return sum
# result = add(4, 5)
# # print(result)

# def concat_lists(list1, list2):
#     concat = list1 + list2
#     return concat

# c_result = concat_lists([1, 4, 6], [7, 9, 0])  

# print(c_result) 

# def cal_avg(param1, param2, param3, parm4):   
#     sum = param1 + param2 + param3 + parm4    
#     avg = sum / 4
#     return avg
    
    
# result = cal_avg(4, 6, 9, 0)
# print(result)
# print(cal_avg(6, 8, 22, 11))

# def myFunction(num1, num2, num3):
    
#     return num1*2, num2*3, num3*4

# c1, c2, c3 = myFunction(4, 7, 9)

    
# print(c1)
# print(c2)
# print(c3)




# def addTwo(startingValue):
#     endingValue = startingValue + 2
#     print('The sum of', startingValue, 'and 2 is:', endingValue)
#     return endingValue
# result = addTwo(5)
# print(result)


# print("hello")

# def greeting(name):
#     print(f'hello {name}')

# students = ['Kazim', "Matt", "Alina", "Mary", "Alex"]

# for name in students:
#     greeting(name)
    
# print("bye")


# TAX_RATE = .09  # 9 percent tax
# COST_PER_SMALL_WIDGET = 5.00
# COST_PER_LARGE_WIDGET = 8.00

# def calculateCost(nSmallWidgets, nLargeWidgets):
#     TAX_RATE = 7
#     subTotal = (nSmallWidgets * COST_PER_SMALL_WIDGET) + (nLargeWidgets * COST_PER_LARGE_WIDGET)
#     taxAmount = subTotal * TAX_RATE
#     totalCost = subTotal + taxAmount
#     return totalCost

# total1 = calculateCost(4, 8)  #  4 small and 8 large widgets
# print('Total for first order is', total1)
# total2 = calculateCost(12, 15)


    
# def dance2():
#     print("I want to do a %s dance" % kind)
    
# def dance():
#     kind = "silly"
#     print("I am doing a %s dance" % kind)
#     dance2() 
       
# dance()


# def dance(kind="silly"):
#     print("I am doing a %s dance" % kind)
    
    
# dance("funky") # Totally OK.

# print(kind) # Error!

def dance(kind="silly"):
    print(f'I am doing a {kind} dance')
dance("funky") # Totally OK.



