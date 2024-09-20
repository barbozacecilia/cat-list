import { Text, View, Button, Image } from "react-native";
import styles from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { CAT_API } from "../../constants/API";

type CatItem = {
  name: string;
  temperament: string;
  id: string;
  origin: string;
  description: string;
  reference_image_id: string;
};

type catImage = {
  url: string;
};
const CatInfo = () => {
  const [catData, setCatData] = useState<CatItem>();
  const [catImage, setCatImage] = useState<catImage>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${CAT_API}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCatData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [id]);

  useEffect(() => {
    if (catData?.reference_image_id) {
      fetch(`https://api.thecatapi.com/v1/images/${catData.reference_image_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA DE LA IMAGEN:", data);
          setCatImage(data);
        });
    }
  }, [catData?.reference_image_id]);

  if (loading) {
    return <Text>Loading the Catinfo...</Text>;
  }

  if (!catData) {
    return <View>That cat exists?...</View>;
  }
  return (
    <View style={styles.container}>
      <Text>
        {catData.name} y id {id}
      </Text>
      <Image style={styles.image} source={{ uri: catImage?.url }} />
      <Text>{catData.description}</Text>
      <Text>They temperament is: {catData.temperament}</Text>
      <Text>They origin is from: {catData.origin} </Text>
      <Button onPress={() => router.back()} title="go back" />
    </View>
  );
};

export default CatInfo;
