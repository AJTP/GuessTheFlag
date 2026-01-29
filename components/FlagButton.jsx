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
		width: 160,
		height: 114,
		margin: 8,
		borderWidth: 2,
		borderColor: '#ddd',
		borderRadius: 12,
		overflow: 'hidden',
		backgroundColor: '#F7F9FC',
		padding: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});
