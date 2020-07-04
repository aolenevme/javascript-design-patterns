/**
 * Ensure a class only has one instance, and provide a global point of access
 * to it.
 *
 * In JS world: It is just a global variable
 */

// eslint-disable-next-line no-implicit-globals,no-undef
applicationState = {};

// eslint-disable-next-line max-len,no-warning-comments
// TODO: Make via Object.defineProperties so that applicationState cannot be reset

// eslint-disable-next-line no-undef
console.log(applicationState);
