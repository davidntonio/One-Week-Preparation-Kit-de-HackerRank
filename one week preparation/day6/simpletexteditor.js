class TextEditor {
    constructor() {
      this.text = '';
      this.operations = [];
      this.undoStack = [];
    }
  
    append(string) {
      this.text += string;
      this.operations.push(['append', string]);
    }
  
    delete(k) {
      const deleted = this.text.slice(-k);
      this.text = this.text.slice(0, -k);
      this.operations.push(['delete', deleted]);
    }
  
    print(k) {
      console.log(this.text[k - 1]);
    }
  
    undo() {
      if (this.operations.length === 0) {
        return;
      }
  
      const [lastOpType, lastOpArg] = this.operations.pop();
  
      if (lastOpType === 'append') {
        this.text = this.text.slice(0, -lastOpArg.length);
      } else if (lastOpType === 'delete') {
        this.text += lastOpArg;
      }
  
      this.undoStack.push([lastOpType, lastOpArg]);
    }
  
    redo() {
      if (this.undoStack.length === 0) {
        return;
      }
  
      const [lastOpType, lastOpArg] = this.undoStack.pop();
  
      if (lastOpType === 'append') {
        this.text += lastOpArg;
        this.operations.push([lastOpType, lastOpArg]);
      }
    }
  }
  
  function processData(input) {
    const operations = input.split('\n').slice(1);
    const editor = new TextEditor();
  
    for (let i = 0; i < operations.length; i++) {
      const operation = operations[i].split(' ');
  
      if (operation[0] === '1') {
        editor.append(operation[1]);
      } else if (operation[0] === '2') {
        editor.delete(parseInt(operation[1]));
      } else if (operation[0] === '3') {
        editor.print(parseInt(operation[1]));
      } else if (operation[0] === '4') {
        editor.undo();
      } else if (operation[0] === '5') {
        editor.redo();
      }
    }
  }
  
  processData(`7
  1 abc
  3 3
  2 3
  1 xy
  3 2
  4
  3 1`);
  