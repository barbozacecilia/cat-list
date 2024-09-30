import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { CAT_API } from "../../constants/API";
import catFoot from "../../assets/images/cat-foot.png";

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
    <ScrollView style={styles.mainContainer}>
      <Stack.Screen
        options={{
          headerTitle: "CatList",
          headerStyle: {
            backgroundColor: "#f9f9f9",
          },
          headerTintColor: "grey",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {catImage?.url ? (
        <ImageBackground style={styles.image} source={{ uri: catImage?.url }}>
          <View style={styles.decorationContainer} />
        </ImageBackground>
      ) : (
        <View style={{ backgroundColor: "#ffafcc" }}>
          <ImageBackground style={styles.imageShape} source={catShape}>
            <View style={styles.decorationContainer} />
            <Text style={styles.textImgShape}>
              The cat doesn't want to apper here
            </Text>
          </ImageBackground>
        </View>
      )}

      <View style={styles.containerText}>
        <Text style={styles.titleContainer}>
          {catData.name} y id {id}
        </Text>
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
    </ScrollView>
  );
};

export default CatInfo;
