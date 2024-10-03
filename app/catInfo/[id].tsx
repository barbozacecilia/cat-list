import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Share,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useLocalSearchParams, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { CAT_API } from "../../constants/API";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "I share with you the information of" +
          " " +
          catData.name +
          "\n" +
          "This cat is originally from" +
          "\n" +
          catData.origin +
          "\n" +
          catData.description,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type: ", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
        <ImageBackground
          style={styles.catImage}
          source={{ uri: catImage?.url }}
        >
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
        <View>
          <Text>{catData.description}</Text>
          <Text>They temperament is: {catData.temperament}</Text>
          <Text>They origin is from: {catData.origin} </Text>
        </View>
        <View style={styles.shareButtonContainer}>
          <TouchableOpacity onPress={onShare} style={styles.shareButton}>
            <FontAwesome5 name="share" size={24} color="white" />
            <Text style={styles.textShareButton}>Share information</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CatInfo;
