import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Iniciando o Mines!</Text>
				<Text style={styles.instructions}>Tamanho da grade: {params.getColumnsAmount()} x {params.getRowsAmount()}</Text>
				<Field></Field>
				<Field opened></Field>
				<Field opened nearMines={1}></Field>
				<Field opened nearMines={3}></Field>
				<Field opened nearMines={6}></Field>
				<Field mined opened></Field>
				<Field mined opened exploded></Field>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
