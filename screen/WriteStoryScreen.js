import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image,TextInput,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            author:'',
            story:''
        }
    }
    submitStory=async()=>{ 
        db.collection('stories').add({ 
            author:this.state.author, 
            story:this.state.story, 
            name:this.state.name 
        }); 
        this.setState({ 
            author:'', 
            story:'', 
            name:'' 
        }); 
        ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT) 
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                   <View style={{backgroundColor:"Pink"}}>
                        <Text style={{textAlign:"center",fontSize:30}}>Story Hub</Text>
                   </View>
                   <View style={styles.inputView}>
                        <TextInput
                            placeholder="Book Name"
                            onChangeText={text=>this.setState({
                                name:text
                            })}
                            value={this.state.name}
                            style={styles.inputBox}
                        />
                        <TextInput
                            placeholder="Author"
                            onChangeText={text=>this.setState({
                                author:text
                            })}
                            value={this.state.author}
                            style={styles.inputBox}
                        />
                        <TextInput
                            placeholder="Write Your Story"
                            onChangeText={text=>this.setState({
                                story:text
                            })}
                            value={this.state.story}
                            style={styles.inputBox}
                        />
                        <TouchableOpacity
                            style={styles.scanButton}
                            onPress={()=>{
                                this.submitStory()
                            }}>
                            <Text Style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                   </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton:{
        backgroundColor: '#66BB6A',
        width: 100,
        height: 50,
        borderWidth: 1.5 
    },
    submitButtonText:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    }
 });

