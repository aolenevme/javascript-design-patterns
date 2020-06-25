/**
 * Encapsulate a request as an object, thereby letting you parameterize clients
 * with different requests, queue or log requests, and support undoable
 * operations.
 *
 * In JS world: Command is just an object-oriented replacement for callback
 */

function execute(command) {
  command();
}

function login(username, password) {
  console.log(`Login: ${username}/${password}`);
}

function logout(username) {
  console.log(`Logout: ${username}`);
}

execute(() => login("qwerty", "12345"));
execute(() => logout("qwerty"));
