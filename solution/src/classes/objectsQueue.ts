class objectsQueue {
    readonly items;

    constructor(){
        this.items = Array<object>();
    }

    push(obj: object): void {
        this.items.push(obj);
    }

    pop(): object {
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
}
