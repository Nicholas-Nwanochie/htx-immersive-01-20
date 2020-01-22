
# class Person:
#     def greet(self):
#         print("Hello")
        
# me = Person()
# me.greet()

# print(id(me))

# print(Person)

# myDict = {"fname": "Veronica",
#           "lname": "Lino"
#           }

# def myFunction(d):
#     d["fname"] = "new Name"
    

# myFunction(myDict)

# print(myDict)

# myDict2 = myDict 

# myDict2["name"] = "new name"

# print(myDict)
# print(myDict2)
    
    
# myList = [0, 1, 2, 3]

# def myFunction(l):
#     l[0] = 3
    
# myFunction(myList)

# print(myList)

# myString = "this is a great day"

# listWords = myString.split("")

# print(listWords)


# def word_histogram(word):
#     words = ""
#     word_list = []
#     word_lib = {}
#     for i in range(len(word)):
#         if word[i] == " ":
#             word_list.append(words)
#             words = ""

#         elif i == len(word)-1:
#             words = words + word[i]
#             word_list.append(words)

#         else:
#             words = words + word[i]

#     for j in range(len(word_list)):
#         word_lib[word_list[j]] = word_lib.get(word_list[j],0)
#         word_lib[word_list[j]] = word_lib[word_list[j]] + 1
#     print(word_lib)
# word_histogram('to be or not to be')(

# a = 4 
# b = 4

# if(a == 4):
#     print('found') 
    
    
# elif(a >=4):
#     print('found also')
    
# elif(a <= 4):
#     print('found again')
    
# else:
#     print('this is an else')

# myString = "digital crafts"

# # print(id(myString))

# newString = myString

# print(id(myString))

# newString = "hello"
# print(id(newString))


# myList = [1, 2, 3, 4]

# myNewList = myList

# myNewList[0] = 5

# print(id(myList))

# print(id(myNewList))

# myList = [1, 2, 3, 4]

# def chgList(aList):
#     aList[0] = 5
    

# print(myList)

# chgList(myList)

# print(myList)

# class Greeting:
#     def say_hello(self):
#         print('hello')
        

# newGreetingObj = Greeting()
# newGreetingObj1 = Greeting()

# newGreetingObj.say_hello()

# print(type(newGreeting))

# myString = "vernica"

# print(type(myString))


# class Student:
#     def __init__(self):
#         print('constructor called')
        
#     def greeting(self):
#         print('good morning')
        


# alina = Student()

# alina.greeting()

# alex = Student()

# alex.greeting()

# sean = Student()

# sean.greeting()


        
# myName = str("veronica")

# capName = myName.capitalize()

# print(capName)


# class Animal:
#   def __init__ (self, name):
#     self.name = name

# dog = Animal("dog")

# cat = Animal("cat")

# horse = Animal("horse")

# print(dog.name.capitalize())
# print(cat.name)
# print(horse.name)

# name = "alina"
# lname = "belova"

# class Student:
    
#     def __init__(self, name, lname):
        
#         self.name = name
#         self.lname = lname
        # print(f'Hello there {self.name} {self.lname}')
        
        
# alina = Student("alina", "belova")

# sean = Student("sean", "page")

# print(f'{alina.name} {sean.name}')

# import datetime

# class Person:
#     def __init__(self, fname, lname, birthdate, address, email):
#         self.fname = fname
#         self.lname = lname  
#         self.birthdate = birthdate 
#         self.address = address 
#         self.email = email
    
#     def age(self):
#         today = datetime.date.today()
#         age = today.year - self.birthdate.year
        
#         if today < datetime.date(today.year, self.birthdate.month, self.birthdate.day):
#             age  -= 1
            
#         return age
    
    
# sammy = Person("Sammy", "Kry", datetime.date(1998, 8, 21), "123 sesame street", "sammy@gmail.com")


# print(f'{sammy.fname} {sammy.lname}')

# age = sammy.age()

# print(age)


# def greeting(name):
#     count = 0
#     print(f"helo {name}")
#     count += 1
#     print(count)
    

# greeting("Daniela")
# greeting("Alex")
# greeting("John")
# greeting("Meryem")


# class Person:
#     def __init__(self, name):
#         self.name = name
#         self.count = 0

#     def greeting(self):
#         print(f"hello {self.name}")
#         self.count += 1
        
#     def printCount(self):
#         print(self.count)
        

# alina = Person("alina")

# alina.greeting()
# alina.printCount()
# alina.greeting()
# alina.printCount()
# alina.greeting()
# alina.printCount()
# alina.greeting()

# alina.printCount()


# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone

#     def greet(self, other_person):
#         print(f'Hello {other_person.name}, I am {self.name}!')
    

# sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")

# jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

# sonny.greet(jordan)

# jordan.greet(sonny)

# print(f'{sonny.name} {sonny.email} {sonny.phone}')

# print(f'{jordan.name} {jordan.email} {jordan.phone}')

# class Person:
#   def __init__ (self, name):
#     self.name = name
#     self.count = 0
    
#   def greet (self):
#     self._greet()
    
#   def _greet (self):
#     self.count += 1
#     if self.count > 1:
#       print("Stop being so nice")
#       self.__reset_count()
#     else:
#       print("Hello", self.name)
      
#   def __reset_count(self):
#     self.count = 0
    
# alex = Person("alex")
# alex._greet()
# alex.greet()
# alex.greet()
# alex.__reset_count()


# class VString(str):
#     # Hello
#     # leH
#     def reverse(self, name):
        
#         rstring = ""
        
#         for char in name:
#             rstring = char + rstring
        
#         return rstring
    
# myString = VString("hello")

# print(myString.capitalize())

# reversed = myString.reverse("hello")

# print(reversed)

class Parent():
    
    def implicit(self):
            print("PARENT implicit()")
            
    def override(self):
            print("PARENT override()")
    
    def altered(self):
            print("PARENT altered()")

            
class Child(Parent):
    
    def override(self):
            print("CHILD override()")
            
    def altered(self):
            print("CHILD, BEFORE PARENT altered()")
            super(Child, self).altered()
            super(Child, self).implicit()
            print("CHILD, AFTER PARENT altered()")

# dad = Parent()
# dad.altered()
# dad.override()
# dad.implicit()

son = Child()
# son.altered()
# son.override()

son.implicit()

class Grandparent:
    def __init__(self, num):
        pass
    
class Character(Grandparent):
    def __init__(self, name, power, health):
        self.name = name
        self.power = power 
        self.health = health
        super(Character, self).__init__(4)
        

class Goblin(Character):
    pass
    
class Hero(Character):
    
    def __init__(self, weapon, name, power, health):
        self.weapon = weapon 
        super(Hero, self).__init__(name, power, health)
    

alina = Hero("pink gun", "alina", 3, 10)

print(alina.health)
        