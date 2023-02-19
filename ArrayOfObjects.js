const users=[
    {
    firstName:"Sam",
    lastName:"Biden",
    age:26,
    address: {
        street:"Kaivokatu",
         Building: 32,
         City: "Helsinki"
    }
   },
    {firstName:"Siva",lastName:"Punjy",
    age:55,
    address: {
         street:"Poltokatu",
         Building: 22,
         City: "Vantaa"
      }
    },
    {firstName:"Ram",lastName:"Kews",age:50,
    address: {
        street:"Saloltokatu",
        Building: 11,
        City: "Espoo"
     }
},
    {firstName:"Ronaldo",lastName:"Cristiano",age:56,
    address: {
        street:"Jankikatu",
        Building: 2,
        City: "Helsinki"
     }
},  
  ];
  

  //Now for getting List of fullname
  const fullname=users.map((x)=>{
      return x.firstName+" "+x.lastName;
  })
  console.log(fullname);


//Write a function to get full street address from all users.
  const streetAddress = users.map((user) => {
    return user.address.street+" "+user.address.Building+" "+user.address.City;
  })
  console.log(streetAddress);



//Get the users Name having age less than 50 Or city is Helsinki
let newUsers = []

const sortedUsers = () =>{
  for(i=0; i<users.length; i++){
      if(users[i].age<50 || users[i].address.City == "Helsinki"){
         newUsers.push(users[i].firstName +" "+users[i].lastName);
     }
  }
    return newUsers
 }
console.log(sortedUsers(...users))



//Get the users info having age less than 50 and address helsinki
let info = users.filter((users)=>users.age <50 || users.address.City == "Helsinki");
console.log(info);


//Get the users  Fullname having age less than 50 and address helsinki
let UsersName = users.filter((users)=>users.age <50 || users.address.City == "Helsinki").map
((users) => users.firstName +" "+users.lastName);
console.log(UsersName);


//for getting list of ages
  const ages = users.map((user) =>{
    return user.age;
  })
console.log(ages);

//retun age from first user
console.log(users[0].age);
//return address of second user
console.log(users[1].address.street+" "+ users[1].address.Building+" "+ users[1].address.City);
//