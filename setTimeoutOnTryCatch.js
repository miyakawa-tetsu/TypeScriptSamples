function failAfterOneSecond() {
    setTimeout(() => {
        console.log("Yeah");
        throw Error("Something went wrong!!");
    }, 1000)
}

// failAfterOneSecond(); // うまく動かない

try { //try/catch構文は同期的に動く。中の処理が非同期だとうまく動かない
    failAfterOneSecond(); 
} catch(e) {
    console.log(e.message);
}