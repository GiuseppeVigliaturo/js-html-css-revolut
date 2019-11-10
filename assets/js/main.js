// $(document).ready(function(){
//    $("li.dropdown").click(function(){
//      $(this).find(".dropdowncontent").toggle();
//    });
//
//    $(".menu-toggle").click(function(){
//      $(".navright").toggleClass("active");
//    });
//
//  });

//versione alternativa
$(document).ready(function(){
 $(".dropdown").click(function() {
   //mi salvo tutti i .dropdown presenti in pagina
   var drop = $(".dropdown");
   console.log($(this));
   for(var i = 0; i < drop.length; i++) {
     console.log("entro nel for", drop.eq(i));
     //se il drop su cui clicco è uguale all'i-esimo drop ciclato allora il valore attuale del contatore i
     //posso usarlo come indice per risalire al dropdowncontent corispondente
     if ($(this).is(drop.eq(i))) {
       $(".dropdowncontent").eq(i).toggle();
     }
   }

 });

 $(".menu-toggle").click(function(){
    $(".navright").toggleClass("active");
    //cambio l'icona a seconda se si debba chiudere o aprire il menù a scomparsa
   if ($(".croce").hasClass("invisible")) {
     $(".hamburger").removeClass("visible").addClass("invisible");
     $(".croce").removeClass("invisible").addClass("visible");

   }else if ($(".hamburger").hasClass("invisible")) {
     $(".croce").addClass("invisible");
     $(".hamburger").removeClass("invisible").addClass("visible");

   }


   });

});
