const users=[
    {
    id: 1,
    firstName:"Sam",
    lastName:"Biden",
    age:26,
    isActive: true,
    address: {
        street:"Kaivokatu",
         Building: 32,
         City: "Helsinki"
    }
   },
   {
   id: 2,
    firstName:"Siva",
    lastName:"Punjy",
    age:55,
    isActive: false,
    address: {
         street:"Poltokatu",
         Building: 22,
         City: "Vantaa"
      }
    },
    {
      id: 3,
      firstName:"Ram",
      lastName:"Kews",
      age:50,
      isActive: true,
    address: {
        street:"Saloltokatu",
        Building: 11,
        City: "Espoo"
     }
},
    {
      id: 4,
      firstName:"Ronaldo",
      lastName:"Cristiano",
      age:56,
      isActive: false,
    address: {
        street:"Jankikatu",
        Building: 2,
        City: "Helsinki"
     }
},  
  ];


//Write function to display the user's name using forEach
const Names = [];
users.forEach((users) =>{
   Names.push(users.firstName + " " +users.lastName );
});
console.log(Names);



//Write function to display the active user's name using forEach
const userNames = [];
users.forEach((users) =>{
    if (users.isActive)
    userNames.push(users.firstName + " " +users.lastName );
  });
console.log(userNames);


//Map function is better solution than for each
const userName = users.map((users) => users.firstName + " "+ users.lastName );
console.log(userName);


//display active users names
const userNam = users.filter((users) => users.isActive).map((users) => users.firstName +" "+ users.lastName);
console.log(userNam);