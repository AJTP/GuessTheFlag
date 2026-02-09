import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BottomWaveSVG, TopWaveSVG } from '../components/SVG';
import { useTranslation } from 'react-i18next';

import PillButton from '../components/PillButton';
import { colors, typography } from '../styles/theme';

export default function HomeScreen({ navigation }) {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<TopWaveSVG />

			<Text style={styles.title}>{t('appTitle')}</Text>

			<View style={styles.buttonsContainer}>
				<PillButton
					title={t('startQuiz')}
					onPress={() => navigation.navigate('Quiz')}
				/>
				<PillButton
					title={t('options')}
					onPress={() => navigation.navigate('Options')}
				/>
				{/* <PillButton title={t('about')} onPress={() => alert(t('aboutApp'))} /> */}
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
	languageButton: {
		position: 'absolute',
		top: 50,
		right: 20,
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 10,
	},
	languageButtonText: {
		fontSize: 24,
	},
	title: {
		fontSize: typography.fontSizes.display,
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
