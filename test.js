import assert from 'node:assert/strict'
import { test } from 'node:test'
import sanitize from './lib/sanitize.js'

test('sanitize function cleans dirty string', () => {
  const dirtyString = `
    [Intro] Hello there!
    This is a test string (with parentheses).
    [ Silence ]
    It has some dirty parts.
    [BLANK_AUDIO]
    But also some clean parts.
    [Start speaking]
    Let's see if it gets sanitized properly.
    [ Pause ]
    The end.
  `

  const expectedCleanString =
    `This is a test string
It has some dirty parts.
But also some clean parts.
Let's see if it gets sanitized properly.
The end.`

  const cleanedString = sanitize(dirtyString)

  console.log({ dirtyString, expectedCleanString, cleanedString })

  assert.strictEqual(cleanedString, expectedCleanString)
})
