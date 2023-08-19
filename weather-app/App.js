import { Text, View,ImageBackground } from "react-native";
import {s} from "./App.style"
import hotImage from "./assets/hot.png"
import { InputTemperature } from "./components/InputTemperature.style.jsx";
import {TemperatureDisplay} from "./components/TemperatureDisplay.style.jsx";
export default function App() {
  return (
    <ImageBackground source={hotImage}style={s.container} >
      <View style={s.workspace}>
       <TemperatureDisplay value="1234" unit="°C"/> 
        <InputTemperature  defaultValue={"12 "}   />
      
        <View>
        <Text>Temperature  </Text>
        </View>
        
      </View>

    </ImageBackground>
  
  );
}

  