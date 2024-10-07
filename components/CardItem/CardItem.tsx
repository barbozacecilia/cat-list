import { Pressable, View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CatText from "../CatText";

interface Props {
  name: string;
  id: string;
  origin: string;
}

function CardItem(props: Props) {
  const { name, id, origin } = props;

  return (
    <Link
      asChild
      href={{
        pathname: "/catInfo/[id]",
        params: { id, name },
      }}
    >
      <Pressable style={styles.mainContainer}>
        <View style={styles.containerImgName}>
          <View style={styles.iconCatContainer}>
            <FontAwesome5 name="cat" size={24} style={styles.iconCat} />
          </View>
          <View>
            <CatText style={styles.name}>{name}</CatText>
            <CatText style={styles.origin}>{origin}</CatText>
          </View>
        </View>
        <View style={styles.iconInfoContainer}>
          <Entypo
            name="dots-three-vertical"
            size={14}
            color="grey"
            style={styles.iconInfo}
          />
        </View>
      </Pressable>
    </Link>
  );
}

export default CardItem;
