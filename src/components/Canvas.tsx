import React, {FC} from 'react';
import usePointStore from "../store/store";
import {Circle, Layer} from "react-konva";
import Grid from "./Grid/Grid";

const Canvas: FC = () => {

	const points = usePointStore((state) => state.points);

	return (
		<Grid>
			{points.map((p) => <Circle x={p.x} y={p.y} fill='#F00' radius={5}/>)}
		</Grid>
	);
}

export default Canvas;