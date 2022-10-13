function map(collection, transform) {
  const resultsArray = []

  if(collection) {
    for (const element in collection) {
      
      resultsArray.push(
        transform(collection[element])
      )

    }
  }

  return resultsArray
}

module.exports = map