import { Text, View, Button } from "react-native";
import styles from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

const CAT_API = "https://api.thecatapi.com/v1/breeds";

type CatItem = {
  name: string;
  temperament: string;
  id: string;
};

const CatInfo = () => {
  const [catData, setCatData] = useState<CatItem[]>([]);
  const router = useRouter();
  const { id, name } = useLocalSearchParams();

  useEffect(() => {
    fetch(CAT_API)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        const searchCat = data.find((cat: CatItem) => cat.id === id);
        setCatData(searchCat);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [id]);

  if (!catData) {
    return (
      <View>
        <Text>Loading the Catinfo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Catinfo de : {name}</Text>
      <Text>{catData.name}</Text>
      <Text>{catData.description}</Text>
      <Text>They temperament is: {catData.temperament}</Text>
      <Text>They origin is from: {catData.origin} </Text>
      <Button onPress={() => router.back()} title="go back" />
    </View>
  );
};

export default CatInfo;
