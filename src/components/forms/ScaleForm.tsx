import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";
import useFigureStore from "../../store/figureStore";
import {numberRegExp} from "../../config";

interface IScaleForm {
	kx: number;
	ky: number;
}

const MoveForm: FC = () => {

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<IScaleForm>();

	const scale = useFigureStore(state => state.scale)

	const onAction: SubmitHandler<IScaleForm> = data => {
		scale(Number(data.kx), Number(data.ky))
	}

	return (
		<form onSubmit={handleSubmit(onAction)}>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
				<TextField id='standard-basic'
						   label="Введите kx"
						   variant="standard"
						   defaultValue={1.2}
						   {...register("kx", {required: true, pattern: numberRegExp})}
				/>
				{errors.kx?.type === 'required' && <p className="err" role="alert">Поле kx необходимо</p>}
				{errors.kx?.type === 'pattern' && <p className="err" role="alert">Введите корректное число</p>}

				<TextField id="standard-basic"
						   label="Введите ky"
						   variant="standard"
						   defaultValue={1.2}
						   {...register("ky", {required: true, pattern: numberRegExp})} />
				{errors.ky?.type === 'required' && <p className="err" role="alert">Поле ky необходимо</p>}
				{errors.ky?.type === 'pattern' && <p className="err" role="alert">Введите корректное число</p>}

				<Button variant="contained" type="submit">
					Масштабировать
				</Button>
			</Box>
		</form>
	);
}

export default MoveForm;