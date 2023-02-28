export interface IPoint {
	x: number;
	y: number;
}

export interface IPointStore {
	points: IPoint[];
	add: (point: IPoint) => void;
	move: (dx: number, dy: number) => void;
}