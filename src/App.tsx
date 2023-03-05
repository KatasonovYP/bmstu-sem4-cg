import './App.css'
import Grid2 from '@mui/material/Unstable_Grid2';
import MoveForm from "./components/forms/MoveForm";
import RotateForm from "./components/forms/RotateForm";
import ScaleForm from "./components/forms/ScaleForm";
import Canvas from "./components/Canvas";
import Undo from "./components/Undo";
import PivotForm from "./components/forms/PivotForm";
import {Typography} from "@mui/material";
import React from "react";
import Feature from "./components/Feature";

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
				<Grid2 container xs={7}>
					<Feature/>
				</Grid2>

				<Grid2 container xs={5}>
					<Canvas/>
				</Grid2>
			</Grid2>


		</div>
	)
}

export default App
