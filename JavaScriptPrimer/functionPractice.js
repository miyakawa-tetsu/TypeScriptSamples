function fn(x, y, z) {
  console.log(x); // => 1
  console.log(y); // => 2
  console.log(z); // => 3
}
const array2 = [1, 2, 3];
// Spread構文で配列を引数に展開して関数を呼び出す
fn(...array2);


function func14 () {
  console.log(arguments[0]);
}
func14("a","b","c");