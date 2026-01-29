import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generateQuestion } from '../services/flagService';
import FlagButton from '../components/FlagButton';

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
			<Text style={styles.countryName}>{question.correct.countryName}</Text>
			<View style={styles.options}>
				{question.options.map(flag => (
					<FlagButton
						key={flag.countryName}
						flag={flag}
						onPress={() => handleSelect(flag)}
						disabled={!!selected}
					/>
				))}
			</View>
			{selected && (
				<Text style={{ marginTop: 20, fontSize: 18 }}>
					{selected.countryName === question.correct.countryName
						? '✅ Correcto'
						: '❌ Incorrecto'}
				</Text>
			)}
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
	countryName: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
	options: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
});
