import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BottomWaveSVG, TopWaveSVG } from '../components/SVG';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.wavyBgTop}>
				<TopWaveSVG />
			</View>
			<Text style={styles.title}>GuessTheFlag!</Text>

			<View style={styles.buttonsContainer}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate('Quiz')}
				>
					<Text style={styles.buttonText}>Comenzar Quiz</Text>
				</Pressable>

				<Pressable
					style={styles.button}
					onPress={() => alert('Opciones no implementadas aún')}
				>
					<Text style={styles.buttonText}>Opciones</Text>
				</Pressable>

				<Pressable
					style={styles.button}
					onPress={() => alert('Acerca de la app')}
				>
					<Text style={styles.buttonText}>Acerca de</Text>
				</Pressable>
			</View>
			<View style={styles.wavyBgBottom}>
				<BottomWaveSVG />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FF4B4B',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		fontFamily: 'Plus Jakarta Sans, sans-serif',
	},
	title: {
		fontSize: 48,
		color: '#fff',
		fontWeight: '800',
		marginBottom: 40,
		textAlign: 'center',
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		width: '100%',
		alignItems: 'center',
	},
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
	wavyBgTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 1,
	},
	wavyBgBottom: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		zIndex: 1,
	},
});
