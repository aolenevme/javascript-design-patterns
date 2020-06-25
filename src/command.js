// Command is just a function.
// Commands are an object-oriented replacement for callbacks

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
