// let person = {
//   firtsN: "ali",
//   lastN: "iof",
//   age: 22,
//   address: function () {
//     console.log("addres/NY/zippost : 2883");
//   },
// };
// person.address();
// console.log();

// ===  factory function   ==

// function person1(fName ,lName, age,address) {
//   return {
//     fName,
//     lName,
//     age,
//     address
//   }
// }
// let person2 = person1('john','haroni',22,'NY/zippost:332342');
// let person3=person1('mehrab','zardosht',20,'NY/zippost:6662342');
// let person4=person1('zock','berg',33,'NY/zippost:3344442');
// let person5=person1('elon','mosk',55,'US/zippost:dd3tt3')

// console.log(person2,person3,person4,person5);

//   ==   constructor  Camel Note    =====

// function PersonCar(model1, model2, model3) {
//   this.model1 = model1,
//   this.model2 = model2,
//   this.model3 = model3,
//   this.bestM = function () {
//     console.log("The Best Car // Benz //")
//   }
// }

// let personCarInfo = new PersonCar("benz", "bugati", "misho");

// console.log(personCarInfo);

//    ======  Delete Or ADD property ======


// let person ={
//     fName : 'Mehrshad',
//     lName : 'karimi',

// }

// person.age=22;  //ADD property
// person.address=function () { //add property
//     console.log('NY/zippost:6662342');
// }

// delete person.age; //delete property
// console.log(person);

//     =====  copy Object on Object  ==== ///

let person={
  fName : 'Mehrshad',
  lName : 'karimi'
}

let personNew =Object.assign({age:20},person);

console.log(personNew);
