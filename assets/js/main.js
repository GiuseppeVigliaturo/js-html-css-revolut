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
 $(".dropdown").click(function() {
   //mi salvo tutti i .dropdown presenti in pagina
   var drop = $(".dropdown");
   console.log($(this));
   for(var i = 0; i < drop.length; i++) {
     console.log("entro nel for", drop.eq(i));
     //se il drop su cui clicco è uguale all'i-esimo drop ciclato allora il valore attuale del contatore i
     //posso usarlo come indice per risalire al dropdowncontent corispondente
     if ($(this).is(drop.eq(i))) {
       console.log("entro nell'if");
      $("dropdown.visible").removeClass("visible");
       $(".dropdowncontent").eq(i).toggle();
     }
   }


 });

 $(".menu-toggle").click(function(){
     $(".navright").toggleClass("active");
   });
