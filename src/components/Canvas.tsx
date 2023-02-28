import React, {FC} from 'react';
import usePointStore from "../store/store";
import {Circle, Layer, Stage} from "react-konva";

const Canvas: FC = () => {

	const points = usePointStore((state) => state.points);

	return (
		<Stage width={500} height={500}>
			<Layer>
				{points.map((point, key) => (
					<Circle x={point.x} y={point.y} key={key}  fill="#89b717" radius={5} ></Circle>
				))}
			</Layer>
		</Stage>
	);
}

export default Canvas;