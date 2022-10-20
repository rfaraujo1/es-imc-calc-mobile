import React from "react"
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterForm(props: any) {
    return <View style={styles.container}>
        <View style={styles.fields}>
            <Text style={styles.accountTitle}>
                    Cadastro do login
                </Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o email'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={false} />
            <TextInput
                style={styles.input}
                placeholder='Digite a senha'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={true} />
            
            <View style={styles.filler}></View>
        </View>
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.btnRegister}
                onPress={() => props.navigation.navigate("Home")}
            >
                <Text style={styles.btnRegisterText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.createAccountLink}
                onPress={() => props.navigation.navigate("Login")}
            >
                <Text style={styles.accountActionText}>
                    Já tenho uma conta!
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: "5%",
        paddingRight: "5%",
        display: 'flex',
        flex: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fields: {
        display: 'flex',
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottonColor: '#aaa',
        width: Dimensions.get('screen').width * 0.9,
        flex: 1.5
    },
    filler: {
        flex: 1,
    },
    forgetPasswordLink: {
        flex: 1,
        marginTop: 5,
    },
    createAccountLink: {
        flex: 1,
        marginTop: 5,
    },
    accountTitle: {
      color: "#000",
      textAlign: "center",
        marginTop: 20,
        fontSize: 24
    },
    accountActionText: {
        color: "#00A6FF",
        textAlign: "center",
        marginTop: 20
    },
    actions: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    btnRegister: {
        backgroundColor: "#42B0BF",
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.08,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnRegisterText: {
        color: "#fff",
        fontSize: 16
    }
});
