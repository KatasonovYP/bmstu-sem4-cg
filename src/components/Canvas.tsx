import React, {FC} from 'react';
import usePointStore from "../store/store";
import {Circle} from "react-konva";
import Grid from "./Grid/Grid";

const Canvas: FC = () => {

	const points = usePointStore((state) => state.points);
	const getCenter = usePointStore((state) => state.getCenter);

	return (
		<Grid>
			{points.map((p, key) =>
				<Circle key={key} x={p.x} y={p.y} fill='#F00' radius={5}/>
			)}
			<Circle x={getCenter().x} y={getCenter().y} fill='#0F0' radius={5}/>
		</Grid>
	);
}

export default Canvas;