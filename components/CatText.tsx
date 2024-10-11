import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Color } from "@/constants/Color";

interface Props {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  children: React.ReactNode;
  style?: any;
}

function CatText(props: Props) {
  const { type = "default", children, style } = props;

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
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default CatText;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: "Fredoka",
    color: Color.grey,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Fredoka",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Color.secundary,
    fontFamily: "Fredoka",
    alignSelf: "center",
    justifyContent: "center",
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
    color: Color.secundary,
    fontFamily: "Fredoka",
  },
});
