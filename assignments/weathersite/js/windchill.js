var output = windChill(75,10);
document.getElementById("output").innerHTML = output;


	function windChill(temp, mph){
	var howcold = 35.74 + (.6215 * temp) - (35.75*(Math.pow(mph,.16))) + (.4275 * temp * (Math.pow(mph,.16)));
	return howcold;
	}