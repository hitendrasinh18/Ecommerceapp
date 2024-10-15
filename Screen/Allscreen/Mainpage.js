
import { StyleSheet, Text, View } from 'react-native';
import Searchbar from '../../Components/Searchbar/Searchbar';




const Mainpage = () => {



  return (

    <View style={styles.container}>

    <Searchbar></Searchbar>

      <Text>
        Hitendra
      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Mainpage;