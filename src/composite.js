/**
 * Compose objects into tree structures to represent part-whole hierarchies.
 * Composite lets clients treat individual objects and compositions of objects
 * uniformly.
 *
 * In JS world: It is a simple tree structure. This pattern is useful only for
 * tree and list.
 */

const tree = [
  "A",
  ["B", ["E", ["F"], ["G"]]],
  ["C", ["H"]],
  ["D", ["J"], ["K", ["L"], ["M"], ["N"]]],
];

console.log(tree.flat(3));
