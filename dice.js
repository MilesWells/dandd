const Dice = function() { };

const roll = (faces) => Math.floor(Math.random() * faces) + 1;

const rollDice = (faces, num) => {
    let values = Array.from(new Array(num).fill(faces), roll);

    return {
        values,
        total: values.reduce((total, value) => total + value)
    };

};

Dice.prototype.d4 = (num = 1) => rollDice(4, num);
Dice.prototype.d6 = (num = 1) => rollDice(6, num);
Dice.prototype.d8 = (num = 1) => rollDice(8, num);
Dice.prototype.d10 = (num = 1) => rollDice(10, num);
Dice.prototype.d12 = (num = 1) => rollDice(12, num);
Dice.prototype.d20 = (num = 1) => rollDice(20, num);
Dice.prototype.d100 = (num = 1) => rollDice(100, num);
Dice.prototype.d1000 = (num = 1) => rollDice(1000, num);
Dice.prototype.d10000 = (num = 1) => rollDice(10000, num);
Dice.prototype.d100000 = (num = 1) => rollDice(100000, num);

Dice.prototype.custom = (faces = 4, num = 1) => rollDice(faces, num);

Dice.prototype.multiple = (numbers) => {
    if(typeof numbers === 'string' || numbers instanceof String) {
        numbers = numbers.split(' ').map(str => parseInt(str));
    }

    let values = Array.from(numbers, roll);

    return {
        values,
        total: values.reduce((total, value) => total + value)
    };
};

module.exports = new Dice();