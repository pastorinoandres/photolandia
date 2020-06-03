import React, { useEffect, useState } from 'react';
import { View, FlatList, } from 'react-native';
import Item from '../components/Item'




const Home = ()=>{

    const [ photos, setPhotos ] = useState(null)

    const getPhotos = async ()=>{

        await fetch(`https://picsum.photos/v2/list`)
            .then((response)=>{return response.json()})
            .then( data => setPhotos(data));

    }

    useEffect(()=>{

        getPhotos()

    },[])

    const styles = {
        container:{
            flex:1,
            justifyContent: 'center',
            alignContent: 'center',
        }
    }




    return(
        <View style={styles.container}>
            {
                photos &&
                <FlatList numColumns={2}
                    data={photos}
                    renderItem={({ item }) => <Item data={item}/>}
                    keyExtractor={(item) => item.id}
                />

            }
        </View>
    )

}

export default Home;