import React from "react"
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginForm(props: any) {
    return <View style={styles.container}>
        <View style={styles.fields}>
            <View style={styles.filler}></View>
            <TextInput
                style={styles.input}
                placeholder='nome de usuário'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={false} />
            <TextInput
                style={styles.input}
                placeholder='senha'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={true} />
            <TouchableOpacity
                style={styles.forgetPasswordLink}
                onPress={() => alert('Esqueci a senha!')}
            >
                <Text style={styles.accountActionText}>
                    Esqueci a senha
                </Text>
            </TouchableOpacity>
            <View style={styles.filler}></View>
        </View>
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => props.navigation.navigate("Home")}
            >
                <Text style={styles.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.createAccountLink}
                onPress={() => alert('Cadastrar minha conta...')}
            >
                <Text style={styles.accountActionText}>
                    Criar minha conta
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
    accountActionText: {
        color: "#00A6FF"
    },
    actions: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    btnLogin: {
        backgroundColor: "#42B0BF",
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.08,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLoginText: {
        color: "#fff",
        fontSize: 16
    }
});
