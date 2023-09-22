import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default class RegisterScreen extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            confirmar_senha: '',
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
                    <TextInput style={styles.input}
                        onChangeText={(text) => this.setState({ confirmar_senha: text })}
                        value={this.state.confirmar_senha}
                        placeholder="Confirmar senha"
                        secureTextEntry
                    />
                    <TextInput style={styles.input}
                        onChangeText={(text) => this.setState({ nome: text })}
                        value={this.state.nome}
                        placeholder="Primeiro nome"
                    />
                    <TextInput style={styles.input}
                        onChangeText={(text) => this.setState({ sobrenome: text })}
                        value={this.state.sobrenome}
                        placeholder="Ultimo nome"
                       
                    />
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text>Voltar</Text>
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







