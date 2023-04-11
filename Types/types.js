// PRIMITIVE TYPES
//boolean (true, false)
var isBoolean;
isBoolean = true;
//string ('word', "word", `word`)
var isString;
isString = 'word';
//number (int, float, binary, hex)
var isNumber;
isNumber = 0xff0;
//array (type[])
var isArray1;
isArray1 = [1, 2, 3, 4];
//or Array<type>
var isArray2;
isArray2 = ['is', 'just', 'for', 'example'];
//OTHER TYPES
/*
  tuples ([type, type, type])
    -> it's same of array but your number of items is defined
*/
var isTuple;
isTuple = [1, "tuple", 2];
/*
enum {key = value}
  -> used for simplify declaration for example: if we use hexadecimal colors, we should use the next enum
  */
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#";
})(Colors || (Colors = {}));
/*
any (anything)
  -> it's not good choice and is possible blocking this type in at tsconfig.json
  -> it's allow to use any type.
*/
var isAny; //actually doesn't necessarily declare type
isAny = 'for example, here its is a ;
console.log(isAny);
isAny = 3; //now is number
console.log(isAny);