import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Link } from "expo-router";

interface Props {
  name: string;
  id: string;
}

function CardItem(props: Props) {
  const { name, id } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Link
        href={{
          pathname: "/catInfo/[id]",
          params: { id, name },
        }}
      >
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>{id}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
}

export default CardItem;
