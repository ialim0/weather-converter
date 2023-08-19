 import { UNITS } from "../constant";

 function getMirrorUnit(unit) {
    return unit===UNITS.celcius? UNITS.faranheit:UNITS.celcius; 
    
 }

 function isIceTemp(value,unit){
    if(unit==UNITS.celcius){
        return value <=0;
    }else{
      return   value<=32
    }

 }
 export {getMirrorUnit,isIceTemp}