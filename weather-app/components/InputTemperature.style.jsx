import { TextInput } from "react-native";
import { s } from "./InputTemperature.style.js";

export function InputTemperature({}) {
  return <TextInput style={s.input} placeholder="Enter a temperature" />;
}
