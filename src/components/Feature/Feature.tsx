import {FC} from "react";
import AboutProgram from "./AboutProgram";
import Author from "./Author";
import FigureManager from "./FigureManager";

const Feature: FC = () => {
	return (
		<div>
			<FigureManager/>
			<AboutProgram/>
			<Author/>
		</div>
	)
}

export default Feature;