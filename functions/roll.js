const rollDice = (numDice, numSides) => {
  let rolls = [];

  for (let i = 0; i < numDice; i++) {
    let value = Math.ceil(Math.random() * numSides);
    rolls.push(value);
  }

  return rolls.reduce((roll, total) => (total += roll), 0);
};

export { rollDice };
