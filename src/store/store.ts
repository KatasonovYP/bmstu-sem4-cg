import {create} from 'zustand'
import {IPointStore} from "../interfaces";
import Figure from "../logic/Figure";
import data from '../data.json'

const usePointStore = create<IPointStore>(
	(set, get): IPointStore => ({

		points: data.points,

		edges: data.edges,

		move: (dx: number, dy: number) =>
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).move(dx, dy).getPoints()
			})),

		rotate: (angle: number) =>
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).rotate(angle).getPoints()
			})),

		scale: (kx: number, ky: number) =>
			set((state): IPointStore => ({
				...state,
				points: new Figure(state.points).scale(kx, ky).getPoints()
			})),

		getCenter: () => {
			return new Figure(get().points).getCenter()
		},
	}))

export default usePointStore;