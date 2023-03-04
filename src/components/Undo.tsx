import React, {FC} from "react";
import {Button} from "@mui/material";
import usePointStore from "../store/store";

const Undo: FC = () => {

	const undo = usePointStore(state => state.undo)

	const undoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		undo();
	}

	return (
		<>
			<Button
				onClick={undoHandler}
			>
				Отменить последнее действие
			</Button>
		</>
	)
}

export default Undo;