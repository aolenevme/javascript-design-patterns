/**
 * Separate the construction of a complex object from its representation so that
 * the same construction process can create different representations.
 *
 * In JS world: It is all about passing optional arguments
 */

function areRequiredIngredientsSet({ name, amount, water }) {
  const nameString = String(name);
  const amountNumber = Number(amount);
  const waterNumber = Number(water);

  return nameString.length && amountNumber > 0 && waterNumber > 0;
}

function makeCoffee(ingredients) {
  if (!areRequiredIngredientsSet(ingredients)) {
    throw new Error("Name, amount and amount of water must be set");
  }

  const {
    name,
    amount,
    water,
    milk = 0,
    sugar = 0,
    cinnamon = 0,
  } = ingredients;

  console.log(
    `Make ${amount} ${name} with ${water} of water, ${milk} of milk, ${sugar} of sugar, ${cinnamon} of cinnamon`
  );
}

makeCoffee({ name: "Flat white", amount: 2, water: 100, milk: 100 });
makeCoffee({ name: "Americano", amount: 1, water: 100 });
makeCoffee({ name: "Exceptional coffee" });
