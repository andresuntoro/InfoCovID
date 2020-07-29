domReady(function() {

	//Navbar Header
	document.addEventListener("click", function(event) {
		if (event.target.classList.contains("navbar-toggler") || event.target.classList.contains("navbar-toggler-icon")) {
			document.getElementById("navbarHeader").classList.toggle("show");
		} else if (event.target.classList.contains("linkprofil")) {
			document.getElementById("navbarHeader").classList.remove("show");
		}
	});
	
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
					document.getElementById("kasusDunia").innerHTML = number(data['confirmed']['value']);
				});  
			}  
			)  
		.catch(function(err) {  
			console.log(err);  
		});
	}

	function fetchIndoCovid() {

		fetch('https://indonesia-covid-19.mathdro.id/api')  
		.then(  
			function(response) {  
				if (response.status !== 200) {  
					console.log('Status Code: ' + response.status);  
					return;  
				}  
				response.json().then(function(data) {  
					document.getElementById("meninggal").innerHTML = number(data['meninggal']);
					document.getElementById("sembuh").innerHTML = number(data['sembuh']);
					document.getElementById("perawatan").innerHTML = number(data['perawatan']);
					document.getElementById("jumlahKasus").innerHTML = number(data['jumlahKasus']);
				});  
			}  
			)  
		.catch(function(err) {  
			console.log(err);  
		});
	}


}); // Doc Ready

