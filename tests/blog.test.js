const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('dummy', () => {
    test('dummy returns one', async () => {

    const response = await fetch('http://localhost:3003/api/blogs')
    const blogs = await response.json()
    
    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
    })
})