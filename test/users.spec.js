const {findUserByEmail, findUserById} = require('../users');
const assert = require('assert');

describe('The findUserByEmail function', () => {
    it('finds a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com').then((resp) => {
            assert.strictEqual(resp.message, 'User found successfully.')

            done()
        })
    })

    it ('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then((resp) => {
          assert.strictEqual(resp.message, 'User found successfully.')
        })
    })
    it ('finds a user by email (Using async/await)', async () => {
          const response = await findUserByEmail('bahdcoder@gmail.com')

          assert.strictEqual(response.message, 'User found successfully.')
    })
})