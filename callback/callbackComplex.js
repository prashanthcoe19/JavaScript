console.log('I need to master the solo of Fade to Black, must buy a Guitar');

const buyGuitar = (cb) => {
  setTimeout(() => {
    console.log('Check your bank balance');
    cb(null, true);
  }, 2000);
};

const learnGuitar = (cb) => {
  setTimeout(() => {
    console.log('Learning Guitar');
    cb(null, true);
  }, 3000);
};

const playSolo = () => {
  buyGuitar((err, success) => {
    if (err) {
      console.log('Not sufficient money to buy a guitar');
    } else {
      console.log('Start Learning Guitar');
      learnGuitar((err, success) => {
        if (err) {
          console.log('Practise Harder');
        } else {
          console.log('Awesome! nailed the solo');
        }
      });
    }
  });
};

playSolo();
