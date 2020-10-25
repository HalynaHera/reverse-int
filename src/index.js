module.exports = function reverse (n) {
    if(n < 0){
        let arr = n.toString().split('').reverse();
        delete(arr[arr.length -1]); 
        return arr.join('');
    }
  return n.toString().split('').reverse().join('');
}
