const Graph = require('./Graph');

class Schedule extends Graph {
  knapsack(){
    this.insertionSort()
    console.log(this.processKnapsack())
  }

  processKnapsack(){
    let newData = []
    let newData2 = []
    let longest = newData.length;

    for(let i=0; i < this.data.length; i++){
      let newArr = [this.data[i]]
      let local_start = this.data[i].start
      let local_end = this.data[i].end
      let j = i + 1
      while(j < this.data.length){
        if(this.data[j].start < local_start && this.data[j].end <= local_start){
          local_start = this.data[j].start
          local_end = this.data[j].end
          newArr.push(this.data[j]);
          j++;
        }
        j++;
      }
      if(newArr.length > newData.length){
        newData = newArr
      }
    }
  
  for(let i = this.data.length - 1; i >= 0; i--){
    let newArr = [this.data[i]]
      let local_start = this.data[i].start
      let local_end = this.data[i].end
      let j = i - 1
      while(j >= 0){
        if(this.data[j].start >= local_start && local_end <= this.data[j].start){
          local_start = this.data[j].start
          local_end = this.data[j].end
          newArr.push(this.data[j]);
          j--;
        }
        j--;
      }
      if(newArr.length > newData.length){
        newData2 = newArr
      }
  }
    if(newData > newData2){
      return newData
    }else{
      return newData2
    }
  }

  insertionSort(){
   for(let i = 1; i < this.data.length; i++){
      let key = this.data[i]
      let j = i - 1
      while(j >= 0 && key.start > this.data[j].start){
        this.data[j+1] = this.data[j]
        j--
      }
      this.data[ j + 1] = key
    }
    //console.log(this.data)
    return this.data
  }
}

module.exports = Schedule
