import { Color } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    padding: 25,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: 20,
  },
  title: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#727272",
  },
  inputSearchContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 25,
    height: 40,
    color: "#727272",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    marginBottom: 20,
    paddingVertical: 10,
  },
  inputSearch: {
    height: 40,
    width: 340,
    paddingRight: 25,
    paddingVertical: 10,
    fontSize: 15,
    alignContent: "center",
  },
  searchIcon: {
    position: "absolute",
    right: 10,
  },
});

export default styles;
