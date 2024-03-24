import { Text, SafeAreaView, StyleSheet,Image,TouchableOpacity } from 'react-native';
import CustomButton from '../components/customButton'

export default function OnBoardScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The Best App</Text>
      <Text style={styles.title}>For Your Plant</Text>
      <Image
        source={require('../assets/plantImg.png')}
        style={styles.image}
      />
      <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')}>
        <CustomButton title='Sign In' titleColor='#ffffff' bg='#118844' />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate('RegisterScreen')}>
        <CustomButton title='Create An Account' titleColor='#118844' bg='#ffffff' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 120
  },
  title:{
    color: '#184A2C',
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    margin: 60,
    elevation: 10,
    borderRadius: 20
  },
});
