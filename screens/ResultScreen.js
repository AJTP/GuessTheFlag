import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
	const { score, total } = route.params;

	const handleRestart = () => {
		navigation.navigate('Home'); // vuelve al menú de inicio
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>¡Quiz terminado!</Text>
			<Text style={styles.score}>
				Tu puntuación: {score} / {total}
			</Text>

			<Pressable style={styles.button} onPress={handleRestart}>
				<Text style={styles.buttonText}>Volver al menú</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	score: { fontSize: 24, marginBottom: 40, textAlign: 'center' },
	button: {
		backgroundColor: '#27ae60',
		padding: 15,
		borderRadius: 10,
		width: '80%',
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
	},
});
