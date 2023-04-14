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

/*
enum {key = value}
  -> used for simplify declaration for example: if we use hexadecimal colors, we should use the next enum
  */
  enum Colors {
    white = '#fff',
    black = '#'
  }
  
  /*
  any (anything) 
    -> it's not good choice and is possible blocking this type in at tsconfig.json
    -> it's allow to use any type.
  */
  var isAny: any 
  /*actually doesn't necessarily declare type
*/
isAny = 'for example, here its is a 
isAny = 3
//now is number

//void (without return in a function)
function isVoid():void {
  console.log('this function havent a return');
}

/*
null | undefined
  undefined is most used when may not have a value 
  null is not so cool too, also any type 
*/
type anything: string | undefined

/*never
  -> used for never returned something 
*/
function error(): never{
  throw new Error("error")
}

//object ({key: value})
var isObject: object
isObject ={
  key: "value",
  keyToo: 123
}

/*
  Typescript have type inference, if you pass the var value when init them, it automatically understand your type then don't need pass specific type for him
*/
var exampleTypeInference = "he automatically recognize as string"