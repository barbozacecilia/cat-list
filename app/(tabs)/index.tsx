import { View,Text , SafeAreaView, TextInput, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CardItem from '@/components/CardItem/CardItem'

import styles from '../styles/styles'


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
         data={items} 
         renderItem={({item})=><Text>{item.name}</Text>}
         contentContainerStyle={{ gap: 15, width: 100, backgroundColor: 'yellow', }}
        />
      </SafeAreaView>
  );
}
