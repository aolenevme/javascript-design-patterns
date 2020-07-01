/**
 * Provide a way to access the elements of an aggregate object sequentially
 * without exposing its underlying representation.
 *
 * In JS world: Iterator is just a sequence. Iterable by default are strings,
 * arrays and objects. You can make a custom data structure iterable (see the
 * example below). Also consider this article: https://javascript.info/iterable
 */

const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current < this.last) {
          this.current += 1;

          return { done: false, value: this.current };
        }

        return { done: true };
      },
    };
  },
};

for (const number of range) {
  console.log(number);
}
