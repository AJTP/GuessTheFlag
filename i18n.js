import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import translations from './locales';

// Obtener el idioma del dispositivo
const getDeviceLanguage = () => {
	const locale = Localization.getLocales()[0];
	// Extraer solo el código del idioma (es, en, fr) sin el código de región
	const language = locale.languageCode;
	// Si el idioma no está soportado, usar español por defecto
	return ['es', 'en', 'fr'].includes(language) ? language : 'es';
};

// Configuración de i18next
i18n
	.use(initReactI18next) // Pasa i18n a react-i18next
	.init({
		resources: translations,
		lng: getDeviceLanguage(), // Idioma por defecto basado en el dispositivo
		fallbackLng: 'es', // Idioma de respaldo

		interpolation: {
			escapeValue: false, // React ya escapa los valores por defecto
		},

		// Configuración adicional para React Native
		compatibilityJSON: 'v3',

		// Debug solo en desarrollo
		debug: __DEV__,
	});

export default i18n;

// Hook personalizado para cambiar idioma y recargar
export const changeLanguage = language => {
	return i18n.changeLanguage(language);
};

// Función para obtener los idiomas disponibles
export const getAvailableLanguages = () => [
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
];
