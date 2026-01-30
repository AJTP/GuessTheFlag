import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import './i18n'; // Inicializar i18n

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
}
