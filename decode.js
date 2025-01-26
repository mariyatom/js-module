export function decode(plaintext) {
  let decodedText = ''
  for (let i = 0; i < plaintext.length; i++) {
    let cc = plaintext.charCodeAt(i) - 9 // Subtract 9 from char code
    decodedText += String.fromCharCode(cc)
  }
  return decodedText
}
