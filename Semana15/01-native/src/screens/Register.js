import React, { Component } from 'react'

import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import Boton from '../components/Boton';

const background = require("./../../assets/bg.jpg");
const lockIcon = require("./../../assets/lock.png");
const personIcon = require("./../../assets/person.png");


export default class Register extends Component {

    state = {
        email: '',
        password: '',
        repassword: '',
        error: false,
    }


    login = () => {
        if (this.state.email.trim() === '' ||
            this.state.password.trim() === '' ||
            this.state.repassword.trim() === '' ||
            this.state.password !== this.state.repassword) {

            this.setState({ error: true });

            return;
        } else {
            this.setState({ error: false })
            Alert.alert("TUDO BEM");
        }
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={background}
            >
                <View style={styles.container} />
                <View style={styles.wrapper}>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={personIcon}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput
                            placeholder="Ingrese su Email"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput
                            placeholder="Ingrese su Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </View>
                        <TextInput
                            placeholder="Repita su Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(repassword) => { this.setState({ repassword }) }}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={.5}>
                        <Boton texto={"Registrarme"}
                            iconName={'user-plus'}
                            bgColor={'#d73352'}
                            action={this.login}
                            iconColor={'#fff'}
                            iconSize={30}
                            fullWidth={true} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container} />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper: {
        paddingHorizontal: 15,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        backgroundColor: "transparent"
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d73352"
    },
    icon: {
        width: 20,
        height: 20,
    },
    button: {
        backgroundColor: "#d73352",
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18
    },
    forgotPasswordText: {
        color: "#FFF",
        backgroundColor: "transparent",
        textAlign: "center"
    }
});
