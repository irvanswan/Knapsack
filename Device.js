const Graph = require('./Graph');

class Device extends Graph{
  knapsack(){
    let hasil = 0;
    let dataArr = []
    console.log(this.insertionSortBerat())
    //this.insertionSortHarga()

    /*for(let i = 0; i < this.data.length; i++){
        let temp = this.data[i].harga;
        console.log(this.data[i])
        if(this.data[i].berat <= 7){
          let key = this.data[i].berat
          let j = i + 1
          let temp2 = this.data[i].harga
          let newArr=[this.data[i]];
          for(j; j < this.data.length; j++){
            if(key + this.data[j].berat <= this.maksimal){
              newArr.push(this.data[j])
              key += this.data[j].berat
              temp2 += this.data[j].harga
            }
          }
          if(temp2 > temp){
            dataArr = newArr
            temp = temp2
          }
        console.log('temp2',temp2)
        }
      if(temp > hasil){
        hasil = temp    
      }
      console.log(dataArr)
      return hasil
    }*/

  }

  insertionSortBerat(){
    let newArr = []
    for(let i = 1; i < this.data.length; i++){
      let key = this.data[i]
      let j = i - 1
      while(j >= 0 && key.berat > this.data[j].berat){
        this.data[j+1] = this.data[j]
        j--
      }
      this.data[ j + 1] = key
    }
    //return this.data
    console.log(this.data)
    for(let i = 0; i < this.data.length; i++){
      let key = this.data[i]
      for(let j = i + 1; j < this.data.length; j++){
          let hasil = key.berat + this.data[j].berat
          while(hasil <= 7 && j < this.data.length ){
            hasil += 
            newArr.push([key, this.data[j]])
          }
      }
    }
    console.log(newArr)
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