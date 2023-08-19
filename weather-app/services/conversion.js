import { UNITS } from "../constant";

function convertTemp(unit,value) {
   if(unit===UNITS.celcius){
    return (value-32)/1.8
   }else{
    return (value*1.8)+32

   }
   
}

export {convertTemp}