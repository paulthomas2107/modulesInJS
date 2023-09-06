import { sum, sub } from './calc.js'; // need JS in plain JS add module to def
import { div, mult, sum as newSum } from './calcNew.js'; // inc alias for add
import squareAndAdd from './calcDefault.js'; // when you have only ONE thing to export no need for braces
import { default as newName } from './calcDefault.js'; // Rename function imported - can be anything
import thisWorksToo from './calcDefault.js'; // As above
import * as multiStuff from './multiCalc.js'; // No need to individuallty import each function - use *
import * as combine from './combineExample.js';

console.log('Learning Modules');

console.log(sum(10, 20), sub(20, 18));
console.log(div(10, 20), mult(20, 18));
console.log(squareAndAdd(10, 20));
console.log(newName(100, 200));
console.log(thisWorksToo(200, 300));
console.log(newSum(12.1, 34.12));
console.log(multiStuff.m1(1, 2, 3));
console.log(multiStuff.m2(3, 4, 5, 6));
console.log(multiStuff.m3(10, 20, 30, 2));
console.log(combine.channelName());
console.log(combine.multiCalc.add1(1, 99));
console.log(combine.multiCalc.sub1(1, 99));

// Dynamic import with Promise
const country = 'ES';
if (country === 'UK') {
  const { sayHi } = await import('./greeting.js'); // Promise
  console.log(sayHi());
} else if (country === 'ES') {
  const { sayHola } = await import('./greeting.js'); // Promise
  console.log(sayHola());
}

// More Promise
const promises = Promise.all([
  await import('./greeting.js'),
  await import('./calc.js'),
]);

promises.then((result) => {
  console.log(result[0].sayHi());
  console.log(result[0].sayHola());
  console.log(result[1].sum(1, 2));
});
