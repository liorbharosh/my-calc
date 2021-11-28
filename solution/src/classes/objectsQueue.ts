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
        for(let i = 1; i < this.items.length; i++) {
            this.items[i-1] = this.items[i];
        }
        return head;
    }
}
