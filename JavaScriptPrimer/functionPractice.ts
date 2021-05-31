//Rest parameters
function func12 (...args: number[]) {
  console.log(args[0]);
  console.log(args.join(' '));
}
func12(1,2,3);



function func13 (x: number, y: number, z: number) {
  console.log(x);
  console.log(y);
  console.log(z);
  return;
}
const array3 = [1 ,2 ,3];
func13(array3[0],array3[1],array3[2]);
// func13(...array2);



function func15 ({ id }:User) {
  console.log(id);
}
interface User {
  id : string
}

const user: User = {
  id: "51"
}
func15(user);


const array = [1, 2, 3];
// 仮引数が1つなので`()`を省略できる
// 関数の処理が1つの式なので`return`文を省略できる
const doubleArray = array.map(value => value * 2);
console.log(doubleArray); // => [2, 4, 6]