/**
 * Represent an operation to be performed on the elements of an object
 * structure. Visitor lets you define a new operation without changing the
 * classes of the elements on which it operates.
 *
 * In JS world: If a language support multiple dispatch, you don’t need Visitor
 * pattern.
 */

const { defMulti, defMethod } = require("../utils/multiple-dispatch.js");

function equals(...methodArguments) {
  const [first, second] = methodArguments;

  return [first === second, methodArguments];
}

function greaterThan(...methodArguments) {
  const [first, second] = methodArguments;

  return [first > second, methodArguments];
}

const equalize = defMulti(
  defMethod(equals(1, 1), (first, second) => `${first} is equal to ${second}`),
  defMethod(
    greaterThan(1, 2),
    (first, second) => `${first} is greater than ${second}`
  ),
  defMethod([true, []], () => "Default case")
);

console.log(equalize());
