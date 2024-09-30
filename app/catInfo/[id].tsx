import { Text, View, Button, Image } from "react-native";
import styles from "./styles";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { CAT_API } from "../../constants/API";
import catFoot from "../../assets/images/cat-foot.png";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const catShape = require("@/assets/images/cat-shape.png");

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#bde0fe", dark: "#cdb4db" }}
      headerImage={
        catImage?.url ? (
          <Image style={styles.image} source={{ uri: catImage?.url }} />
        ) : (
          <View>
            <Image style={styles.image} source={catShape} />
            <Text>The cat doesn't want to apper here</Text>
          </View>
        )
      }
    >
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerTitle: "CatList",
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "#161313",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Text>
          {catData.name} y id {id}
        </Text>
        {catImage?.url ? (
          <Image style={styles.image} source={{ uri: catImage?.url }} />
        ) : (
          <View>
            <Image style={styles.image} source={catShape} />
            <Text>The cat doesn't want to apper here</Text>
          </View>
        )}
        <Text>{catData.description}</Text>
        <Text>They temperament is: {catData.temperament}</Text>
        <Text>They origin is from: {catData.origin} </Text>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "violet",
            borderRadius: 50,
            padding: 5,
            alignItems: "center", // -
            justifyContent: "center", // |
          }}
        >
          <Image
            style={{
              width: 50,
              height: "100%",
              alignSelf: "center",
              resizeMode: "contain", //
            }}
            source={catFoot}
          />
        </View>

        <Button onPress={() => router.back()} title="go back" />
      </View>
    </ParallaxScrollView>
  );
};

export default CatInfo;
