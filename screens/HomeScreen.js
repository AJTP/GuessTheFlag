import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BottomWaveSVG, TopWaveSVG } from '../components/SVG';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import PillButton from '../components/PillButton';
import LanguageSelector from '../components/LanguageSelector';
import { colors, typography } from '../styles/theme';

export default function HomeScreen({ navigation }) {
	const { t } = useTranslation();
	const [languageModalVisible, setLanguageModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<TopWaveSVG />
			
			{/* Botón de idioma en la esquina superior derecha */}
			<Pressable 
				style={styles.languageButton}
				onPress={() => setLanguageModalVisible(true)}
			>
				<Text style={styles.languageButtonText}>🌐</Text>
			</Pressable>
			
			<Text style={styles.title}>{t('appTitle')}</Text>

			<View style={styles.buttonsContainer}>
				<PillButton
					title={t('startQuiz')}
					onPress={() => navigation.navigate('Quiz')}
				/>
				<PillButton
					title={t('options')}
					onPress={() => alert(t('optionsNotImplemented'))}
				/>
				<PillButton
					title={t('about')}
					onPress={() => alert(t('aboutApp'))}
				/>
			</View>

			<BottomWaveSVG />
			
			<LanguageSelector 
				visible={languageModalVisible}
				onClose={() => setLanguageModalVisible(false)}
			/>
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
