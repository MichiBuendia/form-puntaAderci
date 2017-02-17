$( document ).ready(function() {
    console.log( "ready!" );

    $(".btn").click(function(){

      var Nome = $("#nome").val();
    	var Cognome = $("#cognome").val();
    	var eMail = $("#email").val();
    	var Telefono = $("#tel").val();
    	var Azienda = $("#azienda").val();
    	var Note = $("textarea").val();

      $("p").text("");

      var errori="";
      var isErr= false;

      if (Nome == "" || Nome == "undefined"){
        isErr= true;
        errori += " Devi inserire il nome ";}

      if (Cognome == "" || Cognome== "undefined"){
        isErr= true;
        errori += " Devi inserire il cognome ";}

      if (eMail == "" || eMail == "undefined"){
        isErr= true;
        errori += " Devi inserire l'email ";}

      if (Telefono == "" || Telefono == "undefined"){
        isErr= true;
        errori += " Devi inserire il Telefono ";}
        if (isNaN(Telefono)){
        isErr= true;
        errori += " Devi inserire un numero!! ";
        }

      if (Azienda == "" || Azienda == "undefined"){
        isErr= true;
        errori += " Devi inserire l'Azienda ";}

      if (isErr == false) {
        var Data = {"Nome" : Nome,
              "Cognome" : Cognome,
              "eMail" : eMail,
              "Azienda" : Azienda,
              "Note" : Note}
      }else{

        $("p").append(errori)


      }

      console.log(Data);

      });

      });
