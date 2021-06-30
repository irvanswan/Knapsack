class Graph{
  constructor(data, maksimal){
    if (this.constructor == Graph) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.data = data
    this.maksimal = maksimal
  }

  insertionSort(){
    throw new Error("Method 'say()' must be implemented.");
  }
  knapsack(){
    throw new Error("Method 'say()' must be implemented.");
  }
}

module.exports = Graph