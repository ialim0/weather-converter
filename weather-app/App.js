import { Text, View } from "react-native";
import {s} from "./App.style"
export default function App() {
  return (
    <View style={s.container}>
      <View style={s.workspace}>
        <View>
        <Text>Temperature  </Text>
        </View>
        <View>
        <Text>Input  </Text>
        </View>
        <View>
        <Text>Temperature  </Text>
        </View>
       
      </View>

    </View>
  
  );
}

  