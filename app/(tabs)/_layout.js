import { Tabs, Link } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";
import { UserContext } from "../../context/UserProvider";

export default function MainTabs() {
  const { name, logged } = useContext(UserContext);
  console.log(name, logged);
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
        },
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          height: 0,
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="(books)"
        options={{
          title: "Books",
          tabBarLabel: "Book list",
          tabBarIcon: ({ color }) => {
            return <FontAwesome6 name="book-open" size={24} color={color} />;
          },
          headerRight: () => {
            return logged === false ? (
              <View>
                <Link href="/Login" asChild>
                  <Pressable style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        fontSize: 20,
                      }}
                    >
                      Login
                    </Text>
                    <View style={{ marginHorizontal: 15 }}>
                      <FontAwesome6
                        name="user"
                        size={24}
                        color={COLORS.primary}
                      />
                    </View>
                  </Pressable>
                </Link>
              </View>
            ) : (
              <View>
                <Link href="/Login" asChild>
                  <Pressable style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: COLORS.primary,
                        fontSize: 20,
                      }}
                    >
                      {name}
                    </Text>
                    <View style={{ marginHorizontal: 15 }}>
                      <FontAwesome6
                        name="user"
                        size={24}
                        color={COLORS.primary}
                      />
                    </View>
                  </Pressable>
                </Link>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
