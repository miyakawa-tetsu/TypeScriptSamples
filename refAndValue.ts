/**
 * 数値を2倍にして返す。元となる数値は値型（プリミティブ型）のためイミュータブル（不変）
 * @param n 値渡しとして使われる数値
 * @returns 2倍された値
 */
function multiply(n: number): number {
	return n * 2;
}

/**
 * 数値配列の中身をそれぞれ2倍にする。このように配列を戻り値として渡すかどうかにかかわらず、元となる配列は参照型（オブジェクト型）のためミュータブル（可変）
 * このような使い方は望ましくなく、可能な限り引数はイミュータブルに保つことが求められる
 * @param nArr 
 */
function multiplyArr (nArr: number[]) : number[] { // : void { 
	for(let i = 0; i< nArr.length; i++) {
		nArr[i] = nArr[i] * 2;
	}
	return nArr;
}

(() => { // 無名関数

	const n = 1;
	console.log(n);
	console.log(multiply(n));
	console.log(n);

	const n2 = [1,2,3];
	console.log(n2);
	console.log(multiplyArr(n2));
	console.log(n2);

})();