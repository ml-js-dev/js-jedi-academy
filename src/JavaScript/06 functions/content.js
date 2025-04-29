const getDay = (day) => {
   const dayMap = new Map([
      ['Monday', 1],
      ['Tuesday', 2],
      ['Wednesday', 3],
   ])
   console.log(dayMap.get(day))
   return dayMap.get(day)
}

getDay('Monday')
