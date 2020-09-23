const fetch = require('node-fetch');

const apiCall = () => {
  let prom = new Promise((resolve, reject) => {
    resolve(
      fetch(`http://www.json-generator.com/api/json/get/bUquKtVSBe?indent=2`)
    );
  });
  return prom;
};

apiCall()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log('errr', err);
  })
  .finally(() => {
    console.log('promise settled');
  });
