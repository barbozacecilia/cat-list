import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
  title: string;
}

export function Dropdown(props: Props) {
  const { children, title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
      >
        <AntDesign
          name={isOpen ? "downcircle" : "rightcircle"}
          size={24}
          color="grey"
        />
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
