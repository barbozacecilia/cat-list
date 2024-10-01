import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "pink",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  decorationContainer: {
    backgroundColor: "#f9f9f9",
    height: "200%",
    width: "200%",
    alignItems: "center",
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    bottom: "-180%",
    left: "-50%",
    right: 0,
    borderTopLeftRadius: 950,
    borderTopRightRadius: 950,
  },
  image: {
    width: "100%",
    overflow: "hidden",
    height: 400,
    position: "relative",
  },
  infoContainer: {
    backgroundColor: "#f9f9f9",
    display: "flex",
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    margin: 10,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: "red",
  },
});

export default styles;
