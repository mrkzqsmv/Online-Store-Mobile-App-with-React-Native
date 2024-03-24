import { View, SafeAreaView, StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import CustomButton from '../components/customButton'

export default function PaymentScreen(props) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width: 296,height: 184, marginTop: 50}}
          />
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width:296,height: 184, marginTop: 50}}
          />
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width: 296,height: 184, marginTop: 50}}
          />
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width: 296,height: 184, marginTop: 50}}
          />
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width:296,height: 184, marginTop: 50}}
          />
          <Image
            source={require('../assets/creditCartImg.png')}
            style={{width: 296,height: 184, marginTop: 50}}
          />
        </ScrollView>
        <TouchableOpacity style={{marginVertical: 20}} onPress={()=>{
          props.navigation.navigate('DoneScreen')
        }}>
          <CustomButton title='Payment' titleColor='#ffffff' bg='#118844' />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
});
