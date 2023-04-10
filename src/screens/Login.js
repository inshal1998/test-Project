import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [name, setname] = useState('');
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TextInput
                value={name}
                placeholder="Enter name"
                onChangeText={(val)=>setname(val)}
            />
            <TouchableOpacity onPress={()=>{
                if(name !== ''){
                    navigation.navigate('Home' , {
                        name:name
                    })
                }
            }}>
                <Text>Move to Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})