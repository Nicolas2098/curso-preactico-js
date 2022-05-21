const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const resp = team.every(item => item.age > 15);

  if(resp){
      console.log("Equipo valido");
  }else{
    console.log("Equipo no valido");
  }