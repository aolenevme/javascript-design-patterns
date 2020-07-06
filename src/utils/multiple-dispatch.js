/**
 * Unfortunately, Javascript doesn`t support multiple dispatch natively. But we
 * can create some sort of multiple dispatch. Consider this article for a more
 * detailed explanation: https://raganwald.com/2014/06/23/multiple-dispatch.html
 */

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
