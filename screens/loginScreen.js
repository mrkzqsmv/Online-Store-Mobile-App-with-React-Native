import { Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,View } from 'react-native';
import CustomTextFormField from '../components/customTextFormField'
import CustomButton from '../components/customButton'

export default function RegisterScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/loginScreenImg.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.secondTitle}>Create your new account</Text>
      <CustomTextFormField icon='🙋🏻‍♂️' hintText='Full Name' />
      <CustomTextFormField icon='✉️' hintText='Email' />
      <CustomTextFormField icon='🔒' hintText='Password' />
      <TouchableOpacity onPress={()=>props.navigation.navigate('MainScreen')}>
        <CustomButton title='Sign Up' titleColor='#ffffff' bg='#118844' />
      </TouchableOpacity>
      <View style={{height: 30}}></View> 
      <Text style={{color: '#5F6160', fontSize: 13}}>Or Countiue With</Text>
      <View style={{height: 30}}></View> 
      <View style={styles.loginWithBox}>
        <Image
        source={require('../assets/googleIcon.png')}
        style={styles.image}
        />
        <Image
          source={require('../assets/facebookIcon.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/appleIcon.png')}
          style={styles.image}
        />
      </View>
      <View style={{height: 70}}></View> 
      <Text style={{color: '#5F6160',fontSize: 13}}>Already have an account? Sign In</Text>
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
  },
  loginWithBox:{
    flexDirection: 'row',
    gap: 20
  }
});
