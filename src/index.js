class Sorter {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    let newArr = [];
    let arr = this.data;
    indices.forEach(item => {
      newArr.push(arr[item]);
    })
    newArr.sort((a, b) => a - b);
    indices.forEach((item, index) => {
      arr[item] = newArr[index];
    })
    this.data = arr;
  }

  setComparator(compareFunction) {
    let compareCallback;
    if (!compareFunction) {
      compareCallback = (a, b) => a - b;
    } else {
      compareCallback = compareFunction;
    }
    return this.data.sort(compareCallback);
  }
}

module.exports = Sorter;
