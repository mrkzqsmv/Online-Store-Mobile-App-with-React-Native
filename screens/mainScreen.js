import { Text, SafeAreaView, StyleSheet,Image, View,FlatList,TouchableOpacity} from 'react-native';
import CustomTextFormField from '../components/customTextFormField'
import CategoriesFlatList from '../components/categoriesFlatlist'
import React, { useState, useEffect } from 'react';

export default function MainScreen(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>{props.navigation.navigate('ItemDetailScreen',{item: item})}}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{color: '#515151',fontSize: 14}}>{item.title}</Text>
        <Text style={{color:'$262626',fontSize: 15}}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Let’s find your</Text>
        <Text style={styles.title}>plants</Text>
      </View>
      <CustomTextFormField icon='🔍' hintText='Search' />
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 50,
    padding: 15,
  },
  title:{
    fontSize: 32,
    color: '#184A2C',
    fontWeight: 'bold'
  },
  item:{
    backgroundColor: '#FFFBFB',
    borderRadius: 10,
    width: 165,
    height: 201,
    margin: 3,
    alignItems: 'center',
  },
  image:{
    marginTop: 5,
    width:140,
    height: 100
  }
});
