import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CatText from "./CatText";

interface Props {
  children: React.ReactNode;
  title: string;
}

enum IconName {
  close = "downcircle",
  open = "rightcircle",
}

export function Dropdown(props: Props) {
  const { children, title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((prevState) => !prevState)}
      >
        <AntDesign
          name={isOpen ? IconName.close : IconName.open}
          size={18}
          color="grey"
          style={styles.icon}
        />
        <CatText>{title}</CatText>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  icon: {
    paddingRight: 3,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
