import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container:{
      backgroundColor: 'red',
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 25,
    },
    titleContainer: {
      padding: '5%',
      marginTop: '5%',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#658FD7',
    },
    inputSearch:{
      backgroundColor: 'white',
      margin: 20,
      paddingHorizontal: 10,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 8,
      height: 45,
      width: '80%',
      borderWidth: 1,
      color: '#676767',
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    card: {
      marginBottom: 15,
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },}
  );
  

  export default styles;