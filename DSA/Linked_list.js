class Node {
    constructor (data){
        this.data=data;
        this.next=null;
    }
}

class Linkedlist{
    constructor (){
        this.head=null;
    }
    // Instert at the End
    append(data){
        const Newnode = new Node(data);
        
        if(this.head===null){
            this.head=Newnode;
            return;
        }
        
        let temp = this.head;
        while(temp.next !==null){
            temp=temp.next;
        }

        temp.next = Newnode;
    }

    // insert at beagining

    prepend(data){
        const Newnode = new Node(data);
        if(this.head===null){
            this.head=Newnode;
        }
        Newnode.next=this.head;
        this.head=Newnode;
    }

    // Delete Node

    delete(data){
        if(this.head===null) return ;

        if(this.head.data === data){
            this.head = this.head.next;
            return
        }

        let temp = this.head;
        while(temp.next !== null){
            if (temp.next.data===data){
                temp.next=temp.next.next;
                return;
            }
            temp=temp.next;
        }
    }

    // search element

    search(data){
        let temp=this.head;

        while(temp !==null){
            if(temp.data===data) 
                return true
        }
        return false
    }

    reverse(){
        let prev = null;
        let curr=this.head;

        while(curr!==null){
            let next = curr.next;
            curr.next=prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print(){
        let temp= this.head;
        let result="";
        while(temp!==null){
            result+=temp.data +"->";
            temp = temp.next;
        }
        console.log(result + "null");
    }
}

const list = new LinkedList();

// Insert elements
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Original List:");
list.print();

// Reverse list
list.reverse();

console.log("Reversed List:");
list.print();

// Other operations
list.prepend(5);
list.delete(20);

console.log("After operations:");
list.print();

console.log("Search 30:", list.search(30));