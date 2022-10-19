import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions
} from 'react-native';

export default function Subheader(props: any) {
    return (<View style={styles.container}>
        <Text style={styles.primary}>Seja bem vindo!</Text>
        <Text style={styles.secondary}>Faça seu login para continuar...</Text>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    primary: {
        fontWeight: 'bold',
        fontSize: 32
    },
    secondary: {
        fontSize: 24,
    }
});