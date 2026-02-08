// Paleta de colores principal
export const colors = {
	// Colores primarios
	primary: '#FF6B6B',
	primaryDark: '#FF4B4B',
	primaryLight: '#FF8E8E',

	// Colores secundarios
	secondary: '#3CC7C1',
	secondaryDark: '#2EA8A3',
	secondaryLight: '#5EEAD4',

	// Estados
	success: '#10B981',
	successLight: '#ECFDF5',
	successDark: '#065F46',
	error: '#EF4444',
	errorLight: '#FEF2F2',
	errorDark: '#991B1B',
	warning: '#F59E0B',
	warningLight: '#FFFBEB',
	warningDark: '#92400E',

	// Grises
	gray50: '#F9FAFB',
	gray100: '#F3F4F6',
	gray200: '#E5E7EB',
	gray300: '#D1D5DB',
	gray400: '#9CA3AF',
	gray500: '#6B7280',
	gray600: '#4B5563',
	gray700: '#374151',
	gray800: '#1F2937',
	gray900: '#111827',

	// Fondos
	background: '#F7F9FC',
	backgroundSecondary: '#FFFFFF',

	//Bordes
	borderColor: '#E5E7EB',

	// Textos
	textPrimary: '#111827',
	textSecondary: '#6B7280',
	textLight: '#FFFFFF',

	// Otros
	white: '#FFFFFF',
	black: '#000000',
	transparent: 'transparent',
};

// Tamaños y espaciados
export const spacing = {
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 48,
	xxxl: 64,
};

// Tipografía
export const typography = {
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20,
		xxl: 24,
		xxxl: 32,
		display: 48,
	},
	fontWeights: {
		normal: '400',
		medium: '500',
		semiBold: '600',
		bold: '700',
		extraBold: '800',
	},
};

// Sombras
export const shadows = {
	small: {
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	medium: {
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.15,
		shadowRadius: 8,
		elevation: 5,
	},
	large: {
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.25,
		shadowRadius: 16,
		elevation: 10,
	},
};
