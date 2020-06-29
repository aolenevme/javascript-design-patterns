/**
 * Define the skeleton of an algorithm in an operation, deferring some
 * steps to subclasses. Template Method lets subclasses redefine certain
 * steps of an algorithm without changing the algorithm's structure.
 *
 * In JS world: It is just strategy with defaults. We can use multiple
 * dispatching in addition instead of explicit creation of separate functions.
 * Reference visitor for detailed information.
 */

function isUserRegistered(user) {
  console.log(
    `Checking user in our system...\nLogin: ${user.login}\nPassword: ${user.password}`
  );

  return true;
}

function returnNewAccessToken() {
  return "NEW_ACCESS_TOKEN";
}

function auth(
  user = { login: "", password: "" },
  log = () => console.log(`\nDefault logging: ${user}`)
) {
  log();

  if (isUserRegistered(user)) {
    return returnNewAccessToken();
  }

  throw new Error("Unsuccessful authorization");
}

function notifyKentBeckDuringAuth(user) {
  auth(user, () =>
    console.log(
      `\nHello, Kent Beck! New user has tried to authorize: ${user.login}`
    )
  );
}

function notifyUncleBobDuringAuth(user) {
  auth(user, () =>
    console.log(
      `\nHello, Uncle Bob! New user has tried to authorize: ${user.login}`
    )
  );
}

function notifyStdoutDuringAuth(user) {
  auth(user);
}

const user = { login: "iamsasha1994", password: "qwerty" };

notifyKentBeckDuringAuth(user);
notifyUncleBobDuringAuth(user);
notifyStdoutDuringAuth(user);
