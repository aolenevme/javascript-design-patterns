/**
 * Given a language, define a represention for its grammar along with an
 * interpreter that uses the representation to interpret sentences in the
 * language.
 *
 * In JS world: It is a set of functions to process a tree.
 */

const { defMulti, defMethod } = require("./common/multiple-dispatch.js");

function isNumber(...methodArguments) {
  const [tree] = methodArguments;

  return [typeof tree === "number", methodArguments];
}

function isString(...methodArguments) {
  const [tree] = methodArguments;

  return [typeof tree === "string", methodArguments];
}

function isArray(...methodArguments) {
  const [tree] = methodArguments;

  return [Array.isArray(tree), methodArguments];
}

function isObject(...methodArguments) {
  const [tree] = methodArguments;

  return [typeof tree === "object" && !isArray(tree)[0], methodArguments];
}

function interpret(tree) {
  return defMulti(
    defMethod(isNumber(tree), (number) => `i${number}e`),
    defMethod(isString(tree), (string) => `${string.length}:${string}`),
    defMethod(isArray(tree), (array) => {
      const interpretedItems = array.map((item) => interpret(item)());

      const interpretedItemsString = interpretedItems.join("");

      return `l${interpretedItemsString}e`;
    }),
    defMethod(isObject(tree), (object) => {
      const interpretedItems = Object.entries(object).map(
        ([key, value]) => `${interpret(key)()}${interpret(value)()}`
      );

      const interpretedItemsString = interpretedItems.join("");

      return `d${interpretedItemsString}e`;
    })
  );
}

const interpretedTree = interpret({
  user: "Bertie",
  numberOfDownloadedTorrents: 623,
  numberOfUploadedTorrents: 0,
  donationInDollars: 0,
  prefferedCategories: ["porn", "murder", "scala"],
})();

console.log(interpretedTree);
