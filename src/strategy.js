/**
 * Define a family of algorithms, encapsulate each one, and make them
 * interchangeable. Strategy lets the algorithm vary independently
 * from clients that use it.
 *
 * In JS world: Strategy is just a function passed to another function
 */

const collection = [4, 5, 2, 9, 100, 3];

function forwardSort(first, second) {
  if (first < second) {
    return -1;
  }

  if (first > second) {
    return 1;
  }

  return 0;
}

function reverseSort(first, second) {
  if (first > second) {
    return -1;
  }

  if (first < second) {
    return 1;
  }

  return 0;
}

console.log(`Forward sort: ${collection.sort(forwardSort)}`);
console.log(`Reverse sort: ${collection.sort(reverseSort)}`);
