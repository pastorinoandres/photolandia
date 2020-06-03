import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import { PREVIEW } from '../navigation/constants';


//Este componente muestra un cuadrado con la foto.
const Item = ({data:item})=>{

    const styles = {
        container:{
            flex:1 ,
            aspectRatio:1,
            padding:5, 
            backgroundColor:colors.grey.t80, 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        touchable:{
            backgroundColor: colors.white(0.3)
        }

    }

    const navigation = useNavigation();

    const openPhoto = ()=>{

        navigation.navigate(PREVIEW, {
            ...item
          })

    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={()=>openPhoto(item)}>
                <Image style={{flex:1 , aspectRatio:1 }} source={{uri: item.download_url}}/>
            </TouchableOpacity>            
        </View>
    )

}

export default Item;