class Sorter {
    constructor() {
        // your implementation
        //var sorter;
        this.arr = [];

    }

    add(element) {
        // your implementation

        //this.element = element;
        return this.arr.push(element);
        //element;

    }

    at(index) {
        // your implementation
        return this.arr[index];
    }

    get length() {
        // your implementation
        return this.arr.length;
    }

    toArray() {
        // your implementation
        return this.arr
        ;

    }

    sort(indices) {
        var x;
        var min;
        var i;
        var j;
        console. log ('array initial' + this.arr);

        console. log ('indices to sort' + indices);

        for (i=indices.length-1; i > 0; i--) {
            for(j= 1; j <= i; j++) {
                if (indices[j-1] > indices[j]) {
                    x = indices[j-1];
                    indices[j-1] = indices[j];
                    indices[j] = x;
                }
            }
        }


        for (i = indices.length-1; i > 0; i--) {
            for(j= 1; j <= i; j++) {
                if (this.arr[indices[j-1]] > this.arr[indices[j]]) {
                    x = this.arr[indices[j-1]];
                    this.arr[indices[j-1]] = this.arr[indices[j]];
                    this.arr[indices[j]] = x;
                }
            }
        }
        console. log ('this array is' + this.arr);
        return this.arr;



    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;