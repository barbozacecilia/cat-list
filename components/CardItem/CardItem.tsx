import { View,Text , TouchableOpacity } from 'react-native';

import styles from './styles'

interface Props{
  name: string;
}

function CardItem(props: Props) {

const {name}=props;


  return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.name} >{name}</Text>
        </View>
      </TouchableOpacity>
  );
}

export default CardItem;