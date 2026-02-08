import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';
import OptionsScreen from '../screens/OptionsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Quiz" component={QuizScreen} />
			<Stack.Screen name="Result" component={ResultScreen} />
			<Stack.Screen name="Options" component={OptionsScreen} />
		</Stack.Navigator>
	);
}
