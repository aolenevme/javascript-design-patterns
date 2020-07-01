/**
 * Specify the kinds of objects to create using a prototypical instance, and
 * create new objects by copying this prototype
 *
 * In JS world: Prototype is not needed in immutable world. We can implement
 * basic immutability using the native JS API. Prototypical inheritance is
 * overhead, IMHO.
 */

const prototype = Object.freeze({
  name: "Sasha",
  email: "iamsasha1994@gmail.com",
  dateOfBirth: "01.01.1970",
  weight: "node_modules",
  gender: "male",
  status: "New (data) model every day",
});

const singleSasha = Object.freeze({ ...prototype, ...{ status: "single" } });
const marriedSasha = Object.freeze({ ...prototype, ...{ status: "married" } });

console.dir(singleSasha);
console.dir(marriedSasha);
