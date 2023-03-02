export interface IPoint {
	x: number;
	y: number;
}

export type IEdge = [number, number];

export interface IPointStore {
	points: IPoint[];
	edges: IEdge[];
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