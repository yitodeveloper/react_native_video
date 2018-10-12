import React, { Component } from 'react'
import Video from 'react-native-video'
import { 
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progressbar'
import Expand from '../components/expand';

class Player extends Component{
    state = {
        loading: true,
        paused: false,
        fullScreen: false,
        progress: 0,
        duration: 0.00,
        currentTime: '0.00',
    }
    onBuffer = ({isBuffering}) => {
        this.setState({
            loading: isBuffering,
        })
    }

    onLoad = (payload) => {
        let duration = payload.duration / 60
        let mins = Math.floor(duration)
        let seconds = duration % 1
        seconds = (seconds * 60 )/ 1000
        let totalTime = (mins + seconds *10).toFixed(2)
        this.setState({
            duration: totalTime,
            loading: false
        })
    }
    setTime = (payload) => {
        let duration = payload.currentTime / 60;
        let mins = Math.floor(duration);
        let seconds = duration % 1;
        seconds = (seconds * 60) / 1000;
        let currentTime = (mins + seconds * 10).toFixed(2);
        this.setState({
          currentTime: currentTime,
          progress: (payload.currentTime / payload.seekableDuration ) 
        })
    
    }

    setFullScreenPromise = () => {
        return new Promise((resolve, reject) => {
            resolve(
                this.setState({
                    fullScreen: !this.state.fullScreen
                })
            )
        }).catch(error => console.error(error))
    }

    fullScreen = () => {
        this.setFullScreenPromise()
        .then(() => {
        if(this.state.fullScreen)
            this.player.presentFullscreenPlayer();
        else this.player.dismissFullscreenPlayer();
        });
    }
    
    fullScreenPlayerWillDismiss = () => {
        this.setState({
            fullScreen: false
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    render(){
        return (
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}}
                        volume={0}
                        resizeMode="contain"
                        style={styles.video}
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                        onProgress={this.setTime}
                        onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
                        ref={(ref) => {
                            this.player = ref
                        }}
                    />
                }
                loader={
                    <ActivityIndicator color="white" size="large" />
                }
                controls={
                    <ControlLayout>
                        <PlayPause 
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <ProgressBar progress={this.state.progress} />
                        <Text style={styles.duration}>{this.state.currentTime} / {this.state.duration}</Text>
                        <Expand onPress={this.fullScreen} fullScreen={this.state.fullScreen}/>
                    </ControlLayout>   
                }
            />
            
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right:0,
        top:0,
        bottom:0,
    },
    duration: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default Player;