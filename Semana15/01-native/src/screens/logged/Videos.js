import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from 'react-native-elements';

export default class Videos extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = (props) => {
        return {
            title: props.navigation.state.params.cur_titulo,
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

    verVideo = video => {
        this.props.navigation.navigate("VideoIndividual", { video });
    }

    render() {
        let { cur_videos: videos } = this.props.navigation.state.params;

        return (
            <ScrollView>
                {
                    videos.map((video, i) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                key={i}
                                onPress={() => {
                                    this.verVideo(video);
                                }}>
                                <ListItem
                                    title={video.vid_titulo}
                                    subtitle={
                                        <View style={{
                                            flexDirection: 'row',
                                            marginTop: 5,
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                color: '#aaa'
                                            }}>Excelente Servicio</Text>
                                            <Rating
                                                imageSize={12}
                                                readonly
                                                startingValue={4.5}
                                            />
                                        </View>
                                    }
                                    leftIcon={{ name: 'movie' }}
                                    bottomDivider
                                    chevron />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
