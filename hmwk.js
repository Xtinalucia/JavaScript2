/*          NUMBER1
Write a function that parses through the below object 
displaying all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};   



console.log(person3);/*to list everythig as is or object to keys method to loop...

/*OUTPUT*/
{
  pizza: [ 'Deep Dish', 'South Side Thin Crust' ],
  tacos: 'Anything not from Taco bell',
  burgers: 'Portillos Burgers',
  ice_cream: [ 'Chocolate', 'Vanilla', 'Oreo' ],
  shakes: [
    {
      oberwise: 'Chocolate',
      dunkin: 'Vanilla',
      culvers: 'All of them',
      mcDonalds: 'Sham-rock-shake',
      cupids_candies: 'Chocolate Malt'
    }
  ]
}






/*isolate keys or...*/

const keys = Object.keys(person3);
console.log(keys);
keys.forEach((key, index) => {
console.log(`${key}: ${person3[key]}`);});

/*OUTPUT*/
[ 'pizza', 'tacos', 'burgers', 'ice_cream', 'shakes' ]
pizza: Deep Dish,South Side Thin Crust
tacos: Anything not from Taco bell
burgers: Portillos Burgers
ice_cream: Chocolate,Vanilla,Oreo
shakes: [object Object]







/*isolate values to display food items*/
const values = Object.values(person3.shakes);
console.log(values);
values.forEach((values, index) => {
console.log(`${values}: ${person3[values]}`);});
 
/*OUTPUT*/
 [ 'Deep Dish', 'South Side Thin Crust' ],
  'Anything not from Taco bell',
  'Portillos Burgers',
  [ 'Chocolate', 'Vanilla', 'Oreo' ],
  [
    {
      oberwise: 'Chocolate',
      dunkin: 'Vanilla',
      culvers: 'All of them',
      mcDonalds: 'Sham-rock-shake',
      cupids_candies: 'Chocolate Malt'
    }
  ]
]
Deep Dish,South Side Thin Crust: undefined
Anything not from Taco bell: undefined
Portillos Burgers: undefined
Chocolate,Vanilla,Oreo: undefined
[object Object]: undefined




/*isolating values*/
Object.values(person3).forEach(val => console.log(val))

[ 'Deep Dish', 'South Side Thin Crust' ]
Anything not from Taco bell
Portillos Burgers
[ 'Chocolate', 'Vanilla', 'Oreo' ]
[
  {
    oberwise: 'Chocolate',
    dunkin: 'Vanilla',
    culvers: 'All of them',
    mcDonalds: 'Sham-rock-shake',
    cupids_candies: 'Chocolate Malt'
  }
]


/*                   NUMBER2
Write an object prototype for:
Person (name & age) 
printInfo method 
age ++ by 1 each time the method is called.

Create 2 people using the 'new' keyword,
Print their infos and age ++ by 3
*/

// Create our Person Prototype (Person class)

// create the printInfo method

// Create another method for the addAge method

function Person(name, age){
    let newObject = Object.create(Person.prototype)
    this.name = name
    this.age = age
    this.printInfo = function() { 
           console.log(this.name); 
           console.log(this.age); 
       } 
}

var obj = new Person('Lucy', 2);

Person.prototype.addAge = function(age){
    this.age += age
    
}

const Barney = new Person('Barney', 5);
const Lucy = new Person('Lucy', 2);

console.log(Barney);
console.log(Lucy);

console.log(this.name)
obj.printInfo(); 
Barney.addAge(3);



/*OUTPUT*/
Person { name: 'Barney', age: 5, printInfo: [Function] }
Person { name: 'Lucy', age: 2, printInfo: [Function] }
undefined
Lucy
2





/*                          NUMBER3
Write a function that takes in an array and
Removes every even index with a splice,
Replaces it with the string "even index" */


function replaceEvens(arr){
    let Given_arr = ['Max','Baseball','Reboot','Goku','Trucks','Rodger'];
    let Removed_arr = Given_arr.splice(1,1,"even index");
};

console.log(Removed_arr);
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/*OUTPUT*/