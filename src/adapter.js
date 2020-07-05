/**
 * Convert the interface of a class into another interface clients expect.
 * Adapter lets classes work together that couldn't otherwise because of
 * incompatible interfaces.
 *
 * In JS world: It is a wrapper with the same functionality, but different type.
 * It’s a map, consists of data and behaviour. Just replace original functions.
 */

// eslint-disable-next-line no-unused-vars
const knight = {
  name: "Lancelot",
  speed: 1,
  attackBowFn: () => console.log("Attack with bow!"),
  attackSwordFn: () => console.log("Attack with sword!"),
  blockFn: () => console.log("Block with sword!"),
};

// eslint-disable-next-line no-unused-vars
const commando = {
  name: "Commando",
  speed: 5,
  attackBowFn: () => console.log("Throw grenade"),
  attackSwordFn: () => console.log("Shot with M-16"),
  blockFn: () => ({}),
};
