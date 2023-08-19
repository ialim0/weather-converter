import React, { useState } from 'react'
import { Text, View,ImageBackground  } from "react-native";
import {s} from "./App.style"
import hotImage from "./assets/hot.png"
import { InputTemperature } from "./components/InputTemperature.style.jsx";
import {TemperatureDisplay} from "./components/TemperatureDisplay.style.jsx";
import { DEFAULT_UNITS,DEFAULT_TEMPERATURE } from "./constant";
export default function App() {
  const [inputValue, setInputValue]= useState("0"); 
  const [currentUnit,setCurrentUnit]= useState("°C");
  return (
   
    <ImageBackground source={hotImage}style={s.container} >
      <View style={s.workspace}>
       <TemperatureDisplay value={inputValue} unit={DEFAULT_UNITS}/> 
        <InputTemperature onChangeText={setInputValue}   defaultValue={DEFAULT_TEMPERATURE}   />
      
        <View>
        <Text>Temperature  </Text>
        </View>
        
      </View>

    </ImageBackground>
  
  );
}

  