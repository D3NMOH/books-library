import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: COLORS.light,
  },
  heading: {
    fontSize: 32,
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "700",
  },
  inputFields: {
    backgroundColor: COLORS.primary,
    color: "#fff",
    padding: 10,
    borderRadius: 7,
    margin: 20,
  },
  buttons: {
    backgroundColor: COLORS.primary,
    color: "#fff",
    borderRadius: 7,
    padding: 10,
    tintColor: "#fff",
  },
});
