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
    .add("blue","{{home/state/location/Wohnen/ventHumidity:message}}")
;


function initFields(){
    const c = new Container("#contentlayer")
	.setBgImage({"background-image": "url(\"images/TempEGV2_image.svg\")",
        //.setBgImage({"background-image": "url(\"http://clicca.de/TempEGV2_image.svg\")",
            "width": "1030px","height": "620px","background-size": "1030px 620px"})
        

        //.box("home/state/location/Buero/temperature:formattedMessage","width: 56px; left: 340px; top: 135px;")
        //.box("home/state/location/Buero/humidity:formattedMessage","width: 56px; left: 340px; top: 160px;")
        //.box("home/state/location/Buero/CO2concentration:formattedMessage","width: 78px; left: 318px; top: 185px;")
        //.box("home/state/location/Buero/TVOCconcentration:formattedMessage","width: 78px; left: 318px; top:210px;")
        //.box("home/state/location/Buero/brightness:formattedMessage","width: 78px; left: 318px; top: 235px;")
        
        .box("home/state/location/Wohnen/roomTemperature:formattedMessage","width: 56px; left: 490px; top: 395px;")
        .box("home/state/location/Wohnen/roomHumidity:formattedMessage","width: 56px; left: 490px; top: 420px;") 
        .box("home/state/location/Wohnen/ventTemperature:formattedMessage","width: 56px; left: 490px; top: 450px;",color2)
        .box("home/state/location/Wohnen/ventHumidity:formattedMessage","width: 56px; left: 490px; top: 475px;",color2)      
        
        .box("home/state/heating/vitotronic/temperatureOutside:formattedMessage","width: 56px; left: 158px; top: 311px;")
        .box("home/state/heating/lowerFloor/temperatureSupplyFlow:formattedMessage","width: 56px; left: 127px; top: 111px;")
        .box("home/state/heating/lowerFloor/temperatureReturnFlow:formattedMessage","width: 56px; left: 127px; top: 203px;")            
        .box("home/calc/heating/lowerFloor/temperatureDifference:formattedMessage","width: 46px; left:  180px; top: 156px;")
        .box("home/state/heating/lowerFloor/temperatureReturnFlowBuero:formattedMessage","width: 56px; left: 340px; top: 275px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowWohnenA:formattedMessage","width: 56px; left: 310px; top: 365px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowWohnenB:formattedMessage","width: 56px; left: 400px; top: 365px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowEssen:formattedMessage","width: 56px; left: 490px; top: 365px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowFlur:formattedMessage","width: 56px; left: 575px; top: 245px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowKueche:formattedMessage","width: 56px; left: 640px; top: 405px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowHwr:formattedMessage","width: 56px; left: 630px; top: 185px;",color1)
        .box("home/state/heating/lowerFloor/temperatureReturnFlowBad:formattedMessage","width: 56px; left: 525px; top: 185px;",color1)
        .box("home/state/location/Technikraum/temperature:formattedMessage","width: 56px; left: 808px; top: 400px;")
        .box("home/state/location/Technikraum/humitidy:formattedMessage","width: 56px; left: 808px; top: 425px;")
        .box("home/calc/metering/gasmeter/counterEnergyHActualDay:formattedMessage","width: 88px; left:  126px; top: 341px;")
        .box("home/calc/metering/gasmeter/counterEnergyHActualMonth:formattedMessage","width: 88px; left:  126px; top: 366px;")
        .box("home/calc/metering/gasmeter/counterEnergyHActualYear:formattedMessage","width: 88px; left:  126px; top: 391px;")

        .start();
    
    // console.log(c);
}
