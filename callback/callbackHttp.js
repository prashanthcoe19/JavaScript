const apiCall = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });
  request.open(
    'GET',
    'http://www.json-generator.com/api/json/get/bUquKtVSBe?indent=2'
  );
  request.send();
};

apiCall((err, data) => {
  console.log('callback fired');
  console.log(err, data);
});
