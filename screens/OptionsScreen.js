import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, typography, spacing } from '../styles/theme';
import { getAvailableLanguages, changeLanguage } from '../i18n';
import { Picker } from '@react-native-picker/picker';

export default function OptionsScreen({ navigation }) {
	const { t, i18n } = useTranslation();
	const languages = getAvailableLanguages();

	const handleLanguageChange = async languageCode => {
		try {
			await changeLanguage(languageCode);
		} catch (error) {
			console.error('Error changing language:', error);
		}
	};

	return (
		<View style={styles.centeredView}>
			<Text style={styles.modalTitle}>{t('selectLanguage')}</Text>

			<View style={styles.pickerContainer}>
				<Picker
					selectedValue={i18n.language}
					onValueChange={handleLanguageChange}
					style={styles.picker}
					itemStyle={styles.pickerItem}
				>
					{languages.map(language => (
						<Picker.Item
							key={language.code}
							label={`${language.flag} ${language.name}`}
							value={language.code}
						/>
					))}
				</Picker>
			</View>

			<Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
				<Text style={styles.closeButtonText}>{t('close')}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: spacing.lg,
	},

	pickerContainer: {
		width: '100%',
		borderRadius: spacing.md,
		backgroundColor: colors.backgroundSecondary,
		borderWidth: 1,
		borderColor: colors.gray200,
		overflow: 'hidden',
		marginVertical: spacing.md,
	},

	picker: {
		width: '90%',
		color: colors.textPrimary, // iOS & Android
		backgroundColor: colors.backgroundSecondary, // Android
		height: spacing.xxxl,
		marginLeft: spacing.sm, // Android
	},

	pickerItem: {
		fontSize: typography.fontSizes.md, // iOS
		color: colors.textPrimary,
		marginLeft: spacing.xl,
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
