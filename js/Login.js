
function Login(){

	var Email = $("#Input_Email").val();


	var Password = $("#Input_Password").val();

	if (Email=="ander@gmail.com"){
		if(Password=="123456789"){

			//window.open('http://ejemplo.com/archivo.pdf', '_blank');

			window.open('Cliente.html')
		
		}
	}
	if (Email=="admin@admin.com"){
		if(Password=="123456789"){

			//window.open('http://ejemplo.com/archivo.pdf', '_blank');

			window.open('Admin.html')
		
		}
	}

		if (Email=="mecanico@mecanico.com"){
		if(Password=="123456789"){

			//window.open('http://ejemplo.com/archivo.pdf', '_blank');

			window.open('Mecanico.html')
		
		}
	}

}