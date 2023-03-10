import {EAction, IFrame} from "../interfaces";
import {create} from "zustand";
import useFigureStore from "./figureStore";

interface IHistoryStore {
	history: IFrame[];
	undo: () => void;
	reverseAction: (frame: IFrame) => void;
	pushFrame: (frame: IFrame) => void;
	popFrame: () => IFrame | undefined;
}

const useHistoryStore = create<IHistoryStore>(
	(set, get): IHistoryStore => ({

		history: [],

		undo: () => {
			const frame = get().popFrame();
			if (frame === undefined)
				return;
			get().reverseAction(frame);
		},


		reverseAction: (frame: IFrame) => {
			switch (frame.action) {
				case EAction.MOVE:
					useFigureStore.getState().setMove(-frame.dx, -frame.dy);
					break;
				case EAction.ROTATE:
					useFigureStore.getState().setRotate(-frame.angle);
					break;
				case EAction.SCALE:
					useFigureStore.getState().setScale(1 / frame.kx, 1 / frame.ky);
					break;
				case EAction.PIVOT:
					useFigureStore.getState().setPivotToState(frame.x, frame.y);
					break;
				default:
					console.error('unknown action');
					break;
			}
		},

		pushFrame: (frame: IFrame) => {
			set((state): IHistoryStore => ({
				...state,
				history: [...state.history, frame],
			}))
		},

		popFrame: () => {
			const history = get().history;
			if (history.length === 0) {
				return;
			}
			const frame: IFrame = {...history[history.length - 1]}
			set((state): IHistoryStore => ({
				...state,
				history: [...state.history.slice(0, state.history.length - 1)]
			}));
			return frame;
		},
	}))

export default useHistoryStore;
