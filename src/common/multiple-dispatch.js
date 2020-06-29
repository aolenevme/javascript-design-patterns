function defMulti(...methods) {
  return () => {
    for (const method of methods) {
      const value = method();

      if (value !== undefined) {
        return value;
      }
    }
  };
}

function defMethod(guard, body) {
  const [condition, methodArguments] = guard;

  return () => (condition ? body(...methodArguments) : undefined);
}

module.exports = { defMulti, defMethod };
