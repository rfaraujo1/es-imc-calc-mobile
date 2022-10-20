import { 
  Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from "react-native";

import RegisterForm from "./Register.form";

export default function Register(props: any) {
    const { navigation } = props;
  
    return <View style={styles.container}>
      <View style={styles.mainContent}>
        <RegisterForm navigation={props.navigation}/>
      </View>
    </View>
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Dimensions.get('screen').height * 0.05
    },
    mainContent: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });