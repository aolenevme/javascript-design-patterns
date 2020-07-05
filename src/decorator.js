/**
 * Attach additional responsibilities to an object dynamically.
 * Decorators provide a flexible alternative to subclassing for extending
 * functionality.
 *
 * In JS world: It is a wrapper with the same type, but different functionality.
 * Pay attention to power armor decorator. Anyway very similar to adapter
 */

const lancelot = {
  name: "Lancelot",
  speed: 1,
  hp: 100,
  attackBowFn: () => console.log("Attack with bow!"),
  attackSwordFn: () => console.log("Attack with sword!"),
  blockFn: () => console.log("Block with sword!"),
};

function makeKnightWithMoreHp(knight) {
  return { ...knight, hp: knight.hp + 50 };
}

function makeKnightWithPowerArmor(knight) {
  return {
    ...knight,

    blockFn: () => {
      knight.blockFn();
      console.log("Block with power armor!");
    },
  };
}

function createSuperKnight(knight) {
  return makeKnightWithPowerArmor(makeKnightWithMoreHp(knight));
}

createSuperKnight(lancelot).blockFn();
