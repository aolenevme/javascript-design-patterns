/**
 * Define an interface for creating an object, but let subclasses decide which
 * class to instantiate. Factory Method lets a class defer instantiation to
 * subclasses.
 *
 * In JS world: It is a strategy for creating objects.
 */

function mazeBuilder(...builderArguments) {
  const [makeFn, ...makeFnArguments] = builderArguments;

  return makeFn(...makeFnArguments);
}

function makeWoodenMaze(...makeFnArguments) {
  console.log("Make wood maze");

  return makeFnArguments;
}

function makeIronMaze(...makeFnArguments) {
  console.log("Make iron maze");

  return makeFnArguments;
}

function woodMazeBuilder(...builderArguments) {
  return mazeBuilder(...builderArguments);
}

function ironMazeBuilder(...builderArguments) {
  return mazeBuilder(...builderArguments);
}

const woodenMaze = woodMazeBuilder(makeWoodenMaze, { material: "wood" });
const ironMaze = ironMazeBuilder(makeIronMaze, { material: "iron" });

console.log(woodenMaze, ironMaze);
