import React, {FC, ReactNode, useState} from 'react';
import {Layer, Stage} from "react-konva";
import {IStage} from "../../interfaces";
import drawLines from "./drawLines";
import {KonvaEventObject} from "konva/lib/Node";

type GridProps = {
	children: ReactNode;
}

const Grid: FC<GridProps> = ({children}) => {

	const [stage, setStage] = useState<IStage>({
		x: 0, y: 0,
		width: 500, height: 500,
		scale: 1,
	});

	const moveHandler = (e: KonvaEventObject<MouseEvent>) => {
		const pos = e.currentTarget.position();
		const x = pos.x
		const y = pos.y
		setStage({...stage, x, y});
	}

	// scale
	const scaleHandler = (e: KonvaEventObject<WheelEvent>) => {
		e.evt.preventDefault();

		const scaleBy = 1.02;
		const newStage = e.target.getStage();

		if (newStage === null)
			return

		const pointer = newStage.getPointerPosition()

		if (pointer === null)
			return

		const oldScale = stage.scale
		const mousePointTo = {
			x: (pointer.x - newStage.x()) / oldScale,
			y: (pointer.y - newStage.y()) / oldScale
		};

		const newScale = (e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy);

		setStage({
			...stage,
			x: pointer.x - mousePointTo.x * newScale,
			y: pointer.y - mousePointTo.y * newScale,
			scale: newScale,
		});
	};

	return (
		<Stage
			className='canvas'
			draggable
			width={stage.width} height={stage.height}
			scaleX={stage.scale} scaleY={stage.scale}
			x={stage.x} y={stage.y}
			onWheel={scaleHandler}
			onDragMove={moveHandler}
		>
			<Layer
				clipX={-stage.x / stage.scale}
				clipY={-stage.y / stage.scale}
				clipHeight={stage.height / stage.scale}
				clipWidth={stage.width / stage.scale}
			>

				{drawLines(stage)}

				{children}

			</Layer>
		</Stage>
	);
}

export default Grid;