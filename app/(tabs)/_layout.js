import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 23,
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
          tabBarIcon: () => {
            return <AntDesign name="banckward" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="creditcard" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
}
