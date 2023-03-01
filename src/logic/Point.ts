class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public eq(other: Point): boolean {
		return this.x === other.x && this.y === other.y;
	}

	public compare(other: Point): number {
		if (this.x === other.x) {
			return this.y - other.y;
		}
		return this.x - other.x;
	}

	public move(dx: number, dy: number): void {
		this.x += dx;
		this.y += dy;
	}

	public rotate(center: Point, angle: number): void {
		const radians = (angle * Math.PI) / 180;
		const r_cos = Math.cos(radians);
		const r_sin = Math.sin(radians);

		const old_x = this.x;
		const old_y = this.y;

		this.x = +(old_x - center.x) * r_cos + (old_y - center.y) * r_sin + center.x;
		this.y = -(old_x - center.x) * r_sin + (old_y - center.y) * r_cos + center.y;
	}

	public scale(center: Point, kx: number, ky: number): void {
		this.x = (this.x - center.x) * kx + center.x;
		this.y = (this.y - center.y) * ky + center.y;
	}

	public findInArray(points: Array<Point>): boolean {
		for (let other of points) {
			if (this.eq(other)) return true;
		}
		return false;
	}
}

export default Point;
