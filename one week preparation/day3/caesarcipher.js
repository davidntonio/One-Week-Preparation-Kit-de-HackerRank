function caesarCipher(s, k) {
    let encrypted = '';
  
    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i);
  
      if (s[i].match(/[a-z]/i)) {
        const baseCharCode = s[i].match(/[a-z]/) ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const shiftedCharCode = ((charCode - baseCharCode + k) % 26) + baseCharCode;
        encrypted += String.fromCharCode(shiftedCharCode);
      } else {
        encrypted += s[i];
      }
    }
  
    return encrypted;
  }
  
  function processData(input) {
    const lines = input.trim().split('\n');
    const length = parseInt(lines[0].trim(), 10);
    const unencryptedString = lines[1].trim();
    const rotationFactor = parseInt(lines[2].trim(), 10);
  
    const encryptedString = caesarCipher(unencryptedString, rotationFactor);
    console.log(encryptedString);
  }
  
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let _input = '';
  process.stdin.on('data', function (input) {
    _input += input;
  });
  
  process.stdin.on('end', function () {
    processData(_input);
  });
  