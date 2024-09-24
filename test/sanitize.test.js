import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import sanitize from '../lib/sanitize.js'

test('sanitize function cleans dirty string', async () => {
  const dirtyString = await readFile(join('test', 'fixtures', 'dirty-string.txt'), 'utf-8')
  const expectedCleanString = await readFile(join('test', 'fixtures', 'clean-string.txt'), 'utf-8')

  const cleanedString = sanitize(dirtyString)

  console.log({ dirtyString, cleanedString })

  assert.strictEqual(cleanedString, expectedCleanString)
})
