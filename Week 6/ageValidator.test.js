const { isAdult } = require('./ageValidator.js');

test('Age 20 should be adult', () => {
    expect(isAdult(20)).toBe(true);
});

test('Age 17 should not be adult', () => {
    expect(isAdult(17)).toBe(false);
});

test('Age 0 should not be adult', () => {
    expect(isAdult(0)).toBe(false);
});

test('Negative age should throw error', () => {
    expect(() => isAdult(-5)).toThrow('Invalid age');
});
