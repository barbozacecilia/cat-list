import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
  },
  titleContainer: {
    padding: "5%",
    marginTop: "5%",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#658FD7",
  },
  inputSearch: {
    backgroundColor: "white",
    margin: 20,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderRadius: 5,
    padding: 8,
    height: 45,
    width: "80%",
    borderWidth: 1,
    color: "#676767",
  },
  image: {
    width: 351,
    height: 351,
    resizeMode: "contain",
  },
});

export default styles;
