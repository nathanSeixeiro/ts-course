// PRIMITIVE TYPES

//boolean (true, false)
var isBoolean: boolean
isBoolean = true

//string ('word', "word", `word`)
var isString: string
isString = 'word'

//number (int, float, binary, hex)
var isNumber: number
isNumber = 0xff0

//array (type[])
var isArray1: number[]
isArray1 = [1,2,3,4]
//or Array<type>
var isArray2: Array<string>
isArray2 = ['is', 'just', 'for','example']

//OTHER TYPES
/*
  tuples ([type, type, type]) 
    -> it's same of array but your number of items is defined 
*/
let isTuple: [number, string, number]
isTuple = [1, "tuple", 2]
