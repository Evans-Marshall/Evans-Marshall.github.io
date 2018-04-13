var pricingObject = new XMLHttpRequest();

pricingObject.open('GET', 'data/data.json', true);

pricingObject.send();

pricingObject.onload = function() {
    
    var pricingInfo = JSON.parse(pricingObject.responseText);
    console.log(pricingInfo);
    
    document.getElementById("tuneup").innerHTML = pricingInfo.pricing_info.tuneup;
    document.getElementById("tire_tube").innerHTML = pricingInfo.pricing_info.tire_tube;
     document.getElementById("spoke_align").innerHTML = pricingInfo.pricing_info.spoke_align;
     document.getElementById("brake_adjust").innerHTML = pricingInfo.pricing_info.brake_adjust;
     document.getElementById("shock_tuneup").innerHTML = pricingInfo.pricing_info.shock_tuneup;
    document.getElementById("tubes").innerHTML = pricingInfo.pricing_info.tubes;
     document.getElementById("pump").innerHTML = pricingInfo.pricing_info.pump;
    document.getElementById("pedal_replace").innerHTML = pricingInfo.pricing_info.pedal_replace;
    
    
    
    
}