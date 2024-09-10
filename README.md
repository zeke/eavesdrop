# 👂 Eavesdrop

A Node.js CLI that makes it easy to run [Whisper](https://github.com/ggerganov/whisper.cpp) locally to transcribe your microphone input.

## Prerequisites

- Git
- Node.js
- A C++ compiler (like the XCode command line tools on MacOS)

## Installation

Then install the `eavesdrop` CLI directly from GitHub:

```
npm i -g zeke/eavesdrop
```

This includes a postinstall script that downloads and compiles the `whisper.cpp` library.

## Usage

Run `eavesdrop` to start listening to your microphone input and print output to the console:

```
eavesdrop
```

Alternatively, you can pipe the output to a file:

```
eavesdrop > output.txt
```

## Nota Bene

> Eavesdropping is the act of secretly listening to a private conversation or communication without the consent of the participants.

This thing is intended be run knowingly (not secretly) by the owner of the computer, so maybe "eavesdrop" is a misnomer... I'm open to better name suggestions!
