// Login.js
import React, { cloneElement, useContext, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { name, logIn, logged, logOut } = useContext(UserContext);

  const handleLogin = () => {
    console.log(`Username: ${name}`);
    logIn(userName);
  };

  const handleLogout = () => {
    console.log(`Logged out`);
    logOut();
  };
  const [userName, setUserName] = useState("");
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.loginbox}>
        {logged === false ? (
          <Text style={[globalStyles.heading, { color: "#fff" }]}>Login</Text>
        ) : (
          <Text style={[globalStyles.heading, { color: "#fff" }]}>
            Hi, {name}
          </Text>
        )}

        {logged === false ? (
          <TextInput
            style={globalStyles.inputbox}
            placeholder="User name"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
        ) : (
          <Text style={{ fontSize: 20, color: "#FFF", textAlign: "center" }}>
            :-)
          </Text>
        )}
        {logged === false ? (
          <Pressable style={globalStyles.loginbutton} onPress={handleLogin}>
            <Text style={globalStyles.loginButtonText}>Submit</Text>
          </Pressable>
        ) : (
          <Pressable style={globalStyles.loginbutton} onPress={handleLogout}>
            <Text style={globalStyles.loginButtonText}>Logout</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
