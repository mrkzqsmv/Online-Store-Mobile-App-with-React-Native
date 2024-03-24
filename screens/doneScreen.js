import { ImageBackground,Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,View } from 'react-native';
import CustomButton from '../components/customButton'

export default function DoneScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/bgImg.png')}
      style={styles.background}>
      <View style={styles.box}>
        <Image
        source={require('../assets/doneIcon.png')}
        style={{ width: 90, height: 90,marginTop: 20}}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.mainText}>Order Succesfully</Text>
          <Text style={styles.mainText}>Placed</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.secondText}>Your payment was succesful!</Text>
          <Text style={styles.secondText}>just wait skincares arrived at home.</Text>
        </View>
        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#118844'}]} onPress={() => {
          props.navigation.navigate('MainScreen')
        }}>
          <Text style={[styles.titleStyle, {color: '#F6EDED'}]}>Countiue Shoping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#ffffff'}]} onPress={() => {
          props.navigation.navigate('PaymentScreen')
        }}>
          <Text style={[styles.titleStyle, {color: '#118844'}]}>Go To Payment</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 315,
    height: 437,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20
  },
  mainText:{
    color: '#118844',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  secondText:{
    color: '#868686',
    fontSize: 14,
    textAlign: 'center'
  },
  buttonStyle:{
    width: 290,
    height: 56,
    borderRadius: 10,
    borderColor: '#118844',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  titleStyle:{
    fontWeight: 'bold',
    fontSize: 17,
  }
});
