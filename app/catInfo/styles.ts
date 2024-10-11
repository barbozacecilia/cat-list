import { Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  containerText: {
    backgroundColor: Color.white,
    height: "auto",
    width: "100%",
    padding: 25,
    borderRadius: 250,
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center", // -
    justifyContent: "flex-end", // |
    flex: 3,
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
  shareButtonContainer: {
    display: "flex",
    width: "100%",
    marginTop: "5%",
    flexDirection: "column",
    alignItems: "flex-end", // -
    justifyContent: "flex-end", // |
  },
  shareButton: {
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    gap: 10,
    borderRadius: 15,
    marginTop: "5%",
    alignItems: "center", // -
    justifyContent: "center", // |
  },
  textShareButton: {
    flexDirection: "row",
    margin: 5,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
});

export default styles;
