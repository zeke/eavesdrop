import stripAnsi from 'strip-ansi'

export default function sanitize (transcript) {
  const lines = transcript
    .split('\n')
    .filter(line => line.trim() !== '')
    .filter(line => line.length > 2)
    .map(line => {
      return stripAnsi(line).trim()
    })

  const filteredLines = lines.filter((line, index, array) => {
    // square brackets
    if (line.match(/\[.*?\]/)) return false

    // parentheses
    if (line.match(/\(.*?\)/)) return false

    // if next line starts with this line, return false
    const nextLine = index < array.length - 1 ? array[index + 1] : ''

    // Check if the next line starts with this line, ignoring trailing periods
    if (nextLine.toLowerCase().startsWith(line.trim().replace(/\.$/, '').toLowerCase())) return false

    return true
  })

  return filteredLines.join('\n')
}
