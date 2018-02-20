class Sorter {
  constructor() {
    this.string = [];
  }

  add(element) {
    this.string.push(element);
  }

  at(index) {
    return this.string[index];
  }

  get length() {
    return this.string.length;
  }

  toArray() {
    return this.string;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    let newArr = [];
    let arr = this.string;
    indices.forEach(item => {
      newArr.push(arr[item]);
    })
    newArr.sort((a, b) => a - b);
    indices.forEach((item, index) => {
      arr[item] = newArr[index];
    })
    this.string = arr;
  }

  setComparator(compareFunction) {
    const x = (a, b) => a - b;
    let compareCallback = compareFunction || x;
    return this.string.sort(compareCallback);
  }
}

module.exports = Sorter;
