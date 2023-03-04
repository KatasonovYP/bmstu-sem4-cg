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

export interface IStage {
	x: number;
	y: number;
	width: number;
	height: number;
	scale: number;
}