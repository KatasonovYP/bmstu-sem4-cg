import {useState} from 'react'
import './App.css'
import usePointStore from "./store/store";
import Canvas from "./components/Canvas";
import {Button, Card, Container} from "@mui/material";
import MoveForm from "./components/MoveForm";

function App() {
	const points = usePointStore((state) => state.points);
	const add = usePointStore(state => state.add);
	const move = usePointStore(state => state.move);

	return (
		<div className="App">
			<h1>Компьютерная графика Лабораторная работа №2</h1>

			<Container maxWidth='xl'>
				<Container maxWidth='xs'>
					<MoveForm/>
				</Container>

				<Container maxWidth='xs'>
					<MoveForm/>
				</Container>
			</Container>

			<Canvas/>

		</div>
	)
}

export default App
