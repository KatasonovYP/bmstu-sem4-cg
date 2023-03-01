import Point from './Point';
import {IPoint} from "../interfaces";

class Figure {
	points: Point[];
	center: Point;

	constructor(points: {x: number, y: number}[]) {
		this.points = points.map(p => new Point(p.x, p.y));
		this.center = new Point(0, 0)

		if (points.length !== 0) {
			const minX = Math.min(...points.map(p => p.x))
			const minY = Math.min(...points.map(p => p.y))
			const maxX = Math.max(...points.map(p => p.x))
			const maxY = Math.max(...points.map(p => p.y))
			this.center.x = (minX + maxX) / 2;
			this.center.y = (minY + maxY) / 2;
		}
		// this.points.map(point => point.move(this.center.x, this.center.y));
	}

	public getPoints(): IPoint[] {
		let points: {x: number, y: number}[] = []
		for (let p of this.points) {
			points.push({x: p.x, y: p.y})
		}
		return points;
	}

	public getCenter(): IPoint {
		return {...this.center};
	}

	public eq(other: Figure): boolean {
		if (!this.center.eq(other.center))
			return false;
		for (let i = 0; i < this.points.length; ++i) {
			if (!this.points[i].eq(other.points[i])) {
				return false;
			}
		}
		return true;
	}

	public move(dx: number, dy: number) {
		this.center.move(dx, dy);
		this.points.map(point => {
			point.move(dx, dy);
		});
		return this;
	}

	public rotate(angle: number) {
		this.points.map(point => {
			point.rotate(this.center, angle)
		})
		return this;
	}

	public scale(kx: number, ky: number) {
		this.points.map(point => {
			point.scale(this.center, kx, ky);
		});
		return this;
	}
}

export default Figure;
