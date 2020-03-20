/* 
 * AM2H V.2.0.0 (c)2017 
 */

// Formatierunsoptionen

var color1 = new CssRules()
    .add("red","{{home/state/heating/vitotronic/modeHeaterValve:message}}==1")
    .add("purple","{{home/state/heating/vitotronic/modeHeaterValve:message}}!=1")        
;

var color2 = new CssRules()    
    .add("blue","{{home/state/location/Wohnen/ventTemperature:message}}")
    .add("blue","{{ome/state/location/Wohnen/ventHumidity:message}}")
;

function initFields(){
    const c = new Container("#contentlayer")
	.setBgImage({"background-image": "url(\"images/TempOGV2_image.svg\")",
        //.setBgImage({"background-image": "url(\"http://clicca.de/TempOGV2_image.svg\")",
            "width": "1030px","height": "620px","background-size": "1030px 620px"})
      
        .box("home/state/location/Schlafen/roomTemperature:formattedMessage","width: 56px; left: 470px; top: 395px;")
        .box("home/state/location/Schlafen/roomHumidity:formattedMessage","width: 56px; left: 470px; top: 420px;") 
        .box("home/state/location/Schlafen/ventTemperature:formattedMessage","width: 56px; left: 470px; top: 450px;",color2)
        .box("home/state/location/Schlafen/ventHumidity:formattedMessage","width: 56px; left: 470px; top: 475px;",color2)         
        
        .box("home/state/heating/vitotronic/temperatureOutside:formattedMessage","width: 56px; left: 158px; top: 311px;")
        .box("home/state/heating/upperFloor/temperatureSupplyFlow:formattedMessage","width: 56px; left: 127px; top: 111px;")
        .box("home/state/heating/upperFloor/temperatureReturnFlow:formattedMessage","width: 56px; left: 127px; top: 203px;")            
        .box("home/calc/heating/upperFloor/temperatureDifference:formattedMessage","width: 46px; left:  180px; top: 156px;")
        .box("home/state/heating/upperFloor/temperatureReturnFlowGast:formattedMessage","width: 56px; left: 600px; top: 201px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowToilette:formattedMessage","width: 46px; left: 488px; top: 180px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowKind:formattedMessage","width: 56px; left: 330px; top: 201px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowSchlafen:formattedMessage","width: 56px; left: 470px; top: 365px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowBadA:formattedMessage","width: 56px; left: 640px; top: 415px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowBadB:formattedMessage","width: 56px; left: 640px; top: 440px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowBadHK:formattedMessage","width: 56px; left: 605px; top: 335px;",color1)
        .box("home/state/heating/upperFloor/temperatureReturnFlowFlur:formattedMessage","width: 56px; left: 330px; top: 300px;",color1)
        .box("home/calc/metering/gasmeter/counterEnergyHActualDay:formattedMessage","width: 88px; left:  126px; top: 341px;")
        .box("home/calc/metering/gasmeter/counterEnergyHActualMonth:formattedMessage","width: 88px; left:  126px; top: 366px;")
        .box("home/calc/metering/gasmeter/counterEnergyHActualYear:formattedMessage","width: 88px; left:  126px; top: 391px;")

        .start();
    
    // console.log(c);
}
