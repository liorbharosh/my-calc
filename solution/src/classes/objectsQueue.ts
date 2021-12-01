class OperationsQueue {
    private items;

    constructor(){
        this.items = Array<Operation>();
    }

    push(op: Operation): void {
        this.items.push(op);
    }

    pop(): Operation {
        let head = this.items[0];
        if (this.items.length == 1) {
            this.items.pop();
        }
        else if (this.items.length > 1) {
            for(let i = 0; i < this.items.length - 1; i++) {
                this.items[i] = this.items[i+1];
            }
            this.items.pop();
        }
        // delete this.items[0];
        return head;
    }

    peek(): Operation {
        return this.items[0];
    }

    isEmpty(): boolean {
        if (this.items.length > 0) return false;
        return true;
    }
}
