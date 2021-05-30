

var func1 = function () {
    return null;
};


// let sym1 = Symbol('sym1');
// let sym2 = Symbol('sym1')

// console.log(sym1 === sym2);

// const a = 1_000_000;

// const a = "aaa\nbbb\nccc\n"
// const b = `
// ddd
// eee
// fff
// `

// const obj = {
//   "key": "value",
//   "name": "hoge"
// }


// const str = new String('test string');
// const str2 = 'test test2'
// console.log(str.length);
// console.log(str2.length);


// const a = 10 + 19
// console.log(a);


const m = new Map();

const o = {
  key1: false,
  key2: new Date(),
  key3: 'hello'
}
m.set('key1','GoodBye');
m.set('key2','GoAhead');

console.log(...m.keys()); //スプレッド構文
console.log(Object.keys(o));

// const keys = Object.keys(o)

// for (const key of keys) {
//   console.log(o[key])
// }

function addPrefix (text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト";
  return pre + text;
}

console.log(addPrefix("文字列"));