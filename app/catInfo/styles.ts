import { Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    display: "flex",
    flex: 1,
  },
  containerText: {
    backgroundColor: Color.white,
    width: "100%",
    padding: 25,
    alignContent: "center",
    alignItems: "center", // -
    justifyContent: "flex-end", // |
  },
  decorationContainer: {
    backgroundColor: Color.white,
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
    fontWeight: "bold",
    marginBottom: 20,
    flexDirection: "row",
    margin: 10,
    fontSize: 32,
    lineHeight: 32,
    color: "grey",
  },
  catImage: {
    width: "100%",
    overflow: "hidden",
    height: 300,
    position: "relative",
  },
  imageShape: {
    width: "100%",
    overflow: "hidden",
    height: 400,
    alignSelf: "center",
    position: "relative",
  },
  textImgShape: {
    alignSelf: "center",
  },
  shareButtonContainer: {
    width: "100%",
    marginTop: "5%",
    alignItems: "flex-end", // -
    justifyContent: "flex-end", // |
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  shareButton: {
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    borderRadius: 15,
    marginTop: "5%",
    alignItems: "center", // -
    justifyContent: "center", // |
    alignContent: "center",
  },
  textShareButton: {
    flexDirection: "row",
    margin: 5,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
