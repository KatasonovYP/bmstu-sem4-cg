import {FC} from "react";
import useFeatureStore from "../../store/featureStore";
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid2 from "@mui/material/Unstable_Grid2";
import Undo from "../Undo";
import {MoveForm, PivotForm, RotateForm, ScaleForm} from "../forms";
import {EPanel} from "../../interfaces";

const FigureManager: FC = () => {

	const expanded = useFeatureStore(state => state.expanded);
	const setExpanded = useFeatureStore(state => state.setExpanded);
	const handleChange = useFeatureStore(state => state.handleChange);

	return (
		<Accordion expanded={expanded === EPanel.MANAGER} onChange={handleChange(EPanel.MANAGER)}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon/>}
				aria-controls="panel3bh-content"
				id="panel3bh-header"
			>
				<Typography sx={{width: '33%', flexShrink: 0}}>
					Изменение фигуры
				</Typography>
				<Typography sx={{color: 'text.secondary'}}>
					Смещение, Масштабирование, поворот
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid2 container xs={12} spacing={2}>
					<Grid2 xs={4}>
						<PivotForm/>
					</Grid2>
					<Grid2 xs={4}>
						<MoveForm/>
					</Grid2>
					<Grid2 xs={4}>
						<ScaleForm/>
					</Grid2>
					<Grid2 xs={4}>
						<RotateForm/>
					</Grid2>
					<Grid2 xs={4}>
						<Undo/>
					</Grid2>
				</Grid2>
			</AccordionDetails>
		</Accordion>
	)
}

export default FigureManager;