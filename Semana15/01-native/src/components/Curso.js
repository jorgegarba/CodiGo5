import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements';

export default class Curso extends Component {
    constructor(props) {
        super(props);
    }

    verCurso = cur_id => {
        this.props.navigation.navigate('ListaDeVideos');
        // console.log(this.props);

    }

    render() {
        let { curso: objCurso } = this.props;
        return (
            <Card
                title={objCurso.cur_titulo}
                image={{ uri: 'http://placehold.it/500x500/' }}
            >
                <Text style={{ marginBottom: 10 }}>
                    {objCurso.cur_desc}
                </Text>
                <Button
                    icon={<Icon name='code' color='#FFBAA8' />}
                    buttonStyle={{
                        borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
                        backgroundColor: 'rgba(128,51,32,0.9)',
                    }}
                    onPress={() => {
                        this.verCurso(objCurso._id);
                    }}
                    title='Ver Curso'
                    titleStyle={{ color: '#FFBAA8' }} />
            </Card>
        )
    }
}
