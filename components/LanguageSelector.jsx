import React from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, typography, spacing } from '../styles/theme';
import { getAvailableLanguages, changeLanguage } from '../i18n';

export default function LanguageSelector({ visible, onClose }) {
	const { t, i18n } = useTranslation();
	const languages = getAvailableLanguages();

	const handleLanguageChange = async languageCode => {
		try {
			await changeLanguage(languageCode);
			onClose();
		} catch (error) {
			console.error('Error changing language:', error);
		}
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>
						Seleccionar Idioma / Choose Language
					</Text>

					{languages.map(language => (
						<Pressable
							key={language.code}
							style={[
								styles.languageOption,
								i18n.language === language.code && styles.selectedLanguage,
							]}
							onPress={() => handleLanguageChange(language.code)}
						>
							<Text style={styles.flag}>{language.flag}</Text>
							<Text
								style={[
									styles.languageName,
									i18n.language === language.code &&
										styles.selectedLanguageText,
								]}
							>
								{language.name}
							</Text>
							{i18n.language === language.code && (
								<Text style={styles.checkmark}>✓</Text>
							)}
						</Pressable>
					))}

					<Pressable style={styles.closeButton} onPress={onClose}>
						<Text style={styles.closeButtonText}>Cerrar / Close</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		margin: spacing.lg,
		backgroundColor: colors.backgroundSecondary,
		borderRadius: spacing.lg,
		padding: spacing.xl,
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		minWidth: 280,
	},
	modalTitle: {
		fontSize: typography.fontSizes.lg,
		fontWeight: typography.fontWeights.bold,
		color: colors.textPrimary,
		textAlign: 'center',
		marginBottom: spacing.lg,
	},
	languageOption: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: spacing.md,
		paddingHorizontal: spacing.lg,
		marginVertical: spacing.xs,
		borderRadius: spacing.md,
		backgroundColor: colors.gray50,
		width: '100%',
		minWidth: 220,
	},
	selectedLanguage: {
		backgroundColor: colors.primary,
	},
	flag: {
		fontSize: typography.fontSizes.xxl,
		marginRight: spacing.md,
	},
	languageName: {
		fontSize: typography.fontSizes.md,
		color: colors.textPrimary,
		flex: 1,
		fontWeight: typography.fontWeights.medium,
	},
	selectedLanguageText: {
		color: colors.textLight,
		fontWeight: typography.fontWeights.bold,
	},
	checkmark: {
		fontSize: typography.fontSizes.lg,
		color: colors.textLight,
		fontWeight: typography.fontWeights.bold,
	},
	closeButton: {
		marginTop: spacing.lg,
		backgroundColor: colors.secondary,
		borderRadius: spacing.md,
		paddingVertical: spacing.md,
		paddingHorizontal: spacing.xl,
	},
	closeButtonText: {
		color: colors.textLight,
		fontSize: typography.fontSizes.md,
		fontWeight: typography.fontWeights.bold,
	},
});
