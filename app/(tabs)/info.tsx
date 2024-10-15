import { ScrollView, ImageBackground, View, Pressable } from "react-native";
import styles from "../styles/stylesInfo";
import * as Linking from "expo-linking";
import React from "react";
import { Link } from "expo-router";
import { Dropdown } from "@/components/Dropdown";
import CatText from "../../components/CatText";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ImageBackground
        style={styles.image}
        source={require("@/assets/images/footprints.png")}
      >
        <View style={styles.decorationContainer} />
      </ImageBackground>

      <View style={styles.infoContainer}>
        <View>
          <CatText style={styles.titleContainer}>About this app</CatText>
        </View>
        <CatText>
          To create this application, the react native framework with expo was
          used.
        </CatText>
        <Dropdown title="TheCatApi">
          <CatText>
            This app uses the free version de thecatapi. The hook useEffect was
            used together with fetch to be able to show the API information
          </CatText>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t",
              )
            }
          >
            <CatText type="link">
              Click here to learn more about the catApi
            </CatText>
          </Pressable>
        </Dropdown>
        <Dropdown title="FlatList">
          <CatText>
            This high-performance interface allows you to render basic, flat
            lists, like the one used in the component to display the catList.
            This allows you to improve the code to display each of the items in
            the list using essential properties like keyExtractor to identify
            each item, data to display the API information, renderItem to
            iterate through each of the items in the list, and
            contentContainerStyle to give the desired style to the flat list.
            Pull down the flatlist to see RefreshControl indicator.
          </CatText>
        </Dropdown>
        <Dropdown title="Images">
          <CatText>
            On the one hand, the information provided by the API was used to
            display the image of each cat. On the other hand, the
            @expo/vector-icons@14.0.3 library was used to display the icons.
          </CatText>
        </Dropdown>
        <Dropdown title="Navigation">
          <CatText>
            To navigate between screens, use expo-router. Use different tools to
            navigate such as: the useLocalSearchParams hook, as it includes
            route and search parameters dynamically, or the useRouter hook that
            serves to redirect navigation. Also add a Tabs is a very used and
            accessible way to navigate between screens.
          </CatText>
        </Dropdown>
        <Dropdown title=" Custom fonts">
          <CatText>custom fonts such as this one.</CatText>
          <Link href="https://docs.expo.dev/versions/latest/sdk/font" />
        </Dropdown>
      </View>
    </ScrollView>
  );
}
