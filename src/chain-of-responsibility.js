/**
 * Avoid coupling the sender of a request to its receiver by giving more than
 * one object a chance to handle the request. Chain the receiving objects and
 * pass the request along the chain until an object handles it.
 *
 * In JS world: It is just an approach to function composition
 */

function chain(message) {
  try {
    return profanityFilter(logFilter(rejectFilter(message)));
  } catch (error) {
    console.error(error);
  }
}

function profanityFilter(message) {
  return message.replace("fuck", "f*ck");
}

function logFilter(message) {
  console.log(message);

  return message;
}

function rejectFilter(message) {
  if (message.startsWith("[A Profit NY]")) {
    return message;
  }

  throw new Error("Message doesn`t start with '[A Profit NY]'");
}

console.log(chain("[A Profit NY] fuck"));
console.log(chain("fuck"));
