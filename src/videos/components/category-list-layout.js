import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const CategoryListLayout = (props) => (
    <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.container}
    >
        <View style={styles.container}>
            <Text style={styles.title}>{ props.title }</Text>
            {props.children}
        </View>
    </ImageBackground>
) 

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 0
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default CategoryListLayout;