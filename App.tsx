import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
	const [timer, setTimer] = useState(0);
	const [isTimerRunning, setIsTimerRunning] = useState(false);

	const updateTimer = () => {
		setTimer(timer + 1);

		setInterval(() => {
			// updateTimer();
			console.log(timer);
		}, 1000);
	};

	return (
		<View style={styles.container}>
			<Text>Shoulder press</Text>
			<Text>Timer: {timer}</Text>
			<Button title="Begin set" color={"green"} onPress={updateTimer}></Button>
			<Button title="Finish set" color={"orange"}></Button>
			<Button title="Choose another exercise"></Button>
			<TextInput style={styles.input} placeholder="fds"></TextInput>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10
	}
});
