const Schedule = require('./Schedule')
const jadwal_kuliah = [
  {
    name : "Bahasa Indonesia",
    start : 7,
    end : 9
  },
  {
    name : "PKN",
    start : 7,
    end : 8
  },
  {
    name : "Fisika",
    start : 9,
    end : 12
  },
  {
    name :"Matematika",
    start : 9,
    end : 10
  },
  {
    name :"Struktur Data",
    start : 10,
    end : 12
  },
  {
    name :"English",
    start : 11,
    end : 12
  },
  {
    name :"Agama",
    start : 12,
    end : 13
  }
]

new Schedule(jadwal_kuliah, null).knapsack()