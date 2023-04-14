/*
  In the next example, we create a function that receive 2 parameters, and one receive 2 possible types
  
  this is Union type
    simple example:
      id: string | number
*/
function logDetails(id, name) {
    console.log("Your id is ".concat(id, " and your name ").concat(name));
}
function logUser(id, name) {
    console.log("User: ".concat(id, ", name: ").concat(name));
}
function logProd(id, title) {
    console.log("User: ".concat(id, ", name: ").concat(title));
}
logDetails(111, "union");
logUser("1", "user");
logProd(2, "prod");
