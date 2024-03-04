import { View, Text, Button, TextInput, Pressable } from "react-native";
import { globalStyles } from "../../styles/global";
import { useState } from "react";

export default function Login() {
  // Set a state variable for each input
  const [name, setName] = useState("");
  const [logged, setLogged] = useState(0);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.loginbox}>
        <Text style={globalStyles.heading}>Login</Text>

        {logged === 0 ? (
          <TextInput
            style={globalStyles.inputbox}
            placeholder="User name"
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
          />
        ) : (
          <Text>:-)</Text>
        )}
        {logged === 0 ? (
          <Pressable
            style={[globalStyles.buttons]}
            onPress={() => {
              console.log(`Username: ${name}`);
            }}
            title="Submit"
          />
        ) : (
          <Pressable
            style={[globalStyles.buttons]}
            onPress={() => {
              console.log(`Username: ${name}`);
            }}
            title="Logout"
          />
        )}
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
