import React, {FC} from "react";
import {Button} from "@mui/material";
import usePointStore from "../store/store";

const Undo: FC = () => {

	const undo = usePointStore(state => state.undo)
	const history = usePointStore(state => state.history)


	return (
		<>
			<Button
				disabled={!history.length}
				onClick={() => undo()}
			>
				Отменить последнее действие
			</Button>
		</>
	)
}

export default Undo;