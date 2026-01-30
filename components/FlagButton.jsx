import { Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../styles/theme';

const { width: screenWidth } = Dimensions.get('window');

// Calcular el tamaño responsive de las banderas
const paddingHorizontal = 36; // padding a los lados
const gap = 15; // gap entre banderas
const availableWidth = screenWidth - paddingHorizontal * 2 - gap;
const flagWidth = Math.floor(availableWidth / 2);
const flagHeight = Math.floor(flagWidth * 0.7); // proporción 1:0.7

export default function FlagButton({ flag, onPress, selected, correct }) {
	const isCorrect = selected && flag.countryName === correct.countryName;
	const incorrect =
		selected?.countryName === flag.countryName &&
		flag.countryName !== correct.countryName;
	return (
		<Pressable
			style={[
				styles.button,
				isCorrect && styles.correct,
				incorrect && styles.incorrect,
			]}
			onPress={() => onPress(flag)}
			disabled={!!selected}
		>
			<Image source={flag.image} style={styles.image} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		width: flagWidth,
		height: flagHeight,
		margin: 8,
		borderWidth: 2,
		borderColor: colors.borderColor,
		borderRadius: 12,
		overflow: 'hidden',
		backgroundColor: colors.background,
		padding: 8,
		shadowColor: colors.black,
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
	correct: { borderColor: colors.success, borderWidth: 4 },
	incorrect: { borderColor: colors.error, borderWidth: 4 },
});
