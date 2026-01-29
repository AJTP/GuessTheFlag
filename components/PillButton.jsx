import { Text, Pressable, StyleSheet } from 'react-native';

export default function PillButton({ title, onPress }) {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#3CC7C1',
		paddingHorizontal: 10,
		paddingVertical: 18,
		borderRadius: 50,
		marginBottom: 20,
		width: '80%',
		boxShadow: '0 12px 0px 0px #2EA8A3, 0 20px 30px rgba(0,0,0,0.1)',
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '800',
		fontSize: 24,
	},
});
