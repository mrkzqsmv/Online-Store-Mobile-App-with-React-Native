import { Text, SafeAreaView, StyleSheet, View,TouchableOpacity,FlatList} from 'react-native';

export default function CategoriesFlatList() {
  const categories = ['Popular','Indoor','Outdoor','All-see','Indoor','Outdoor'];
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({ item }) => (
        <View style={styles.categoriesBox}>
          <Text style={styles.itemStyle}>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemStyle:{
    fontSize: 18,
    width: 79,
    height: 33,
   textAlign: 'center',
  },
  categoriesBox:{
    padding: 10, 
    backgroundColor: '#E1E3E1',
    marginLeft: 10,
    borderRadius: 15,
    justifyContent: 'center'
  }
});
