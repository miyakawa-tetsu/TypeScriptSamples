function toUppercase(string) {
  if (typeof string !== "string") {
    throw TypeError("Wrong type given, expected a string");
  }

  return string.toUpperCase();
}

  try {
    toUppercase(4);
  } catch (error) {
    console.error(error.message);
  }