 import { UNITS } from "../constant";

 function getMirrorUnit(unit) {
    return unit===UNITS.celcius? UNITS.faranheit:UNITS.celcius; 
    
 }

 export {getMirrorUnit}