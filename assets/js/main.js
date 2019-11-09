$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $(".navright").toggleClass("active");
  });

   $("li.dropdown").click(function(){
     $(this).find(".dropdowncontent").toggle();
   });

 });
