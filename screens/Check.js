import React, {Component} from 'react'
import {View,ActivityIndicator, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Header, Avatar, ThemeProvider} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NetInfo from '@react-native-community/netinfo'

export default class Check extends Component{
    constructor(props){
        super(props)
        this.state=({isLoading: true})
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.checkNetwork();
        }, 3000)
    }

    checkNetwork=()=>{
        NetInfo.fetch().then((state)=>{
            if(state.isConnected==true){
                this.props.navigation.navigate("Patients");
                //this.setState({isLoading:false})
            }else{
                this.setState({isLoading:false})
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
               <View>
                   <Avatar
                   rounded
                   size="xlarge"
                   source={require("../images/logo.jpg")}
                   ></Avatar>
               </View>
               <View>
                   { 
                       this.state.isLoading && (
                        <View>
                            <ActivityIndicator
                                color="royalblue"
                                size={50}
                                />
                            <Text>Loading...</Text>
                        </View>
                       )
                   }
                   {
                       !this.state.isLoading && (
                           <View style={styles.errorBody}>
                               <Text style={styles.errorText}>No internet connection.</Text>
                           </View>
                       )
                   }
               </View>
            </View>
        )
    }    
}
const styles=StyleSheet.create({
    container:{
        paddingTop: 150,
        alignItems:'center',
        justifyContent:'center'
    },
    errorBody:{
        marginTop: 20,
        borderColor: "red",
        borderWidth: 1,
        padding: 20,
        borderRadius: 10
    },
    errorText:{
        color:"red"
    }
})