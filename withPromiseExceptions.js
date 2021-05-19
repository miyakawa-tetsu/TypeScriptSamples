function toUppercase(string) {
    if (typeof string !== "string") {
      return Promise.reject(TypeError("Wrong type given, expected a string"));
    }
    const result = string.toUpperCase();
    return Promise.resolve(result);
  }
  
  toUppercase(4)
    .then(result => result)
    .catch(e => console.error(e.message))
    .finally(() => console.log("Run baby, run"));