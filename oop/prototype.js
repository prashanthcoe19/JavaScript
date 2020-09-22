//Every Objects in JavaScript has a prototype
// Prototypes contains all methods for that object types
//__proto__ property does not store methods but only list/points availabe methods,
//  to array objects which is stored in array prototype
//Now when we defined methods in a class, javascript automatically took those methods and added them inside
// this proto property.
//however when we're not using classes we need to figure out a way to take our methods and store them inside this proto property.

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
};

console.log(userOne);
userOne.login();
