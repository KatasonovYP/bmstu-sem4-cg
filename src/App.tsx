import './App.css'
import Grid2 from '@mui/material/Unstable_Grid2';
import MoveForm from "./components/forms/MoveForm";
import RotateForm from "./components/forms/RotateForm";
import ScaleForm from "./components/forms/ScaleForm";
import Canvas from "./components/Canvas";
import Undo from "./components/Undo";
import PivotForm from "./components/forms/PivotForm";

function App() {
	return (
		<div className="App">
			<h1>Компьютерная графика Лабораторная работа №2</h1>

			<Grid2 container spacing={6}>
				<Grid2 container xs={6} spacing={6}>
					<Grid2 xs={6}>
						<PivotForm/>
					</Grid2>
					<Grid2 xs={6}>
						<MoveForm/>
					</Grid2>
					<Grid2 xs={6}>
						<ScaleForm/>
					</Grid2>
					<Grid2 xs={6}>
						<RotateForm/>
					</Grid2>
					<Grid2 xs={12}>
						<Undo/>
					</Grid2>
				</Grid2>

				<Grid2 xs={6}>
					<Canvas/>
				</Grid2>
			</Grid2>


		</div>
	)
}

export default App
