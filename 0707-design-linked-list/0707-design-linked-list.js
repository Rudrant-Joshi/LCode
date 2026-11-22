
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

var Node = function(val) {
    this.val = val;
    this.next = null;
};

MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;

    let curr = this.head;

    for(let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);

    node.next = this.head;
    this.head = node;

    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size,val)
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size) return;

    if(index === 0) {
        this.addAtHead(val);
        return;
    }

    let curr = this.head;

    for(let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    let node = new Node(val);

    node.next = curr.next;
    curr.next = node;

    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;

    if(index === 0) {
        this.head = this.head.next;
    } 
    else {
        let curr = this.head;

        for(let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
    }

    this.size--;
};
