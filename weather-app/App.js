import { Text, View,ImageBackground } from "react-native";
import {s} from "./App.style"
import hotImage from "./assets/hot.png"
import { InputTemperature } from "./components/InputTemperature.style.jsx";
export default function App() {
  return (
    <ImageBackground source={hotImage}style={s.container} >
      <View style={s.workspace}>
        <View>
        <Text>Temperature  </Text>
        </View> 
        <View>
        <InputTemperature/>
        </View>
        <View>
        <Text>Temperature  </Text>
        </View>
        
      </View>

    </ImageBackground>
  
  );
}

  