

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
        
#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))


### Composition


# class Student():
    
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
        
        
#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")
        
        
    
# class Campus():
#     def __init__(self):
#         self.students = []
        
#     def addStudent(self, firstName, lastName, campus):
#         temp  = Student(firstName, lastName, campus)
#         self.students.append(temp)
        
#     def printSomeStudent(self, index):
        
#         print(self.students[index])
#         return self.students[index]
        
#     def showCurrentStudent(self):
#         for studentObject in self.students :
#             print(f"{studentObject.firstName} {studentObject.lastName} campus: {studentObject.campus}")


# houston = Campus()
# houston.addStudent("alina", "belova", "houston")
# houston.addStudent("kazim", "sha", "houston")
# houston.addStudent("alex", "fisher", "new york")
# houston.addStudent("matt", "ryan", "chicago")
# houston.addStudent("sean", "page", "chicago")

# houston.showCurrentStudent()

# studentObj = houston.printSomeStudent(0)

# studentObj.printStudent()


# alina = Student("alina", "belova", "houston")
# kazim = Student("kazim", "sha", "houston")
# alex = Student("alex", "fisher", "new york")
# matt = Student("matt", "ryan", "chicago")
# sean = Student("sean", "page", "chicago")


class AccountHolder:
    
    def __init__(self, fname, lname, mname, atype, status, balance):
        
        self.first_name = fname
        self.last_name = lname  
        self.middle_name = mname 
        self.account_type = atype  
        self.status = status
        self.balance = balance

class Bank:
    
    def __init__(self, name, address):
        self.name = name  
        self.address = address 
        self.accounts = []
        
    def open_new_account(self, fname, lname, mname, atype, status, balance):
        if balance >= 100 :
            # create a account holder
            temp = AccountHolder(fname, lname, mname, atype, status, balance)
            
            # store new account holder in account list
            self.accounts.append(temp)
            
            # return "Account created for fname lname"
            return f"A {atype} account was created for  {fname} {mname} {lname} with a balance of {balance}"
            
        else:
            # return "Insufficient deposit amount"
            return "Insufficient funds.  You need at least $100 to open an account"
    
    def show_account_holders(self):
        
        for account_holder_obj in self.accounts:
            print(f'{account_holder_obj.first_name} {account_holder_obj.last_name} {account_holder_obj.balance}')
            

# definition of main that includes a while loop with menu of things

def main():
    wellsfargo = Bank("wells fargo", "123 sesame street")
    action = 1
    
    while action != 6:
        print("1. Create an account")
        print("2 Print list of all account holders")
        print("6. Exit application")
        
        action = int(input("What would you like to do?"))
        
        if (action == 1):
            
            fname = input("What is the first name? ")
            mname = input("What is the middle name?")
            lname = input("What is the last name?")
            atype = input("What would like to open? Checking or Savings")
            deposit = int(input("How much would you like to deposit?"))
            
            
            response = wellsfargo.open_new_account(fname, lname, mname, atype, "new", deposit)
            print(response)
        elif (action == 2):
            wellsfargo.show_account_holders()
        
        elif (action == 6):
            break
        

# main()

main()







