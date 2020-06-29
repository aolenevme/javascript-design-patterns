/**
 * Represent an operation to be performed on the elements of an object
 * structure. Visitor lets you define a new operation without changing the
 * classes of the elements on which it operates.
 *
 * In JS world: If a language support multiple dispatch, you don’t need Visitor
 * pattern. Unfortunately, it is not true for Javascript either. But we can
 * create some sort of multiple dispatch. Consider this article for a more
 * detailed explanation: https://raganwald.com/2014/06/23/multiple-dispatch.html
 */

const { defMulti, defMethod } = require("./common/multiple-dispatch.js");

function equals(...methodArguments) {
  const [first, second] = methodArguments;

  return [first === second, methodArguments];
}

function greaterThan(...methodArguments) {
  const [first, second] = methodArguments;

  return [first > second, methodArguments];
}

const equalizer = defMulti(
  defMethod(equals(1, 1), (first, second) => `${first} is equal to ${second}`),
  defMethod(
    greaterThan(1, 2),
    (first, second) => `${first} is greater than ${second}`
  ),
  defMethod([true, []], () => "Default case")
);

console.log(equalizer());
