import math
class Pagination:
    def __init__(self,items=None,page_size=10):
        if items is None:
            self.items=[]
        else:
            self.items=items
        self.page_size=page_size      
        self.current_idx=0
        self.TotalP=math.ceil(len(items)/self.page_size)
    
    def get_visible_items(self):
        start=self.current_idx*self.page_size
        end=start+self.page_size
        return self.items[start:end]

    def go_to_page(self,page_num):
        
        if 1<=page_num <=self.TotalP:
            self.current_idx=page_num-1
        else:
            raise ValueError("page num est hors de portée")
    
    def first_page(self):
        self.go_to_page(1)

    def last_page(self):
        self.go_to_page(self.TotalP)
    
    def next_page(self):
        if  self.current_idx+1<self.TotalP:
            self.current_idx+=1
        else:
            raise ValueError("Vous êtes déjà sur la dernière page.")
        
    def previous_page(self):
        if  self.current_idx>0:
            self.current_idx-=1
        else:
           raise ValueError("Vous êtes déjà sur la première page.")
    def __str__(self):
       return f"Page {self.current_idx + 1} sur {self.total_pages}, items visibles : {self.get_visible_items()}"


        
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())

p.next_page()
print(p.get_visible_items())

p.last_page()
print(p.get_visible_items())

p.go_to_page(10)
print(p.current_idx + 1)

p.go_to_page(0)