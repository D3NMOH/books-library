import { View, Text, Button, TextInput, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { useState } from "react";

export default function Login() {
  // Set a state variable for each input
  const [name, setName] = useState("");

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.loginbox}>
        <Text style={globalStyles.heading}>Login</Text>

        <TextInput
          style={globalStyles.inputbox}
          placeholder="User name"
          // update the state variable on every keystroke
          // You must use onChangeText instead of onChange
          onChangeText={(text) => {
            setName(text);
          }}
          // set the value of the TextInput to the value of the state variable to "bind" it to the state
          value={name}
        />

        {/* <Button
          style={{ backgroundColor: "yellow" }}
          onPress={() => {
            console.log(`Username: ${name}`);
          }}
          title="Submit"
        /> */}
        <Pressable
          style={globalStyles.loginbutton}
          onPress={() => {
            console.log(`Username: ${name}`);
          }}
        >
          <Text style={{ fontSize: 25 }}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
