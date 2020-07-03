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

  return [typeof tree === "object" && !isArray(tree), methodArguments];
}

function interpret(tree) {
  return defMulti(
    defMethod(isNumber(tree), (number) => `i${number}e`),
    defMethod(isString(tree), (string) => `${string.length}:${string}`),
    defMethod(isArray(tree), (array) => {
      const interpretedItems = array.map((item) => interpret(item));

      return `l${interpretedItems}e`;
    }),
    defMethod(isObject(tree), (object) => {
      const interpretedItems = Object.entries(object).map(
        ([key, value]) => `${interpret(key)}${interpret(value)}`
      );

      return `d${interpretedItems}e`;
    })
  );
}

interpret({
  user: "Bertie",
  numberOfDownloadedTorrents: 623,
  numberOfUploadedTorrents: 0,
  donationInDollars: 0,
  prefferedCategories: ["porn", "murder", "scala"],
});
