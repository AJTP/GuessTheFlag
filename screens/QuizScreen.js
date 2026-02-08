import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { generateGame } from '../services/flagService';
import { getCountryName } from '../services/countryNames';
import FlagButton from '../components/FlagButton';
import { WavyHeader } from '../components/SVG';
import { colors, typography, spacing } from '../styles/theme';
import { ArrowLeft } from 'react-native-feather';

export default function QuizScreen({ navigation }) {
	const { t, i18n } = useTranslation();
	const [question, setQuestion] = useState(null);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [questionCount, setQuestionCount] = useState(0);
	const slideAnim = useRef(new Animated.Value(100)).current;
	const opacityAnim = useRef(new Animated.Value(0)).current;
	const gameQuestions = useRef(generateGame(3)).current;

	useEffect(() => {
		setQuestion(gameQuestions[questionCount]);
		setSelected(null);
	}, [questionCount]);

	const handleSelect = flag => {
		setSelected(flag);

		// Calcular el nuevo score inmediatamente
		const isCorrect = flag.countryName === question.correct.countryName;
		const newScore = isCorrect ? score + 1 : score;

		if (isCorrect) {
			setScore(newScore);
		}

		// Animar la entrada de la burbuja
		Animated.parallel([
			Animated.spring(slideAnim, {
				toValue: 0,
				useNativeDriver: true,
				tension: 100,
				friction: 8,
			}),
			Animated.timing(opacityAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start();

		setTimeout(() => {
			// Animar la salida
			Animated.parallel([
				Animated.timing(slideAnim, {
					toValue: -100,
					duration: 200,
					useNativeDriver: true,
				}),
				Animated.timing(opacityAnim, {
					toValue: 0,
					duration: 200,
					useNativeDriver: true,
				}),
			]).start(() => {
				// Reset animation values
				slideAnim.setValue(100);
				opacityAnim.setValue(0);

				if (questionCount + 1 < gameQuestions.length) {
					setQuestionCount(questionCount + 1);
				} else {
					// Usar el newScore calculado, no el score del estado
					navigation.navigate('Result', {
						score: newScore,
						total: gameQuestions.length,
					});
				}
			});
		}, 1500);
	};

	if (!question) return null;

	return (
		<View style={styles.container}>
			<WavyHeader>
				<View style={styles.quitButtonContainer}>
					<Pressable
						onPress={() => navigation.goBack()}
						style={styles.quitButton}
					>
						<ArrowLeft
							width={28}
							height={28}
							stroke={colors.textLight}
							strokeWidth={2.5}
						/>
					</Pressable>
				</View>
				<View style={styles.progressTextContainer}>
					<Text style={styles.progressText}>
						{t('question', { number: questionCount + 1 })}
					</Text>
					<Text style={styles.progressText}>
						{Math.round((questionCount / gameQuestions.length) * 100)}%
					</Text>
				</View>
				<View style={styles.progressBarContainer}>
					<View
						style={[
							styles.progressFill,
							{ width: `${(questionCount / gameQuestions.length) * 100}%` },
						]}
					></View>
				</View>
			</WavyHeader>

			<View style={styles.content}>
				<Text style={styles.countryName}>
					{t('whichFlagIs')}
					<Text style={{ color: colors.primaryDark, fontWeight: 'bold' }}>
						{getCountryName(question.correct.countryName, i18n.language)}
					</Text>
					?
				</Text>
				<View style={styles.options}>
					{question.options.map(flag => (
						<FlagButton
							key={flag.countryName}
							flag={flag}
							onPress={() => handleSelect(flag)}
							selected={selected}
							correct={question.correct}
						/>
					))}
				</View>
				{selected && (
					<Animated.View
						style={[
							styles.feedbackBubble,
							{
								backgroundColor:
									selected.countryName === question.correct.countryName
										? colors.success
										: colors.error,
								transform: [{ translateY: slideAnim }],
								opacity: opacityAnim,
							},
						]}
					>
						<Text style={styles.feedbackIcon}>
							{selected.countryName === question.correct.countryName
								? '✓'
								: '✕'}
						</Text>
					</Animated.View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	quitButtonContainer: {
		width: spacing.xxl,
		height: spacing.xl,
	},

	quitButton: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},

	quitButtonText: {
		fontSize: typography.fontSizes.xxxl,
		lineHeight: typography.fontSizes.xxxl,
		color: colors.textLight,
		fontWeight: typography.fontWeights.semiBold,
	},

	progressText: {
		color: colors.textLight,
		fontSize: typography.fontSizes.md,
		fontWeight: typography.fontWeights.extraBold,
	},
	progressTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	progressBarContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		height: 12,
		borderRadius: 10,
		overflow: 'hidden',
		width: '100%',
	},
	progressFill: {
		backgroundColor: colors.backgroundSecondary,
		height: '100%',
		borderRadius: 10,
	},
	countryName: {
		fontSize: typography.fontSizes.xxxl,
		fontWeight: typography.fontWeights.bold,
		marginBottom: 30,
		textAlign: 'center',
	},
	options: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: 15,
	},
	feedbackBubble: {
		position: 'absolute',
		bottom: 50,
		width: 80,
		height: 80,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 10,
	},
	feedbackIcon: {
		fontSize: typography.fontSizes.xxxl,
		color: colors.background,
		fontWeight: typography.fontWeights.bold,
	},
});
