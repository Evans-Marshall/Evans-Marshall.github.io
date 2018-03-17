var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
            var myCities = request.response;
            otherFunction(myCities);
            }
    
    function otherFunction(jsonObj) {
        var towns = jsonObj['towns'];
        for (var i = 0; i < towns.length; i++) {
             if (i===2) i=3;
            
        var newArticle = document.createElement('article');
        var newH1 = document.createElement('h1');
        var newPara1 = document.createElement('p');
        var newPara2 = document.createElement('p');
        var newPara3 = document.createElement('p');
        var newPara4 = document.createElement('p');
        var newPara5 = document.createElement('p');
            
        newH1.textContent = towns[i].name;
        newPara1.textContent = towns[i].motto;
        newPara2.textContent = 'Founded: ' + towns[i].yearFounded;
        newPara3.textContent = 'Population: ' + towns[i].currentPopulation;
        newPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;   
            
        newArticle.appendChild(newH1);
        newArticle.appendChild(newPara1);
        newArticle.appendChild(newPara2);
        newArticle.appendChild(newPara3);
        newArticle.appendChild(newPara4);
        section.appendChild(newArticle);
          }
        }  
        