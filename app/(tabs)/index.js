import { globalStyles } from "../../styles/global";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function Home() {
  // Set a state variable for each input
  const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(0);
  return (
    <View style={globalStyles.container}>
      {name === "" ? (
        <Text style={globalStyles.heading}>Login</Text>
      ) : (
        <Text style={globalStyles.heading}>Welcome, {name}</Text>
      )}

      {logged === 0 ? (
        <TextInput
          style={globalStyles.inputFields}
          placeholder="User name"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
      ) : (
        <Text>:-)</Text>
      )}
      {/* <TextInput
        style={globalStyles.inputFields}
        placeholder="Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        secureTextEntry
      /> */}
      {logged === 0 ? (
        <Button
          style={[globalStyles.buttons]}
          onPress={() => {
            console.log(`Username: ${name}`);
            setLogged(1);
          }}
          title="Submit"
          color={"#FF4365"}
        />
      ) : (
        <Button
          style={[globalStyles.buttons]}
          onPress={() => {
            console.log(`Logout`);
            setLogged(0);
            setName("");
          }}
          title="Logout"
          color={"#FF4365"}
        />
      )}
    </View>
  );
}
