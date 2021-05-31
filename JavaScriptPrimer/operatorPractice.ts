function operator1 () {
  const a = 4 ;
  const b = "5";

  console.log(typeof a)
  console.log(Number(b) + 10)
}

function operator2 (includesText:string) {
  const test = "ichi jiro sabu shiro"
  if  (test.includes(includesText)) {
    console.log(test)
  } else {
    console.log("False")
  }

}

function operator3 () {
  const a = 20;
  console.log(a ?? "aがnullまたはundefinedなので右辺を返す。")
}

function operator4 () {
  //三項演算子
  const a = true ? "A" : "B"
  console.log(a);
}

// デフォルト引数：TypeScriptの場合
function addPrefixTs (text: string, prefix: string ="デフォルト") {
  return prefix + text;
}




operator1();

operator2("jiro");

operator3();

operator4();

console.log(addPrefixTs("文字列"));
