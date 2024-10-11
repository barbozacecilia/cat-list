import {
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
import CatText from "@/components/CatText";
import { debounce } from "lodash";
import { Color } from "@/constants/Color";
import { StatusBar } from "expo-status-bar";

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
  const [isSharing, setIsSharing] = useState(false);
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
    return <CatText>Loading the Catinfo...</CatText>;
  }

  if (!catData) {
    return <View>That cat exists?...</View>;
  }

  const onShare = async () => {
    if (isSharing) return;
    setIsSharing(true);

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
      setIsSharing(true);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSharing(false);
      console.log("disable");
    }
  };

  const onShareDebounce = debounce(onShare, 200);

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerTitle: "CatList",
          headerStyle: {
            backgroundColor: Color.white,
          },
          headerTintColor: Color.grey,
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
            <CatText style={styles.textImgShape}>
              The cat doesn't want to apper here
            </CatText>
          </ImageBackground>
        </View>
      )}

      <View style={styles.containerText}>
        <CatText style={styles.titleContainer}>{catData.name}</CatText>
        <View>
          <CatText>{catData.description}</CatText>
          <CatText>They temperament is: {catData.temperament}</CatText>
          <CatText>They origin is from: {catData.origin} </CatText>
        </View>
        <View style={styles.shareButtonContainer}>
          <TouchableOpacity
            onPress={onShareDebounce}
            style={[
              styles.shareButton,
              { backgroundColor: isSharing ? "gray" : "pink" },
            ]}
            disabled={isSharing}
          >
            <FontAwesome5 name="share" size={24} color="white" />
            <CatText style={styles.textShareButton}>Share information</CatText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CatInfo;
