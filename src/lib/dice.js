export function extractDiceFromString(diceRepresentation) {
  const diceRegex = /\d+d\d+((\+|\-)\d+)?/g;
  if (!diceRegex.test(diceRepresentation)) throw `Invalid Dice: ${diceRepresentation}`;

  const [prefix, sufix] = diceRepresentation.split('d');
  const quantity = parseInt(prefix);

  const operationRegex = /\+|\-/g;
  const hasBonus = operationRegex.test(sufix);
  const operationIndex = hasBonus ? sufix.search(operationRegex) : 0;

  const sides = parseInt(sufix.substring(0, hasBonus ? operationIndex : null));
  const bonus = hasBonus ? parseInt(sufix.substring(operationIndex)) : 0;
  return [quantity, sides, bonus];
}

export function runStringDice(diceRepresentation) {
  const [quantity, sides, bonus] = extractDiceFromString(diceRepresentation);

  return runDice(quantity, sides, bonus);
}

export function runDice(quantity, sides, bonus = 0) {
  const min = 1;
  const roll = new Array(quantity)
    .fill(0)
    .map(() => Math.floor(Math.random() * (sides + min) - min));

  const sum = roll.reduce((a, b) => a + b, 0) + bonus;

  return {
    sum,
    roll,
    bonus,
    dice: `${quantity}d${sides}${bonus >= 0 ? `+${bonus}` : bonus}`
  }
}



[
  "Valkanyr 1d20",
  "Balin 1d20",
  "Awren 1d20+1",
]