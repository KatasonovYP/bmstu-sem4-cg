import {Line} from "react-konva";
import {IStage} from "../../interfaces";

function getNear(num: number, step: number): number {
	return Math.ceil(num * (1 / step)) * step;
}

const gridSize = 50;

function drawLines(stage: IStage) {
	const gridLines = []
	let key = 0;
	const x = stage.x / stage.scale;
	const y = stage.y / stage.scale;
	const height = stage.height / stage.scale;
	const width = stage.width / stage.scale;

	for (let stepY = getNear(-y, gridSize); stepY < -y + height; stepY += gridSize) {
		gridLines.push(<Line
			points={[-x, stepY, -x + width, stepY]}
			stroke='#aaa'
			strokeWidth={1}
			key={key++}
		/>)
	}

	for (let stepX = getNear(-x, gridSize); stepX < -x + width; stepX += gridSize) {
		gridLines.push(<Line
			points={[stepX, -y, stepX, -y + height]}
			stroke='#aaa'
			strokeWidth={1}
			key={key++}
		/>)
	}

	return gridLines;
}

export default drawLines;