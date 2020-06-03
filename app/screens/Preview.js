import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSafeArea  } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../styles/colors';
import typography from '../styles/typography';




const Preview = ({route, navigation })=>{

    const { download_url, author } = route.params;

    const insets = useSafeArea();

    const styles = {
        container:{
            flex:1,
            justifyContent: 'center',
            alignContent: 'center',
        },
        gradient:{
            width: '100%',
            height:insets.bottom+60,
            paddingBottom:insets.bottom,
            paddingRight:15,
            position: 'absolute',
            bottom:0,
            justifyContent:'center'
        },
        pie:{
            color: 'white',
            textAlign:'right',
            ...typography["title-20"].typography
        }
    }

    return(
        <View style={styles.container}>
            <Image style={{flex:1}} source={{uri: download_url}}/>
            <LinearGradient style={styles.gradient} {...colors.gradient}>
                <Text style={styles.pie}>{author}</Text>
            </LinearGradient>
            
        </View>
    )

}

export default Preview;