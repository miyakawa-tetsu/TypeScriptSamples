function failAfterOneSecond () {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(Error("Something went wrong!"));
        },1000);
    });
}
failAfterOneSecond().catch(reason => console.error(reason.message));