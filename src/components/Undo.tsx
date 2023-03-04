import React, {FC} from "react";
import {Button} from "@mui/material";
import useHistoryStore from "../store/historyStore";

const Undo: FC = () => {

	const undo = useHistoryStore(state => state.undo)
	const history = useHistoryStore(state => state.history)


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