/*
  In the next example, we create a function that receive 2 parameters, and one receive 2 possible types
  
  this is Union type
    simple example:
      id: string | number
*/

function logDetails(id: number | string, name: string){
  console.log(`Your id is ${id} and your name is ${name}`);
}
//the parameter id can be number or string

/*
  now we create a second similar example but with 2 functions

  both the functions used string or number
  in your parameters, for simplify the code
  we using type Alias, creating new type based in primitive types.
*/


type Uid = string | number

function logUser(id: Uid, name: string){
  console.log(`User: ${id}, name: ${name}`);
}

function logProd(id: Uid, title: string){
  console.log(`prod: ${id}, title: ${title}`);
}

//test function
logDetails(111, "union")
logUser("1", "user")
logProd(2, "prod")