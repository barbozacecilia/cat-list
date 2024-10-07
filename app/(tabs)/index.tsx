import {
  SafeAreaView,
  TextInput,
  FlatList,
  View,
  RefreshControl,
} from "react-native";
import { useState, useEffect } from "react";
import CardItem from "@/components/CardItem/CardItem";
import { CAT_API } from "../../constants/API";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/styles";
import CatText from "@/components/CatText";
import { Color } from "@/constants/Colors";

type CatItem = {
  name: string;
  id: string;
  origin: string;
};

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<CatItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<CatItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(CAT_API);
        const responseJson = await response.json();
        console.log(JSON.stringify(responseJson));
        setItems(responseJson);
        setFilteredItems(responseJson);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  //filter funtionality

  function handlerFilter(text: string) {
    setInputText(text);
    if (text) {
      const filteredList = items.filter((item) =>
        item.name.toUpperCase().includes(text.toUpperCase()),
      );
      setFilteredItems(filteredList); // to show the filtered list
    } else {
      setFilteredItems(items); // to show the original list
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    setFilteredItems(items);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="cat" size={40} color={Color.primary} />
        <CatText type="title">CatList</CatText>
      </View>
      <View style={styles.inputSearchContainer}>
        <TextInput
          style={styles.inputSearch}
          value={inputText}
          autoCapitalize="none"
          placeholder="search a cat"
          inlineImageLeft="search_icon" // work with ios
          onChangeText={(text) => {
            handlerFilter(text);
          }}
          keyboardType="web-search"
        />
        <FontAwesome5
          name="search"
          size={18}
          color={Color.grey}
          style={styles.searchIcon}
        />
      </View>

      <FlatList
        keyExtractor={(item: CatItem) => {
          return item.id;
        }}
        data={filteredItems}
        renderItem={({ item }: { item: CatItem }) => (
          <CardItem name={item.name} id={item.id} origin={item.origin} />
        )}
        contentContainerStyle={{
          gap: 5,
          width: 350,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
