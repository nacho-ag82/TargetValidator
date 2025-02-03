const estaEnchina = require('./targetValidator');

test('should return true for coordinates within China', () => {
    expect(estaEnchina(30.0, 120.0)).toBe(true); // Hangzhou
    expect(estaEnchina(39.9, 116.4)).toBe(true); // Beijing
    expect(estaEnchina(22.3, 114.2)).toBe(true); // Hong Kong
});

test('should return false for coordinates outside China', () => {
    expect(estaEnchina(55.0, 120.0)).toBe(false); // North of China
    expect(estaEnchina(30.0, 140.0)).toBe(false); // East of China
    expect(estaEnchina(10.0, 120.0)).toBe(false); // South of China
    expect(estaEnchina(30.0, 70.0)).toBe(false); // West of China
});

test('should return false for coordinates on the boundary of China', () => {
    expect(estaEnchina(18.0, 73.5)).toBe(true); // Southwest corner
    expect(estaEnchina(53.6, 135.0)).toBe(true); // Northeast corner
    expect(estaEnchina(18.0, 135.0)).toBe(true); // Southeast corner
    expect(estaEnchina(53.6, 73.5)).toBe(true); // Northwest corner
});