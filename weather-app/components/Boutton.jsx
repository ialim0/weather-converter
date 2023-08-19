import { TouchableOpacity, Text } from "react-native";
import { s } from "./Boutton.js";

export function ButtonConv({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convertir en {unit} </Text>
    </TouchableOpacity>
  );
}
