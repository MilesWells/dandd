'use strict';

const dice = require('../dice');

describe('Dice Module', () => {
    describe('d4', () => {
        it('should roll a single d4 and the total should be equal to the only value', () => {
            let roll = dice.d4();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d4s and total them', () => {
            let roll = dice.d4(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d6', () => {
        it('should roll a single d6 and the total should be equal to the only value', () => {
            let roll = dice.d6();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d6s and total them', () => {
            let roll = dice.d6(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d8', () => {
        it('should roll a single d8 and the total should be equal to the only value', () => {
            let roll = dice.d8();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d8s and total them', () => {
            let roll = dice.d8(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d10', () => {
        it('should roll a single d10 and the total should be equal to the only value', () => {
            let roll = dice.d10();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d10s and total them', () => {
            let roll = dice.d10(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d12', () => {
        it('should roll a single d12 and the total should be equal to the only value', () => {
            let roll = dice.d12();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d12s and total them', () => {
            let roll = dice.d12(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d20', () => {
        it('should roll a single d20 and the total should be equal to the only value', () => {
            let roll = dice.d20();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d20s and total them', () => {
            let roll = dice.d20(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d100', () => {
        it('should roll a single d100 and the total should be equal to the only value', () => {
            let roll = dice.d100();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d100s and total them', () => {
            let roll = dice.d100(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d1000', () => {
        it('should roll a single d1000 and the total should be equal to the only value', () => {
            let roll = dice.d1000();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d1000s and total them', () => {
            let roll = dice.d1000(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d10000', () => {
        it('should roll a single d10000 and the total should be equal to the only value', () => {
            let roll = dice.d10000();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d10000s and total them', () => {
            let roll = dice.d10000(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('d100000', () => {
        it('should roll a single d100000 and the total should be equal to the only value', () => {
            let roll = dice.d100000();

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 d100000s and total them', () => {
            let roll = dice.d100000(3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('custom', () => {
        it('should roll a single custom die with 7 faces and the total should be equal to the only value', () => {
            let roll = dice.custom(7);

            expect(roll.values.length).toBe(1);
            expect(roll.values[0]).toBe(roll.total);
        });

        it('should roll 3 custom dice with 7 faces and total them', () => {
            let roll = dice.custom(7, 3);

            expect(roll.values.length).toBe(3);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });

    describe('multiple', () => {
        it('should roll a d4, d6, d7, and d10 passed as a string and sum them', () => {
            let roll = dice.multiple('4 6 7 10');

            expect(roll.values.length).toBe(4);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });

        it('should roll a d4, d6, d7, and d10 passed as an array and sum them', () => {
            let roll = dice.multiple([4, 6, 7, 10]);

            expect(roll.values.length).toBe(4);
            expect(roll.hasOwnProperty('total')).toBe(true);
        });
    });
});