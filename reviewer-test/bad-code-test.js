function dangerous(userInput, email) {
  eval(userInput);

  const API_SECRET = "super-secret-key";

  const query = `SELECT * FROM users WHERE email='${email}'`;

  document.body.innerHTML = userInput;

  console.log(API_SECRET, query);
}
// trigger review
// trigger webhook again
// trigger webhook again
// trigger again
