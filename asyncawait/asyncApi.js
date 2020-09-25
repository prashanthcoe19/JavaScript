const fetch = require('node-fetch');
const apiCall = async () => {
  try {
    const response = await fetch(
      `http://www.json-generator.com/api/json/get/bUquKtVSBe?indent=2`
    );
    var result = await response.json();
    console.log(result);
  } catch (err) {
    console.log('error occured');
  }
};
apiCall();
