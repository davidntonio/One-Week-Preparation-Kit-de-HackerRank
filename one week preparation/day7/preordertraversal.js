function preOrder(root) {
    if (root === null) {
      return;
    }
  
    process.stdout.write(root.data + ' ');
    preOrder(root.left);
    preOrder(root.right);
  }
  