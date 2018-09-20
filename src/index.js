class Sorter {
    constructor()
    {
        this.arr = [];
        this.comparator = this.Compare;
    }
    Compare(l, r)
    {
        return l - r;
    }
    add(element)
    {
        this.arr.push(element);
    }
    at(index)
    {
        return this.arr[index];
    }
    get length()
    {
        return this.arr.length;
    }
    toArray()
    {
        return this.arr;
    }
    sort(indices)
    {
        var arr = [];
        indices.sort(this.Compare);
        indices.forEach(element =>
        {
            arr.push(this.arr[element]);
        });
        arr.sort(this.comparator);
        indices.forEach((element, index) =>
        {
            this.arr[element] = arr[index];
        })
        return this;
    }
    setComparator(compareFunction)
    {
        this.comparator = compareFunction;
    }
}
module.exports = Sorter;
