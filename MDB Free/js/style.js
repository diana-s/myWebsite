$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();
         
        $("header &gt; nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");
    });
})