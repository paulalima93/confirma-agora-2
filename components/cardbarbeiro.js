import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Star from 'react-native-star-view';

export default class Cardbarbeiro extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Calendario', { item: this.props.item })}>
                <Image source={require("../assets/profile.png")} style={styles.image} />
                <View style={{ marginLeft: '35%' }}>
                    <Text style={styles.textCard}> Nome: {this.props.item.nome} </Text>
                    <View style={styles.avaliacaoContainer}>
                        <Text style={styles.textCard}> Avaliação: </Text>
                        <Star score={this.props.item.avaliacao} style={styles.starStyle} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: "85%",
        height: 100,
        backgroundColor: "#dce0dd",
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    textCard: {

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 25,
        position: 'absolute',
        left: "5%"
    },
    starStyle: {
        width: 100,
        height: 20,
    },
    avaliacaoContainer: {
        flexDirection: 'row'
    }

})

