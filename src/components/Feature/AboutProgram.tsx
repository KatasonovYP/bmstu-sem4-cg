import {FC} from "react";
import {Accordion, AccordionSummary, Typography} from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useFeatureStore from "../../store/featureStore";
import {EPanel} from "../../interfaces";

const AboutProgram: FC = () => {

	const expanded = useFeatureStore(state => state.expanded);
	const handleChange = useFeatureStore(state => state.handleChange);

	return (
		<Accordion expanded={expanded === EPanel.PROGRAM} onChange={handleChange(EPanel.PROGRAM)}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon/>}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography sx={{width: '33%', flexShrink: 0}}>
					Условие задачи
				</Typography>
				<Typography sx={{color: 'text.secondary'}}>
					Нарисовать исходный рисунок, затем его переместить, промасштабировать, повернуть
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='h5'>
					Вариант 10
				</Typography>
				<img src="/cg_lab_02_ref.png" alt="variant_10" width={200}/>
			</AccordionDetails>
		</Accordion>
	)
}

export default AboutProgram;
