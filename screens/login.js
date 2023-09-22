import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.containercima}>
                    <Text>
                        Confirma Agora
                    </Text>
                </View>
            <View style = {styles.containerbaixo}>
                    <TextInput style={styles.input}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        placeholder="Digite aqui seu email"
                    />

                    <TextInput style={styles.input}
                        onChangeText={(text) => this.setState({ senha: text })}
                        value={this.state.senha}
                        placeholder="Digite aqui sua senha"
                        secureTextEntry
                    />
                    <TouchableOpacity style = {styles.botaologin} onPress = {() => this.props.navigation.navigate('Menu')}>
                        <Text style = {styles.botaologintexto}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Cadastro')}>
                        <Text>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        width: '80%',
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#adb5bd'
    },
    containercima: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerbaixo: {
        flex: 0.8,
        alignItems: 'center',
        
    },
    botaologin: {
        height: 50,
        width: '50%',
        backgroundColor: '#0066ff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    botaologintexto: {
       color: 'white',
    },
});







