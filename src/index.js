#!/usr/bin/env node

const Dice = require(__dirname + '/domain/Dice');
const args = process.argv.slice(2);

const dices = args[0].split(',');
const modifier = args[1] ? parseInt(args[1]) : 0;

const result = dices.map(dice => dice.split('d'))
    .filter(arr => arr.length === 2)
    .map(arr => new Dice(arr[1]).roll(arr[0]))
    .reduce((p, c) => p + c, 0);

console.log(result + modifier);
