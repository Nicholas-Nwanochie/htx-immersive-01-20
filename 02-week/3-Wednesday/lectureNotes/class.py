
# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#         self.friends = []
#         self.greeting_count = 0
#         self.greeting_list = []

#     def greet(self, other_person):  
#         print(f'Hello {other_person.name}, I am {self.name}!')
#         self.greeting_count += 1
#         if other_person not in self.greeting_list:
#             self.greeting_list.append(other_person)
        
#     def print_contact_info(self):
#         print(f"{self.name}'s email: {self.email}, {self.name}'s phone number: {self.phone}"  )
        
#     def addfriend(self, other_person):
#         self.friends.append(other_person)
        
#     def num_friend(self):
#         return len(self.friends)
    
#     def num_unique_people_greeted(self):
#         print(len(self.greeting_list))
        
        
     
# sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
# jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")
# alina = Person("Alina", "alina@gmail.com", "333-333-3333")

# sonny.greet(jordan)
# sonny.greet(jordan)
# sonny.greet(jordan)
# sonny.greet(alina)
# sonny.greet(jordan)

# sonny.num_unique_people_greeted()



# print(sonny.greeting_count)

# print(alina.greeting_count)
# print(jordan.greeting_count)

# sonny.addfriend(jordan)

# jordan.addfriend(alina)

# alina.addfriend(jordan)
# alina.addfriend(sonny)

# numSunny = sonny.num_friend()

# print(numSunny)

# numJordan = jordan.num_friend()

# print(numJordan)

# numAlina = alina.num_friend()

# print(numAlina)


# sonny.friends.append(jordan)
# sonny.friends.append(alina)



# print(sonny.friends[0].name)
# print(sonny.friends[1].name)

# print(len(sonny.friends))





# sonny.greet(jordan)

# sonny.print_contact_info()
# jordan.print_contact_info()
# alina.print_contact_info()


# Sonny's email: sonny@hotmail.com, Sonny's phone number: 483-485-4948
