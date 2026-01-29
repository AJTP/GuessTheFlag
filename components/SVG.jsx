import { Svg, Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export function TopWaveSVG() {
	return (
		<Svg
			width={width} // ancho completo de la pantalla
			height={200} // alto fijo como tu h-48/h-64
			viewBox="0 0 500 200"
			preserveAspectRatio="none"
		>
			<Path d="M0,0 L500,0 L500,100 Q375,180 250,100 T0,120 Z" fill="white" />
		</Svg>
	);
}

export function BottomWaveSVG() {
	return (
		<Svg
			width={width} // ancho completo de la pantalla
			height={200} // alto fijo como tu h-48/h-64
			viewBox="0 0 500 200"
			preserveAspectRatio="none"
		>
			<Path d="M0,200 L500,200 L500,100 Q375,20 250,100 T0,80 Z" fill="white" />
		</Svg>
	);
}
