import React, { useState,useEffect } from 'react'
import { Text, View,ImageBackground  } from "react-native";
import {s} from "./App.style"
import hotImage from "./assets/hot.png"
import coldImage from "./assets/cold.png"
import { InputTemperature } from "./components/InputTemperature.style.jsx";
import {TemperatureDisplay} from "./components/TemperatureDisplay.style.jsx";
import { DEFAULT_UNITS,DEFAULT_TEMPERATURE } from "./constant";
import { getMirrorUnit, isIceTemp } from "./services/temperature-unit";
import { convertTemp } from "./services/conversion";
import { ButtonConv } from "./components/Boutton.jsx";

export default function App() {
  const [inputValue, setInputValue]= useState("0"); 
  const [currentUnit,setCurrentUnit]= useState("°C");
  const [currentBackground,setCurrentBackground]=useState(); 
  const unitMirror=getMirrorUnit(currentUnit);
  useEffect(()=>{

    const temperature=Number.parseFloat(inputValue);
    if(!isNaN(temperature)){
      const isCold=isIceTemp(inputValue,currentUnit);
      setCurrentBackground(isCold?coldImage:hotImage)
    }
  },[inputValue])
  function checker(){
    const valueFloat=Number.parseFloat(inputValue);
    return isNaN(valueFloat)?"":convertTemp(unitMirror,valueFloat).toFixed(1)
  } 
  return (
   
    <ImageBackground source={currentBackground}style={s.container} >
      <View style={s.workspace}>
       <TemperatureDisplay value={convertTemp(unitMirror,inputValue).toFixed(1)} unit={unitMirror}/> 
        <InputTemperature onChangeText={setInputValue}   defaultValue={DEFAULT_TEMPERATURE} unit={currentUnit}  />
      
        <View>
        <ButtonConv onPress={()=>{
          setCurrentUnit(unitMirror)
        }} unit={currentUnit} />
        </View>
        
      </View> 

    </ImageBackground>
  
  );
}

  