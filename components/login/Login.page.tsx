import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from "react-native";

import Subheader from "./Subheader.component";

export default function Login(props) {
    const { navigation } = props;
  
    return <View style={styles.innerContainer}>
        <Subheader />
        <Text>Login page...</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Text>Go home...</Text>
        </TouchableOpacity>
    </View>
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    innerContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });