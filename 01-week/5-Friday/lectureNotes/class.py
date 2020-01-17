
# import pickle
# import os.path

# if os.path.isfile('data.pickle'):
#     with open('data.pickle', 'rb') as fh:
#         my_dictionary = pickle.load(fh) 
# else:
#     my_dictionary = {  
#         "hello" : f'hello world {pi}',
#         "square_of_2" : 4,
#         0 : 1  
#     }

# pi = 3.14

# # my_dictionary = {  
# #     "hello" : f'hello world {pi}',
# #     "square_of_2" : 4,
# #     0 : 1  
# # }






print(my_dictionary)

# print(my_dictionary)
my_dictionary["name"] = "Veronica"
# print(my_dictionary)

my_dictionary["last_name"] = "Lino"


# import pickle
# import os.path

# if os.path.isfile('data.pickle'):
#     with open('data.pickle', 'rb') as fh:
#         my_dictionary = pickle.load(fh) 
# else:
#     my_dictionary = {  
#         "hello" : f'hello world {pi}',
#         "square_of_2" : 4,
#         0 : 1  
#     }

# pi = 3.14

# my_dictionary = {  
#     "hello" : f'hello world {pi}',
#     "square_of_2" : 4,
#     0 : 1  
# }

# with open('data.pickle', 'wb') as fh:
#     pickle.dump(my_dictionary, fh)
    


# items = my_dictionary.items()

# print(items)
# print(my_dictionary)

# print(my_dictionary.keys())
# print(my_dictionary.values())

# print(my_dictionary)
# del my_dictionary["hello"]

# print(my_dictionary)

# values_list = my_dictionary.values()

# print(values)

# for val in values_list: 
#     print(val)
#     if val == 4:
#         print("value found")

# my_dictionary["hello"]

# keys = my_dictionary.keys()

# keys = my_dictionary.keys()

# print(keys)

# for key in keys :
#     print(f'{key} : {my_dictionary[key]}')
 
 
 

# my_tuple = (3, 4, 7, 2)

# v1, v2, v3, v4 = my_tuple

# print(v1)

# for key, value in my_dictionary.items():
#     print(f'{key}: {value}')
    

# print(my_dictionary)
# my_dictionary["hello"] = "greeting"

# print(my_dictionary)



# print(my_dictionary)

# print(my_dictionary[4])

# print(my_dictionary.get(4))

# is_it_there = "wat" in my_dictionary

# print(is_it_there)

# cell = "333-3333"
# contact [{},{},{}]
# contacts = [{
#     "first_name": "Veronica",
#     "last_name": "Lino"
#     }, 
#     {
#        "first_name": {
#            "last_name": "kearney"
#            },
#        "last_name" : "Kearney",
#        "phone": {
#            "cell" : "333-333-3333",
#            "home" : "444-444-4444"
#        }
#     }, {
#         "first_name": "Sean",
#         "last_name": "Page"
#     }]

# print(contacts[1]["first_name"]["last_name"])
# print(contacts[1]["phone"]["cell"])
# print(contacts[1]["fist_name"],  contacts[1]["last_name"])

# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# print(contact[0]["phone"]["work"])

import pickle
import os.path

if os.path.isfile('phonebook.pickle'):
    # read pickle
    with open('phonebook.pickle', 'rb') as fh:
        phonebook = pickle.load(fh)
    
else:
    phonebook = {}
    

######## indside of the if input = 5 before the break

with open('phonebook.pickle', 'wb') as fh: 
    pickle.dump(phonebook, fh)
    
#     with open('data.pickle', 'rb') as fh:
#         my_dictionary = pickle.load(fh) 
# else:
#     my_dictionary = {  
#         "hello" : f'hello world {pi}',
#         "square_of_2" : 4,
#         0 : 1  
#     }

# pi = 3.14

# my_dictionary = {  
#     "hello" : f'hello world {pi}',
#     "square_of_2" : 4,
#     0 : 1  
# }

# with open('data.pickle', 'wb') as fh:
#     pickle.dump(my_dictionary, fh)

