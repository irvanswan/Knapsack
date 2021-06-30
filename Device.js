const Graph = require('./Graph');

class Device extends Graph{
  knapsack(){
    let hasil = 0;
    this.insertionSortBerat()
    console.log(this.processKnapsack())
  }

  processKnapsack(){
    let newData = []
    let heaviest = 0; // 
    let biggest_price = 0; //
    for(let i = 0; i < this.data.length; i++){
      let newArr = [this.data[i]]
      //console.log(this.data[i])
      let local_weight = this.data[i].berat;
      let local_price = this.data[i].harga;
      let j = i + 1;
      while(j < this.data.length){
        if(local_weight + this.data[j].berat > this.maksimal){
          j++
        }else{
          newArr.push(this.data[j])
          local_weight += this.data[j].berat;
          local_price += this.data[j].harga
          j++
        }
      }
      if(local_weight >= heaviest){
        if(local_price > biggest_price){
          heaviest = local_weight
          biggest_price = local_price
          newData = [...newArr]
        }
      }
      //console.log(newData, heaviest, biggest_price)
    }
    return newData
  }

  insertionSortBerat(){
    for(let i = 1; i < this.data.length; i++){
      let key = this.data[i]
      let j = i - 1
      while(j >= 0 && key.berat > this.data[j].berat){
        this.data[j+1] = this.data[j]
        j--
      }
      this.data[ j + 1] = key
    }
    return this.data
  }

  insertionSortHarga(){
      for(let i = 1; i < this.data.length; i++){
      let key = this.data[i]
      let j = i - 1
      while(j >= 0 && key.harga > this.data[j].harga){
        this.data[j+1] = this.data[j]
        j--
      }
      this.data[ j + 1] = key
  }
  return this.data
  }
}

module.exports = Device