import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";
import usePointStore from "../store/store";
import {numberRegExp} from "../config";

interface IRotateForm {
	angle: number;
}

const RotateForm: FC = () => {

	const {
		register,
		handleSubmit,
		formState: {errors},
		setValue
	} = useForm<IRotateForm>();

	const rotate = usePointStore(state => state.rotate)

	const onAction: SubmitHandler<IRotateForm> = data => {
		rotate(Number(data.angle))
	}

	return (
		<form onSubmit={handleSubmit(onAction)}>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
				<TextField id='standard-basic'
						   label="Введите угол"
						   variant="standard"
						   defaultValue={30}
						   {...register("angle", {required: true, pattern: numberRegExp})}
				/>
				{errors.angle?.type === 'required' && <p className="err" role="alert">Укажите угол</p>}
				{errors.angle?.type === 'pattern' && <p className="err" role="alert">Введите корректное число</p>}

				<Button variant="contained" type="submit">
					Повернуть
				</Button>
			</Box>
		</form>
	);
}

export default RotateForm;