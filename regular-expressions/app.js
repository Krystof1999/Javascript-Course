const user = { email: "email@kd.cz" };

try {
  // Produce a ReferenceError
  myFunction();

  // Produce a TypeError
  null.myFunction();

  // Produce SyntaxError
  console.log(eval("Hello World"));

  // Produce URIError
  decodeURIComponent("%");

  if (!user.name) {
    throw "User has no name";
    throw new SyntaxError("user has no name");
  }
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError); // true
  console.log(e instanceof TypeError); // false
} finally {
  console.log("Finally runs all the time");
}
