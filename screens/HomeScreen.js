import { View, Text, StyleSheet } from 'react-native';
import { BottomWaveSVG, TopWaveSVG } from '../components/SVG';
import PillButton from '../components/PillButton';
import { colors } from '../styles/theme';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TopWaveSVG />
			<Text style={styles.title}>GuessTheFlag!</Text>

			<View style={styles.buttonsContainer}>
				<PillButton
					title="Iniciar Quiz"
					onPress={() => navigation.navigate('Quiz')}
				/>
				<PillButton
					title="Opciones"
					onPress={() => alert('Opciones no implementadas aún')}
				/>
				<PillButton
					title="Acerca de"
					onPress={() => alert('Acerca de la app')}
				/>
			</View>

			<BottomWaveSVG />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		fontFamily: 'Plus Jakarta Sans, sans-serif',
	},
	title: {
		fontSize: 48,
		color: colors.textLight,
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
});
