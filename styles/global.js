import { StyleSheet } from "react-native";
import { COLORS } from "./constants";
import { cloneElement } from "react";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 12,
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
    color: COLORS.light,
  },
  smalltext: {
    fontSize: 19,
    color: COLORS.light,
  },
  heading: {
    fontSize: 32,
    color: COLORS.primary,
    textAlign: "center",
  },
  loginbox: {
    alignSelf: "center",
    padding: 50,
    margin: 50,
    flex: 1,
    width: "80%",
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    gap: 10,
    justifyContent: "space-around",
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
    margin: 10,
    backgroundColor: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 7,
    alignContent: "center",
  },
  loginButtonText: {
    fontSize: 25,
    textAlign: "center",
  },
  bookbox: {
    backgroundColor: "black",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  bookboxLeft: {},
  bookboxRight: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    right: 20,
    top: 25,
    paddingRight: "25",
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    width: 45,
    height: 45,
  },
  numCopies: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    color: COLORS.primary,
  },
  thumbnail: {
    width: 300,
    height: 400,
    borderRadius: 10,
    alignSelf: "center",
    margin: 20,
  },
});
