/*
  "If i want create a complex ou specify type?"
  
  keep calm my friend, I'm explains for you now! 
  
  Imagine two objects: 
    student and course

  we can create like this
*/


type Student = {
  id: string | number, //remember the union?
  name: string,
  age?: number // in this case we use ? operator for say that attribute is number | undefined 
}

//create Student
const student: Student = {
  id: 73,
  name: "Nathan Seixeiro",
  age: 20 // if I don't pass the age I can, cause is number or undefined
}

type Course = {
  name: string,
  stage: string
}

//create course
const course: Course = {
  name: "ts course",
  stage: "progress..."
}

/*
  Now we can make a type with both last types 
  using intersection with & operator. 
  There are in the new type exist all attributes of the others types
*/

type StudentInfo = Student & Course

//create studentInfo
const studentInfo = {
  id: 73,
  name: "Nathan Seixeiro",
  name: "ts course",
  stage: "teaching"
}

// look I don't use age because isn't necessarily 