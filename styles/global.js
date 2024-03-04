import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    padding: 12,
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
    color: COLORS.dark,
  },
  smalltext: {
    fontSize: 19,
    color: COLORS.dark,
  },
  heading: {
    fontSize: 32,
    color: COLORS.primary,
    textAlign: "center",
  },
  loginbox: {
    alignSelf: "center",
    padding: 50,
    marginTop: 50,
    width: 300,
    height: 230,
    backgroundColor: "#B5DDA4",
    borderRadius: 15,
    gap: 10,
  },
  inputbox: {
    backgroundColor: "white",
    height: 45,
    padding: 10,
    fontSize: 23,
    color: COLORS.dark,
    borderRadius: 7,
  },
  loginbutton: {
    backgroundColor: "#4DAA57",
    padding: 10,
    textAlign: "center",
    borderRadius: 7,
  },
  bookbox: {
    backgroundColor: "pink",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  bookboxLeft: {},
  bookboxRight: {
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
    right: 20,
    top: 25,
  },
});
