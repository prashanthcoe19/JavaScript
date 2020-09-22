// in prototype inheritence when we want to access properties from parent class
// , we cannot use super() method. we should use User.call() which calls parent constructor
// first thing we want to pass at User.call() is going to be context of,
// what the "this" keyword will be equal to inside the User constructor function
// we want 'this' keyword inside User.call() when we call it from admin-
// to be the new object we create using "new Admin"
// we attach properties from User constructor to User.call() so that it will be available to the new object we create
// however Admin will not have access to User's functions (login() and logout())
// so what we need to do is copy User prototype to admin prototype
// Admin.prototype = Object.create(User.prototype)
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in `);
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  users = users.filter((u) => u.username !== user.username);
};

const user1 = new User('batman', 'batman@gotham.com');
const user2 = new User('aquaman', 'aquaman@atlantis.com');
const user3 = new Admin('Superman', 'superman@kryptonite.com', 'Clark Kent');

let users = [user1, user2, user3];
console.log(users);

user3.deleteUser(user1);
console.log(users);
