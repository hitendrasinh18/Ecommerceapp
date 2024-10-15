import {Text, View,TextInput  } from 'react-native';


const Searchbar = () =>{

    return(
        <View>
           <View >
             <TextInput placeholder='Sreach Item' className="search"></TextInput>
          </View>
        </View>

    );

}
// const styles = StyleSheet.create({

//     continue:{
//         flex:1,
        
//      },
//      Search:{
//         flexDirection:"column",
//         borderColor:"Black",
//         height:80,
//         width:400
//     },


// })

export default Searchbar;