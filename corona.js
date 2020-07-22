$( document ).ready(function() {
	console.log( "ready!" ); // tes
	
	// Panggil Fungsi
	fetchGlobalCovid();
	fetchIndoCovid();

	// Kumpulan Fungsi
	function number(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function fetchGlobalCovid() {
		fetch('https://covid19.mathdro.id/api')  
		.then(  
			function(response) {  
				if (response.status !== 200) {  
					console.log('Status Code: ' + response.status);  
					return;  
				}  
				response.json().then(function(data) {
					document.querySelector("#kasusDunia").innerHTML = number(data['confirmed']['value']);
				});  
			}  
			)  
		.catch(function(err) {  
			console.log(err);  
		});
	}

	function fetchIndoCovid(argument) {

		fetch('https://indonesia-covid-19.mathdro.id/api')  
		.then(  
			function(response) {  
				if (response.status !== 200) {  
					console.log('Status Code: ' + response.status);  
					return;  
				}  
				response.json().then(function(data) {  
					document.querySelector("#meninggal").innerHTML = number(data['meninggal']);
					document.querySelector("#sembuh").innerHTML = number(data['sembuh']);
					document.querySelector("#perawatan").innerHTML = number(data['perawatan']);
					document.querySelector("#jumlahKasus").innerHTML = number(data['jumlahKasus']);
				});  
			}  
			)  
		.catch(function(err) {  
			console.log(err);  
		});
	}


}); // Doc Ready

