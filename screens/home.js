import React,{Component} from "react";
import { Text,StyleSheet,View,TouchableOpacity,FlatList, SafeAreaView, Platform, StatusBar } from "react-native";
import CardBarbeiro from "../components/cardbarbeiro";

const Agendas = require ('../teste.json')

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    renderItem = ({item: item}) => {
        return (
           < CardBarbeiro item={item} navigation={this.props.navigation}/>
        )
    }
    
    keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View> 
                  <SafeAreaView style={styles.droidSafeArea} />
                <View> 
                    <Text>Confirma Agora</Text>
                </View>
                <View>
                    <FlatList
                    data = {Agendas}
                    renderItem = {this.renderItem} 
                    keyExtractor = {this.keyExtractor} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
});

