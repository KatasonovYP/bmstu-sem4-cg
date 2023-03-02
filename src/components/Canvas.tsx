import React, {FC} from 'react';
import usePointStore from "../store/store";
import {Circle, Line} from "react-konva";
import Grid from "./Grid/Grid";

const Canvas: FC = () => {

	const points = usePointStore((state) => state.points);
	const edges = usePointStore((state) => state.edges);
	const getCenter = usePointStore((state) => state.getCenter);

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
			<Circle x={getCenter().x} y={getCenter().y} fill='#0F0' radius={5}/>
		</Grid>
	);
}

export default Canvas;