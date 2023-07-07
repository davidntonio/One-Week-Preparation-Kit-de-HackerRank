function findZigZagSequence(arr, n) {
    if (n <= 2) {
      return arr;
    }
  
    var zigzag = [];
    arr.sort(function(a, b) {
      return a - b;
    });
  
    var mid = Math.floor((n - 1) / 2);
    var i = 0;
    var j = mid + 1;
  
    while (i <= mid && j < n) {
      zigzag.push(arr[i]);
      zigzag.push(arr[j]);
      i++;
      j++;
    }
  
    if (n % 2 !== 0) {
      zigzag.push(arr[mid]);
    }
  
    var reversed = zigzag.slice(mid + 1, n).reverse();
    zigzag = zigzag.slice(0, mid + 1).concat(reversed);
  
    return zigzag;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7];
  var n = arr.length;
  var result = findZigZagSequence(arr, n);
  console.log(result.join(' '));
  