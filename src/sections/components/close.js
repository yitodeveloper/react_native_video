import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Close = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}
    >
        <Text style={styles.button}>X</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        fontWeight: 'bold',
        color: 'white'
    }
})


export default Close;