window.onload = function()  {

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://cat-fact.herokuapp.com/facts'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    var randomNumber = Math.floor(Math.random()* 199);
    document.getElementById("catFacts").innerHTML = data.all[randomNumber].text;
  })
  .catch(e => {
    console.log(e);
  });

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.thecatapi.com/v1/images/search'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    document.getElementById("catImage").src = data[0].url;
    console.log(data[0].url)
  })
}