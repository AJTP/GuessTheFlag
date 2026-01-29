import { Svg, Path } from 'react-native-svg';
import { Dimensions, View, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export function TopWaveSVG() {
	return (
		<View style={styles.wavyBgTop}>
			<Svg
				width={width} // ancho completo de la pantalla
				height={200} // alto fijo como tu h-48/h-64
				viewBox="0 0 500 200"
				preserveAspectRatio="none"
			>
				<Path d="M0,0 L500,0 L500,100 Q375,180 250,100 T0,120 Z" fill="white" />
			</Svg>
		</View>
	);
}

export function BottomWaveSVG() {
	return (
		<View style={styles.wavyBgBottom}>
			<Svg
				width={width} // ancho completo de la pantalla
				height={200} // alto fijo como tu h-48/h-64
				viewBox="0 0 500 200"
				preserveAspectRatio="none"
			>
				<Path
					d="M0,200 L500,200 L500,100 Q375,20 250,100 T0,80 Z"
					fill="white"
				/>
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	wavyBgTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 1,
	},
	wavyBgBottom: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		zIndex: 1,
	},
});
