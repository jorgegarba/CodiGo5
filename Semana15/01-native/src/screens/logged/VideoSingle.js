import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

// En caso de mostrar videos con extensión
// import { Video } from 'expo-av';

export default class VideoSingle extends Component {

    static navigationOptions = (props) => {
        return {
            title: props.navigation.state.params.video.vid_titulo,
            headerTitleContainerStyle: {
                justifyContent: 'center',
                alignContent: 'center'
            },
            headerRight: (<View></View>),
            headerTitleStyle: {
                color: '#FFA98C'
            },
            headerStyle: {
                backgroundColor: '#803820',
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <WebView
                    style={{ flex: 0.5 }}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://www.youtube.com/embed/LdKtugH-sb8?rel=0&autoplay=0&showinfo=0&controls=0' }}
                />
                
                {/*
                // Si el VIDEO tiene un formato o extension como un .mp4 por ejemplo,
                // el verdadero componente que reproduce videos es el siguiente
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                /> */}


            </View>
        )
    }
}
