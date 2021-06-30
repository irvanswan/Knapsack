class Graph{
  constructor(data, maksimal){
    if (this.constructor == Graph) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.data = data
    this.maksimal = maksimal
  }
}

module.exports = Graph