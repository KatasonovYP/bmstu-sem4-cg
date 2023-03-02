import './App.css'
import {Container} from "@mui/material";
import MoveForm from "./components/MoveForm";
import RotateForm from "./components/RotateForm";
import ScaleForm from "./components/ScaleForm";
import Canvas from "./components/Canvas";

function App() {
	return (
		<div className="App">
			<h1>Компьютерная графика Лабораторная работа №2</h1>

			<Container maxWidth='xl'>
				<Container maxWidth='xs'>
					<MoveForm/>
				</Container>

				<Container maxWidth='xs'>
					<RotateForm/>
				</Container>

				<Container maxWidth='xs'>
					<ScaleForm/>
				</Container>
			</Container>

			<Canvas/>

		</div>
	)
}

export default App
