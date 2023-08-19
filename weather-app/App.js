import React, { useState } from 'react'
import { Text, View,ImageBackground  } from "react-native";
import {s} from "./App.style"
import hotImage from "./assets/hot.png"
import { InputTemperature } from "./components/InputTemperature.style.jsx";
import {TemperatureDisplay} from "./components/TemperatureDisplay.style.jsx";
import { DEFAULT_UNITS,DEFAULT_TEMPERATURE } from "./constant";
import { getMirrorUnit } from "./services/temperature-unit";
import { convertTemp } from "./services/conversion";


export default function App() {
  const [inputValue, setInputValue]= useState("0"); 
  const [currentUnit,setCurrentUnit]= useState("°C");
  const unitMirror=getMirrorUnit(currentUnit)
  function checker(){
    const valueFloat=Number.parseFloat(inputValue);
    return isNaN(valueFloat)?"":convertTemp(unitMirror,valueFloat).toFixed(1)
  }
  return (
   
    <ImageBackground source={hotImage}style={s.container} >
      <View style={s.workspace}>
       <TemperatureDisplay value={convertTemp(unitMirror,inputValue)} unit={unitMirror}/> 
        <InputTemperature onChangeText={setInputValue}   defaultValue={DEFAULT_TEMPERATURE}   />
      
        <View>
        <Text>Temperature  </Text>
        </View>
        
      </View>

    </ImageBackground>
  
  );
}

  