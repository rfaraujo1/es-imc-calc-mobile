import { Dimensions } from "react-native";
import { Text, TextInput, View } from "react-native";

export default function LoginForm(props: any) {
    return <View style={styles.container}>
        <View style={styles.fields}>
            <TextInput
                style={styles.input}
                placeholder='nome de usuário'
                autoCapitalize="none"
                allowFontScaling={true} />
            <TextInput
                style={styles.input}
                placeholder='senha'
                autoCapitalize="none"
                allowFontScaling={true}
                secureTextEntry={true} />
        </View>
    </View>
}

const styles = {
    container: {
        display: 'flex',
        flex: 10,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottonColor: '#aaa',
        width: Dimensions.get('screen').width * 0.9,
        flex: 1.5
    },
    fields: {
        display: 'flex',
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center'
    }
}