import abc

class BaseClass(metaclass=abc.ABCMeta):
    def classMethod(self):
        pass

class ChildClass(BaseClass):
    def __init__(self, instanceVariable) -> None:
        super().__init__()
        self.instanceVariable = instanceVariable
    def classMethod(self):
        return("Fuck")


child = ChildClass(True)

print(child.instanceVariable)

class Organism(metaclass=abc.ABCMeta):
    def __init__(self): 
        self.species = 'human'

    @abc.abstractmethod
    def list(self):
        pass

    def error(self):
        print('fuck')
        pass

class Person(Organism):
    def __init__(self, name):
        super(Person, self).__init__()
        self.name = name
    
    def list(self):
        print(self.name)

class Student(Person):
    def __init__(self, name, college):
        super(Student, self).__init__(name)
        self.college = college
    
    def list(self):
        super().list()
        print(self.name)
        print(self.college)

person = Person('luke')

person.list()

student = Student('luke', 'auburn')

student.list()

student.error()

print(student.species)

# organism = Organism()

# organism.error()