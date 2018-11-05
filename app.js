const api_key = 'AIzaSyB0wkOxLniUEBrWiWZNeRitrNbRf2eWf4Q';

function getBooks (search, onSuccess, onError) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  var settings = {
    cache: false,
    contentType: 'application/json',
    dataType: 'json',
    success: onSuccess,
    error: onError,
    type: 'GET'
  };
  return $.ajax(url, settings);
};

function onSuccess(data) {
  console.log(`successful`);
  console.log(data);
};
function onError(error) {
  console.log(error);
};
