import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    display: "flex",
    flex: 1,
  },
  containerText: {
    backgroundColor: "#f9f9f9",
    height: "auto",
    width: "100%",
    padding: 25,
    borderRadius: 250,
    alignContent: "center",
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
  titleContainer: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#658FD7",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    overflow: "hidden",
    height: 400,
    position: "relative",
  },
  imageShape: {
    width: "100%",
    overflow: "hidden",
    height: 400,
    alignSelf: "center",
    position: "relative",
    backgroundColor: " grey",
  },
  textImgShape: {
    alignSelf: "center",
  },
  shareButton: {
    backgroundColor: "pink",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 15,
  },
  textShareButton: {
    color: "FFF",
    backgroundColor: "RED",
  },
});

export default styles;
