import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles/theme';
import { WavyHeader } from '../components/SVG';
import PillButton from '../components/PillButton';

export default function ResultScreen({ route, navigation }) {
	const { score, total } = route.params;
	const percentage = Math.round((score / total) * 100);

	const getScoreMessage = () => {
		if (percentage === 100) return '¡PERFECTO! 🏆';
		if (percentage >= 80) return '¡EXCELENTE! 🎉';
		if (percentage >= 60) return '¡BIEN HECHO! 👍';
		if (percentage >= 40) return '¡PUEDES MEJORAR! 💪';
		return '¡SIGUE INTENTANDO! 🚀';
	};

	const getScoreColor = () => {
		if (percentage >= 80) return colors.success;
		if (percentage >= 60) return colors.warning;
		return colors.error;
	};

	return (
		<View style={styles.container}>
			<WavyHeader>
				<View style={styles.headerContent}>
					<Text style={styles.headerTitle}>QUIZ COMPLETADO!</Text>
					<Text style={styles.headerSubtitle}>Resultados finales</Text>
				</View>
			</WavyHeader>

			<View style={styles.content}>
				<View style={styles.scoreCircle}>
					<Text style={[styles.scoreNumber, { color: getScoreColor() }]}>
						{score}
					</Text>
					<Text style={styles.scoreDivider}>/</Text>
					<Text style={styles.scoreTotal}>{total}</Text>
				</View>

				<Text style={styles.percentage}>{percentage}%</Text>
				<Text style={[styles.message, { color: getScoreColor() }]}>
					{getScoreMessage()}
				</Text>

				<View style={styles.statsContainer}>
					<View style={styles.statItem}>
						<Text style={styles.statNumber}>{score}</Text>
						<Text style={styles.statLabel}>Correctas</Text>
					</View>
					<View style={styles.statItem}>
						<Text style={styles.statNumber}>{total - score}</Text>
						<Text style={styles.statLabel}>Incorrectas</Text>
					</View>
					<View style={styles.statItem}>
						<Text style={styles.statNumber}>{total}</Text>
						<Text style={styles.statLabel}>Total</Text>
					</View>
				</View>

				<View style={styles.buttonsContainer}>
					<PillButton
						title="Jugar de Nuevo"
						onPress={() => navigation.navigate('Quiz')}
						style={styles.playAgainButton}
					/>
					<PillButton
						title="Volver al Inicio"
						onPress={() => navigation.navigate('Home')}
						style={styles.homeButton}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	headerContent: {
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: typography.fontSizes.xl,
		fontWeight: typography.fontWeights.extraBold,
		color: colors.textLight,
		textAlign: 'center',
		marginBottom: spacing.xs,
	},
	headerSubtitle: {
		fontSize: typography.fontSizes.md,
		color: colors.textLight,
		opacity: 0.9,
		textAlign: 'center',
	},
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: spacing.lg,
		paddingTop: spacing.l,
	},
	scoreCircle: {
		width: 160,
		height: 160,
		borderRadius: 80,
		backgroundColor: colors.backgroundSecondary,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.15,
		shadowRadius: 16,
		elevation: 10,
		marginBottom: spacing.lg,
	},
	scoreNumber: {
		fontSize: 48,
		fontWeight: typography.fontWeights.extraBold,
	},
	scoreDivider: {
		fontSize: 36,
		fontWeight: typography.fontWeights.bold,
		color: colors.gray400,
		marginHorizontal: spacing.xs,
	},
	scoreTotal: {
		fontSize: 36,
		fontWeight: typography.fontWeights.bold,
		color: colors.gray600,
	},
	percentage: {
		fontSize: typography.fontSizes.xxxl,
		fontWeight: typography.fontWeights.extraBold,
		color: colors.textPrimary,
		marginBottom: spacing.md,
	},
	message: {
		fontSize: typography.fontSizes.lg,
		fontWeight: typography.fontWeights.bold,
		textAlign: 'center',
		marginBottom: spacing.xl,
	},
	statsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		backgroundColor: colors.backgroundSecondary,
		borderRadius: spacing.md,
		paddingVertical: spacing.lg,
		marginBottom: spacing.xxl,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
	},
	statItem: {
		alignItems: 'center',
	},
	statNumber: {
		fontSize: typography.fontSizes.xxl,
		fontWeight: typography.fontWeights.extraBold,
		color: colors.textPrimary,
		marginBottom: spacing.xs,
	},
	statLabel: {
		fontSize: typography.fontSizes.sm,
		color: colors.textSecondary,
		fontWeight: typography.fontWeights.medium,
	},
	buttonsContainer: {
		width: '100%',
		gap: spacing.md,
		alignItems: 'center',
	},
	playAgainButton: {
		width: '100%',
		backgroundColor: colors.success,
	},
	homeButton: {
		width: '100%',
		backgroundColor: colors.secondary,
	},
});
