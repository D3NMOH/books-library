import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
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
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "User",
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => {
            return <FontAwesome6 name="user-large" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarLabel: "Book list",
          tabBarIcon: ({ color }) => {
            return <FontAwesome6 name="book-open" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
