#!/usr/bin/env node

import stripAnsi from 'strip-ansi'
import { spawn } from 'node:child_process'

const whisperProcess = spawn('./whisper.cpp/stream', [
  '-m', './whisper.cpp/models/ggml-base.en.bin',
  '--step', '500',
  '--length', '5000'
])

const blurbs = []

console.log('Listening to your microphone input...\n\n')

whisperProcess.stdout.on('data', (data) => {
  const blurb = stripAnsi(data.toString()).trim()

  if (!blurb) return
  if (blurb.length < 2) return
  if (blurb.includes("[BLANK_AUDIO]")) return
  if (blurb.includes("[ Silence ]")) return
  if (blurb.includes("[Start speaking]")) return
  if (blurb.includes("[ Pause ]")) return

  if (blurbs[blurbs.length - 1] === blurb) return

  console.log(blurb)
  blurbs.push(blurb)
})