// 参照型 オブジェクト 必ず評価値がtrueになる

const a = [];
const o = {};
const m = new Map();
const f = (() => {});


// 値型 プリミティブ 値によって評価値がtrueになったりfalseになったりする

const nan = NaN;
const un = undefined;
const n = 0;
const s = "";
const nu = null;

function Main () {
  if (s) return 1;
  // if(n === 0) return false // C#などでは、ifの条件をbooleanにしないとコンパイルが通らない
  return 0;
}

console.log(Main());