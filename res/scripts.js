
$(document).ready(function() {

    // import header and navigation
    $('header').append("/res/header.html");

    // import sidebar 
    $('#sidebar').load("/res/sidebar.html");

    // import footer
    $('footer').load("/res/footer.html");

    
});