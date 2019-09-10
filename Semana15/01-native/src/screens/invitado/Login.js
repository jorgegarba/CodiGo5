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
import Boton from './../../components/Boton';

const background = require("./../../../assets/bg.jpg");
const lockIcon = require("./../../../assets/lock.png");
const personIcon = require("./../../../assets/person.png");


export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    changeInputEmail = (email) => {
        this.setState({
            email
        })
    }
    changeInputPassword = (password) => {
        this.setState({
            password
        })
    }
    login = () => {
        Alert.alert("DATOS", `Email: ${this.state.email} Pass: ${this.state.password}`)
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
                            placeholder="Email"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={this.changeInputEmail}
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
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={this.changeInputPassword}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={.5}>
                        <Boton texto={"Iniciar Sesión"}
                            iconName={'sign-in'}
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
