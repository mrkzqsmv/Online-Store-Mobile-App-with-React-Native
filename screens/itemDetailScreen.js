import { Text, SafeAreaView, StyleSheet,Image, View,FlatList,TouchableOpacity} from 'react-native';
import CustomButton from '../components/customButton'


export default function ItemDetailScreen({route, navigation}) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <Text style={{fontWeight: 'bold'}}>Category: {item.category}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <View style={{marginVertical: 20}}>
        <Text style={{fontSize: 16,color: '#363535'}}>Price</Text>
        <Text style={{fontSize: 18,color: '#000000'}}>${item.price}</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.itemStyle}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>Rate</Text>
          <Text style={{fontSize: 14, textAlign: 'center',color: '#118844'}}>{item['rating']['rate']}</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>Count</Text>
          <Text style={{fontSize: 14, textAlign: 'center',color: '#118844'}}>{item['rating']['count']}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('PaymentScreen')}>
        <CustomButton title='Buy Now' titleColor='#ffffff' bg='#118844' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    padding: 15,
    alignItems: 'flex-start',
  },
  image: {
    width: 300,
    height: 300
  },
  name:{
    color: '$000000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  desc:{
    fontSize: 14,
    color: 'grey',
    marginTop: 8
  },
  box:{
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  itemStyle:{
    backgroundColor: '#EBFDF2',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10
  }
});
