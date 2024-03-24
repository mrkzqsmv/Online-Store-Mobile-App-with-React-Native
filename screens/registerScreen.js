import { Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,View } from 'react-native';
import CustomTextFormField from '../components/customTextFormField'
import CustomButton from '../components/customButton'

export default function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/loginScreenImg.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.secondTitle}>Log in to your account</Text>
      <CustomTextFormField icon='✉️' hintText='Email' />
      <CustomTextFormField icon='🔒' hintText='Password' />
      <TouchableOpacity onPress={()=>props.navigation.navigate('MainScreen')}>
        <CustomButton title='Log In' titleColor='#ffffff' bg='#118844' />
      </TouchableOpacity>
      <View style={{height: 240}}></View> 
      <Text style={{color: '#5F6160',fontSize: 13}}>Don’t have an account? Sign Up</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  image: {
    resizeMode: 'cover',
    elevation: 10,
    borderRadius: 20
  },
  title:{
    fontSize: 25,
    color: '#118844',
    fontWeight: 'bold',
    marginVertical: 20
  },
  secondTitle:{
    color: '#535252',
    fontSize: 15
  }
});
