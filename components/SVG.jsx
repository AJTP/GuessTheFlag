import { Svg, Path } from 'react-native-svg';
import { Dimensions, View, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

const { width } = Dimensions.get('window');

export function TopWaveSVG({ height = 200, fillColor = colors.background }) {
	return (
		<View style={styles.wavyBgTop}>
			<Svg
				width={width} // ancho completo de la pantalla
				height={height} // alto fijo como tu h-48/h-64
				viewBox="0 0 500 200"
				preserveAspectRatio="none"
			>
				<Path
					d="M0,0 L500,0 L500,100 Q375,180 250,100 T0,120 Z"
					fill={fillColor}
				/>
			</Svg>
		</View>
	);
}

export function BottomWaveSVG({ height = 200, fillColor = colors.background }) {
	return (
		<View style={styles.wavyBgBottom}>
			<Svg
				width={width}
				height={height}
				viewBox="0 0 500 200"
				preserveAspectRatio="none"
			>
				<Path
					d="M0,200 L500,200 L500,100 Q375,20 250,100 T0,80 Z"
					fill={fillColor}
				/>
			</Svg>
		</View>
	);
}

export function WavyHeader(props) {
	return (
		<View style={styles.wavyHeader}>
			<View style={styles.headerContent}>{props.children}</View>
			<View style={styles.headerWave}>
				<Svg
					width={width}
					height={50}
					viewBox="0 0 500 200"
					preserveAspectRatio="none"
				>
					<Path
						d="M0,200 L500,200 L500,100 Q375,20 250,100 T0,80 Z"
						fill={colors.background}
					/>
				</Svg>
			</View>
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
		zIndex: 10,
	},
	wavyHeader: {
		backgroundColor: colors.primary,
		position: 'relative',
		width: '100%',
		height: 200,
		flexDirection: 'column',
	},
	headerContent: {
		flex: 1,
		paddingTop: 80,
		paddingHorizontal: 24,
		paddingBottom: 20,
	},
	headerWave: {
		position: 'absolute',
		bottom: -1,
		left: 0,
		width: '100%',
	},
});
