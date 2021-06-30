const Device = require('./Device')
const dataLaptop = [
  {
    nm_laptop : 'ABC',
    berat : 5,
    harga : 2600
  },
   {
    nm_laptop : 'DEF',
    berat : 4,
    harga : 4000
  },
   {
    nm_laptop : 'GHI',
    berat : 3,
    harga : 4000
  },
   {
    nm_laptop : 'JKL',
    berat : 2,
    harga : 4800
  },
   {
    nm_laptop : 'MNO',
    berat : 2,
    harga : 5100
  },
]

const dataLaptop2 = [
  {
    nm_laptop : 'ABC',
    berat : 2,
    harga : 3600
  },
   {
    nm_laptop : 'DEF',
    berat : 1,
    harga : 3500
  },
   {
    nm_laptop : 'GHI',
    berat : 3,
    harga : 3400
  },
   {
    nm_laptop : 'JKL',
    berat : 3,
    harga : 3200
  },
   {
    nm_laptop : 'MNO',
    berat : 5,
    harga : 3000
  },
]

const dataLaptop3 = [
  {
    nm_laptop : 'ABC',
    berat : 2,
    harga : 2600000
  },
   {
    nm_laptop : 'DEF',
    berat : 3,
    harga : 2600000
  },
   {
    nm_laptop : 'GHI',
    berat : 2,
    harga : 2450000
  },
   {
    nm_laptop : 'JKL',
    berat : 4,
    harga : 4800000
  },
   {
    nm_laptop : 'MNO',
    berat : 5,
    harga : 5100000
  },
]
new Device(dataLaptop3, 7).knapsack()
/*const laptop = new Device().insertionSort(dataLaptop)
console.log(laptop)*/
