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
			if (get().history.length === 0)
				return;
			const frame = get().history[get().history.length - 1];

			switch (frame.action) {
				case EAction.MOVE:
					get().move(-frame.dx, -frame.dy);
					break;
				case EAction.ROTATE:
					get().rotate(-frame.angle);
					break;
				case EAction.SCALE:
					get().scale(1 / frame.kx, 1 / frame.ky);
					break;
			}

			set((state): IPointStore => ({
				...state,
				history: [...state.history.slice(0, state.history.length - 2)]
			}))
		},

		addAction: (frame: IFrame) =>
			set((state): IPointStore => ({
				...state,
				history: [...state.history, frame],
			})),

		move: (dx: number, dy: number) => {
			get().addAction({action: EAction.MOVE, dx, dy});
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).move(dx, dy).getPoints()
			}));
		},

		rotate: (angle: number) => {
			get().addAction({action: EAction.ROTATE, angle});
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).rotate(angle).getPoints()
			}));
		},

		scale: (kx: number, ky: number) => {
			get().addAction({action: EAction.SCALE, kx, ky});
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).scale(kx, ky).getPoints()
			}))
		},

		getCenter: () => {
			return new Figure(get().points).getCenter()
		},


	}))

export default usePointStore;