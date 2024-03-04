import { globalStyles } from "../styles/global";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function Login() {
  // Set a state variable for each input
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Login</Text>

      <TextInput
        style={globalStyles.inputFields}
        placeholder="User name"
        // update the state variable on every keystroke
        // 🚨 You must use onChangeText instead of onChange
        onChangeText={(text) => {
          setName(text);
        }}
        // set the value of the TextInput to the value of the state variable to "bind" it to the state
        value={name}
      />
      <TextInput
        style={globalStyles.inputFields}
        placeholder="Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry
      />
      <Button
        style={[globalStyles.buttons]}
        onPress={() => {
          console.log(`Username: ${name} Password: ${password}`);
        }}
        title="Submit"
        color={"#FF4365"}
      />
    </View>
  );
}
