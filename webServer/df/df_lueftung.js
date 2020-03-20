/* 
 * AM2H V.2.0.0 (c)2017 
 */

// Formatierunsoptionen

var color1 = new CssRules()
    .add("red","{{home/calc/ventilation/heatExchanger/energyVentilation:message}}>0")
    .add("blue","{{home/calc/ventilation/heatExchanger/energyVentilation:message}}<=0")
;    
    
var color2 = new CssRules()    
    .add("purple","{{home/state/ventilation/heatExchanger/setPointUpperTemp:message}}")
    .add("purple","{{home/state/ventilation/heatExchanger/setPointLowerTemp:message}}")
;

var color3 = new CssRules()    
    .add("blue","{{home/state/location/Wohnen/ventTemperature:message}}")
    .add("blue","{{home/state/location/Wohnen/ventHumidity:message}}")
;

var valve1 = new CssRules()
    .setInitClass("valve1")
    .add("manAir","{{home/state/ventilation/heatExchanger/modeSupplyAir:message}} == 1")
    .add("manEarth","{{home/state/ventilation/heatExchanger/modeSupplyAir:message}} == 2")
    .add("autoAir","{{home/state/ventilation/heatExchanger/modeSupplyAir:message}} == 3")
    .add("autoEarth","{{home/state/ventilation/heatExchanger/modeSupplyAir:message}} == 4")
    //.add("offline" ,"{{home/state/ventilation/heatExchanger/modeSupplyAir:message}} == 5")       
;

var valve2 = new CssRules()
    .setInitClass("valve2")
    .add("manBypassClosed","{{home/state/ventilation/heatExchanger/modeBypass:message}} == 1")
    .add("manBypassOpened","{{home/state/ventilation/heatExchanger/modeBypass:message}} == 2")
    .add("autoBypassClosed","{{home/state/ventilation/heatExchanger/modeBypass:message}} == 3")
    .add("autoBypassOpenend","{{home/state/ventilation/heatExchanger/modeBypass:message}} == 4")
           
;


function initFields(){
    const c = new Container("#contentlayer")
        .setBgImage({"background-image": "url(\"images/LueftungV2_image.svg\")",
            "width": "1030px","height": "620px","background-size": "1030px 620px"})
        .box("home/state/heating/vitotronic/temperatureOutside:formattedMessage","width: 56px; left: 54px; top: 307px;")
        //.box("home/state/ventilation/airDistribution/temperatureSupplyAir:formattedMessage","width: 56px; left: 689px; top: 408px;")
        //.box("home/state/ventilation/airDistribution/humiditySupplyAir:formattedMessage","width: 56px; left: 689px; top: 432px;")
        //.box("home/state/ventilation/airDistribution/temperatureExhaustAir:formattedMessage","width: 56px; left: 689px; top: 341px;")
        //.box("home/state/ventilation/airDistribution/humidityExhaustAir:formattedMessage","width: 56px; left: 689px; top: 365px;")
        //.box("home/calc/ventilation/airDistribution/temperatureDifference:formattedMessage","width: 56px; left:  795px; top: 386px;",color1)
        
        .box("home/state/ventilation/heatExchanger/temperatureOutsideAir:formattedMessage","width: 56px; left: 253px; top: 440px;")
        .box("home/state/ventilation/heatExchanger/humidityOutsideAir:formattedMessage","width: 56px; left: 253px; top: 464px;")
        
        .box("home/state/ventilation/heatExchanger/temperatureSupplyAir:formattedMessage","width: 56px; left: 497px; top: 440px;")
        .box("home/state/ventilation/heatExchanger/humiditySupplyAir:formattedMessage","width: 56px; left: 497px; top: 464px;")
        
        .box("home/state/ventilation/heatExchanger/temperatureReturnAir:formattedMessage","width: 56px; left: 497px; top: 308px;")
        .box("home/state/ventilation/heatExchanger/humidityReturnAir:formattedMessage","width: 56px; left: 497px; top: 332px;")
        
        .box("home/state/ventilation/heatExchanger/temperatureExhaustAir:formattedMessage","width: 56px; left: 253px; top: 308px;")
        .box("home/state/ventilation/heatExchanger/humidityExhaustAir:formattedMessage","width: 56px; left: 253px; top: 332px;")
        
        .box("home/calc/ventilation/heatExchanger/energyVentilation:formattedMessage","width: 56px; left: 755px; top: 386px;",color1)       
        //.box("home/calc/ventilation/heatExchanger/temperatureDifference:formattedMessage","width: 56px; left: 755px; top: 398px;",color1)
             
       .box("home/calc/ventilation/heatExchanger/humidityVentilation:formattedMessage","width: 66px; left: 653px; top: 308px;")
       
       .box("home/calc/ventilation/heatExchanger/volumeFlowRate:formattedMessage","width: 76px; left: 491px; top: 518px;")       
       .box("home/state/metering/powermeterKWL/powerActual:formattedMessage","width: 76px; left: 491px; top: 542px;")         
        
        .box("home/state/ventilation/heatExchanger/setPointUpperTemp:formattedMessage","width: 56px; left: 237px; top: 518px;",color2)
        .box("home/state/ventilation/heatExchanger/setPointLowerTemp:formattedMessage","width: 56px; left: 237px; top: 542px;",color2)
        .box("","left: 186px; top: 415px;",valve1)
        .box("","left: 391px; top: 428px;",valve2)

        .box("home/state/location/Wohnen/ventTemperature:formattedMessage","width: 56px; left: 755px; top: 518px;",color3)
        .box("home/state/location/Wohnen/ventHumidity:formattedMessage","width: 56px; left: 755px; top: 542px;",color3) 
        .box("home/state/location/Schlafen/ventTemperature:formattedMessage","width: 56px; left: 755px; top: 218px;",color3)
        .box("home/state/location/Schlafen/ventHumidity:formattedMessage","width: 56px; left: 755px; top: 242px;",color3)            
        
        
        .start();
    
    // console.log(c);
}