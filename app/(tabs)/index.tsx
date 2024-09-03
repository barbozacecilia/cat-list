import { View,Text , SafeAreaView, TextInput, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CardItem from '@/components/CardItem/CardItem'

import styles from '../styles/styles'


type CatItem = {
  name: string;
};

export default function HomeScreen() {

  const [text, onChangeText] = useState('Search a cat');
  const [items, setItems]= useState([])
  const [filteredItem, setFilteredItem]= useState([])


  useEffect(()=>{
    const fetchItems = async()=>{
      try{
      const response = await fetch('https://api.thecatapi.com/v1/breeds')
      const responseJson = await response.json()
      
      console.log(JSON.stringify(responseJson,null, 2))
      setItems(responseJson)
      }catch(error){
        console.error(error)
      }
    }
    fetchItems();
  },[])


  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer} >CatList</Text>
      <TextInput style={styles.inputSearch} value={text} onChangeText={onChangeText} keyboardType='web-search' maxLength={20}/>
      <FlatList
         keyExtractor={(item: CatItem)=>{return item.name}}
         data={items} 
         renderItem={({item}: {item: CatItem})=><Text>{item.name}</Text>}
         contentContainerStyle={{ gap: 15, width: 250, backgroundColor: 'yellow'}}
        />
      </SafeAreaView>
  );
}
