import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { generateQuestion } from '../services/flagService';
import FlagButton from '../components/FlagButton';
import { TopLightWaveSVG, WavyHeader } from '../components/SVG';

export default function QuizScreen({ navigation }) {
	const [question, setQuestion] = useState(null);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [questionCount, setQuestionCount] = useState(0);
	const slideAnim = useRef(new Animated.Value(100)).current;
	const opacityAnim = useRef(new Animated.Value(0)).current;
	const totalQuestions = 3;

	useEffect(() => {
		setQuestion(generateQuestion());
		setSelected(null);
	}, [questionCount]);

	const handleSelect = flag => {
		setSelected(flag);
		if (flag.countryName === question.correct.countryName) {
			setScore(score + 1);
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

				if (questionCount + 1 < totalQuestions) {
					setQuestionCount(questionCount + 1);
				} else {
					navigation.navigate('Result', { score, total: totalQuestions });
				}
			});
		}, 1500);
	};

	if (!question) return null;

	return (
		<View style={styles.container}>
			<WavyHeader>
				<View style={styles.progressTextContainer}>
					<Text style={styles.progressText}>Pregunta {questionCount + 1}</Text>
					<Text style={styles.progressText}>
						{Math.round((questionCount / totalQuestions) * 100)}%
					</Text>
				</View>
				<View style={styles.progressBarContainer}>
					<View
						style={[
							styles.progressFill,
							{ width: `${(questionCount / totalQuestions) * 100}%` },
						]}
					></View>
				</View>
			</WavyHeader>

			<View style={styles.content}>
				<Text style={styles.countryName}>
					¿Cuál es la bandera de{' '}
					<Text style={{ color: '#FF4B4B' }}>
						{question.correct.countryName}
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
										? '#10B981'
										: '#EF4444',
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
		backgroundColor: '#f5f5f5',
	},
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	progressText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '800',
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
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 10,
	},
	countryName: {
		fontSize: 28,
		fontWeight: 'bold',
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
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 10,
	},
	feedbackIcon: {
		fontSize: 40,
		color: 'white',
		fontWeight: 'bold',
	},
});
