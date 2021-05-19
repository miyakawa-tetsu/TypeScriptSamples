const promise1 = Promise.resolve("All good!!");
const promise2 = Promise.resolve("All good here too!!");

Promise.all([promise1, promise2]).then(results => console.log(results));

const promise3 = Promise.resolve("All good!");
const promise4 = Promise.reject(Error("No good, sorry!"));
const promise5 = Promise.reject(Error("Bad day ..."));

// すべてのPromiseのうち一つでもエラーが出たらcatchコールバックに飛ぶ
Promise.all([promise3, promise4, promise5])
  .then(results => console.log(results))
  .catch(error => console.error(error.message))
  .finally(() => console.log("Always runs!!"));