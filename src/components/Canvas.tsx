import React, {FC} from 'react';
import useFigureStore from "../store/figureStore";
import {Circle, Line} from "react-konva";
import Grid from "./Grid/Grid";

const Canvas: FC = () => {

	const points = useFigureStore((state) => state.points);
	const edges = useFigureStore((state) => state.edges);
	const pivot = useFigureStore((state) => state.pivot);

	console.log(points)

	return (
		<Grid>

			{edges.map((e, key) =>
				<Line
					points={[points[e[0]].x, points[e[0]].y, points[e[1]].x, points[e[1]].y]}
					stroke='#88F'
					strokeWidth={2}
					key={key}
				/>)
			}

			{/*{points.map((p, key) =>*/}
			{/*	<Circle*/}
			{/*		key={key}*/}
			{/*		x={p.x}*/}
			{/*		y={p.y}*/}
			{/*		fill='#44F'*/}
			{/*		radius={3}*/}
			{/*		onClick={e => console.log(key)}*/}
			{/*	/>*/}
			{/*)}*/}

			<Line
				points={[points[12].x, points[12].y, points[13].x, points[13].y,
						points[37].x, points[37].y, points[12].x, points[12].y]}
				strokeWidth={5}
				fill='#00F'
				closed={true}
			/>


			<Circle x={pivot.x} y={pivot.y} fill='#F00' radius={5}/>
		</Grid>
	);
}

export default Canvas;