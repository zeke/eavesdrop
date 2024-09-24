#!/usr/bin/env node

import { spawn } from 'node:child_process'

const whisperProcess = spawn('./whisper.cpp/stream', [
  '-m', './whisper.cpp/models/ggml-base.en.bin',
  '--step', '500',
  '--length', '5000'
])

console.error('Listening to your microphone input...\n\n')

whisperProcess.stdout.on('data', (data) => {
  const transcript = data.toString()
  console.log(transcript)
})
