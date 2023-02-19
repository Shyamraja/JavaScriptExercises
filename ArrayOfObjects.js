const users=[
    {firstName:"Sam",lastName:"Biden",age:26},
    {firstName:"Siva",lastName:"Punjy",age:35},
    {firstName:"Ram",lastName:"Kews",age:50},
    {firstName:"Ronaldo",lastName:"Cristiano",age:36},  
  ];
  //Now for getting List of fullname
  const fullname=users.map((x)=>{
      return x.firstName+" "+x.lastName;
  })
  console.log(fullname);