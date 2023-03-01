import React, {FC, ReactNode, useState} from 'react';
import {Circle, Layer, Stage} from "react-konva";
import {IStage} from "../../interfaces";
import drawLines from "./drawLines";

type GridProps = {
	children: ReactNode;
}

const Grid: FC<GridProps> = ({children}) => {

	const [stage, setStage] = useState<IStage>({
		x: 0, y: 0,
		width: 500, height: 500,
		scale: 1,
	});

	const handleDrag = (e: any) => {
		const pos = e.currentTarget.position();
		const x = pos.x
		const y = pos.y
		setStage({...stage, x, y});
	}

	// scale
	const handleWheel = (e: any) => {
		e.evt.preventDefault();

		const scaleBy = 1.02;
		const newStage = e.target.getStage();
		const oldScale = newStage.scaleX();
		const mousePointTo = {
			x: newStage.getPointerPosition().x / oldScale - newStage.x() / oldScale,
			y: newStage.getPointerPosition().y / oldScale - newStage.y() / oldScale
		};

		const newScale = (e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy);

		setStage({
			...stage,
			x: (newStage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
			y: (newStage.getPointerPosition().y / newScale - mousePointTo.y) * newScale,
			scale: newScale,
		});
	};

	return (
		<Stage
			className='canvas'
			draggable
			width={stage.width} height={stage.height}
			scaleX={stage.scale} scaleY={stage.scale}
			onWheel={handleWheel}
			onDragMove={handleDrag}
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