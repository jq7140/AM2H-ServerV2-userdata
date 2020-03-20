/* 
 * List all topics and define logging
 */

/*
 * cleanup available units:
 * Key          Short
 * years	y
 * quarters	Q
 * months	M
 * weeks	w
 * days         d
 * hours	h
 * minutes	m
 * seconds	s
 */

var topics = {
    
    // df_heizung
    
    "home/state/heating/vitotronic/temperatureOutside":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/temperatureSetpoint":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/temperatureSupplyFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/temperatureReturnFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/temperatureWater":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/modeHeaterValve":{},
    "home/state/heating/vitotronic/modeWaterCirculationPump":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/heating/vitotronic/powerBurner":{formatter:'concat(format(v/2,{notation: "fixed", precision: 1})," %")'},
    "home/state/heating/vitotronic/powerPump":{formatter:'concat(format(v/1,{notation: "fixed", precision: 1})," %")'},
    "home/state/heating/vitotronic/counterBurnerStarts":{},
    "home/state/heating/vitotronic/counterBurnerStartsLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/heating/vitotronic/counterBurnerStarts}}"
    },       
    "home/calc/heating/vitotronic/counterBurnerStartsActualDay":{
        formatter:'concat(format(v/1,{notation: "fixed", precision: 0})," st/d")',
        message:0,
        triggers:["home/state/heating/vitotronic/counterBurnerStarts","home/state/heating/vitotronic/counterBurnerStartsLastDay"],
        calc: "{{home/state/heating/vitotronic/counterBurnerStarts}} - {{home/state/heating/vitotronic/counterBurnerStartsLastDay}}",
        logger:{condition:"none"}
    },
    
    "home/state/metering/gasmeter/powerActual":{formatter:'concat(format(v/1000,{notation: "fixed", precision: 1})," kW")'},
    "home/state/metering/gasmeter/counterConsumptionTotal":{},     
    "home/state/metering/gasmeter/counterConsumptionLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}}"
    },
    "home/state/metering/gasmeter/counterConsumptionLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}}"
    },    
    "home/state/metering/gasmeter/counterConsumptionLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}}"
    },        
    
    "home/calc/metering/gasmeter/counterConsumptionActualDay":{
        formatter:'concat(format(v/100,{notation: "fixed", precision: 2})," m³/d")',
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastDay"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastDay}}",
        logger:{condition:"none"}
    },        
    "home/calc/metering/gasmeter/counterConsumptionActualMonth":{
        formatter:'concat(format(v/100,{notation: "fixed", precision: 1})," m³/m")',          
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastMonth"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastMonth}}",
        logger:{condition:"none"}
    },
    "home/calc/metering/gasmeter/counterConsumptionActualYear":{
        formatter:'concat(format(v/100,{notation: "fixed", precision: 1})," m³/y")',        
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastYear"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastYear}}",
        logger:{condition:"none"}
    },
   
    //df_lueftung
    
    //"home/state/ventilation/polling/humitidyOutsideAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/ventilation/airDistribution/temperatureSupplyAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    
    "home/state/ventilation/heatExchanger/temperatureOutsideAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},                                                                                                                                         
    "home/state/ventilation/heatExchanger/humidityOutsideAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/ventilation/heatExchanger/temperatureSupplyAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},                                                                                                                                         
    "home/state/ventilation/heatExchanger/humiditySupplyAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/ventilation/heatExchanger/temperatureReturnAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},                                                                                                                                         
    "home/state/ventilation/heatExchanger/humidityReturnAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/ventilation/heatExchanger/temperatureExhaustAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/ventilation/heatExchanger/humidityExhaustAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    
    "home/calc/ventilation/heatExchanger/temperatureDifference":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")',
        message:0,
        triggers:["home/state/ventilation/heatExchanger/temperatureSupplyAir","home/state/ventilation/heatExchanger/temperatureReturnAir"],
        calc: "{{home/state/ventilation/heatExchanger/temperatureSupplyAir}} - {{home/state/ventilation/heatExchanger/temperatureReturnAir}}",
        logger:{condition:"none"}
    },    
    
    "home/calc/ventilation/heatExchanger/saturatedVaporPressureSupplyAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," Pa")',
        message:0,
        triggers:["home/state/ventilation/heatExchanger/temperatureSupplyAir"],
        calc: "6.112 * exp(17.62 * {{home/state/ventilation/heatExchanger/temperatureSupplyAir}} / 10 / (243.12 + {{home/state/ventilation/heatExchanger/temperatureSupplyAir}} / 10)) * 100",                       
        logger:{condition:"none"}
   },
          
   
    "home/calc/ventilation/heatExchanger/absHumiditySupplyAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kg/kg")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/saturatedVaporPressureSupplyAir","home/state/ventilation/heatExchanger/humiditySupplyAir"],
        calc: "(0.662 * ({{home/state/ventilation/heatExchanger/humiditySupplyAir}} / 1000) * {{home/calc/ventilation/heatExchanger/saturatedVaporPressureSupplyAir}}) / (101300 - (({{home/state/ventilation/heatExchanger/humiditySupplyAir}} / 1000) * {{home/calc/ventilation/heatExchanger/saturatedVaporPressureSupplyAir}}))",                       
        logger:{condition:"none"}
   },
            
    "home/calc/ventilation/heatExchanger/enthalpieSupplyAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kJ/kg")',
        message:0,
        triggers:["home/state/ventilation/heatExchanger/temperatureSupplyAir","home/calc/ventilation/heatExchanger/absHumiditySupplyAir"],
        calc: "1.005 * ({{home/state/ventilation/heatExchanger/temperatureSupplyAir}} / 10) + {{home/calc/ventilation/heatExchanger/absHumiditySupplyAir}} * (2500 + (1.86 * ({{home/state/ventilation/heatExchanger/temperatureSupplyAir}} / 10)))",                       
        logger:{condition:"none"}
   },                         

      "home/calc/ventilation/heatExchanger/energySupplyAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kWh/h")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/enthalpieSupplyAir","home/calc/ventilation/heatExchanger/volumeFlowRate"],
        calc: "1.2041 * {{home/calc/ventilation/heatExchanger/enthalpieSupplyAir}} * 0.000277778 * {{home/calc/ventilation/heatExchanger/volumeFlowRate}}",                       
        logger:{condition:"none"}
   },    
  
    "home/calc/ventilation/heatExchanger/saturatedVaporPressureReturnAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," Pa")',
        message:0,
        triggers:["home/state/ventilation/heatExchanger/temperatureReturnAir"],
        calc: "6.112 * exp(17.62 * {{home/state/ventilation/heatExchanger/temperatureReturnAir}} / 10 / (243.12 + {{home/state/ventilation/heatExchanger/temperatureReturnAir}} / 10)) * 100",                       
        logger:{condition:"none"}
   },
          
   
    "home/calc/ventilation/heatExchanger/absHumidityReturnAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kg/kg")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/saturatedVaporPressureReturnAir","home/state/ventilation/heatExchanger/humidityReturnAir"],
        calc: "(0.662 * ({{home/state/ventilation/heatExchanger/humidityReturnAir}} / 1000) * {{home/calc/ventilation/heatExchanger/saturatedVaporPressureReturnAir}}) / (101300 - (({{home/state/ventilation/heatExchanger/humidityReturnAir}} / 1000) * {{home/calc/ventilation/heatExchanger/saturatedVaporPressureReturnAir}}))",                       
        logger:{condition:"none"}
   },
            
    "home/calc/ventilation/heatExchanger/enthalpieReturnAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kJ/kg")',
        message:0,
        triggers:["home/state/ventilation/heatExchanger/temperatureReturnAir","home/calc/ventilation/heatExchanger/absHumidityReturnAir"],
        calc: "1.005 * ({{home/state/ventilation/heatExchanger/temperatureReturnAir}} / 10) + {{home/calc/ventilation/heatExchanger/absHumidityReturnAir}} * (2500 + (1.86 * ({{home/state/ventilation/heatExchanger/temperatureReturnAir}} / 10)))",                       
        logger:{condition:"none"}
   },                         

      "home/calc/ventilation/heatExchanger/energyReturnAir":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kWh/h")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/enthalpieReturnAir","home/calc/ventilation/heatExchanger/volumeFlowRate"],
        calc: "1.2041 * {{home/calc/ventilation/heatExchanger/enthalpieReturnAir}} * 0.000277778 * {{home/calc/ventilation/heatExchanger/volumeFlowRate}}",                       
        logger:{condition:"none"}
   },    
 
      "home/calc/ventilation/heatExchanger/energyVentilation":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," W")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/energySupplyAir","home/calc/ventilation/heatExchanger/energyReturnAir"],
        calc: "({{home/calc/ventilation/heatExchanger/energySupplyAir}} - {{home/calc/ventilation/heatExchanger/energyReturnAir}}) * 1000",                       
        logger:{condition:"none"}
   },  
   
       "home/calc/ventilation/heatExchanger/humidityVentilation":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 2})," kg/h")',
        message:0,
        triggers:["home/calc/ventilation/heatExchanger/absHumiditySupplyAir","home/calc/ventilation/heatExchanger/absHumidityReturnAir"],
        calc: "({{home/calc/ventilation/heatExchanger/absHumiditySupplyAir}} - {{home/calc/ventilation/heatExchanger/absHumidityReturnAir}}) * {{home/calc/ventilation/heatExchanger/volumeFlowRate}} * 1.2041",                       
        logger:{condition:"none"}
   },  
     
    
    "home/state/ventilation/airDistribution/humiditySupplyAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/ventilation/airDistribution/temperatureExhaustAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/ventilation/airDistribution/humidityExhaustAir":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},    
    "home/calc/ventilation/airDistribution/temperatureDifference":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")',
        message:0,
        triggers:["home/state/ventilation/airDistribution/temperatureSupplyAir","home/state/ventilation/airDistribution/temperatureExhaustAir"],
        calc: "{{home/state/ventilation/airDistribution/temperatureSupplyAir}} - {{home/state/ventilation/airDistribution/temperatureExhaustAir}}",
        logger:{condition:"none"}
    },
    "home/state/ventilation/heatExchanger/setPointLowerTemp":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/ventilation/heatExchanger/setPointUpperTemp":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},
    "home/state/ventilation/heatExchanger/modeSupplyAir":{formatter:'concat(format(v/1,{notation: "fixed", precision: 1}),"")'},
    "home/state/ventilation/heatExchanger/modeBypass":{formatter:'concat(format(v/1,{notation: "fixed", precision: 1}),"")'},
    
    "home/state/metering/powermeterKWL/powerActual":{formatter:'concat(format(v/100,{notation: "fixed", precision: 1})," W")'},
    "home/state/metering/powermeterKWL/counterConsumptionTotal":{formatter:'concat(format(v/100,{notation: "fixed", precision: 2})," kWh")'},    
                                                                                                                                               
    "home/calc/ventilation/heatExchanger/volumeFlowRate":{
        formatter:'concat(format(v/1,{notation: "fixed", precision: 1})," m³/h")',
        message:0,
        triggers:["home/state/metering/powermeterKWL/powerActual"],
        calc: "2.75 * {{home/state/metering/powermeterKWL/powerActual}} / 100",
        logger:{condition:"none"}
   },      
                
    
    //df_strom
    
    "home/state/metering/powermeter/powerActual":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," W")'},
    "home/state/metering/powermeterPV/powerActual":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," W")'},
    "home/calc/metering/powermeter/powerConsumptionActual":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," W")',        
        message:0,
        triggers:["home/state/metering/powermeter/powerActual","home/state/metering/powermeterPV/powerActual"],
        calc: "{{home/state/metering/powermeter/powerActual}} - {{home/state/metering/powermeterPV/powerActual}}",
        logger: {condition:"none"}
    },      
    
    "home/state/metering/powermeter/counterConsumptionTotal":{},
    "home/state/metering/powermeter/counterConsumptionLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/powermeter/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeter/counterConsumptionLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/powermeter/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeter/counterConsumptionLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/powermeter/counterConsumptionTotal}}"
    },       
    
    "home/state/metering/powermeter/counterFeedInTotal":{},
    "home/state/metering/powermeter/counterFeedInLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/powermeter/counterFeedInTotal}}"
    },   
    "home/state/metering/powermeter/counterFeedInLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/powermeter/counterFeedInTotal}}"
    },   
    "home/state/metering/powermeter/counterFeedInLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/powermeter/counterFeedInTotal}}}"
    },  
    
    
    "home/state/metering/powermeterPV/counterConsumptionTotal":{},
    "home/state/metering/powermeterPV/counterConsumptionLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeterPV/counterConsumptionLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeterPV/counterConsumptionLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },       
    
    "home/state/metering/powermeterPV/counterFeedInTotal":{},
    "home/state/metering/powermeterPV/counterFeedInLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeterPV/counterFeedInLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },   
    "home/state/metering/powermeterPV/counterFeedInLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}}"
    },
 
    "home/calc/metering/powermeter/counterConsumptionActualDay":{
    formatter:'concat(format(v/10000,{notation: "fixed", precision: 2})," kWh/d")',        
    message:0,
    triggers:["home/state/metering/powermeter/counterConsumptionTotal","home/state/metering/powermeter/counterConsumptionLastDay"],
    calc: "{{home/state/metering/powermeter/counterConsumptionTotal}} - {{home/state/metering/powermeter/counterConsumptionLastDay}}",
    logger: {condition:"none"}
    },
    "home/calc/metering/powermeter/counterFeedInActualDay":{
        formatter:'concat(format(v/10000,{notation: "fixed", precision: 2})," kWh/d")',        
        message:0,
        triggers:["home/state/metering/powermeter/counterFeedInTotal","home/state/metering/powermeter/counterFeedInLastDay"],
        calc: "{{home/state/metering/powermeter/counterFeedInTotal}} - {{home/state/metering/powermeter/counterFeedInLastDay}}",
        logger: {condition:"none"}
    },
    "home/calc/metering/powermeter/counterFeedInActualMonth":{
        formatter:'concat(format(v/10000,{notation: "fixed", precision: 0})," kWh/m")',        
        message:0,
        triggers:["home/state/metering/powermeter/counterFeedInTotal","home/state/metering/powermeter/counterFeedInLastMonth"],
        calc: "{{home/state/metering/powermeter/counterFeedInTotal}} - {{home/state/metering/powermeter/counterFeedInLastMonth}}",
        logger: {condition:"none"}
    }, 
    
    "home/calc/metering/powermeter/counterConsumptionTotalDay":{
    formatter:'concat(format(v/10000,{notation: "fixed", precision: 2})," kWh/d")',        
    message:0,
    triggers:["home/state/metering/powermeter/counterConsumptionTotal","home/state/metering/powermeter/counterConsumptionLastDay","home/state/metering/powermeterPV/counterFeedInTotal","home/state/metering/powermeterPV/counterFeedInLastDay","home/state/metering/powermeter/counterFeedInTotal","home/state/metering/powermeter/counterFeedInLastDay"],
    calc: "({{home/state/metering/powermeter/counterConsumptionTotal}} - {{home/state/metering/powermeter/counterConsumptionLastDay}}) + ({{home/state/metering/powermeterPV/counterFeedInTotal}} - {{home/state/metering/powermeterPV/counterFeedInLastDay}}) - ({{home/state/metering/powermeter/counterFeedInTotal}} - {{home/state/metering/powermeter/counterFeedInLastDay}})",
    logger: {condition:"none"}
    },
    
    "home/calc/metering/powermeterPV/counterConsumptionActualDay":{
    formatter:'concat(format(v/10000,{notation: "fixed", precision: 2})," kWh/d")',        
    message:0,
    triggers:["home/state/metering/powermeterPV/counterConsumptionTotal","home/state/metering/powermeterPV/counterConsumptionLastDay"],
    calc: "{{home/state/metering/powermeterPV/counterConsumptionTotal}} - {{home/state/metering/powermeterPV/counterConsumptionLastDay}}",
    logger: {condition:"none"}
    },
    "home/calc/metering/powermeterPV/counterFeedInActualDay":{
        formatter:'concat(format(v/10000,{notation: "fixed", precision: 2})," kWh/d")',        
        message:0,
        triggers:["home/state/metering/powermeterPV/counterFeedInTotal","home/state/metering/powermeterPV/counterFeedInLastDay"],
        calc: "{{home/state/metering/powermeterPV/counterFeedInTotal}} - {{home/state/metering/powermeterPV/counterFeedInLastDay}}",
        logger: {condition:"none"}
    },
    "home/calc/metering/powermeterPV/counterFeedInActualMonth":{
        formatter:'concat(format(v/10000,{notation: "fixed", precision: 0})," kWh/m")',        
        message:0,
        triggers:["home/state/metering/powermeterPV/counterFeedInTotal","home/state/metering/powermeterPV/counterFeedInLastMonth"],
        calc: "{{home/state/metering/powermeterPV/counterFeedInTotal}} - {{home/state/metering/powermeterPV/counterFeedInLastMonth}}",
        logger: {condition:"none"}
    },
    
    "home/calc/metering/powermeter/counterShare":{
        formatter:'concat(format(v/0.01,{notation: "fixed", precision: 1})," %")',        
        message:0,
        triggers:["home/state/metering/powermeterPV/counterFeedInTotal","home/state/metering/powermeterPV/counterFeedInLastDay","home/state/metering/powermeter/counterFeedInTotal","home/state/metering/powermeter/counterFeedInLastDay","home/state/metering/powermeter/counterConsumptionTotal","home/state/metering/powermeter/counterConsumptionLastDay"],
        calc: "(({{home/state/metering/powermeterPV/counterFeedInTotal}} - {{home/state/metering/powermeterPV/counterFeedInLastDay}}) - ({{home/state/metering/powermeter/counterFeedInTotal}} - {{home/state/metering/powermeter/counterFeedInLastDay}}))/(({{home/state/metering/powermeter/counterConsumptionTotal}} - {{home/state/metering/powermeter/counterConsumptionLastDay}}) + ({{home/state/metering/powermeterPV/counterFeedInTotal}} - {{home/state/metering/powermeterPV/counterFeedInLastDay}}) - ({{home/state/metering/powermeter/counterFeedInTotal}} - {{home/state/metering/powermeter/counterFeedInLastDay}}))",
        logger: {condition:"none"}
    },
    
    //df_water
    
    "home/state/metering/gasmeter/counterConsumptionWTotal":{},     
    "home/state/metering/gasmeter/counterConsumptionWLastDay":{
        triggers:["home/event/timer/day"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastDay}}"
    },
    "home/state/metering/gasmeter/counterConsumptionWLastMonth":{
        triggers:["home/event/timer/month"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastMonth}}"
    },    
    "home/state/metering/gasmeter/counterConsumptionWLastYear":{
        triggers:["home/event/timer/year"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastYear}}"
    },        
    
    "home/calc/metering/gasmeter/counterEnergyWActualDay":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kWh/d")',
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastDay"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastDay}}",
        logger:{condition:"none"}
    },        
    "home/calc/metering/gasmeter/counterEnergyWActualMonth":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 0})," kWh/m")',          
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastMonth"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastMonth}}",
        logger:{condition:"none"}
    },
    "home/calc/metering/gasmeter/counterEnergyWActualYear":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 0})," kWh/y")',        
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastYear"],
        calc: "{{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastYear}}",
        logger:{condition:"none"}
    },
    "home/calc/metering/gasmeter/counterEnergyWShare":{
        formatter:'concat(format(v/0.01,{notation: "fixed", precision: 1})," %")',        
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastYear","home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastMonth"],
        calc: "(({{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastMonth}})/({{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastMonth}}))",
        logger:{condition:"none"}
    },   
    
    //df_temp_eg
    
    "home/state/location/Technikraum/temperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/location/Technikraum/humitidy":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    
    "home/state/location/Wohnen/roomTemperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/location/Wohnen/roomHumidity":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},    
    "home/state/location/Wohnen/ventTemperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/location/Wohnen/ventHumidity":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},   
      
    //"home/state/location/Buero/temperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    //"home/state/location/Buero/humidity":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    //"home/state/location/Buero/CO2concentration":{formatter:'concat(format(v/1,{notation: "fixed", precision: 0})," ppm")'},    
    //"home/state/location/Buero/TVOCconcentration":{formatter:'concat(format(v/1,{notation: "fixed", precision: 0})," ppb")'},       
    //"home/state/location/Buero/brightness":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," lx")'},                                                                                                                                
    
    "home/state/heating/lowerFloor/temperatureSupplyFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/heating/lowerFloor/temperatureReturnFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},  
    "home/state/heating/lowerFloor/temperatureReturnFlowBuero":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowWohnenA":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowWohnenB":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowEssen":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowFlur":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowKueche":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/lowerFloor/temperatureReturnFlowHwr":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},       
    "home/state/heating/lowerFloor/temperatureReturnFlowBad":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},       
  
    "home/calc/heating/lowerFloor/temperatureDifference":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")',
        message:0,
        triggers:["home/state/heating/lowerFloor/temperatureSupplyFlow","home/state/heating/lowerFloor/temperatureReturnFlow"],
        calc: "{{home/state/heating/lowerFloor/temperatureSupplyFlow}} - {{home/state/heating/lowerFloor/temperatureReturnFlow}}",
        logger:{condition:"none"}
    },    
       
    //df_temp_og
    
    "home/state/location/Schlafen/roomTemperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/location/Schlafen/roomHumidity":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},
    "home/state/location/Schlafen/ventTemperature":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/location/Schlafen/ventHumidity":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," %")'},            
    
    "home/state/heating/upperFloor/temperatureSupplyFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},    
    "home/state/heating/upperFloor/temperatureReturnFlow":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},  
    "home/state/heating/upperFloor/temperatureReturnFlowGast":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowToilette":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowKind":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowSchlafen":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowBadA":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowBadB":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},   
    "home/state/heating/upperFloor/temperatureReturnFlowBadHK":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},       
    "home/state/heating/upperFloor/temperatureReturnFlowFlur":{formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")'},       
  
    "home/calc/heating/upperFloor/temperatureDifference":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," °C")',
        message:0,
        triggers:["home/state/heating/upperFloor/temperatureSupplyFlow","home/state/heating/upperFloor/temperatureReturnFlow"],
        calc: "{{home/state/heating/upperFloor/temperatureSupplyFlow}} - {{home/state/heating/upperFloor/temperatureReturnFlow}}",
        logger:{condition:"none"}
    },
    "home/calc/metering/gasmeter/counterEnergyHActualDay":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 1})," kWh/d")',
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastDay","home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastDay"],
        calc: "({{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastDay}})-({{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastDay}})",
        logger:{condition:"none"}
    },   
    "home/calc/metering/gasmeter/counterEnergyHActualMonth":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 0})," kWh/m")',
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastMonth","home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastMonth"],
        calc: "({{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastMonth}})-({{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastMonth}})",
        logger:{condition:"none"}
    },    
    "home/calc/metering/gasmeter/counterEnergyHActualYear":{
        formatter:'concat(format(v/10,{notation: "fixed", precision: 0})," kWh/y")',
        message:0,
        triggers:["home/state/metering/gasmeter/counterConsumptionTotal","home/state/metering/gasmeter/counterConsumptionLastYear","home/state/metering/gasmeter/counterConsumptionWTotal","home/state/metering/gasmeter/counterConsumptionWLastYear"],
        calc: "({{home/state/metering/gasmeter/counterConsumptionTotal}} - {{home/state/metering/gasmeter/counterConsumptionLastYear}})-({{home/state/metering/gasmeter/counterConsumptionWTotal}} - {{home/state/metering/gasmeter/counterConsumptionWLastYear}})",
        logger:{condition:"none"}
    }    
    
    /*
    "mh/location/raum1/state/temperature":{
        message:"123", // (optional) default message
        formatter:'concat(format(v/10,{notation: "fixed", precision: 2})," °C")', // (optional) server side formatting variable v = message as float
        logger:{ // (optional) default is onEvent
            condition:"atMost", // Condition: all (default), atMost, none
            interval:5, // for atMost (in seconds)
            newonly:true // optional: log only new values (default = false)           
        },
        cleanup:{ // default is no cleanup
            unit:"days",
            lifespan:30
        }
    },
    "mh/l/h1/state/t01":{
        message:"123", // (optional) default message
        formatter:'concat(format(v/10,{notation: "fixed", precision: 2})," °C")', // (optional) server side formatting variable v = message as float
        triggers:["mh/l/h1/state/t02","mh/l/h1/state/t04"], // (optional) additional triggers for message update
        calc: "{{mh/l/h1/state/t04}} - {{mh/l/h1/state/t02}}", // (optional) calc function
        logger:{ // (optional) default is onEvent
            condition:"atMost", // Condition: all (default), atMost, none
            interval:5, // for atMost (in seconds)
            newonly:true // optional: log only new values (default = false)           
        },
        cleanup:{ // default is no cleanup
            unit:"seconds",
            lifespan:30
        }
    },
    "mh/l/h1/state/t02":{
        message:"456"  
    },
    "mh/location/raum1/state/switch":{},
    "mh/l/lamp/state":{},
    "home/event/timer/seconds":{},
    "home/event/timer/minutes":{},
    "mh/l/h1/state/t03":{
        message:"1024"
    }  */
};

module.exports=topics;