import { Pressable, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

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
		width: 160,
		height: 114,
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
