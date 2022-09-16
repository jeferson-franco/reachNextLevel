function solution(experience, threshold, reward) {
    return experience + reward >= threshold;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test reachNextLevel

// alternative solution
