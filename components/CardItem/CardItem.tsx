import { View, Text, Pressable } from "react-native";

import styles from "./styles";
import { Link } from "expo-router";

interface Props {
  name: string;
  id: string;
}

function CardItem(props: Props) {
  const { name, id } = props;

  return (
    <Link
      asChild
      href={{
        pathname: "/catInfo/[id]",
        params: { id, name },
      }}
    >
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export default CardItem;
