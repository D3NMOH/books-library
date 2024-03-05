// Login.js
import React, { cloneElement, useContext, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import { UserContext } from "../context/UserProvider";
import { Link, useNavigation } from "expo-router";
import { COLORS } from "../styles/constants";

export default function Login() {
  const navigation = useNavigation();

  const { name, logIn, logged, logOut } = useContext(UserContext);

  const handleLogin = () => {
    console.log(`Username: ${name}`);
    logIn(userName);
    navigation.navigate("(books)", {}, { replace: true });
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
          <Link
            href="/(books)"
            style={{
              alignSelf: "center",
            }}
          >
            <View
              style={{
                textAlign: "center",
                backgroundColor: COLORS.light,
                padding: 10,
                borderRadius: 7,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 20,
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Go to book list!
              </Text>
            </View>
          </Link>
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
