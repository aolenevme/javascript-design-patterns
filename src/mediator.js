/**
 * Define an object that encapsulates how a set of objects interact. Mediator
 * promotes loose coupling by keeping objects from referring to each other
 * explicitly, and it lets you vary their interaction independently.
 *
 * In JS world: It is just a one approach to reduce coupling.
 */

const mediator = {
  users: [],

  send(users, text) {
    users.forEach((user) => {
      receive(user, text);
    });
  },
};

function receive(user, text) {
  console.log(`${user.name} received the message: ${text}`);
}

function addUser(user) {
  mediator.users = [...mediator.users, user];
}

function sendMessage(user, text) {
  const { users, send } = mediator;

  send(users, `I am ${user.name}. ${text}`);
}

addUser({ name: "Kent Beck" });
addUser({ name: "Bob Martin" });
sendMessage({ name: "Sasha" }, "Hello, there!");
