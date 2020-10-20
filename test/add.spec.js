const add = require('../add')
const assert = require('assert')

// const result = add(1,3)
// const expected = 4;

// an assertion is a check to see if our tests would pass or not. 
// usually you would have an expected to compare to the result.
// assertion:
// if (result === 4) {
//     console.log('tests pass!')
// } else {
//     throw new Error('Expected 1 + 3 to equal 4')
// }

// assert.strictEqual(result, expected, 'Add function does not work properly.')

// provided by mocha
describe('The add fucntion', () => {
    it ('adds two numbers', () => {
        const result = add(1, 3)
        const expected = 4

        assert.strictEqual(result, expected)

    })
})


// test comment 2