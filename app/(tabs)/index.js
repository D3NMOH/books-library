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
        {logged === 0 ? (
          <Text style={[globalStyles.heading, { color: "#fff" }]}>Login</Text>
        ) : (
          <Text style={[globalStyles.heading, { color: "#fff" }]}>
            Hi, {name}
          </Text>
        )}

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
            style={globalStyles.loginbutton}
            onPress={() => {
              console.log(`Username: ${name}`);
              setLogged(1);
            }}
          >
            <Text style={{ fontSize: 25 }}>Submit</Text>
          </Pressable>
        ) : (
          <Pressable
            style={globalStyles.loginbutton}
            onPress={() => {
              console.log(`Logged out`);
              setLogged(0);
            }}
          >
            <Text style={{ fontSize: 25 }}>Logout</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
