import { StyleSheet } from "react-native";
import { colors } from "../styles/colores";

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.white,
  },
  gutterVertical: {
    marginVertical: 20,
  },
  fullWidth: { width: "100%" },
  center: {
    justifyContent: "center",
    alignContent: "center",
  },
  Spacebtw: {
    justifyContent: "space-between",
  },
  pt20: {
    paddingTop: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  errorMessage: {
    fontSize: 14,
    fontFamily: "Gilroy-Regular",
    color: colors.red,
  },
});
