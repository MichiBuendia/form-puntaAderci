$( document ).ready(function() {
    console.log( "ready!" );

$(".btn").click(function(){

	var Nome = $("#nome").val();
	var Cognome = $("#cognome").val();
	var eMail = $("#email").val();
	var Telefono = $("#tel").val();
	var Azienda = $("#azienda").val();
	var Note = $("textarea").val();




	if (Nome != "" && Cognome != "" && eMail != "" && Telefono != "" && Azienda != "" && Note !=""){
		var Data = {"Nome" : Nome,
					"Cognome" : Cognome,
					"eMail" : eMail,
					"Azienda" : Azienda,
          "Note" : Note}
	}else{

$(":hidden").show(1000);
}

//	alert("Campi non completi!");}

console.log(Data);

});


});
