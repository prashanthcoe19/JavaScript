// An Example of Callback Hell //
// A mock program to login and get different details//

console.log('Login');

const loginUser = (email, password, callback) => {
  setTimeout(() => {
    callback({ email });
  }, 2000);
};

const getFriends = (email, callback) => {
  setTimeout(() => {
    callback(['robin', 'gordon']);
  }, 2500);
};

const getEnemies = (email, callback) => {
  setTimeout(() => {
    callback(['Joker', 'Riddler']);
  }, 3000);
};

const user = loginUser('brucewayne@gotham.com', 1234567, (user) => {
  console.log('You are logged in as:', user.email);
  getFriends(user.email, (friends) => {
    console.log('Your friends are:', friends);
    getEnemies(user.email, (enemies) => {
      console.log(`Your enemies are`, enemies);
    });
  });
});
