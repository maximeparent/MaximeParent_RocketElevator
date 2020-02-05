// RESIDENTIAL
$(document).ready(function () {
	$(".option-res").change(function () {
		var $nbrAppartement = $("#nbrAppartement").val()
		console.log($nbrAppartement)

		var $nbrFloor = $("#nbrFloor").val();
		console.log($nbrFloor)

		var $nbrBasement = $("#nbrBasement").val();
		console.log($nbrBasement)


		/*On divise le nombre de  logements par le nombre d’étages (excluant le nombre de sous-sols)  
		pour obtenir une moyenne de logements par étages et on a besoin  d’une cage d'ascenseur à tous
		 les 6 appartements. */

		var $nbrDoorsPerFloor = Math.ceil($nbrAppartement / ($nbrFloor * 6));

		//On ajoute donc une  nouvelle colonne à chaque tranche de 20 étages.  

		var $column = Math.ceil($nbrFloor / 20);

		var nbrElevators = parseFloat($nbrDoorsPerFloor) * parseFloat($column);
		console.log("answer", nbrElevators);

		$("#resultElevator").val(nbrElevators);

	})
});





// COMMERCIAL
$(document).ready(function () {
	$(".option-com").change(function () {
		var $nbrBusinessCom = $("#nbrBusinessCom").val()

		var $nbrFloorCom = $("#nbrFloorCom").val();

		var $nbrBasementCom = $("#nbrBasementCom").val();

		var $nbrParkingCom = $("#nbrParkingCom").val();

		var $nbrElevatorCom = $("#nbrElevatorCom").val();

		// le nombre de cages  d'ascenseurs à déployer est spécifié et 
		//  le nombre de cages estimées  est égal au nombre requis. 

		$("#resultElevator").val($nbrElevatorCom);

	})
});



// CORPORATE
$(document).ready(function () {
	$(".option-cor").change(function () {
		var $nbrEcompaniesCor = $("#nbrEcompaniesCor").val()

		var $nbrFloorCor = $("#nbrFloorCor").val()

		var $nbrBasementCor = $("#nbrBasementCor").val()

		var $nbrParkingCor = $("#nbrParkingCor").val()

		var $nbrOccupantsPerFloorCor = $("#nbrOccupantsPerFloorCor").val()


		// on multiplie le  nombre d’occupants maximum par étage par le nombre d’étages 
		//  (incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total.
		// Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000. 

		var $nbrElevatorCor = Math.ceil($nbrOccupantsPerFloorCor * ($nbrFloorCor + $nbrBasementCor) / 1000);

		// On divise le nombre d’étages (incluant le  nombre de sous-sols) 
		// par 20 pour obtenir le nombre de colonnes d'ascenseurs requises. 


		var $columnCor = Math.ceil(($nbrFloorCor + $nbrBasementCor) / 20);

		// Le nombre total d'ascenseurs est déterminé  par le nombre de cages 
		// d'ascenseurs divisé par le nombre de  colonnes.  

		var $nbrResultElevatorsByCol = Math.ceil($nbrElevatorCor / $columnCor);

		var $nberElevator = $nbrResultElevatorsByCol * $columnCor;



		$("#resultElevator").val($nberElevator);


	})
});

// Hybrid
$(document).ready(function () {
	$(".option-hyb").change(function () {
		var $nbrNumberOfDistinctBusinessesHyb = $("#nbrNumberOfDistinctBusinessesHyb").val()
		console.log($nbrNumberOfDistinctBusinessesHyb)
		var $nbrFloorHyb = $("#nbrFloorHyb").val()
		console.log($nbrFloorHyb)
		var $nbrBasementHyb = $("#nbrBasementHyb").val()
		console.log($nbrBasementHyb)
		var $nbrParkingHyb = $("#nbrParkingHyb").val()
		console.log($nbrParkingHyb)
		var $nbrOccupantsPerFloorHyb = $("#nbrOccupantsPerFloorHyb").val()
		console.log($nbrOccupantsPerFloorHyb)
		var $nbrHoursOfActivityHyb = $("#nbrHoursOfActivityHyb").val()
		console.log($nbrHoursOfActivityHyb)

		// on multiplie le  nombre d’occupants maximum par étage par le nombre d’étages 
		//  (incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total.
		// Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000. 

		var $nbrElevatorHyb = Math.ceil($nbrOccupantsPerFloorHyb * ($nbrFloorHyb + $nbrBasementHyb) / 1000);
		console.log($nbrElevatorHyb)
		// On divise le nombre d’étages (incluant le  nombre de sous-sols) 
		// par 20 pour obtenir le nombre de colonnes d'ascenseurs requises. 

		var $columnHyb = Math.ceil(($nbrFloorHyb + $nbrBasementHyb) / 20);
		console.log($columnHyb)
		// Le nombre total d'ascenseurs est déterminé  par le nombre de cages 
		// d'ascenseurs divisé par le nombre de  colonnes.  

		var $nbrResultElevatorsByColHyb = Math.ceil($nbrElevatorHyb / $columnHyb);
		console.log($nbrResultElevatorsByColHyb)
		var $nbrElevator = $nbrResultElevatorsByColHyb * $columnHyb;
		console.log($nbrElevator)

		$("#resultElevator").val($nbrElevator);
		console.log($nbrElevator)


	})
});
	
	function standard() {
		var $resultElevatorSt = parseInt($("#resultElevator").val())
		$("#priceElevator").val(7565)
		var $standardResult = $resultElevatorSt * 7565;
		console.log
		$installationFeesSt  = ($standardResult * 0.10)
		$resultSt = ($installationFeesSt + $standardResult)
		
		$("#priceInstalation").val($standardResult);
		$("#priceTotal").val($resultSt)

	}



	function premium() {
		var $resultElevatorPr = parseInt($("#resultElevator").val())
		$("#priceElevator").val(12345)
		var $preniumResult = $resultElevatorPr * 12345;
		$installationFeesPr = ($preniumResult * 0.13)
		$resultPr = ($installationFeesPr + $preniumResult)
		
		$("#priceInstalation").val($preniumResult);
		$("#priceTotal").val($resultPr)

	}



	function excelium() {
		var $resultElevatorEx = parseInt($("#resultElevator").val())
		$("#priceElevator").val(15400)
		var $exceliumResult = $resultElevatorEx * 15400;
		$installationFeesEx = ($exceliumResult * 0.16)
		$resultEx = ($installationFeesEx + $exceliumResult)
		
		$("#priceInstalation").val($exceliumResult);
		$("#priceTotal").val($resultEx)

	}