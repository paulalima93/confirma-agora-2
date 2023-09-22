import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image, SafeAreaView, Platform, StatusBar, Modal, Alert } from "react-native";

const servico = [
    {
        "nome": "Corte Tesoura",
        "preco": 29
    },
    {
        "nome": "Corte Máquina",
        "preco": 20
    },
    {
        "nome": "Barba",
        "preco": 25
    }
]

export default class CalendarioScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }



    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => {
        return (
            <View style={styles.containerItem}>
                <View>
                    <Text style={styles.textServico}> {item.nome} </Text>
                    <Text style={styles.textPreco}> R${item.preco},00 </Text>
                </View>

                <TouchableOpacity style={styles.botao} onPress={()=> this.setState({modalVisible: !this.state.modalVisible})}>
                    <Text style={styles.botaotexto}> + </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.card}>
                    <Image source={require("../assets/profile.png")} style={styles.image} />
                    <View style={{ marginLeft: '35%' }}>
                        <Text style={styles.textCard}>{this.props.route.params.item.nome} </Text>
                    </View>
                </View>

                <View>
                    <FlatList
                        data={servico}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />

                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: !this.state.modalVisible})
                    }}
                >
                    <View>
                        <Text> Olá </Text>
                    </View>

                </Modal>
            </View>

        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa'
    },
    botao: {
        height: 50,
        width: 50,
        backgroundColor: '#0066ff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    botaotexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textServico: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPreco: {
        fontSize: 18,
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        marginTop: 10,
        width: "95%",
        marginLeft: 2
    },
    card: {
        width: "100%",
        height: 150,
        backgroundColor: "#dce0dd",
        alignSelf: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: "flex-start",
        justifyContent: 'center',
        marginBottom: 60
    },
    textCard: {
        fontSize: 30,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 25,
        position: 'absolute',
        left: "5%"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});

