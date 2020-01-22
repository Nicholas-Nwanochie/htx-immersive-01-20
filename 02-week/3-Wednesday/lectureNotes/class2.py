

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
        
#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))


### Composition


class Student():
    
    def __init__(self, firstName, lastName, campus):
        self.firstName = firstName
        self.lastName = lastName
        self.campus = campus
        
        
    def printStudent(self):
        print(f"{self.firstName} {self.lastName} campus: {self.campus}")
        
        
class Campus():
    def __init__(self):
        self.students = []
        
    def addStudent(self, firstName, lastName, campus):
        temp  = Student(firstName, lastName, campus)
        self.students.append(temp)
        
    def printSomeStudent(self, index):
        
        print(self.students[index])
        return self.students[index]
        
    def showCurrentStudent(self):
        for studentObject in self.students :
            print(f"{studentObject.firstName} {studentObject.lastName} campus: {studentObject.campus}")


houston = Campus()
houston.addStudent("alina", "belova", "houston")
houston.addStudent("kazim", "sha", "houston")
houston.addStudent("alex", "fisher", "new york")
houston.addStudent("matt", "ryan", "chicago")
houston.addStudent("sean", "page", "chicago")

# houston.showCurrentStudent()

studentObj = houston.printSomeStudent(0)

studentObj.printStudent()


# alina = Student("alina", "belova", "houston")
# kazim = Student("kazim", "sha", "houston")
# alex = Student("alex", "fisher", "new york")
# matt = Student("matt", "ryan", "chicago")
# sean = Student("sean", "page", "chicago")

