const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

let carsByMake: string[][] | string[] = [['Barco'], ['Niggers'], ['Toyota']];

carsByMake = carsByMake.flat();

const car = carMakers.pop();

carMakers.map((car) => {
  return car.toUpperCase();
});

const importantDates = [new Date(), '2030-10-10'];

//Tuples (Strongly typed array)
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40]; //Not very useful and can be replaced by objects
