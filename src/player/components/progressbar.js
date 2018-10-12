import React from 'react';
import { ProgressBarAndroid, ProgressViewIOS, Platform, StyleSheet } from 'react-native'


const ProgressBar = (props) => {
    return (
        Platform.select({
            ios: <ProgressViewIOS style={styles.progressBar} progressTintColor='#97c93e' trackTintColor='light-gray' progress={props.progress} />,
            android: <ProgressBarAndroid style={styles.progressBar} progress={props.progress} styleAttr="Horizontal" indeterminate={false} />
        })
    )
}

const styles = StyleSheet.create({
    progressBar: {
      width: 160
    }
})

export default ProgressBar;