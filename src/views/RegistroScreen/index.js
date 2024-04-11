import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';

const RegistroScreen = () => {
    const [nombre, onChangeNombre] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [passwordConfirm, onChangePasswordConfirm] = useState('');
    const navigation = useNavigation();

    const windowHeight = Dimensions.get('window').height;
    const dataContainerHeight = windowHeight - 200; 

    const handleRegistroToLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <ScrollView style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.headerContainer}>
                <Image source={require('../../../assets/images/strappberry.png')} style={styles.logo}></Image>
            </View>
            <View style={[styles.dataContainer, { height: dataContainerHeight }]}>
                <View>
                <TextInput
                        style={styles.input}
                        onChangeText={onChangeNombre}
                        value={nombre}
                        placeholder="Nombre"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Contraseña"
                    />
                     <TextInput
                        style={styles.input}
                        onChangeText={onChangePasswordConfirm}
                        value={passwordConfirm}
                        secureTextEntry={true}
                        placeholder="Confirmar contraseña"
                    />
                    <Button style={styles.button}
                        buttonStyle={{
                            borderRadius: 10,
                            height: 50, width: 200,
                            backgroundColor: "#353C59",
                        }}
                    >
                        <Text style={styles.buttonText}>Ingresar
                        </Text>
                    </Button>

                </View>
                <View style={{height:100}}></View>
                <Text
                    style={{ color: "#c9c9c9", textAlign: "center", }}>
                    ¿Ya tienes cuenta?
                </Text>
                <TouchableOpacity onPress={handleRegistroToLogin} ><Text style={styles.textLink}>Inicia sesión</Text></TouchableOpacity>
                <Text
                    style={{ color: "#c9c9c9", textAlign: "center", marginTop:20 }}>
                    Luis Pablo Rocha | luispablo2098@hotmail.com
                </Text>
            </View>
        </ScrollView>
    )
}

export default RegistroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    headerContainer: {
        paddingLeft: 12,
        backgroundColor: '#353C59',
        alignContent: 'center',
        alignItems: 'center',
        height: 250
    },
    logo: {
        padding: 10,
        width: 260,
        height: 65,
        marginTop: 80
    },
    dataContainer: {
        padding: 12,
        paddingTop: 50,
        backgroundColor: "white",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        position: "relative",
        bottom: 40,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#e0e3f0",
        borderColor: '#e0e3f0',
        borderRadius: 10,
        fontSize: 15
    },
    button: {
        paddingTop: 10,
        paddingLeft: 12,
        paddingRight: 12,
        height: 70,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },
    textLink: {
        fontSize: 13,
        paddingLeft: 5,
        margin: 0,
        position: "relative",
        textAlign: 'center',
        top: 2,
        color: "#353C59"
    }
})
