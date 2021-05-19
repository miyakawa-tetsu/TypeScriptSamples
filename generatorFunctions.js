function* generate() {
    try {
    yield 33;
    yield 99;
    } catch(e) {
        console.log(e.message);
    }
}

const go = generate();

console.log(go.next());
console.log(go.next());
go.throw(Error('Tired of iterating!!')); // この行を置く位置によっては別のタイミングでエラーが出る
console.log(go.next());
console.log(go.next());
