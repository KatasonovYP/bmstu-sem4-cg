import {FC} from "react";
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import useFeatureStore from "../../store/featureStore";
import {EPanel} from "../../interfaces";

const Author: FC = () => {

	const expanded = useFeatureStore(state => state.expanded);
	const handleChange = useFeatureStore(state => state.handleChange);

	return (
		<Accordion expanded={expanded === EPanel.AUTHOR} onChange={handleChange(EPanel.AUTHOR)}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon/>}
				aria-controls="panel2bh-content"
				id="panel2bh-header"
			>
				<Typography sx={{width: '33%', flexShrink: 0}}>Об авторе</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Выполнил: Катасонов Юрий Павлович <br/>
					Группа: ИУ7-45Б
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}

export default Author;