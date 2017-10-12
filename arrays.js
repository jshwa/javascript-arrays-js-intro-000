var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, b){
  return [b,...array]
}

function destructivelyAddElementToBeginningOfArray(array, b){
  return array.unshift()
}

function addElementToEndOfArray(array, b){
  return [...array, b]
}

function destructivelyAddElementToEndOfArray(array, b){
  return array.push()
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
