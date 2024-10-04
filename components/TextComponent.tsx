import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Color } from "@/constants/Colors";

interface Props {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  children: React.ReactNode;
}

function TextComponent(props: Props) {
  const { type = "default", children } = props;

  const [loaded] = useFonts({
    Fredoka: require("../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf"),
  });

  if (!loaded) return null; // loading o  SplashScreen
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
      ]}
    >
      {children}
    </Text>
  );
}

export default TextComponent;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Fredoka",
    color: Color.black,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Fredoka",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    lineHeight: 32,
    color: Color.primary,
    fontFamily: "Fredoka",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Fredoka",
    color: Color.secundary,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Color.terciary,
    fontFamily: "Fredoka",
  },
});
