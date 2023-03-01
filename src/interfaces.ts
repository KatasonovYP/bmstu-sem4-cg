import Figure from "./logic/Figure";

export interface IPoint {
	x: number;
	y: number;
}

export interface IPointStore {
	points: IPoint[];
	// add: (point: IPoint) => void;
	move: (dx: number, dy: number) => void;
	rotate: (angle: number) => void;
	scale: (kx: number, ky: number) => void;
	getCenter: () => IPoint;
}

export interface IStage {
	x: number;
	y: number;
	width: number;
	height: number;
	scale: number;
}