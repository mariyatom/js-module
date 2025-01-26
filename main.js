import { encode } from './encode.js'
import { decode } from './decode.js'

const input = document.getElementById('PlainTextArea')
const output = document.getElementById('CodedText')
const encodeButton = document.getElementById('EncodeButton')
const decodeButton = document.getElementById('DecodeButton')

// Event listener for encoding
encodeButton.addEventListener('click', () => {
  const plaintext = input.value
  const codedText = encode(plaintext)
  output.textContent = `Encoded: ${codedText}`
})

// Event listener for decoding
decodeButton.addEventListener('click', () => {
  const codedText = input.value
  const decodedText = decode(codedText)
  output.textContent = `Decoded: ${decodedText}`
})
