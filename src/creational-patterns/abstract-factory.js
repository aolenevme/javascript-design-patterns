/**
 * Provide an interface for creating families of related or dependent objects
 * without specifying their concrete classes.
 *
 * In JS world: It is a set of related functions passed to abstract builder.
 * Factory Method defers object creation to a subclasses, Abstract Factory do
 * the same but for a set of related object.
 */

// eslint-disable-next-line max-params,no-unused-vars,no-empty-function
function levelFactory(wallFn, backFn, enemyFn, ...factoryArguments) {}

// eslint-disable-next-line no-empty-function
function makeStoneWall() {}

// eslint-disable-next-line no-empty-function
function makePlasmaWall() {}

// eslint-disable-next-line no-empty-function
function makeEarthBack() {}

// eslint-disable-next-line no-empty-function
function makeStarsBack() {}

// eslint-disable-next-line no-empty-function
function makeWormScout() {}

// eslint-disable-next-line no-empty-function
function makeUfoSoldier() {}

function undergoundLevelFactory(...factoryArguments) {
  return levelFactory(
    makeStoneWall,
    makeEarthBack,
    makeWormScout,
    ...factoryArguments
  );
}

function spaceLevelFactory(...factoryArguments) {
  return levelFactory(
    makePlasmaWall,
    makeStarsBack,
    makeUfoSoldier,
    ...factoryArguments
  );
}

undergoundLevelFactory({ stoneColor: "brown" });
spaceLevelFactory({ spaceColor: "black" });
