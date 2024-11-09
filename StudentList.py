def displayStudent(map: dict): 
    print('\nStudentList')
    for [key, value] in map.items():
        print(f'{key} {value}')
        
        
def changeLastData(map: dict, lastElement): 
    studNumber = input('Enter your student Number : ')
    studname = input('Enter your studentName : ')
    
    #removing the lastelement
    del map[lastElement]
    #adding the new element 
    map[studNumber] = studname
    
    
def studentList():
    students = {}
    lastElement = ""
    
    for i in range(3): 
        studNumber = input("Enter your student Number : ")
        studName = input("Enter your first name : ")
        
        #adding the key value pairs 
        students[studNumber] = studName
        #adding the last element to this variable for modification
        lastElement = studNumber
    
    #displaying the current element
    displayStudent(students)
    #changing the last element
    changeLastData(students, lastElement)
    #displaying it again
    displayStudent(students)
    
studentList()