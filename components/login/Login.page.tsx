import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from "react-native";

import Subheader from "./Subheader.component";
import LoginForm from "./Login.form";

export default function Login(props) {
    const { navigation } = props;
  
    return <View style={styles.innerContainer}>
        <Subheader />
        <LoginForm navigation={props.navigation}/>
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