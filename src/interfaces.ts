export interface IPoint {
	x: number;
	y: number;
}

export enum EAction {
	MOVE,
	ROTATE,
	SCALE,
}

export type IFrame =
	| { action: EAction.MOVE; dx: number, dy: number }
	| { action: EAction.ROTATE; angle: number }
	| { action: EAction.SCALE; kx: number; ky: number };

export type IEdge = number[];

export interface IPointStore {
	points: IPoint[];
	edges: IEdge[];
	history: IFrame[];
	move: (dx: number, dy: number) => void;
	rotate: (angle: number) => void;
	scale: (kx: number, ky: number) => void;
	getCenter: () => IPoint;
	undo: () => void;
	reverseAction: (frame: IFrame) => void;
	pushFrame: (frame: IFrame) => void;
	popFrame: () => IFrame | undefined;
	setMove: (dx: number, dy: number) => void;
	setRotate: (angle: number) => void;
	setScale: (kx: number, ky: number) => void;
}

export interface IStage {
	x: number;
	y: number;
	width: number;
	height: number;
	scale: number;
}