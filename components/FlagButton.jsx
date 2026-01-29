import { Pressable, Image, StyleSheet } from 'react-native';

export default function FlagButton({ flag, onPress, disabled }) {
  return (
    <Pressable 
      style={[styles.button, disabled && { opacity: 0.5 }]} 
      onPress={() => onPress(flag)}
      disabled={disabled}
    >
      <Image source={flag.image} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  image: { width: 120, height: 80, resizeMode: 'contain' },
});
