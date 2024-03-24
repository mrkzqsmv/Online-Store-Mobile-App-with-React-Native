import { Text, StyleSheet, View} from 'react-native';

export default function CustomButton(props) {
  return (
      <View style={[styles.buttonStyle, {backgroundColor: props.bg}]}>
        <Text style={[styles.titleStyle, {color: props.titleColor}]}>{props.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle:{
    width: 360,
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
