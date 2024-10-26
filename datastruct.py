class LinkedList: 
    def __init__(self,value):
        self.value = value
        self.nextNode = None
        
class Node: 
    def __init__(self):
        self.head = None
    
    def append(self,data): 
        self.head = LinkedList(data)
        
