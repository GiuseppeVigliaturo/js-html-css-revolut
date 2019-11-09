$(document).ready(function(){
   $("li.dropdown").click(function(){
     $(this).find(".dropdowncontent").toggle();
   });

   $(".menu-toggle").click(function(){
     
     $(".navright").toggleClass("active");
   });

 });
