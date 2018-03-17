//JavaScipt doc

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/09d14396d715b9cb/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById("howisit").innerHTML = weatherInfo.current_observation.weather;
    document.getElementById("temp_f").innerHTML = weatherInfo.current_observation.temp_f;
     document.getElementById("wind_mph").innerHTML = weatherInfo.current_observation.wind_mph;
     document.getElementById("icon").src = weatherInfo.current_observation.icon_url;
     document.getElementById("precip_today_in").innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById("windchill_f").innerHTML = weatherInfo.current_observation.windchill_f;
    
} //end of onload