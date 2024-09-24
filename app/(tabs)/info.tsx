import { StyleSheet, Image } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About this app</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>
        To create this application, the react native framework with expo was
        used.
      </ThemedText>
      <Collapsible title="Thecatapi">
        <ThemedText>
          This app uses the free version de thecatapi.The hook useEffect was
          used together with fetch to be able to show the API information
        </ThemedText>
        <ExternalLink href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t">
          <ThemedText type="link">Learn more about thecatapi</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="FlatList">
        <ThemedText>
          This high-performance interface allows you to render basic, flat
          lists, like the one used in the component to display the catList. This
          allows you to improve the code to display each of the items in the
          list using essential properties like keyExtractor to identify each
          item, data to display the API information, renderItem to iterate
          through each of the items in the list, and contentContainerStyle to
          give the desired style to the flat list.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          On the one hand, the information provided by the API was used to
          display the image of each cat. On the other hand, the
          @expo/vector-icons@14.0.3 library was used to display the icons.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Navigation">
        <ThemedText>
          To navigate between screens, use expo-router. Use different tools to
          navigate such as: the useLocalSearchParams hook, as it includes route
          and search parameters dynamically, or the useRouter hook that serves
          to redirect navigation. Also add a Tabs is a very used and accessible
          way to navigate between screens.
        </ThemedText>
      </Collapsible>
      <Collapsible title="TO DO Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
          to see how to load{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="TO DO Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#d305a6",
    bottom: -50,
    left: "30%",
    height: "60%",
    width: "50%",
    padding: 100,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
