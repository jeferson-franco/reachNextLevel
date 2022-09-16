const solution = require('./reachNextLevel.js');

test('test 1', () => {
    expect(solution(10, 15, 5)).toBe(true);
});

test('test 2', () => {
    expect(solution(10, 15, 4)).toBe(false);
});

test('test 3', () => {
    expect(solution(3, 6, 4)).toBe(true);
});

test('test 4', () => {
    expect(solution(84, 135, 36)).toBe(false);
});

test('test 5', () => {
    expect(solution(74, 170, 58)).toBe(false);
});

test('test 6', () => {
    expect(solution(80, 199, 15)).toBe(false);
});

test('test 7', () => {
    expect(solution(97, 57, 7)).toBe(true);
});

test('test 8', () => {
    expect(solution(235, 293, 4)).toBe(false);
});

test('test 9', () => {
    expect(solution(222, 137, 58)).toBe(true);
});

test('test 10', () => {
    expect(solution(16, 23, 16)).toBe(true);
});
