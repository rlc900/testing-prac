const {parse, stringify} = require('../parse-stringify');
const assert = require('assert')

describe('The stringify function', () => {
    it ('should stringify an object into a valid query string', () => {
        const actual = stringify({by: 'kati-frantz'})

        const expected = 'by=kati-frantz'

        assert.strictEqual(actual, expected)
    })
})

describe('The parse function', () => {
    it ('should pass a query string into an object', () => {

        const actual = parse('?by=kati-frantz')

        const expected = {by: 'kati-frantz'}

        assert.deepStrictEqual(actual, expected)
    })
});