import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {Header, ThemeProvider, Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class ShowPatient extends Component{
    render(){
        return(
            <View>
                <Card title={this.props.p_name}>
                    <View style={styles.subContainer}>
                        <View style={styles.subContainerOne}>
                            <Text style={styles.subTitle}>Age</Text>
                            <Text style={styles.subText}>{this.props.p_age}</Text>
                        </View>
                        <View style={styles.subContainerOne}>
                            <Text  style={styles.subTitle}>Table No.</Text>
                            <Text style={styles.subText}>{this.props.p_no}</Text>
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                    <View style={styles.subContainerOne}>
                            <Text style={styles.subTitle}>Doctor</Text>
                            <Text style={styles.subText}>{this.props.p_doctor}</Text>
                        </View>
                        <View style={styles.subContainerOne}>
                            <Text  style={styles.subTitle}>Disease</Text>
                            <Text style={styles.subText}>{this.props.p_disease}</Text>
                        </View>
                    </View>

                </Card>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    subContainer:{
        flexDirection: 'row'
    },
    subContainerOne:{
        width: "50%",
        justifyContent:'center',
        alignItems:'center'
    },
    subTitle:{
        color: "#ccc",
        fontSize: 11
    },
    subText:{
        padding: 5,
        
    }
})