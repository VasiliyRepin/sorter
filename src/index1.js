class Sorter {
    constructor() {
            // your implementation
                this.arr = [];
        	this.arr.length=0;
    }

    add(element) {
            // your implementation
            	this.arr.length++;
           this.arr.splice(this.arr.length,0,element);
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
                return this.arr;
    }

    sort(indices) {
            // your implementation
            	var tmp=[];
        	for (var i=0; i<indices.length;i++)
            		{
            			tmp[i]=this.arr[indices[i]];
        		}
        		function compareNumeric(a, b)
        			{
        				if (a > b) return 1;
        				if (a < b) return -1;
        			}
        	tmp.sort(compareNumeric);
        	indices.sort(compareNumeric);
          	for (var i=0; i<indices.length;i++)
            		{
            			this.arr[indices[i]]=tmp[i];
        		}
        	return this.arr;
    }

    setComparator(compareFunction) {
            // your implementation

    }
}

module.exports = Sorter;
let sorter = new Sorter("");
module.exports = Sorter;