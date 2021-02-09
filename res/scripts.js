
$(document).ready(function() {

  /* ****************** NEW MODULE ****************************

    1. get page "week" parameter and 
    2. check to see if parameters are valid
    3. display "week" specific content in "content" div

  */
  const queryString = window.location.search;
  console.log(queryString); // ?week=1&...
  const urlParams = new URLSearchParams(queryString);
  var week_content = new Array();
  var week = 0;
      week = parseInt(urlParams.get('week'));

  
  
  

  // display "week" specific content in "content" div
  
  function loadWeeklyContent(week) {
    week_content = [
      "", // null
      '<li><a href="">1.3 - Create Your First HTML Page</a> <i>(the home page)</i></li><li><a href="https://github.com/joelxdav/joelxdav.github.io" target="_blank">1.4 - Files And Directories</a> <i>(github repository)</i></li><li><a href="week01/in-the-beginning.html">1.5 - Using HTML To Structure Text</a></li>',
      '<li><a href="week02/coding101.html">2.2 - A Very Basic HTML Page</a></li><li><a href="week02/HTML-images.html">2.3 - HTML Images</a></li>',
      '<li><a href="week03/css-designer.html">3.1 - CSS Designer</a></li>',
      '<li><a href="week04/birds.html">4.1 Structuring a Page of Content</a></li><li><a href="week04/cookieandkate.html">4.2 CSS, Composition and Layouts</a></li>',
      '<li><a href="">5.1</a></li>',
      '<li><a href="">6.1</a></li>',
      '<li><a href="">7.1</a></li><li><a href="">7.2</a></li>',
      '<li><a href="">8.1</a></li>'
    ];  

    document.title = "Week " + week;
    document.getElementById("week-h5").innerHTML = "Week " + week;
    document.getElementById("assignments-list").innerHTML = week_content[week];
  }

  
  

  
  // populate content area when sidebar buttons are clicked..."w" is for week number
  
  $(".weeks").click(function(){
    var w = this.name;
    $('#content').html('<blockquote><h3>Assignments</h3><h5 id="week-h5"></h5><ul id="assignments-list"></ul><br><br></blockquote>');
    loadWeeklyContent(w);
  })


  
  

  // check to see if parameters are valid, then populate content
  
  if (week > 0) {
    $('#content').html('<blockquote><h3>Assignments</h3><h5 id="week-h5"></h5><ul id="assignments-list"></ul><br><br></blockquote>');
    loadWeeklyContent(week);
  }





});
