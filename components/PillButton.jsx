import { Text, Pressable, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles/theme';

export default function PillButton({ title, onPress }) {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.secondary,
		paddingHorizontal: spacing.sm,
		paddingVertical: spacing.md,
		borderRadius: spacing.xxl,
		marginBottom: spacing.lg,
		width: '80%',
		boxShadow: `0 12px 0px 0px ${colors.secondaryDark}, 0 20px 30px rgba(0,0,0,0.1)`,
	},
	buttonText: {
		color: colors.textLight,
		textAlign: 'center',
		fontWeight: '800',
		fontSize: typography.fontSizes.xxl,
	},
});
