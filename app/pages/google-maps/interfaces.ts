export interface Point {
	lat: number;
	lng: number;
}

export interface Marker extends Point{
	label?: string;
}