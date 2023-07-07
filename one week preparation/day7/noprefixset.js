function noPrefix(words) {
    const trie = {};
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      let currentNode = trie;
      let isPrefix = false;
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
  
        if (!currentNode[char]) {
          currentNode[char] = {};
        } else if (currentNode[char]['*']) {
          isPrefix = true;
          break;
        }
  
        currentNode = currentNode[char];
      }
  
      if (isPrefix) {
        console.log('BAD SET');
        console.log(word);
        return;
      }
  
      currentNode['*'] = true;
    }
  
    console.log('GOOD SET');
  }
  
  const words = ['aab', 'defgab', 'abcde', 'aabcde', 'cedaaa', 'bbbbbbbbbb', 'jabjjjad'];
  noPrefix(words);
  