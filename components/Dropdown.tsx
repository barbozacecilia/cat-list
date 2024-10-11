import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CatText from "./CatText";
import { Color } from "@/constants/Color";

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
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((prevState) => !prevState)}
      >
        <AntDesign
          name={isOpen ? IconName.close : IconName.open}
          size={18}
          color={Color.secundary}
          style={styles.icon}
        />
        <CatText>{title}</CatText>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </ScrollView>
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
