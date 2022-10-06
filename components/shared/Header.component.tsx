import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBackButton } from "@react-navigation/elements";

export default function HeaderComponent(props: any) {
    const { canReturn } = props;

    return (<SafeAreaView style={styles.container}>
        { canReturn ? <HeaderBackButton onPress={() => props.navigation.goBack()} /> : null }
        <Text style={styles.title}>Calculadora IMC</Text>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 5,
        color: '#000',
        marginLeft: 10,
        fontSize: 14,
        height: 20
    }
});