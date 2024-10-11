import { Color } from "@/constants/Color";
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
  inputSearchContainer: {
    flexDirection: "row",
    backgroundColor: Color.terciary,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    marginBottom: 20,
  },
  inputSearch: {
    height: 40,
    paddingHorizontal: 10,
    width: 340,
    paddingRight: 25,
    paddingVertical: 10,
    fontSize: 15,
    alignContent: "center",
    color: Color.grey,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    paddingHorizontal: 5,
    color: Color.grey,
  },
});

export default styles;
