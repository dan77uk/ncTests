const map = require('../map')

describe('map', () => {
  test("expect map to return an array", () => {
    expect(map()).toEqual([])
  })

  test("expect map to return same number of elements as received in collection", () => {
    // Arrange
    const collection = [1, 2, 3, 4, 5]
    const collection1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function transform(element) {
      return element * 2
    } 
    // Act
    const result = map(collection, transform)
    const result1 = map(collection1, transform)
    // Assert
    expect(result).toHaveLength(collection.length)
    expect(result1).toHaveLength(collection1.length)
  })

  test("Returns an array of all elements transformed", () => {
    // Arrange 
    const collection = {'A': 2, 'B': 5, 'C': 10 }
    const collectionResult = [4, 10, 20]
    function transform(element) {
      return element * 2
    } 
    // Act
    const result = map(collection, transform)
    // Assert
    expect(result).toEqual(collectionResult)
  })

})