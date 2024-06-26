
$(document).ready(function() {


  // get page parameters *** not currently used ***
  const queryString = window.location.search;
  console.log(queryString); // ?week=1&...
  const urlParams = new URLSearchParams(queryString);
  //var param = parseInt(urlParams.get('{some_param_name}'));



  
  // load global <header> & <footer> into <body>
  $.get("/res/header.html", function(response) {
    $('header').html(response);
  });

  $.get("/res/footer.html", function(response) {
    $('footer').html(response); 
    document.getElementById("year").innerHTML = new Date().getFullYear();
  });


  // load local README.md content into index page "content" div
  $.get("README.md", function(response) {
    $('#content').html(response);
  });



  // get pathname and display in footer
  var path = window.location.pathname;
  var pn = path.replace('/index.html','');
      pn = pn.replace(/(.*)joelxdav.github.io/,'');
      if (pn == '') {pn = 'Main';}
      $('#path').html(pn);

});
