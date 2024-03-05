import { Stack } from "expo-router";
import { UserProvider } from "../context/UserProvider";
import { Modal } from "react-native";

export default function RootStack() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="Login" options={{ presentation: "modal" }} />
      </Stack>
    </UserProvider>
  );
}
