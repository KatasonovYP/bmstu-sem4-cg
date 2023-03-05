import './App.css'
import Grid2 from '@mui/material/Unstable_Grid2';
import MoveForm from "./components/forms/MoveForm";
import RotateForm from "./components/forms/RotateForm";
import ScaleForm from "./components/forms/ScaleForm";
import Canvas from "./components/Canvas";
import Undo from "./components/Undo";
import PivotForm from "./components/forms/PivotForm";
import {Typography} from "@mui/material";

function App() {
	return (
		<div className="App">
			<Typography variant="h2">
				Компьютерная графика
			</Typography>
			<Typography  variant="h4" mb={4}>
				Лабораторная работа №2
			</Typography>

			<Grid2 container columnSpacing={6}>
				<Grid2 container xs={6}>
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
