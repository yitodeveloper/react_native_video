import React from 'react'
import { View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


const IconComponent = (props) => (
    <View>
        <Icon name={props.iconName} size={props.iconSize? props.size : 20} color={props.color ? props.color : 'white'} />
    </View>
)

export default IconComponent;