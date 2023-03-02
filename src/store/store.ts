import {create} from 'zustand'
import {IPointStore} from "../interfaces";
import Figure from "../logic/Figure";

const usePointStore = create<IPointStore>(
	(set, get): IPointStore => ({

		points: [
			{x: 14, y: 266},
			{x: 7, y: 250},
			{x: 15, y: 175},
			{x: 28, y: 142},
			{x: 20, y: 92},
			{x: 43, y: 55},
			{x: 53, y: 43},
			{x: 81, y: 28},
			{x: 106, y: 13},
			{x: 168, y: 18},
			{x: 187, y: 33},
			{x: 217, y: 59},
			{x: 239, y: 100},
			{x: 230, y: 135},
			{x: 227, y: 154},
			{x: 237, y: 178},
			{x: 235, y: 255},
			{x: 228, y: 274},
			{x: 171, y: 231},
			{x: 83, y: 228}
		],

		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9],
		],

		move: (dx: number, dy: number) =>
			set((state) => ({
				...state,
				points: new Figure(state.points).move(dx, dy).getPoints()
			})),

		rotate: (angle: number) => set((state) => ({
				...state,
				points: new Figure(state.points).rotate(angle).getPoints()
			}
		)),

		scale: (kx: number, ky: number) => set((state) => ({
				...state,
				points: new Figure(state.points).scale(kx, ky).getPoints()
			}
		)),

		getCenter: () => {
			return new Figure(get().points).getCenter()
		},
	}))

export default usePointStore;