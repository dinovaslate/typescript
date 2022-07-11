interface hasColor {
  color: string;
}

class Vehicle implements hasColor {
  constructor(public color: string, public drift: () => void) {}
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('Orange', () => console.log('Nyiiiiiiiit'));
vehicle.drift();
class Car extends Vehicle {
  drive(): void {
    console.log('Vrooom');
  }
}
const car = new Car('Red', () => console.log('Brrrkkkkk'));
car.drive();
car.honk();
car.drift();

const sayColor = (object: hasColor): void => {
  console.log(object.color);
};
const myCar = {
  color: 'blue',
};
function sayColor2(this: hasColor) {
  console.log(this.color);
}
function addPropertyOrder(this: Record<string, any>, ...rest: object[]) {
  for (const argument of Object.values(rest)) {
    const [key, val] = Object.entries(argument).flat();
    this[key as string] = val;
  }
}
const fieldToAdd: object[] = [
  { name: 'Toyota Alphard' },
  { model: 'G' },
  { price: '120K USD' },
];

addPropertyOrder.apply(myCar, fieldToAdd);
console.log(myCar);

const SayThisThing = (...rest: string[]): void => {
  console.log.apply(null, rest);
};

SayThisThing('Saya', 'Suka', 'bola');

function colorMyCar(this: any) {
  this.color = 'red';
}
let object = { name: 'Civic' };
colorMyCar.call(object);
console.log(object);
