import {create} from 'zustand'
import {EAction, IFrame, IPointStore} from "../interfaces";
import Figure from "../logic/Figure";
import data from '../data.json'


const usePointStore = create<IPointStore>(
	(set, get): IPointStore => ({

		points: data.points,
		edges: data.edges,
		history: [],

		undo: () => {
			const frame = get().popFrame();
			if (frame === undefined)
				return;
			get().reverseAction(frame);
		},

		move: (dx: number, dy: number) => {
			get().pushFrame({action: EAction.MOVE, dx, dy});
			get().setMove(dx, dy);
		},

		rotate: (angle: number) => {
			get().pushFrame({action: EAction.ROTATE, angle});
			get().setRotate(angle);
		},

		scale: (kx: number, ky: number) => {
			get().pushFrame({action: EAction.SCALE, kx, ky});
			get().setScale(kx, ky);
		},

		getCenter: () => {
			return new Figure(get().points).getCenter()
		},

		reverseAction: (frame: IFrame) => {
			switch (frame.action) {
				case EAction.MOVE:
					get().setMove(-frame.dx, -frame.dy);
					break;
				case EAction.ROTATE:
					get().setRotate(-frame.angle);
					break;
				case EAction.SCALE:
					get().setScale(1 / frame.kx, 1 / frame.ky);
					break;
				default:
					console.error('unknown action');
					break;
			}
		},

		setMove: (dx, dy) => {
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).move(dx, dy).getPoints()
			}))
		},

		setRotate: (angle: number) => {
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).rotate(angle).getPoints()
			}));
		},

		setScale: (kx: number, ky: number) => {
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).scale(kx, ky).getPoints()
			}))
		},


		pushFrame: (frame: IFrame) => {
			set((state): IPointStore => ({
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
			set((state): IPointStore => ({
				...state,
				history: [...state.history.slice(0, state.history.length - 1)]
			}));
			return frame;
		},
	}))

export default usePointStore;