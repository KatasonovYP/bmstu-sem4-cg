import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";
import usePointStore from "../store/store";
import {numberRegExp} from "../config";

interface IMoveForm {
	x: number;
	y: number;
}

const MoveForm: FC = () => {

	const {
		register,
		handleSubmit,
		formState: {errors},
		setValue
	} = useForm<IMoveForm>();

	const move = usePointStore(state => state.move)

	const onAction: SubmitHandler<IMoveForm> = data => {
		move(Number(data.x), Number(data.y))
	}

	return (
		<form onSubmit={handleSubmit(onAction)}>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
				<TextField id='standard-basic'
						   label="Введите X"
						   variant="standard"
						   defaultValue={10}
						   {...register("x", {required: true, pattern: numberRegExp})}
				/>
				{errors.x?.type === 'required' && <p className="err" role="alert">Поле X необходимо</p>}
				{errors.x?.type === 'pattern' && <p className="err" role="alert">Введите корректное число</p>}


				<TextField id="standard-basic"
						   label="Введите Y"
						   variant="standard"
						   defaultValue={20}
						   {...register("y", {required: true, pattern: numberRegExp})} />
				{errors.y?.type === 'required' && <p className="err" role="alert">Поле Y необходимо</p>}
				{errors.y?.type === 'pattern' && <p className="err" role="alert">Введите корректное число</p>}


				<Button variant="contained" type="submit">
					Переместить
				</Button>
			</Box>
		</form>
	);
}

export default MoveForm;