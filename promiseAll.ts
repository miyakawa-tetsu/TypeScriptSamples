const promise6 = Promise.resolve("All good!");
const promise7 = Promise.reject(Error("No good, sorry!"));
const promise8 = Promise.reject(Error("Bad day ..."));

// すべてのPromiseのうち一つでもエラーが出たらcatchコールバックに飛ぶ
try {
  const all = await Promise.all([promise6, promise7, promise8]);
  console.log(all);
} catch (e) {
  console.error(e.message);
}
