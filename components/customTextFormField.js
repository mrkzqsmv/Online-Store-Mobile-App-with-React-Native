import { Text, SafeAreaView, StyleSheet, View,TouchableOpacity,TextInput} from 'react-native';

export default function CustomTextFormField(props) {
  return (
    <View style={styles.customTextFormField}>
      <Text>{props.icon}</Text>
      <TextInput
        placeholder={props.hintText}
        onChangeText={text => {}}
        value
        style={{padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  customTextFormField:{
    width: 352,
    height: 46,
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: '#EBFDF2',
    alignItems: 'center',
    marginVertical: 15,
    paddingLeft: 20
  }
});
