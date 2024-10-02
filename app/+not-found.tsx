import { Stack, useRouter } from "expo-router";
import { StyleSheet, View, Button, Text } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>This screen doesn't exist.</Text>
        <Button onPress={() => router.back()} title="Go to home screen!" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
