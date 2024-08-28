import { View,Text , SafeAreaView, TextInput, FlatList, Image } from 'react-native';
import { useState } from 'react';

import styles from './styles'


function CardItem() {

  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.title} >CatList</Text>
      <Image></Image>
      </SafeAreaView>
  );
}

export default CardItem;