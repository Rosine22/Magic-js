//Constant variable named Kelvin
const Kelvin = 0;
//converting Kelvin to celsius 
const celsius = Kelvin - 273; 
//coverting celisius to fahrenheit
 let fahrenheit =  celsius * (9/5) + 32;
 //round down the fahrenheit temperature
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahreneheit.`);
//convert to newton 
 let newton = celsius * (33/100);
 // rownd down
 newton=Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
