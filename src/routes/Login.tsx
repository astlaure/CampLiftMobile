import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Login() {
    const [state, setState] = useState({ username: '', password: '' });
    return (
        <View>
            {/* <Text style={styles.title}>Camp Lift Logo</Text> */}
            <Image style={styles.logo} source={require('../../assets/LIFT-logo.jpg')} />
            <TextInput
                style={styles.input}
                placeholder={'email@gmail.com'}
                value={state.username}
                onChangeText={(text) => setState({ ...state, username: text })}
            />
            <TextInput
                style={{...styles.input, ...styles.password}}
                secureTextEntry={true}
                placeholder={'password'}
            />
            <Button title={'Login'} onPress={() => {}} color={'#23b35b'} />
            <TouchableOpacity>
                <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        textAlign: 'center',
        paddingTop: 25,
        paddingBottom: 25,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
        marginBottom: 25,
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#E5E5E5',
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        // height: 40,
        // width: '80%'
    },
    password: {
        marginBottom: 15
    },
    register: {
        paddingTop: 10,
        textAlign: 'center'
    }
})