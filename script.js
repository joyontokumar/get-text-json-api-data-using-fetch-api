// use fetch api and get txt file
document.getElementById('textdata').addEventListener('click', getText);
// jokon kono promise er morday then use kora hoy tokon then er vitor ja property ba method thake jodi oi method abr promise return kore tahole oi then er morday amader kankitio output pabo na. porer then e output pabo. 

function getText() {
  fetch('demo.txt')
    .then(function (data) {
      return data.text();
    })
    .then(function (data) {
      document.getElementById('text').innerHTML = `<p class="mt-3 p-3 bg-light">${data}</p>`;
    })
    .catch(function (err) {
      document.getElementById('text').innerHTML = err;

    })
}


// use fetch api and get json data
document.getElementById('jsondata').addEventListener('click', getJson);

function getJson() {
  fetch('users.json')
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      let jsonData = '';
      data.forEach(element => {
        jsonData += `<div class="mt-3 p-3 bg-light">
          <h5>name : ${element.name}</h5>
          <p>age : ${element.age}</p>
          <p>city : ${element.city}</p>
          <p>village : ${element.village}</p>
        </div>`;
      });
      document.getElementById('json').innerHTML = jsonData;
    })
    .catch(function (err) {
      document.getElementById('json').innerHTML = data;

    })
}

// use fetch api and get external api data
document.getElementById('apidata').addEventListener('click', getAPI);

function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      let apiData = '';
      data.forEach(element => {
        apiData += `<div class="mt-3 p-3 bg-light">
          <h5> ${element.title}</h5>
          <p> ${element.body}</p>
        </div>`;
      });
      document.getElementById('api').innerHTML = apiData;
    })
    .catch(function (err) {
      document.getElementById('api').innerHTML = apiData;

    })
}