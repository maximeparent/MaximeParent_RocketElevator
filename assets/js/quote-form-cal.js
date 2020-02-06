function standard() {
	var $resultElevatorSt = parseInt($("#resultElevator").val())
	$("#priceElevator").val(7565)

	var $installationCostsSt = $resultElevatorSt * 7565;
	$installationFeesSt = ($installationCostsSt * 0.10)
	$resultSt = ($installationFeesSt + $installationCostsSt)

	// var $installationCostsSt tell the instalation cost and then it will show the result in input id="priceInstalation"
	$("#priceInstalation").val($installationCostsSt);
	// var $resultSt tell the total cost and then it will show the result in input id="priceTotal"
	$("#priceTotal").val($resultSt);
}

function premium() {
	var $resultElevatorPr = parseInt($("#resultElevator").val())
	$("#priceElevator").val(12345)
	var $installationCostsPr = $resultElevatorPr * 12345;
	$installationFeesPr = ($installationCostsPr * 0.13)
	$resultPr = ($installationFeesPr + $installationCostsPr)
	// var $installationCostsPr tell the instalation cost and then it will show the result in input id="priceInstalation"
	$("#priceInstalation").val($installationCostsPr);
	// var $resultPr tell the total cost and then it will show the result in input id="priceTotal"
	$("#priceTotal").val($resultPr)

}

function excelium() {
	var $resultElevatorEx = parseInt($("#resultElevator").val())
	$("#priceElevator").val(15400)
	var $installationCostsEx = $resultElevatorEx * 15400;
	$installationFeesEx = ($installationCostsEx * 0.16)
	$resultEx = ($installationFeesEx + $installationCostsEx)
	// var $installationCostsEx tell the instalation cost and then it will show the result in input id="priceInstalation"
	$("#priceInstalation").val($installationCostsEx);
	// var $resultEx tell the total cost and then it will show the result in input id="priceTotal"
	$("#priceTotal").val($resultEx)
}	

	//To find the number of elevator the user needs for the option RESIDENTIAL.
$(document).ready(function () {
	$(".option-res").change(function () {
		var $nbrAppartement = $("#nbrAppartement").val()
		var $nbrFloor = $("#nbrFloor").val();
		var $nbrBasement = $("#nbrBasement").val();

		var $nbrDoorsPerFloor = Math.ceil($nbrAppartement / ($nbrFloor * 6));

		var $column = Math.ceil($nbrFloor / 20);

		var nbrElevators = parseFloat($nbrDoorsPerFloor) * parseFloat($column);

		if ($("#standard").is(":checked")) {
			standard();
		}

		else if ($("#prenium").is(":checked")) {
			premium();
		}

		else if ($("#excelium").is(":checked")) {
			excelium();
		}
		
		//var nbrElevators will tell how much elevators the user needs and then it will show the result in input id="resultElevator"
		$("#resultElevator").val(nbrElevators);
	})
});


//To find the number of elevator the user needs for the option COMMERCIAL
$(document).ready(function () {
	$(".option-com").change(function () {
		var $nbrBusinessCom = $("#nbrBusinessCom").val()
		var $nbrFloorCom = $("#nbrFloorCom").val();
		var $nbrBasementCom = $("#nbrBasementCom").val();
		var $nbrParkingCom = $("#nbrParkingCom").val();
		var $nbrElevatorCom = $("#nbrElevatorCom").val();

		if ($("#standard").is(":checked")) {
			standard();
		}

		else if ($("#prenium").is(":checked")) {
			premium();
		}

		else if ($("#excelium").is(":checked")) {
			excelium();
		}

		//var $nbrElevatorCom will tell how much elevators the user needs and then it will show the result in input id="resultElevator"
		$("#resultElevator").val($nbrElevatorCom);
	})
});



//To find the number of elevator the user needs for the option CORPORATE
$(document).ready(function () {
	$(".option-cor").change(function () {
		var $nbrEcompaniesCor = $("#nbrEcompaniesCor").val()
		var $nbrFloorCor = $("#nbrFloorCor").val()
		var $nbrBasementCor = $("#nbrBasementCor").val()
		var $nbrParkingCor = $("#nbrParkingCor").val()
		var $nbrOccupantsPerFloorCor = $("#nbrOccupantsPerFloorCor").val()

		var $nbrElevatorCor = Math.ceil($nbrOccupantsPerFloorCor * ($nbrFloorCor + $nbrBasementCor) / 1000);
		var $columnCor = Math.ceil(($nbrFloorCor + $nbrBasementCor) / 20);
		var $nbrResultElevatorsByCol = Math.ceil($nbrElevatorCor / $columnCor);
		var $nberElevator = $nbrResultElevatorsByCol * $columnCor;

		if ($("#standard").is(":checked")) {
			standard();
		}

		else if ($("#prenium").is(":checked")) {
			premium();
		}

		else if ($("#excelium").is(":checked")) {
			excelium();
		}

		//var $nbrElevator will tell how much elevators the user needs and then it will show the result in input id="resultElevator"
		$("#resultElevator").val($nberElevator);

	})
});

//To find the number of elevator the user needs for the option HYBRID	
$(document).ready(function () {
	$(".option-hyb").change(function () {
		var $nbrNumberOfDistinctBusinessesHyb = $("#nbrNumberOfDistinctBusinessesHyb").val()
		var $nbrFloorHyb = $("#nbrFloorHyb").val()
		var $nbrBasementHyb = $("#nbrBasementHyb").val()
		var $nbrParkingHyb = $("#nbrParkingHyb").val()
		var $nbrOccupantsPerFloorHyb = $("#nbrOccupantsPerFloorHyb").val()
		var $nbrHoursOfActivityHyb = $("#nbrHoursOfActivityHyb").val()

		var $nbrElevatorHyb = Math.ceil($nbrOccupantsPerFloorHyb * ($nbrFloorHyb + $nbrBasementHyb) / 1000);

		var $columnHyb = Math.ceil(($nbrFloorHyb + $nbrBasementHyb) / 20);

		var $nbrResultElevatorsByColHyb = Math.ceil($nbrElevatorHyb / $columnHyb);

		var $nbrElevator = $nbrResultElevatorsByColHyb * $columnHyb;

		if ($("#standard").is(":checked")) {
			standard();
		}

		else if ($("#prenium").is(":checked")) {
			premium();
		}

		else if ($("#excelium").is(":checked")) {
			excelium();
		}

		//var $nbrElevator tell how much elevators the user needs and then it will show the result in input id="resultElevator"
		$("#resultElevator").val($nbrElevator);
	})
});