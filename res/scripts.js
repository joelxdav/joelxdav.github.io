/*fetch("../res/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
*/

$(document).ready(function() {
    // import header and navigation
    $('header').load("../res/header.html");
});