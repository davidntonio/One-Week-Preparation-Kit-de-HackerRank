function isBalanced(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const bracket = s[i];
  
      if (bracket === '(' || bracket === '{' || bracket === '[') {
        stack.push(bracket);
      } else {
        if (stack.length === 0) {
          return 'NO';
        }
  
        const top = stack.pop();
  
        if (
          (bracket === ')' && top !== '(') ||
          (bracket === '}' && top !== '{') ||
          (bracket === ']' && top !== '[')
        ) {
          return 'NO';
        }
      }
    }
  
    if (stack.length === 0) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
  
  function processData(input) {
    const strings = input.split('\n').slice(1);
  
    for (let i = 0; i < strings.length; i++) {
      const result = isBalanced(strings[i]);
      console.log(result);
    }
  }
  
  processData(`3
  {[()]}
  {[(])}
  {{[[(())]]}}`);
  