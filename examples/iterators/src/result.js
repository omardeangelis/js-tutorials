/**
 * @description Iterator example
 */
const iter = {
  count: 0,
  next() {
    return {
      value: this.count++,
      done: this.count >= 10,
    };
  },
};

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// let current = iter.next();

// while (!current.done) {
//   console.log(current.value);
//   current = iter.next();
// }

// let next;

// do {
//   next = iter.next();
//   console.log(next.value);
// } while (!next.done);

/**
 * @description iterable
 */
const iterable = {
  count: 0,
  next() {
    return {
      value: this.count++,
      done: this.count >= 10,
    };
  },
  [Symbol.iterator]() {
    return this;
  },
};

// puoi solo "consumare" un iterable una sola volta. Poi "finisce"
// const array = Array.from(iterable);

// console.log(array, "array");

// for (const value of iterable) {
//   console.log(value, "value");
// }

/**
 * @description generator
 */
function* gen() {
  yield 1;
  yield 2;
}

const generator = gen();
const generator2 = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const value of generator2) {
  console.log(value);
}

function* oddGenerator(max) {
  let num = 1;
  while (true) {
    if (num > max) {
      break;
    }
    yield num;
    num += 2;
  }
}

const odd = oddGenerator(2000);

// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);
// console.log(odd.next().value);

for (const value of odd) {
  console.log(value);
}
