import {create} from 'zustand'
import {IPoint, IPointStore} from "../interfaces";

const usePointStore = create<IPointStore>((set) => ({
	points: [
		{x: 10, y: 10},
		{x: 50, y: 100},
		{x: 10, y: 100},
	],
	add: (point: IPoint) => set((state) => ({
		points: [
			...state.points,
			point,
		]
	})),
	move: (dx: number, dy: number) => set((state) => ({
		points: state.points.map(
			(point) => point = {x: point.x + dx, y: point.y + dy}
		)
	}))
}))

export default usePointStore;