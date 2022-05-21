const edades = [
    {
        name: "Pepe",
        age: 32,
    },
    {
        name: "Juan",
        age: 1,
},
    {
        name: "Maria",
        age: 6,
    },
    {
        name: "Marcos",
        age: 23,
    },
    {
        name: "Esteban",
        age: 4,
    },
    {
        name: "Renzo",
        age: 23,
    },
    {
        name: "Jose",
        age: 36,
    },
    {
        name: "Julio",
        age: 23,
    },
    {
        name: "Nicolas",
        age: 46,
    },
    {
        name: "Ricardo",
        age: 8,
    },
    {
        name: "Paulo",
        age: 23,
    },
    {
        name: "Celina",
        age: 41,
    },
    {
        name: "Celina",
        age: 51,
    },
    {
        name: "Celina",
        age: 81,
    },
    {
        name: "Celina",
        age: 91,
    },
];
const result = edades
    .map(itme => itme.age)
    .reduce((obj,item) => {
        if (item <= 10) {
            if (!obj["0-10"]) {
                obj["0-10"] = 1;   
            }else{
                obj["0-10"] += 1;
            }
        } else {
            if (item <= 50) {
                if (!obj["10-50"]) {
                    obj["10-50"] = 1;   
                }else{
                    obj["10-50"] += 1;
                }
            }else{
                if (!obj["50-100"]) {
                    obj["50-100"] = 1;   
                }else{
                    obj["50-100"] += 1;
                }
            }
        }
        return obj;
    },{});

console.log(result);