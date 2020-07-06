/**
 * Ensure a class only has one instance, and provide a global point of access
 * to it.
 *
 * In JS world: It is just a global variable.
 */

Object.defineProperty(global, "applicationState", {
  value: {
    backgroundStyle: "black",
    fontStyle: "Arial",
  },
});

// eslint-disable-next-line no-undef
console.log(applicationState);
