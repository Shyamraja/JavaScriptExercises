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

//retun age from first user
console.log(users[0].age);

//return address of second user
console.log(users[1].address.street+" "+ users[1].address.Building+" "+ users[1].address.City);


  //Now for getting List of fullname
  const fullname=users.map((users)=>{
      return users.firstName+" "+users.lastName;
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


//Write a function to Display the firstname of Active users
const names = users.filter((users)=> 
users.isActive).map((users =>users.firstName));
console.log(names);

//for getting list of ages
const ages = users.map((user) =>{
  return user.age;
})
console.log(ages);


//(Sort Method)write function to sort the users firstname in age descending order

users.sort((user1, user2) => 

user1.age < user2.age? 1:-1)
const firstnames = [];
for(let i =0; i < users.length; i++){
    firstnames.push(users[i].firstName);
  }
console.log("firstnames", firstnames)

//Better way to write function to sort the users firstname in age descending order

const fnames = users 
.sort((user1, user2) =>user1.age < user2.age? 1:-1) 
.map((user)=> user.firstName);
console.log("fnames", fnames);

//write a function to display fullnames of active users in age ascending order

let activeUsers = users.sort((user1 ,user2) => user1.age > user2.age? 1:-1)
.filter((user) => user.isActive)
.map((user) => user.firstName +" "+user.lastName);
console.log(activeUsers);


//write a function to display firstnames of active users in age ascending order
const firstname = users
.sort((user1, user2) =>(user1.age < user2.age? -1:1))
.filter((user) => user.isActive)
.map((user)=> user.firstName);
console.log(firstname);

