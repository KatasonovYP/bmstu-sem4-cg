import {create} from 'zustand'
import {EAction, IEdge, IPoint} from "../interfaces";
import Figure from "../logic/Figure";
import historyStore from "./historyStore";
import data from '../data.json'
import Point from "../logic/Point";

export interface IFigureStore {
	points: IPoint[];
	edges: IEdge[];
	pivot: IPoint;
	move: (dx: number, dy: number) => void;
	rotate: (angle: number) => void;
	scale: (kx: number, ky: number) => void;
	setMove: (dx: number, dy: number) => void;
	setRotate: (angle: number) => void;
	setScale: (kx: number, ky: number) => void;
	setPivot: (pivot: IPoint) => void;
}

const useFigureStore = create<IFigureStore>(
	(set, get): IFigureStore => ({

		points: data.points,
		edges: data.edges,
		pivot: {x: 0, y: 0},

		move: (dx: number, dy: number) => {
			historyStore.getState().pushFrame({action: EAction.MOVE, dx, dy})
			get().setMove(dx, dy);
		},

		rotate: (angle: number) => {
			historyStore.getState().pushFrame({action: EAction.ROTATE, angle});
			get().setRotate(angle);
		},

		scale: (kx: number, ky: number) => {
			historyStore.getState().pushFrame({action: EAction.SCALE, kx, ky});
			get().setScale(kx, ky);
		},

		setMove: (dx, dy) => {
			set((state): IFigureStore => ({
				...state,
				pivot: new Point(state.pivot)
					.move(dx, dy)
					.getPoint(),
				points: new Figure(state.pivot, state.points)
					.move(dx, dy)
					.getPoints()
			}))
		},

		setRotate: (angle: number) => {
			set((state): IFigureStore => ({
				...state,
				points: new Figure(state.pivot, state.points)
					.rotate(angle)
					.getPoints()
			}));
		},

		setScale: (kx: number, ky: number) => {
			set((state): IFigureStore => ({
				...state,
				points: new Figure(state.pivot, state.points)
					.scale(kx, ky)
					.getPoints()
			}))
		},

		setPivot: (pivot: IPoint) => {
			set((state): IFigureStore => ({
				...state,
				pivot,
			}))
		}
	}))

export default useFigureStore;