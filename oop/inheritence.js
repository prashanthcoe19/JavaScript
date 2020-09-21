//methods from base class copies to derived class

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    return `${this.username} has logged in`;
  }

  logout() {
    return `${this.username} has logged out`;
  }

  uploadfoto() {
    return `${this.username} has uploaded foto`;
  }
}

// when we initialize contructor in inherited class, we can define extra properites only for inherited class.
// if we create new Admin, only the constructor in admin class will run,
// parent constructor only runs if there is no constructor in child class
// we should take parameters from parent class and call super() and attach properties there so that it looks for parent class
class Admin extends User {
  constructor(username, email, flag) {
    super(username, email);
    this.flag = flag;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const user1 = new User('Julio', 'julio123@gmail.com');
const user2 = new User('jonty', 'jonty@gmail.com');
const user3 = new Admin('Jason', 'jason@gmail.com', 'muted');

console.log(user3.uploadfoto());

// // console.log(user1, user2, user3);

// let users = [user1, user2, user3];
// console.log(users);

// user3.deleteUser(user2);
// console.log(users);
