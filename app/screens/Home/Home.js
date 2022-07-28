import React from 'react'
import { StyleSheet, View } from 'react-native'
import { backgroundColorPantalla } from '../../assets/colors/colores';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>


            </View>
            <View style={styles.pokemonesSearch}>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColorPantalla,
        flex: 1,
    },
    header: {
        flex: 3,

    },
    pokemonesSearch: {
        flex: 4,
        backgroundColor: '#FFF',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    }
});

export default Home