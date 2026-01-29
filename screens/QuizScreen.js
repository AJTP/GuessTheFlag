import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generateQuestion } from '../services/flagService';
import FlagButton from '../components/FlagButton';
import { TopLightWaveSVG, WavyHeader } from '../components/SVG';

export default function QuizScreen({ navigation }) {
	const [question, setQuestion] = useState(null);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [questionCount, setQuestionCount] = useState(0);
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
		setTimeout(() => {
			if (questionCount + 1 < totalQuestions) {
				setQuestionCount(questionCount + 1);
			} else {
				navigation.navigate('Result', { score, total: totalQuestions });
			}
		}, 1000); // 1 segundo para ver feedback
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
					<Text style={styles.feedbackText}>
						{selected.countryName === question.correct.countryName
							? '✅ Correcto'
							: '❌ Incorrecto'}
					</Text>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
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
	feedbackText: {
		marginTop: 20,
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '600',
	},
});
