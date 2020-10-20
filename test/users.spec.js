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

    it ('rejects with error if user with email is not found', () => {
      return findUserByEmail('x@y.com').then(() => {
        assert.fail('Expected findUserByEmail function to reject')
      }, error => {
          assert.strictEqual(error.message, 'User with email: x@y.com was not found.')
      })
    })
})

describe('The findUserById function', () => {
  it ('should find a user by id', async () => {
    const response = await findUserById(1)

    assert.strictEqual(response.message, 'User found successfully.')
  })
  it ('rejects with error if user id is not found', () => {
    return findUserById(90).then(() => {
      assert.fail('Expected findUserById function to throw.')
    }, error => {
        assert.strictEqual(error.message, 'User with id: 90 was not found.')
    })
  })
})