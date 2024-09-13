import { View,Text , SafeAreaView, TextInput, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CardItem from '@/components/CardItem/CardItem'

import styles from '../styles/styles'


type CatItem = {
  name: string;
  id: string;
  
};


const CAT_API='https://api.thecatapi.com/v1/breeds';

export default function HomeScreen() {

  const [inputText, setInputText] = useState('');
  const [items, setItems]= useState<CatItem[]>([])
  const [filteredItems, setFilteredItems] = useState<CatItem[]>([])


  useEffect(()=>{
    const fetchItems = async()=>{
      try{
      const response = await fetch(CAT_API)
      const responseJson = await response.json()
      
      console.log(JSON.stringify(responseJson))
      setItems(responseJson)
      setFilteredItems(responseJson);
      }catch(error){
        console.error(error)
      }
    }
    fetchItems();
  },[])

  //filter funtionality

  const filteredList = items.filter((items: CatItem)=>{
          items.name.toLowerCase().includes(inputText.toLowerCase())
        })

  function handlerFilter(text: string){
    if(text){
      const filteredList = items.filter((item)=>
      item.name.toUpperCase().includes(text.toUpperCase())
    )
    setFilteredItems(filteredList)

    }
  }
  


  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.titleContainer} >CatList</Text>
      <TextInput style={styles.inputSearch} value={inputText} autoCapitalize='none' placeholder='search a cat' inlineImageLeft='search_icon' 
        onChangeText={(text)=>{
          setInputText(text) 
          handlerFilter(text)
          }
        } 
        keyboardType='web-search' maxLength={20}/>
      <FlatList
         keyExtractor={(item: CatItem)=>{return item.id}}
         data={filteredItems} 
         renderItem={({item}: {item: CatItem})=><CardItem name={item.name} />}
         contentContainerStyle={{ gap: 15, width: 250, backgroundColor: 'yellow'}}
        />
      </SafeAreaView>
  );
}
