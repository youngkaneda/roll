#!/usr/bin/env node

const Dice = require(__dirname + '/domain/Dice');
const args = process.argv.slice(2);
const range = (limit) => {
    return [...Array(limit).keys()];
}

Array.prototype.flatMap = function(lambda) {
    return Array.prototype.concat.apply([], this.map(lambda));
}

let dices = args[0].split(',');
const modifier = args[1] ? parseInt(args[1]) : 0;

const result = dices.map(dice => dice.split('d'))
    .filter(arr => arr.length === 2)
    .flatMap(arr => range(parseInt(arr[0])).map(v => new Dice(arr[1])))
    .map(dice => { return { type: `d${dice.sides}`, value: dice.roll() } });

if (result.length > 0) {
    console.log(result.map((obj) => `${obj.type} => ${obj.value}`).join(', '));
}
console.log('total =>', result.map(obj => obj.value).reduce((p, c) => p + c, 0) + modifier);
console.log('applied modifier =>', modifier);