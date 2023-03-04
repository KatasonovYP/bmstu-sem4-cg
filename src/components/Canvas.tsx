import React, {FC} from 'react';
import useFigureStore from "../store/figureStore";
import {Circle, Line} from "react-konva";
import Grid from "./Grid/Grid";

const Canvas: FC = () => {

	const points = useFigureStore((state) => state.points);
	const edges = useFigureStore((state) => state.edges);
	const pivot = useFigureStore((state) => state.pivot);

	return (
		<Grid>

			{edges.map((e, key) =>
				<Line
					points={[points[e[0]].x, points[e[0]].y, points[e[1]].x, points[e[1]].y]}
					stroke='#00a'
					strokeWidth={2}
					key={key}
				/>)
			}

			{points.map((p, key) =>
				<Circle key={key} x={p.x} y={p.y} fill='#F00' radius={5}/>
			)}
			<Circle x={pivot.x} y={pivot.y} fill='#0F0' radius={5}/>
		</Grid>
	);
}

export default Canvas;