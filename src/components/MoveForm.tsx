import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";
import usePointStore from "../store/store";

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
				<TextField id={errors.x?.type === 'required' ? 'outlined-error-helper-text' : 'standard-basic'}
						   label="Введите X"
						   variant="standard"
						   {...register("x", {required: true, pattern: /^[0-9]*[.,][0-9]+$/})}
				/>
				{errors.x?.type === 'required' && <p className="err" role="alert">Поле X необходимо</p>}
				<TextField id="standard-basic" label="Введите Y" variant="standard"
						   {...register("y", {required: true, pattern: /^[0-9]*[.,][0-9]+$/})} />
				{errors.y?.type === 'required' && <p className="err" role="alert">Поле Y необходимо</p>}

				<Button variant="contained" type="submit">
					Переместить
				</Button>
			</Box>
		</form>
	);
}

export default MoveForm;