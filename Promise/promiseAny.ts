/**
 * Promise.anyはリジェクトが発生しても、リゾルブしたPromiseが1つでもあればそれらのうち最初の1つを返す。
 * 全てのPromiseがリジェクトされると、AggregateErrorを発生させる。
 * 一部のブラウザおよびNode.js 15.0.0以上で使える。
 * targetをesnextとすることでTSでも使用できる
 *
  */ 

const promise1 = Promise.reject(Error("No good, sorry!!"));
const promise2 = Promise.reject(Error("Bad day ..."));

Promise.any([promise1, promise2])
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Always runs!"));

